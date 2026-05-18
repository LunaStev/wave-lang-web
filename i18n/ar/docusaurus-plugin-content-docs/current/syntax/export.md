---
sidebar_position: 9.5
---

# export

تقوم `export` بنشر دالة مكتوبة في Wave كرمز خارجي للمُرابط. إذا كانت `extern` تستورد دالة خارجية إلى Wave، فإن `export` تجعل دالة Wave قابلة للاستدعاء من C أو Rust أو C++ أو Zig أو أي لغة أصلية أخرى عبر ملف object.

---

## نظرة عامة

تعمل FFI في Wave باتجاهين.

- `extern(c)` تعلن دالة توفرها مكتبة خارجية كي يستطيع كود Wave استدعاءها.
- `export(c)` تصدر جسم دالة Wave كرمز ABI خارجي.

الشكلان يشتركان في هيئة رأس ABI نفسها، لكن المعنى معاكس. مع `extern` يكون جسم الدالة خارج Wave. مع `export` يكون جسم الدالة داخل Wave.

حاليًا ABI الوحيد المدعوم للتصدير هو `c`.

---

## تصدير دالة واحدة

الشكل الأساسي هو:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

ينتج هذا الكود رمزًا عامًا اسمه `add`. يمكن ربط ملف object الناتج مع كود خارجي يتوقع C ABI.

---

## أسماء الرموز

يمكن أن يختلف اسم دالة Wave عن اسم رمز الربط المصدّر.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

هنا اسم Wave هو `add_i32`، لكن ملف object يصدّر `wave_add_i32`. يجب على اللغة الخارجية إعلان هذا الاسم واستدعاؤه.

---

## التصدير بالكتلة

يمكن جمع عدة دوال تستخدم ABI نفسه داخل كتلة واحدة.

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

تستخدم كتلة export اسم كل دالة كرمز عام. الصيغة `export(c, "symbol") { ... }` غير مسموحة لأن alias واحدًا لعدة دوال يسبب تصادم رموز.

---

## الاستدعاء من C

ابن ملف Wave كملف object.

```bash
wavec build math.wave --emit=obj -o math.o
```

أعلن الرمز المصدّر في C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

ثم اربط كود C وملف Wave object باستخدام رابط عادي.

```bash
cc main.c math.o -o app
```

---

## extern و export

`extern(c)` تعني أن Wave تستخدم رمزًا خارجيًا.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` تعني أن الكود الخارجي يستطيع استخدام رمز من Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

كلاهما جزء من FFI، لكن الاتجاه مختلف.

---

## القيود

- يتم دعم `export(c)` فقط.
- الدوال المصدّرة لا يمكن أن تكون generic.
- كتلة export لا يمكنها استخدام alias رمز مشترك واحد.
- للتوافق المستقر، يفضل حاليًا استخدام الأعداد، القيم العائمة، bool، والمؤشرات.
- الأنواع المركبة مثل struct و array تحتاج قواعد ABI أدق وقد يتم تثبيتها لاحقًا.
- `export` مفيدة أساسًا لملفات object والمكتبات، وليست ضرورية عادة لملف تنفيذي بسيط.

---

## الاستخدامات الموصى بها

- توفير دوال Wave المساعدة كمكتبة C ABI.
- استدعاء دوال Wave من Rust أو C أو C++ أو Zig أو لغة native أخرى.
- ربط وحدات `front` أو `utils` أو وحدات native بلا runtime مكتوبة بـ Wave تدريجيًا مع نظام build موجود.
- السماح لـ Vex أو أداة build أخرى بربط ملفات Wave object داخل مشروع خارجي.
