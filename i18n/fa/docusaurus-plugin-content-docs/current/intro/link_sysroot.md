---
sidebar_position: ۸
---

# کنترل دستی sysroot لینک (`-C link-sysroot`)

این سند روش **کنترل صریح**  sysroot در مرحله لینک کردن با `wavec` را توضیح می‌دهد.

اصول کلیدی:

- `--sysroot=<مسیر>`: sysroot سطح کامپایل (clang `-c`)
- `-C link-sysroot=<مسیر>`: sysroot سطح لینک

به عبارتی، sysroot کامپایل و لینک را به صورت مجزا مدیریت می‌کنیم.

---

## ۱. چرا نیاز است؟

در هنگام استفاده از `-C linker=<path>` در لینک متقابل، اغلب نیاز به تعیین جداگانهٔ مسیرهای زمان ‌ران (مانند `crt1.o`، `libc`، `libm`) وجود دارد.

در این حالت، sysroot لینک به صورت خودکار استنتاج نمی‌شود و باید از طریق  CLI به‌صورتی صریح ارسال شود.

---

## ۲. تعریف گزینه‌ها

## ۲.۱ `-C link-sysroot=<مسیر>`

`--sysroot=<مسیر>` را در مرحله لینک تزریق می‌کند.

```bash
wavec -C link-sysroot=/مسیر/به/sysroot ...
```

از نظر داخلی به معنای `-C link-arg=--sysroot=<مسیر>` است.

## ۲.۲ `-C link-arg=--sysroot=<مسیر>`

روش پارامتر خام لینک موجود همچنان پشتیبانی می‌شود.

```bash
wavec -C link-arg=--sysroot=/مسیر/به/sysroot ...
```

---

## ۳. قوانین اعتبارسنجی

در فرایند بیلد که به مرحله لینک نیاز دارد، اگر همزمان شرایط زیر برقرار باشند، با خطای استفاده متوقف می‌شود.

1. استفاده از `-C linker=...`
2. استفاده از `--sysroot=<مسیر>`
3. عدم ذکر sysroot لینک ( `-C link-sysroot` یا `-C link-arg=--sysroot=...`)

نمونه پیام خطا:

```text
هنگام استفاده از -C linker=...، --sysroot=<مسیر> فقط در مرحله کمپایل است؛  sysroot لینک را با -C link-sysroot=<مسیر> (یا -C link-arg=--sysroot=<مسیر>) به‌ وضوح ارسال کنید.
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
wavec --sysroot=/مسیر/به/sysroot  build main.wave --emit=obj
```

---

## ۵. خلاصه

- `--sysroot` به عنوان کنترل سطح کامپایل
- `-C link-sysroot` کنترل سطح لینک
- کنترل عیان بر استنتاج خودکار اولویت دارد
