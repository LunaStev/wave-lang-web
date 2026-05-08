---
sidebar_position: ٧
---

# خيارات الخلفية (`--llvm`, `--whale`)

توضح هذه الوثيقة خيارات CLI المتعلقة بخلفية `wavec`.

المبدأ المهم:

- `wavec` ليس مدير حزم.
- يتم التحكم في تشغيل الخلفية قدر الإمكان بواسطة **معلمات صريحة**.
- يتم تفسير الخيارات الفرعية للخلفية فقط بعد `--llvm`.

---

## ١. محدد الخلفية

## ١.١ `--llvm`

`--llvm` نفسها هي العلامة المبدئية لكتلة خيارات الخلفية.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

يتم معالجة المعلمات التي تلي `--llvm` كخيارات تكوين الخلفية لـ LLVM فقط إذا كانت مدعومة.

## ١.٢ `--whale` (حاليًا TODO)

حاليًا، `--whale` هو **علامة احتياطية محجوزة**.

- يتعرف عليه المحلل.
- لم تتم بعد توصيل خط أنابيب Whale الخلفي الفعلي.
- عند الاستخدام، ينتهي بخطأ TODO.

---

## ٢. خيارات مدعومة بعد `--llvm`

## ٢.١ الهدف/توليد كود

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

نقطة الانعكاس:

- مرحلة إنشاء IR (TargetMachine): `target`, `cpu`, `features`
- مرحلة الكائن/الربط (استدعاء clang): `target`, `abi`

حاليًا يجب توثيق ثلاثة أهداف رئيسية:

- لينكس: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- داروين: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- فريستاندنج: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## ٢.٢ سلسلة الأدوات/الربط

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (يمكن تكراره)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

نقطة الانعكاس:

- إنشاء الكائن (clang `-c`) بـ `--sysroot`
- في مرحلة الربط، يتم تجاوز الرابط وإدخال raw link arg وإدخال link-sysroot
- عند استخدام `-C no-default-libs` يتم تعطيل التعريف التلقائي لـ `-lc -lm`

---

## ٣. قواعد التحليل (مهم)

إذا لم يتم استخدام `--llvm`، فإن الخيارات الفرعية الخلفية لا يتم تفسيرها كخيارات عامة.

كمثال، يتبع الخطأ أدناه.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

يجب كتابة التكييفات على الشكل التالي.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## ٤. أمثلة الاستخدام

إنشاء الكائن الأساسي:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

إنشاء كائن نواة مستقل:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

ربط مخصص:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

تعطيل الربط التلقائي لـ libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

بالاستخدام مع `--freestanding`، يتم العمل بطريقة مشابهة لـ `-C no-default-libs` داخليًا، مما يجعله مناسبًا للبناءات التي لا تفترض وجود مكتبات افتراضية في وقت التشغيل، مثل كود النواة/التمهيد.

---

## ٥. نظرة عامة على الحالة

- خلفية LLVM: قيد العمل
- خلفية Whale: محجوزة (TODO)، غير مكتملة
