---
sidebar_position: 6
---

# Référence CLI pour `wavec`

Ce document explique en détail le fonctionnement en ligne de commande du **processus de construction `wavec` actuel**.

Principes de base :

- `wavec` est un compilateur.
- L'installation/résolution de paquetages (fichier de verrouillage, registre, téléchargement) n'est pas sous la responsabilité de `wavec`.
- Les dépendances externes doivent être fournies par **arguments explicites de commande** lors de l'exécution de `wavec`.

---

## 1. Structure de base

```bash
wavec [options globales] <commande> [options de commande]
```

Exemple :

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Paramètres de commande (importance)

`wavec` analyse d'abord **les options globales** parmi tous les arguments avant d'analyser le reste en tant que `<commande>`.

Ainsi, les options globales ont une priorité.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Les trois exemples ci-dessus sont tous valides.

L'utilisation de `--` arrête le scan des options globales et passe le reste en tant qu'arguments de commande.

```bash
wavec -- run main.wave
```

---

## 3. Commandes

## 3.1 `run <fichier>`

Compile et exécute le fichier Wave.

```bash
wavec run hello.wave
```

Fonctionnement :

1. Parsing source + extension d'import
2. Génération d'IR LLVM
3. Liens natifs binaires (`target/<file_stem>`)
4. Exécution

Caractéristiques :

- `wavec` transmet le code de fin du programme exécuté.

---

## 3.2 `build <fichier>`

Crée un fichier exécutable.

```bash
wavec build app.wave
```

Répertoire des sorties :

- `target/<file_stem>`

## 3.3 Options de `build` (`-o`, `-c`)

La commande `build` permet de contrôler le nom du fichier de sortie et le format de sortie via des options.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <fichier>`: Spécifie le nom du fichier de sortie.
  - Par défaut (sans `-c`): Spécifie le chemin de sortie du fichier exécutable.
  - Avec `-c`: Spécifie le chemin de sortie du fichier objet.
- `-c`: Ignore le lien et génère uniquement un fichier objet.
- Lors de l'utilisation de `-c`, le chemin de l'objet est affiché sur stdout.

Comportement par défaut:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (afficher le chemin)

Exemple d'objet kernel freestanding:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` peuvent également être utilisés de la même manière.

---

## 3.4 `install std`, `update std`

Commandes pour installer/mettre à jour la bibliothèque standard.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Options Globales

## 4.1 Optimisation

Valeurs autorisées :

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Exemple :

```bash
wavec -O3 run main.wave
```

---

## 4.2 Sortie de débogage

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

Éléments autorisés :

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Options de lien

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` ou `--link <lib>`
- `-L<chemin>` ou `-L <chemin>`

Lors de l'établissement de liens, `wavec` transmet en interne sous la forme `-l<lib>`, `-L<chemin>`.

---

## 4.4 Options de dépendances externes (Important)

Ce sont des options pour l'importation externe (`pkg::...`).

### `--dep-root <dir>`

Ajoute un candidat au répertoire racine des packages.

```bash
wavec run app.wave --dep-root .vex/dep
```

Lorsque vous recherchez le package `math`:

- Vérifie `.vex/dep/math`

Peut être spécifié plusieurs fois :

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <nom>=<chemin>`

Fixe le nom du package à un chemin spécifique.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Règle :

- Format `nom`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` doit être au format `nom=chemin`
- Erreur si le même nom de package est spécifié en double

---

## 4.5 Options de backend (`--llvm`, `--whale`)

Les options de contrôle du backend ne sont interprétées qu'après `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Éléments pris en charge (résumé) :

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<chemin>`
- `-C link-arg=<arg>` (répétable)
- `-C no-default-libs`

Cibles principales selon le `wavec print target-list` actuel :

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` est actuellement un drapeau factice réservé, et le pipeline backend réel n'est pas encore implémenté (TODO).

---

## 5. Règles d'interprétation des importations

L'importation Wave est divisée en 3 catégories suivantes.

1. Importation locale
2. Importation std
3. importation de packages externes

## 5.1 Local

```wave
import("foo");
import("chemin/vers/mod.wave");
```

Trouve `<path>.wave` dans le répertoire du fichier de référence.

## 5.2 std

```wave
import("std::io::format");
```

Utilise le chemin `~/.wave/lib/wave/std/...`.

## 5.3 Packages externes

```wave
import("math::add");
import("json::parser::core");
```

Format :

- Minimum de 2 segments `package::module` requis

Ordre de détermination de la racine du package :

1. Mappage explicite `--dep name=path`
2. Recherche `<root>/<package>` dans chaque `--dep-root`

Si le même package est trouvé simultanément dans plusieurs dep-root :

- Pas de sélection automatique et **Erreur d'ambiguïté**
- Doit être fixé par `--dep name=path`

Ordre de recherche du fichier module :

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Exemple :

```wave
import("math::core::vec");
```

Recherche :

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Exemple pratique d'importation externe

### 6.1 Dépôt unique

Répertoire :

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Code :

```wave
import("math::add");
```

Exécution :

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Résolution d'ambiguïté

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

S'il y a `math` des deux côtés, il y a une erreur. Il est fixé comme ci-dessous.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Séparation des rôles avec Vex

Structures recommandées :

- `wavec`: compilation/link/exécution + résolution de dépendances explicitées
- `vex`: installation/gestion des dépendances après `wavec ... --dep-root ... --dep ...` appel

Exemple :

```bash
# Internally, vex exécute
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Ce modèle maintient le compilateur simple et déterministe, tout en laissant l'automatisation au gestionnaire de paquets.

---

## 8. Référence rapide

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: réservé, non implémenté
```
