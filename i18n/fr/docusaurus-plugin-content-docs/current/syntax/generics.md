---
sidebar_position: 13
---

# Génériques (Generics)

Les génériques de Wave sont une fonctionnalité pour écrire des fonctions sécurisées en type sans doublons de code.

Règles clés :

- Les paramètres de type doivent être explicitement spécifiés.
- L'inférence de type n'est pas autorisée.

## 1. Déclaration de fonction générique

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

Appel :

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. Paramètres de type multiples

```wave
struct Pair<A, B> {
    first: A;
    second: B;
}

fun pair<A, B>(a: A, b: B) -> Pair<A, B> {
    return Pair<A, B> {
        first: a;
        second: b;
    };
}

fun main() {
    var p: Pair<i32, f64> = pair<i32, f64>(1, 2.5);
}
```

## 3. Structure générique

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. Génériques imbriqués

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. Utilisation avec la bibliothèque standard

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Erreurs courantes

```wave
var x: i32 = identity(10); // Argument de type manquant (non autorisé)
```

Doit être appelé comme suit.

```wave
var x: i32 = identity<i32>(10);
```
