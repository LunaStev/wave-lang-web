---
sidebar_position: 9.5
---

# export

`export` expose une fonction implémentée en Wave comme symbole externe du linker. Si `extern` importe une fonction externe dans Wave, `export` permet à une fonction Wave d'être appelée depuis C, Rust, C++, Zig ou un autre langage natif via un fichier objet.

---

## Aperçu

La FFI de Wave fonctionne dans deux directions.

- `extern(c)` déclare une fonction fournie par une bibliothèque externe afin que Wave puisse l’appeler.
- `export(c)` émet le corps d’une fonction Wave comme symbole ABI externe.

Les deux formes partagent la même forme d’en-tête ABI, mais leur sens est opposé. Avec `extern`, le corps de la fonction est hors de Wave. Avec `export`, il est dans Wave.

Pour l’instant, le seul ABI export pris en charge est `c`.

---

## Export au niveau fonction

La forme de base est la suivante.

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Ce code émet un symbole public nommé `add`. Le fichier objet généré peut être lié avec du code externe qui attend l’ABI C.

---

## Noms de symboles

Le nom de la fonction Wave et le symbole de linker exporté peuvent être différents.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Ici, le nom Wave est `add_i32`, mais le fichier objet expose `wave_add_i32`. Les langages externes doivent déclarer et appeler ce nom de symbole.

---

## Export par bloc

Plusieurs fonctions utilisant le même ABI peuvent être regroupées dans un bloc.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

L’export par bloc utilise le nom de chaque fonction comme symbole public. `export(c, "symbol") { ... }` n’est pas autorisé, car un alias unique pour plusieurs fonctions provoquerait des collisions de symboles.

---

## Appel depuis C

Construisez le fichier Wave comme fichier objet.

```bash
wavec build math.wave --emit=obj -o math.o
```

Déclarez le symbole exporté en C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Puis liez le code C et l’objet Wave avec un linker normal.

```bash
cc main.c math.o -o app
```

---

## extern et export

`extern(c)` signifie que Wave utilise un symbole externe.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` signifie que le code externe peut utiliser un symbole Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Les deux appartiennent à la FFI, mais la direction est différente.

---

## Limitations

- Seul `export(c)` est pris en charge.
- Les fonctions exportées ne peuvent pas être génériques.
- Un export par bloc ne peut pas utiliser un alias de symbole partagé.
- Pour une interopérabilité stable, privilégiez pour l’instant les entiers, flottants, booléens et pointeurs.
- Les types agrégés comme les structs et les arrays nécessitent des règles ABI plus strictes et pourront être stabilisés plus tard.
- `export` est surtout utile pour les fichiers objets et les bibliothèques, pas pour un simple exécutable.

---

## Cas d’utilisation recommandés

- Fournir des fonctions utilitaires Wave comme bibliothèque ABI C.
- Appeler des fonctions Wave depuis Rust, C, C++, Zig ou un autre langage natif.
- Connecter progressivement des modules `front`, `utils` ou natifs sans runtime écrits en Wave à un système de build existant.
- Permettre à Vex ou à un autre outil de build de lier des objets Wave dans un projet externe.
