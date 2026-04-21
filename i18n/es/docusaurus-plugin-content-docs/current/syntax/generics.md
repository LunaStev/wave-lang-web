---
sidebar_position: 13
---

# Genéricos (Generics)

Los genéricos de Wave son una característica para escribir funciones seguras para tipos sin duplicación de código.

Reglas clave:

- Los parámetros de tipo deben especificarse al enlazar.
- No se permite la inferencia de tipos.

## 1. Declaración de funciones genéricas

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

Llamada:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. Parámetros de múltiples tipos

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

## 3. Estructuras genéricas

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. Genéricos anidados

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. Uso con la biblioteca estándar

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Errores comunes

```wave
var x: i32 = identity(10); // Falta de parámetro de tipo (no permitido)
```

Debe llamarse así al enlazar.

```wave
var x: i32 = identity<i32>(10);
```
