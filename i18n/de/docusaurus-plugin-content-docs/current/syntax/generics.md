---
sidebar_position: 13
---

# Generika (Generics)

Wave Generics ist eine Funktion, um typsichere Funktionen ohne Code-Duplikate zu schreiben.

Kernregeln:

- Typ-Argumente müssen explizit angegeben werden.
- Typinferenz ist nicht erlaubt.

## 1. Generische Funktionsdeklaration

```wave
fun identity<T>(x: T) -> T {
 return x;
}
```

Aufruf:

```wave
fun main() {
 var a: i32 = identity<i32>(10);
 var b: f64 = identity<f64>(3.14);
}
```

## 2. Mehrfache Typ-Parameter

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

## 3. Generische Struktur

```wave
struct Vec<T> {
 data: ptr<T>;
 len: i64;
}

fun main() {
 var v: Vec<i32>;
}
```

## 4. Verschachtelte Generika

```wave
struct Vec<T> {
 data: ptr<T>;
 len: i64;
}

fun main() {
 var nested: Vec<Vec<i32>>;
}
```

## 5. Verwendung mit der Standardbibliothek

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
 var x: i32 = num_abs<i32>(-100, 0);

 var r: EnvResult<i32> = env_get_i32("PORT");
 var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Häufige Fehler

```wave
var x: i32 = identity(10); // Typenparameter fehlt (nicht erlaubt)
```

Es muss unbedingt wie folgt aufgerufen werden.

```wave
var x: i32 = identity<i32>(10);
```
