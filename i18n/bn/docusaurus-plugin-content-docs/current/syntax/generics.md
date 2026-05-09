---
sidebar_position: ১৩
---

# জেনেরিকস (Generics)

Wave জেনেরিক হল কোড পুনরাবৃত্তি ছাড়াই টাইপ নিরাপদ ফাংশন লেখার একটি ফিচার।

মূল নিয়মাবলী:

- টাইপ প্যারামিটার অবশ্যই উল্লেখ করতে হবে।
- টাইপ অনুমান অনুমোদিত নয়।

## 1. জেনেরিক ফাংশন ঘোষণা

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

কল:

```wave
fun main() {
    var a: i32 = identity<i32>(১০);
    var b: f64 = identity<f64>(৩.১৪);
}
```

## 2. একাধিক টাইপ প্যারামিটার

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
    var p: Pair<i32, f64> = pair<i32, f64>(১, ২.৫);
}
```

## 3. জেনেরিক স্ট্রাকচার

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. ইনলাইন জেনেরিক

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. স্ট্যান্ডার্ড লাইব্রেরির সাথে ব্যবহার

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-১০০, ০);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, ৮০৮০);
}
```

## অপরাধবোধ যা প্রায়শই ঘটে

```wave
var x: i32 = identity(১০); // টাইপ প্যারামিটার অনুপস্থিত (অনুমোদিত নয়)
```

অবশ্যই নিম্নরূপ কল করতে হবে।

```wave
var x: i32 = identity<i32>(১০);
```
