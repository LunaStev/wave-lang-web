---
sidebar_position: 9.5
---

# export

`export` تابعی را که در Wave پیاده‌سازی شده است به‌صورت نماد خارجی لینک‌کننده منتشر می‌کند. اگر `extern` تابع خارجی را وارد Wave کند، `export` تابع Wave را از طریق فایل object برای C، Rust، C++، Zig یا زبان‌های native دیگر قابل فراخوانی می‌کند.

---

## نمای کلی

FFI در Wave دو جهت دارد.

- `extern(c)` تابعی را که کتابخانه خارجی فراهم می‌کند اعلام می‌کند تا کد Wave بتواند آن را فراخوانی کند.
- `export(c)` بدنه تابع Wave را به‌صورت نماد ABI خارجی تولید می‌کند.

این دو شکل سرآیند ABI مشابهی دارند، اما جهت آن‌ها برعکس است. در `extern` بدنه تابع بیرون Wave است. در `export` بدنه تابع داخل Wave است.

در حال حاضر تنها ABI قابل export مقدار `c` است.

---

## export در سطح تابع

شکل پایه چنین است.

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

این کد نماد عمومی `add` را ایجاد می‌کند. فایل object تولیدشده با کدی که ABI زبان C را انتظار دارد لینک می‌شود.

---

## نام نمادها

نام تابع Wave و نام نماد لینک‌کننده می‌توانند متفاوت باشند.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

اینجا نام Wave برابر `add_i32` است، اما فایل object نماد `wave_add_i32` را منتشر می‌کند. زبان خارجی باید همین نام نماد را اعلام و فراخوانی کند.

---

## export بلوکی

چند تابع با ABI یکسان می‌توانند در یک بلوک قرار بگیرند.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

export بلوکی نام هر تابع را به‌عنوان نماد عمومی استفاده می‌کند. `export(c, "symbol") { ... }` مجاز نیست، چون یک alias مشترک برای چند تابع باعث برخورد نمادها می‌شود.

---

## فراخوانی از C

فایل Wave را به‌صورت object بسازید.

```bash
wavec build math.wave --emit=obj -o math.o
```

نماد export شده را در C اعلام کنید.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

سپس کد C و object مربوط به Wave را با linker معمولی لینک کنید.

```bash
cc main.c math.o -o app
```

---

## extern و export

`extern(c)` یعنی Wave از یک نماد خارجی استفاده می‌کند.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` یعنی کد خارجی می‌تواند از نماد Wave استفاده کند.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

هر دو جزو FFI هستند، اما جهت آن‌ها متفاوت است.

---

## محدودیت‌ها

- فقط `export(c)` پشتیبانی می‌شود.
- توابع export شده نمی‌توانند generic باشند.
- export بلوکی نمی‌تواند یک alias نماد مشترک داشته باشد.
- برای سازگاری پایدار، فعلاً از عدد صحیح، عدد اعشاری، bool و pointer استفاده کنید.
- نوع‌های تجمیعی مانند struct و array به قواعد ABI سخت‌گیرانه‌تری نیاز دارند و ممکن است بعداً پایدار شوند.
- `export` بیشتر برای object file و library مفید است، نه executable ساده.

---

## کاربردهای پیشنهادی

- ارائه توابع کمکی Wave به‌صورت کتابخانه C ABI.
- فراخوانی تابع Wave از Rust، C، C++، Zig یا زبان native دیگر.
- اتصال تدریجی ماژول‌های `front`، `utils` یا native بدون runtime نوشته‌شده با Wave به سیستم build موجود.
- اجازه دادن به Vex یا ابزار build دیگر برای لینک کردن objectهای Wave در پروژه خارجی.
