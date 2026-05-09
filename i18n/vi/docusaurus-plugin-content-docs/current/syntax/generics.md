---
sidebar_position: 13
---

# Tổng quát (Generics)

Tính năng tổng quát của Wave giúp viết hàm an toàn loại mà không cần dư thừa mã.

Nguyên tắc cơ bản:

- Tham số loại phải luôn được chỉ định rõ.
- Không cho phép suy luận loại.

## 1. Tuyên bố hàm tổng quát

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

Gọi:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. Tham số loại đa dạng

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

## 3. Cấu trúc tổng quát

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. Tổng quát lồng nhau

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. Sử dụng cùng thư viện tiêu chuẩn

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## Những sai lầm thường gặp

```wave
var x: i32 = identity(10); // Đối số loại thiếu (không được phép)
```

Cần phải gọi giống như sau.

```wave
var x: i32 = identity<i32>(10);
```
