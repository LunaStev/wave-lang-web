---
sidebar_position: 13
---

# பொதுவானவை

Wave ஜெனரிக்ஸ் என்பது குறியீட்டை நகலெடுக்காமல் வகை-பாதுகாப்பான செயல்பாடுகளை எழுதுவதற்கான ஒரு அம்சமாகும்.

முக்கிய விதிகள்:

- வகை வாதம் குறிப்பிடப்பட வேண்டும்.
- வகை அனுமானம் அனுமதிக்கப்படவில்லை.

## 1) பொதுவான செயல்பாடு அறிவிப்பு

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

அழைப்பு:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2) பல வகை அளவுருக்கள்

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

## 3) பொதுவான அமைப்பு

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4) உள்ளமைக்கப்பட்ட ஜெனரிக்ஸ்

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5) நிலையான நூலகத்துடன் பயன்படுத்தவும்

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## பொதுவான தவறுகள்

```wave
var x: i32 = identity(10); // விடுபட்ட வகை வாதம் (அனுமதிக்கப்படவில்லை)
```

நீங்கள் இதை இப்படி அழைக்க வேண்டும்:

```wave
var x: i32 = identity<i32>(10);
```
