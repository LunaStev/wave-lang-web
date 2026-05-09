---
sidebar_position: 13
---

# Generik

Wave Generik ialah ciri untuk menulis fungsi selamat jenis tanpa kod pendua.

Peraturan teras:

- Argumen jenis mesti ditentukan.
- Jenis inferens tidak dibenarkan.

## 1) Pengisytiharan fungsi generik

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

hubungi:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2) Parameter berbilang jenis

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

## 3) Struktur generik

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4) Generik bersarang

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5) Gunakan dengan perpustakaan standard

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## kesilapan biasa

```wave
var x: i32 = identity(10); // Hujah jenis tiada (tidak dibenarkan)
```

Anda mesti memanggilnya seperti ini:

```wave
var x: i32 = identity<i32>(10);
```
