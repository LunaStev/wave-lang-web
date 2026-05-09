---
sidebar_position: 13
---

# జెనరిక్స్

Wave జెనరిక్స్ అనేది డూప్లికేట్ కోడ్ లేకుండా టైప్-సేఫ్ ఫంక్షన్‌లను వ్రాయడానికి ఒక లక్షణం.

ప్రధాన నియమాలు:

- రకం వాదన తప్పనిసరిగా పేర్కొనబడాలి.
- రకం అనుమితి అనుమతించబడదు.

## 1) సాధారణ ఫంక్షన్ డిక్లరేషన్

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

కాల్:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2) బహుళ-రకం పారామితులు

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

## 3) సాధారణ నిర్మాణం

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4) నెస్టెడ్ జెనరిక్స్

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5) ప్రామాణిక లైబ్రరీతో ఉపయోగించండి

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## సాధారణ తప్పులు

```wave
var x: i32 = identity(10); // తప్పిపోయిన రకం వాదన (అనుమతించబడలేదు)
```

మీరు దీన్ని ఇలా పిలవాలి:

```wave
var x: i32 = identity<i32>(10);
```
