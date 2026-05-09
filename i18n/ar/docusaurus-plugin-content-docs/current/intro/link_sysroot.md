---
sidebar_position: 8
---

# التحكم اليدوي لنظام sysroot الربط (`-C link-sysroot`)

هذه الوثيقة تشرح كيفية **التحكم بشكل صريح** في sysroot خلال مرحلة الربط باستخدام `wavec`.

المبادئ الأساسية:

- `--sysroot=<path>`: sysroot لمرحلة الترجمة (clang '-c')
- `-C link-sysroot=<path>`: sysroot لمرحلة الربط (linker)

هذا يعني أننا نفصل بين sysroot الترجمة وsysroot الربط.

---

## 1. لماذا هو مطلوب؟

عند استخدام `-C linker=<path>` أثناء الربط المتقاطع، غالبًا ما تحتاج إلى تحديد مسارات وقت التشغيل (`aarch64-linux-gnu-gcc` ،`crt1.o` ،`libc`) التي يشير إليها محرك الربط (مثل `libm`).

في هذه الحالة، يتم تكوين الأمر بحيث لا يستدل على sysroot الربط تلقائيًا، بل يتم إرساله بشكل صريح عبر CLI.

---

## 2. تعريف الخيارات

## 2.1 `-C link-sysroot=<path>`

يتم حقن `--sysroot=<path>` في مرحلة الربط.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

يعادل داخليًا `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

يستمر دعم الطريقة التقليدية للمعلمات الخام في الربط.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. قواعد التحقق

في البناية التي تحتاج إلى مرحلة ربط، إذا تم استيفاء الشرطين التاليين، يتم إنهاء الدورة باستخدام خطأ.

1. `-C linker=...` مستخدم
2. `--sysroot=<path>` مستخدم
3. لم يتم تحديد sysroot الربط (`-C link-sysroot` أو `-C link-arg=--sysroot=...`)

مثال لرسالة خطأ:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. مثال الاستخدام

## 4.1 الربط المتقاطع لنظام Linux على AArch64

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 طريقة معلمة الربط الخام

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 بناء بدون رابط (`--emit=obj`)

إذا لم يكن هناك مرحلة رابط، فإن sysroot الرابط ليس مطلوبًا.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. ملخص

- `--sysroot` هو للتحكم في مرحلة الترجمة
- `-C link-sysroot` هو للتحكم في مرحلة الرابط
- الأولوية للتحكم الواضح على الاستدلال التلقائي
