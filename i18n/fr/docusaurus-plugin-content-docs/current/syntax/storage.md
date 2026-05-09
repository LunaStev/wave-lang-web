---
sidebar_position: 12
---

# Règles de stockage régional/global

Wave organise clairement le stockage et la mutabilité au niveau des mots-clés.

## Résumé

- Constante globale : `const`
- Variable de stockage global : `static`
- Variable locale : `var`, `let`, `let mut`

C'est-à-dire, **seuls `const` et `static` sont déclarés au niveau supérieur** et **seuls `var` et `let` sont déclarés à l'intérieur des fonctions/blocs**.

## Constante globale : `const`

`const` est récupéré comme constante au moment de la compilation et ne peut pas être modifié.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Variable de stockage global : `static`

`static` est une variable qui possède un espace de stockage global.
Elle est réaffectable et si aucune valeur initiale n'est donnée, elle est initialisée à la valeur zéro de type.

```wave
static COMPTEUR : i32 = 0;
static VGA_BUFFER : ptr<char> = 0xb8000 en tant que ptr<char>;
```

## Variable locale : `var` / `let`

À l'intérieur d'une fonction ou d'un bloc, seuls les mots-clés de variable locale sont utilisés.

```wave
fun main() -> i32 {
    var x : i32 = 10;
    let y : i32 = 20;
    let mut z : i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## Contraintes

- `var`, `let` ne peuvent pas être utilisés au niveau supérieur.
- `const`, `static` ne peuvent pas être utilisés à l'intérieur d'une fonction/bloc.
- `let` est immuable et ne peut pas être réaffecté.
