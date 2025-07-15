---
sidebar_position: 1
---

# نصب

## روش نصب

دستور زیر را در ترمینال اجرا کنید:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <نسخه>
```

### مثال

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## مراحل انجام‌شده در حین نصب

- نصب LLVM 14 و بسته‌های مرتبط (`apt-get`)

- ایجاد لینک نمادین `/usr/lib/libllvm-14.so`

- تنظیم متغیر محیطی `LLVM_SYS_140_PREFIX` (`~/.bashrc`)

- دانلود `.tar.gz` موج در نسخه مشخص شده

- پس از استخراج، `wavec` را در `/usr/local/bin` نصب کنید

- با `wavec --version` نصب را تایید کنید

## تایید نصب

```bash
wavec --version
```

## راهنمای حذف موج (`uninstall.sh`)

### روش حذف

دستور زیر را در ترمینال اجرا کنید:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
