---
sidebar_position: 5
---

# تشخیص خطا

کامپایلر Wave خطاها را همراه با کد (`E####`) و همچنین موقعیت/متن/پیشنهاد حل‌آنها به یکباره نشان می‌دهد.

## فرمت خروجی

قالب پایه به صورت زیر است.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

موارد خروجی:

- `--> file:line:column`: کد خطا و خلاصه
- `^`: موقعیت خطا
- بلوک کد منبع + هایلایت caret(`^`)
- `زمینه`، `مورد انتظار`، `یافت شده`، `توضیح`، `راهنما`، `پیشنهاد`

## کد خطای اصلی

- `E1002` نویسه غیرمنتظره
- `E1003` توضیح بلوک بسته نشده
- `E1004` رشته بسته نشده
- `E1005` فرار رشته اشتباه
- `E1006` لیتِرال نویسه اشتباه
- `E2001` قالب لیتِرال عددی اشتباه
- `E3001` خطای تجزیه‌کننده در نحو
- `E3001` خطای تحلیل معنایی (اعتبارسنجی معنایی)
- `E3102` تخصیص `null` به غیر اشاره‌گر
- `E9001` کاهش ضمنی عدد صحیح ممنوع است
- `E9001` خطای داخلی در تولید کد Backend

## نشان‌گذاری موقعیت منبع حتی در خطای Backend

حتی اگر در مرحله تولید کد (LLVM) یک وحشت داخلی رخ دهد، تا حد امکان موقعیت واقعی فراخوانی/اعلام را استنتاج و نمایش می‌دهد.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

در مواردی که استنتاج موقعیت ممکن نیست، موقعیت پشتیبان استفاده می‌شود و این واقعیت در `یادداشت` نیز نمایش داده می‌شود.
