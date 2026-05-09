---
sidebar_position: 13
---

# Обобщения (Generics)

Обобщения в Wave позволяют создавать функции, безопасные по типам, без дублирования кода.

Основные правила:

- Имена параметров типов задаются в связке.
- Нет возможности выведения типов.

## 1. Объявление обобщенных функций

```wave
fun identity<T>(x: T) -> T {
 return x;
}
```

Вызов:

```wave
fun main() {
 var a: i32 = identity<i32>(10);
 var b: f64 = identity<f64>(3.14);
}
```

## 2. Параметры нескольких типов

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

## 3. Обобщенные структуры

```wave
struct Vec<T> {
 data: ptr<T>;
 len: i64;
}

fun main() {
 var v: Vec<i32>;
}
```

## 4. Вложенные обобщения

```wave
struct Vec<T> {
 data: ptr<T>;
 len: i64;
}

fun main() {
 var nested: Vec<Vec<i32>>;
}
```

## 5. Использование со стандартной библиотекой

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
 var x: i32 = num_abs<i32>(-100, 0);

 var r: EnvResult<i32> = env_get_i32("PORT");
 var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Частые ошибки

```wave
var x: i32 = identity(10); // ошибки в параметрах типов (не поддерживаются)
```

Следует вызывать следующим образом.

```wave
var x: i32 = identity<i32>(10);
```
