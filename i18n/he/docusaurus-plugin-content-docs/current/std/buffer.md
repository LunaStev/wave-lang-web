---
sidebar_position: 2
---

# std::buffer שימושים

`std::buffer` מספקת סוגי באנרים ובאנרים גנריים.

## יבוא

```wave
import("std::buffer::types");
import("std::buffer::alloc");
import("std::buffer::read");
import("std::buffer::write");
```

## 1. באנר בתים (`Buffer`)

### יצירה/הוספה/עריכה

```wave
fun main() {
    var buf: Buffer = buffer_new(128);

    buffer_append_str(&buf, "GET /health\n");
    buffer_push(&buf, 0);

    var first: u8 = buffer_at(buf, 0);
    var ok: bool = buffer_set(&buf, 0, 80); // 'P'

    buffer_free(&buf);
}
```

### פונקציות מרכזיות

```wave
fun buffer_new(capacity: i64) -> Buffer
fun buffer_reserve(buf: ptr<Buffer>, required_cap: i64) -> i64
fun buffer_push(buf: ptr<Buffer>, value: u8) -> i64
fun buffer_append(buf: ptr<Buffer>, src: ptr<u8>, size: i64) -> i64
fun buffer_append_str(buf: ptr<Buffer>, s: str) -> i64
fun buffer_at(buf: Buffer, index: i64) -> u8
fun buffer_set(buf: ptr<Buffer>, index: i64, value: u8) -> bool
fun buffer_free(buf: ptr<Buffer>) -> i64
```

## 2. באפר גנרי (`TypedBuffer<T>`)

Wave אינה תומכת בהסקת סוג, לכן יש לציין את הפרמטרים למתודות.

```wave
fun main() {
    var nums: TypedBuffer<i32> = tbuffer_new<i32>(4, 16); // elem_size=4

    tbuffer_push<i32>(&nums, 10);
    tbuffer_push<i32>(&nums, 20);

    var out: i32 = 0;
    var got: bool = tbuffer_at<i32>(nums, 1, &out); // out = 20

    tbuffer_free<i32>(&nums);
}
```

### פונקציות מרכזיות

```wave
fun tbuffer_new<T>(elem_size: i64, initial_cap: i64) -> TypedBuffer<T>
fun tbuffer_reserve<T>(buf: ptr<TypedBuffer<T>>, required_len: i64) -> i64
fun tbuffer_push<T>(buf: ptr<TypedBuffer<T>>, value: T) -> i64
fun tbuffer_at<T>(buf: TypedBuffer<T>, index: i64, out_value: ptr<T>) -> bool
fun tbuffer_set<T>(buf: ptr<TypedBuffer<T>>, index: i64, value: T) -> bool
fun tbuffer_free<T>(buf: ptr<TypedBuffer<T>>) -> i64
```

שים לב:

- המשתמש חייב להזין את `elem_size` בדיוק.
- גישה מחוץ לטווח מחזירה `false` או את ערך ברירת המחדל (`buffer_at` הוא `0`).
