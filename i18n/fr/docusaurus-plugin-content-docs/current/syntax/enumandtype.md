---
sidebar_position: 10
---

# Enumeration (enum) et alias de type

Wave supporte les alias de type et les énumérations basées sur les entiers pour maintenir un système de types explicite similaire à C, tout en assurant la lisibilité et la stabilité de l'ABI.

---

## Alias de type (Type Alias)

### Vue d'ensemble

Le mot-clé type attribue un nouveau nom à un type existant.
Cela ne crée pas un nouveau type mais une équivalence complète (alias).

```wave
type MyInt = i32;
```

Dans la déclaration ci-dessus, MyInt est un type totalement identique à i32.

---

### Caractéristiques

- Aucune surcharge à l'exécution
- Totalement identique au niveau de l'ABI
- Existe uniquement à la compilation
- Peut être utilisé comme type de représentation pour les enums

---

### Exemple d'utilisation

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Équivalence de type

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type est juste un nouveau nom, pas un nouveau type.

---

## Enumération (enum)

### Vue d'ensemble

Les enums de Wave sont basés sur des entiers.
Toutes les énumérations doivent avoir un type de représentation.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### Type de représentation

-> i32 indique de quel type entier est représentée cette enum.

Types de représentation autorisés :

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- l`alias de type` du type correspondant

```wave
type MonEntier = i32;

enum Exemple -> MonEntier {
    X,
    Y
}
```

---

### Règles d'attribution des valeurs

- Utilisez la valeur explicite si elle existe
- Sinon, utilisez la valeur précédente + 1
- Commencez à zéro s'il n'y a pas de première valeur

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### L'enum est un type de valeur

L'enum est une valeur entière et peut être utilisée librement comme paramètre ou valeur de retour de fonction.

```wave
fun f(t: TypeUnifDiviseur) -> i32 {
    return t;
}
```

---

### Utilisation comme constante

La variante enum est une constante au moment de la compilation.

```wave
const X: i32 = B;
const Y: TypeUnifDiviseur = D;
```

---

## Exemple réel

```wave
type MonEntier = i32;

enum TypeUnifDiviseur -> MonEntier {
    A = 0,
    B,
    C = 10,
    D
}

const X: MonEntier = 123;
const Y: MonEntier = B;
const Z: TypeUnifDiviseur = D;

fun f(t: TypeUnifDiviseur) -> MonEntier {
    return t;
}

fun g(v: MonEntier) -> MonEntier {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```