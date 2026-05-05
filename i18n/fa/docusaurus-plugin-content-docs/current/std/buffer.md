---
sidebar_position: 2
---

# نحوه استفاده از std::buffer

`std::buffer` بافرهای بایت متغیر و بافرهای جنریک را فراهم می‌کند.

## واردات

```wave
واردات("std::buffer::types");
واردات("std::buffer::alloc");
واردات("std::buffer::read");
واردات("std::buffer::write");
```

## 1. بافر بایت (`Buffer`)

### ایجاد/افزودن/تغییر

```wave
عملکرد اصلی () {
    تغییر buf: بافر = buffer_new(128);

    buffer_append_str(&buf, "GET /health\n");
    buffer_push(&buf, 0);

    تغییر اول: u8 = buffer_at(buf, 0);
    تغییر بخیر: منطق bool = buffer_set(&buf, 0, 80); // 'P'

    buffer_free(&buf);
}
```

### توابع اصلی

```wave
عملکرد buffer_new(ظرفیت: i64) -> بافر
عملکرد buffer_reserve (بافر: ptr<بافر>, ظرفیت موردنیاز: i64) -> i64
عملکرد buffer_push (بافر: ptr<بافر>, مقدار: u8) -> i64
عملکرد buffer_append (بافر: ptr<بافر>, منبع: ptr<u8>, اندازه: i64) -> i64
عملکرد buffer_append_str (بافر: ptr<بافر>, s: رشته) -> i64
عملکرد buffer_at (بافر: بافر, شاخص: i64) -> u8
عملکرد buffer_set (بافر: ptr<بافر>, شاخص: i64, مقدار: u8) -> منطق
عملکرد buffer_free (بافر: ptr<بافر>) -> i64
```

## 2. بافر عمومی (`TypedBuffer<T>`)

از آنجا که Wave استنباط نوع ندارد، نوع آرگومان‌ها باید مشخص شوند.

```wave
عملکرد اصلی () {
    تغییر nums: TypedBuffer<i32> = tbuffer_new<i32>(4, 16); // elem_size=4

    tbuffer_push<i32>(&nums, 10);
    tbuffer_push<i32>(&nums, 20);

    تغییر خروجی: i32 = 0;
    تغییر دریافت: منطق bool = tbuffer_at<i32>(nums, 1, &out); // خروجی = 20

    tbuffer_free<i32>(&nums);
}
```

### توابع اصلی

```wave
عملکرد tbuffer_new<T> (اندازه_المل: i64, ظرفیت_اولیه: i64) -> TypedBuffer<T>
عملکرد tbuffer_reserve<T> (بافر: ptr<TypedBuffer<T>>, طول_موردنیاز: i64) -> i64
عملکرد tbuffer_push<T> (بافر: ptr<TypedBuffer<T>>, مقدار: T) -> i64
عملکرد tbuffer_at<T> (بافر: TypedBuffer<T>, شاخص: i64, مقدار_خروجی: ptr<T>) -> منطق
عملکرد tbuffer_set<T> (بافر: ptr<TypedBuffer<T>>, شاخص: i64, مقدار: T) -> منطق
عملکرد tbuffer_free<T>(_بافر: ptr<TypedBuffer<T>>) -> i64
```

توجه:

- `اندازه_المل` باید به دقت توسط فراخوان وارد شود.
- دسترسی خارج از محدوده `false` یا مقدار پیش‌فرض (در `buffer_at` برابر با `0`) را برمی‌گرداند.
