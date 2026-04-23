---
sidebar_position: 13
---

# Generics

Wave generics are a feature for writing type-safe functions without code duplication.

Key Rules:

- Type arguments must be explicitly specified.
- Type inference is not allowed.

## 1. Declaration of Generic Functions

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

Invocation:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. Multiple Type Parameters

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

## 3. Generic Structures

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. Nested Generics

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. Using with the Standard Library

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Common Mistakes

```wave
var x: i32 = identity(10); // Missing type parameter (not allowed)
```

Must be called as follows.

```wave
var x: i32 = identity<i32>(10);
```
