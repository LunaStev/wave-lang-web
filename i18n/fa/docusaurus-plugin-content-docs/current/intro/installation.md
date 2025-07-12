---
sidebar_position: 1
---

# نصب

## روش نصب

دستور زیر را در ترمینال اجرا کنید:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### مثال

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## اقدامات انجام‌شده هنگام نصب
- نصب LLVM نسخه ۱۴ و بسته‌های مرتبط (با استفاده از `apt-get`)

- ایجاد یک لینک نمادین به مسیر `/usr/lib/libllvm-14.so`

- تنظیم متغیر محیطی `LLVM_SYS_140_PREFIX` در فایل `~/.bashrc`

- دانلود نسخه مشخص‌شده‌ی Wave به‌صورت فایل `.tar.gz`

- استخراج فایل و نصب `wavec` در مسیر `/usr/local/bin`

- بررسی نصب با اجرای دستور `wavec --version`

## بررسی نصب

```bash
wavec --version
```

## راهنمای حذف Wave (`uninstall.sh`)
### روش حذف
برای حذف Wave، دستور زیر را در ترمینال اجرا کنید:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
