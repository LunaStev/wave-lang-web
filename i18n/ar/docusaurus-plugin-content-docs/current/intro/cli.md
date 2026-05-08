---
sidebar_position: 6
---

# مرجع CLI لـ `wavec`

توضح هذه الوثيقة بعناية سلوك CLI لـ **Wave Compiler الحالي (`wavec`)** بناءً على التنفيذ الحالي.

المبادئ الأساسية:

- `wavec` هو مترجم.
- تثبيت/حل الحزم (lockfile, registry, التحميل) ليس من مسؤولية `wavec`.
- يتم تمرير التبعيات الخارجية كـ **معامل CLI صريح** عند تشغيل `wavec`.

---

## 1. الصيغة الأساسية

```bash
wavec [خيارات عامة] <أمر> [خيارات الأمر]
```

مثال:

```bash
wavec -O2 تشغيل main.wave
wavec بناء app.wave --link ssl -L ./native/lib
wavec تشغيل app.wave --dep-root .vex/dep
```

---

## 2. قواعد تحليل الأوامر (مهم)

يقوم `wavec` أولاً بمسح **الخيار العام** من إجمالي المعاملات ثم يحلل `<command>` بما تبقى.

وبالتالي، فإن الخيار العام مرن في الموقع.

```bash
wavec -O3 تشغيل main.wave
wavec تشغيل main.wave -O3
wavec تشغيل -O3 main.wave
```

الثلاثة أعلاه جميعها صالحة.

عند استخدام `--`، يتوقف المسح للخيار العام بعده ويتم تمريره إلى منطقة الأمر.

```bash
wavec -- تشغيل main.wave
```

---

## 3. الأوامر

## 3.1 `run <file>`

يقوم بتجميع وتشغيل ملف Wave.

```bash
wavec تشغيل hello.wave
```

السلوك:

1. تحليل المصدر + توسيع الاستيراد
2. إنشاء LLVM IR
3. رابط ثنائي أصلي (`target/<file_stem>`)
4. تشغيل

الخصائص:

- ينقل `wavec` كود إنهاء البرنامج الذي تم تشغيله.

---

## 3.2 `build <file>`

إنشاء ملف قابل للتنفيذ (exe).

```bash
wavec بناء app.wave
```

ثنائي الإخراج:

- `target/<file_stem>`

## 3.3 خيارات `build` (`-o`, `-c`)

يمكن للأمر `build` التحكم في اسم ملف الإخراج وتنسيق الإخراج كخيارات.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: يحدد اسم ملف الإخراج.
  - افتراضيًا (بدون `-c`): تحديد مسار إخراج الملف القابل للتنفيذ.
  - مع `-c`: تحديد مسار إخراج ملف الكائن.
- `-c`: حذف الرابط وإنشاء ملف الكائن فقط.
- عند استخدام `-c` يتم إخراج مسار الكائن إلى stdout.

السلوك الافتراضي:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (مسار الإخراج)

مثال على كائن نواة منفصل:

```bash
wavec --llvm \
 --target=x86_64-unknown-none-elf \
 build kernel.wave --emit=obj --freestanding -o kernel.o
```

يمكن أيضًا استخدام `aarch64-unknown-none-elf` و `riscv64-unknown-none-elf` بنفس الطريقة.

---

## 3.4 `install std`, `update std`

هذا هو الأمر لتثبيت/تحديث مكتبة القياسية.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## ٤. خيارات عامة

## ٤.١ تحسين

القيم المسموح بها:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

مثال:

```bash
wavec -O3 run main.wave
```

---

## ٤.٢ إخراج التصحيح

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

العناصر المسموح بها:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## ٤.٣ خيارات الربط

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` أو `--link <lib>`
- `-L<path>` أو `-L <path>`

يتم تمرير `wavec` داخليًا في شكل `-l<lib>`، `-L<path>` أثناء الربط.

---

## 4.4 خيارات الاعتمادات الخارجية (مهم)

خيارات التحليل للاستيراد الخارجي (`pkg::...`).

### `--dep-root <dir>`

إضافة مرشحين لدليل جذر الحزمة.

```bash
wavec run app.wave --dep-root .vex/dep
```

عند البحث عن الحزمة `math`:

- افحص `.vex/dep/math`

يمكن تحديده عدة مرات:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

تثبيت اسم الحزمة في مسار محدد.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

القواعد:

- صيغة `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` يجب أن يكون بصيغة `name=path`
- عند تكرار تحديد نفس اسم الحزمة، يحدث خطأ

---

## 4.5 خيارات الخلفية (`--llvm`, `--whale`)

خيارات التحكم في الخلفية تُفسر فقط وراء `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

العناصر المدعومة (ملخص):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (يمكن تكراره)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

الأهداف الرئيسية الحالية بناءً على `wavec print target-list`:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` هو علم افتراضي محجوز حالياً، وخط أنابيب الخلفية الفعلي لم يتم تنفيذه بعد (TODO).

---

## 5. قواعد تحليل الاستيراد

ينقسم استيراد Wave إلى 3 أنواع:

1. استيراد محلي
2. استيراد std
3. استيراد حزمة خارجية

## 5.1 محلي

```wave
import("foo");
import("path/to/mod.wave");
```

ابحث عن `<path>.wave` في الدليل المرجعي للملف.

## 5.2 std

```wave
import("std::io::format");
```

استخدم المسار `~/.wave/lib/wave/std/...`.

## 5.3 حزمة خارجية

```wave
import("math::add");
import("json::parser::core");
```

الصيغة:

- مطلوب على الأقل 2 قطعة `package::module`

ترتيب تحديد الجذر للحزمة:

1. تعيين محدد بـ `--dep name=path`
2. ابحث في كل `--dep-root` عن `<root>/<package>`

إذا تم العثور على نفس الحزمة في عدة جذور dep في نفس الوقت:

- لن يتم التحديد تلقائيًا و **خطأ عدم الوضوح**
- يجب التثبيت بـ `--dep name=path`

ترتيب بحث ملفات الوحدة:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

مثال:

```wave
import("math::core::vec");
```

البحث:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. أمثلة حقيقية على استيراد خارجي

### 6.1 جذر dep واحد

الدليل:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

الرمز:

```wave
import("math::add");
```

التشغيل:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 إزالة الالتباس

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

يحدث خطأ إذا كان `math` موجود على كلا الجانبين. ثبّت كما هو موضح أدناه.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. فصل الأدوار مع Vex

الهيكل الموصى به:

- `wavec`: تجميع/ربط/تنفيذ + تحليل التبعية المحددة
- `vex`: التثبيت/الإدارة التبعية بعد \`wavec ... --dep-root ... استدعاء --dep ...

مثال:

```bash
# يتم تنفيذ vex داخليًا
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

يحافظ هذا النموذج على بساطة وحسم المترجم، بينما يتولى مدير الحزم مهام الأتمتة.

---

## ٨. مرجع سريع

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: محجوز، غير مطبق بعد
```
