---
sidebar_position: 13
---

# גנריים (Generics)

הגנריים של Wave הם תכונה לכתיבת פונקציות בטוחות-סוג ללא שכפול קוד.

חוקים עיקריים:

- יש לציין פרמטרי סוג בעת כתיבה.
- אין אפשרות להסיק סוגים באופן אוטומטי.

## 1. הכרזת פונקציה גנרית

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

קריאה:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. פרמטרי סוג מרובים

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

## 3. מבנה גנרי

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. גנרי מקונן

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. שימוש עם ספריית הסטנדרט

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## שגיאות נפוצות

```wave
var x: i32 = identity(10); // ארגומנט סוג חסר (לא מותר)
```

יש לקרוא באופן הבא.

```wave
var x: i32 = identity<i32>(10);
```
