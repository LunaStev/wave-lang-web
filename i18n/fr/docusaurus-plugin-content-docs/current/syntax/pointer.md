---
sidebar_position: 6
---

# Pointeur

## Modèle de type de mémoire explicite de Wave

La conception du pointeur de Wave est basée sur le **Modèle de type de mémoire explicite de Wave**.
Ce modèle vise à définir les pointeurs et les tableaux non pas par des astuces syntaxiques ou des abstractions de bibliothèque, mais comme un **type de mémoire explicite au niveau du langage**.

Ainsi, dans Wave, les pointeurs sont exprimés sous la forme de type `ptr<T>`,
qui indique clairement qu'il s'agit d'un type pointant vers une adresse mémoire contenant une valeur de type spécifique `T`.
Cette approche permet de traiter les pointeurs comme une partie du système de types, plutôt que par des opérateurs ou des syntaxes de déclaration, offrant ainsi une expression plus intuitive et cohérente des structures mémoire.

---

Dans Wave, un pointeur est de type explicite `ptr<T>`.
Le référencement utilise `&`, et le déréférencement utilise `deref`.

## Déclaration et initialisation

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Les types de pointeurs peuvent être imbriqués.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Déréférencement

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Règles de littéral `null`

`null` est un **littéral formel**. Il ne peut pas être utilisé comme identifiant ou nom de variable.

Points essentiels :

- `null` ne peut être attribué qu'à un `ptr<T>`.
- Il ne peut pas être attribué aux types non pointeurs comme `i32`, `bool`, `array<...>`.
- Un pointeur ne peut pas être initialisé avec un littéral entier (`0`, `123`, `-1`, etc.). Utilisation explicite de `null`.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERREUR
// var b: bool = null; // ERREUR
```

## Arithmétique des pointeurs

Wave prend en charge les arithmétiques des pointeurs suivantes.

- `ptr + int`: Avance de pointeur basée GEP
- `int + ptr`: même comportement
- `ptr - int`: Recul de pointeur basé GEP
- `ptr - ptr`: Calcul de la différence en octets `i64`

Point :

- `ptr<T> +/- n` se déplace selon la taille de `T` (`sizeof(T)`).
- Ainsi, `ptr<i32> + 3` correspond à un déplacement de `+12` octets.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (différence en octets)
```

## Comparaison de pointeurs

Les pointeurs peuvent être utilisés pour la comparaison.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Relations with arrays

Tableaux de pointeurs :

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Pointeur sur tableau :

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Note de sécurité

Wave n'adopte pas actuellement un modèle de sécurité de pointeur basé sur la propriété/borrowing comme Rust.
Ainsi, la déréférencement de `null` n'est pas automatiquement protégée. Il est conseillé de vérifier attentivement `null` explicitement avant `deref`.
