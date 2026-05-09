---
sidebar_position: 13
---

# አጠቃላይ

Wave Generics አይነት-ደህንነቱ የተጠበቀ ተግባራትን ያለ ኮድ ማባዛት የመፃፍ ባህሪ ነው።

ዋና ህጎች፡-

- የክርክሩ አይነት መገለጽ አለበት።
- የመግቢያ አይነት አይፈቀድም።

## 1) አጠቃላይ ተግባር መግለጫ

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

ይደውሉ፡

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2) ባለብዙ ዓይነት መለኪያዎች

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

## 3) አጠቃላይ መዋቅር

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4) የተከተተ አጠቃላይ

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5) ከመደበኛ ቤተ-መጽሐፍት ጋር ተጠቀም

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## የተለመዱ ስህተቶች

```wave
var x: i32 = identity(10); // የጎደለው ዓይነት ክርክር (አይፈቀድም)
```

እንደሚከተለው መደወል አለብህ፡-

```wave
var x: i32 = identity<i32>(10);
```
