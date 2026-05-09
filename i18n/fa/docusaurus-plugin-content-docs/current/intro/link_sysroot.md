---
sidebar_position: 8
---

# کنترل دستی sysroot لینک (`-C link-sysroot`)

این سند روش **کنترل صریح**  sysroot در مرحله لینک کردن با `wavec` را توضیح می‌دهد.

اصول کلیدی:

- `--sysroot=<path>`: sysroot سطح کامپایل (clang `-c`)
- `-C link-sysroot=<path>`: sysroot سطح لینک

به عبارتی، sysroot کامپایل و لینک را به صورت مجزا مدیریت می‌کنیم.

---

## ۱. چرا نیاز است؟

در هنگام استفاده از `-C linker=<path>` در لینک متقابل، اغلب نیاز به تعیین جداگانهٔ مسیرهای زمان ‌ران (مانند `crt1.o`، `libc`، `libm`) وجود دارد.

در این حالت، sysroot لینک به صورت خودکار استنتاج نمی‌شود و باید از طریق  CLI به‌صورتی صریح ارسال شود.

---

## ۲. تعریف گزینه‌ها

## ۲.۱ `-C link-sysroot=<path>`

`--sysroot=<path>` را در مرحله لینک تزریق می‌کند.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

از نظر داخلی به معنای `-C link-arg=--sysroot=<path>` است.

## ۲.۲ `-C link-arg=--sysroot=<path>`

روش پارامتر خام لینک موجود همچنان پشتیبانی می‌شود.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## ۳. قوانین اعتبارسنجی

در فرایند بیلد که به مرحله لینک نیاز دارد، اگر همزمان شرایط زیر برقرار باشند، با خطای استفاده متوقف می‌شود.

1. استفاده از `-C linker=...`
2. استفاده از `--sysroot=<path>`
3. عدم ذکر sysroot لینک ( `-C link-sysroot` یا `-C link-arg=--sysroot=...`)

نمونه پیام خطا:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## ۴. نمونه استفاده

## ۴.۱ لینک متقابل AArch64 Linux

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

## ۴.۲ روش پارامتر خام لینک

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## ۴.۳ بیلد بدون لینک (`--emit=obj`)

اگر مرحله لینک وجود نداشته باشد، sysroot لینک نیازی نیست.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## ۵. خلاصه

- `--sysroot` به عنوان کنترل سطح کامپایل
- `-C link-sysroot` کنترل سطح لینک
- کنترل عیان بر استنتاج خودکار اولویت دارد
