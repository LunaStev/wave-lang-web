---
sidebar_position: 7
---

# Options de backend (`--llvm`, `--whale`)

Ce document explique les options CLI liées au backend de `wavec`.

Principes importants :

- `wavec` n'est pas un gestionnaire de paquets.
- Le comportement du backend est contrôlé autant que possible par **des paramètres explicites**.
- Les options détaillées de backend ne sont interprétées qu'après `--llvm`.

---

## 1. Sélecteur de backend

## 1.1 `--llvm`

`--llvm` est le marqueur de début du bloc d'options de backend.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Seuls les éléments pris en charge parmi les arguments suivant `--llvm` comme ci-dessus sont traités comme des configurations de backend LLVM.

## 1.2 `--whale` (actuellement TODO)

À l'heure actuelle, `--whale` est **un drapeau réservé factice**.

- Le parseur le reconnaît.
- Le pipeline backend Whale réel n'est pas encore connecté.
- Il se termine par une erreur TODO lors de l'utilisation.

---

## 2. Options prises en charge après `--llvm`

## 2.1 Cible/Codegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <nom>` / `--cpu=<nom>`
- `--features <csv>` / `--features=<csv>`
- `--abi <nom>` / `--abi=<nom>`

Points d'application :

- Étape de génération IR (TargetMachine) : `target`, `cpu`, `features`
- Phase objet/liaison (appel clang) : `target`, `abi`

Principaux triples cibles actuellement documentés par défaut :

- Linux : `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin : `x86_64-apple-darwin`, `aarch64-apple-darwin`
- autonome : `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Toolchain/Lien

- `--sysroot <chemin>` / `--sysroot=<chemin>`
- `-C linker=<chemin>`
- `-C link-arg=<arg>` (répétable)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Points d'application :

- Création d'objet (clang `-c`) avec `--sysroot`
- 링크 단계에서 linker override, raw link arg 주입, link-sysroot 주입
- Désactivation automatique de `-lc -lm` lorsque `-C no-default-libs` est utilisé

---

## 3. Règles de parsing (important)

Sans utiliser `--llvm`, les options backend détaillées ne sont pas interprétées comme des options globales.

Par exemple, l'erreur ci-dessous :

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Il faut absolument l'écrire comme ci-dessous.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Exemple d'utilisation

Création d'objet de base :

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Création d'un objet kernel autonome :

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Lien personnalisé :

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Désactivation du lien automatique libc/libm :

```bash
wavec --llvm -C no-default-libs build app.wave
```

L'utilisation de `--freestanding` fonctionne en interne comme `-C no-default-libs` et est adaptée aux constructions qui ne supposent pas de bibliothèque de runtime par défaut, comme le code kernel/boot.

---

## 5. Résumé de l'état

- Backend LLVM : en fonctionnement
- Backend Whale : réservé (TODO), non implémenté
