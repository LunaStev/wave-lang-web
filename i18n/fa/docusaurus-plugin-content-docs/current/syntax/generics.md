---
sidebar_position: 13
---

# جنریک‌ها

جنریک‌های Wave قابلیتی برای نوشتن توابع ایمن تایپی بدون تکرار کد ارائه می‌دهند.

قوانین کلیدی:

- پارامترهای تایپی باید در زمان باند مشخص شوند.
- وراثت تایپ پشتیبانی نمی‌شود.

## 1. اعلان تابع جنریک

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

فراخوانی:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. پارامترهای تایپ متعدد

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

## 3. ساختارهای جنریک

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. جنریک‌های تو در تو

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. استفاده با کتابخانه استاندارد

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## اشتباهات رایج

```wave
var x: i32 = identity(10); // آرگومان نوع وجود ندارد (مجاز نیست)
```

باید به صورت زیر فراخوانی شود.

```wave
var x: i32 = identity<i32>(10);
```
