---
sidebar_position: 13
---

# जेनेरिक (सामान्यरण)

वेव जेनेरिक्स टाइप सेफ फ़ंक्शंस लिखने के लिए एक विशेषता है, जो कोड दोहराव के बिना होती है।

मुख्य नियम:

- प्रकार के मापदंडों को अवश्य निर्दिष्ट करें।
- प्रकार अनुमान को अनुमति नहीं है।

## 1. जेनेरिक फंक्शन के घोषणा

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

कॉल:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. बहु-प्रकार पैरामीटर

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

## 3. जेनेरिक संरचना

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. नेस्टेड जेनेरिक

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. मानक पुस्तकालय के साथ उपयोग

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## सामान्य गलतियाँ

```wave
var x: i32 = identity(10); // प्रकार पैरामीटर गायब है (अनुमति नहीं)
```

उपरोक्त के रूप में इसे कॉल करना चाहिए।

```wave
var x: i32 = identity<i32>(10);
```
