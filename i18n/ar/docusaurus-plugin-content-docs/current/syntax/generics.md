---
sidebar_position: ١٣
---

# جينيريكس (Generics)

جنيريكس Wave هي ميزة لكتابة دوال آمنة من الأنواع مكودة بدون تكرار الكود.

القواعد الأساسية:

- يجب تحديد معلمات النوع بشكل صريح.
- الاستدلال على النوع غير مسموح به.

## 1. إعلان الدالة الجينيريكية

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

استدعاء:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. معلمات النوع المزدوج

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

## 3. هيكلية النوع العام

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. جنيريكس متداخل

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. استخدام مع المكتبة القياسية

```wave
استيراد("std::math::int");
استيراد("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## الأخطاء الشائعة

```wave
var x: i32 = identity(10); // خطأ في حذف معلمات النوع (غير مسموح به)
```

يجب استدعائه كما في الأمثلة الصحيحة.

```wave
var x: i32 = identity<i32>(10);
```
