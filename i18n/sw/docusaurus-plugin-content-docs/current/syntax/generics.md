---
sidebar_position: 13
---

# Majeneriki (Generics)

Majeneriki ya Wave ni kipengele kinachoruhusu kuandika kazi salama aina bila kurudia msimbo.

Kanuni za msingi:

- Vigezo vya aina lazima vionyeshwe wazi.
- Uamuzi wa aina haukubaliwi.

## 1. Tamko la kazi ya majeneriki

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

Mwito:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. Vigezo vingi vya aina

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

## 3. Muundo wa majeneriki

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. Majeneriki yaliyounganishwa

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. Matumizi na maktaba za kawaida

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Makosa ya mara kwa mara

```wave
var x: i32 = identity(10); // Aina ya hoja inayokosekana (hairuhusiwi)
```

Yapaswa kuitwa kama ifuatavyo.

```wave
var x: i32 = identity<i32>(10);
```
