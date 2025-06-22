---
sidebar_position: 1
---

# نصب

## روش نصب در لینوکس

### دانلود و استخراج
جدیدترین نسخه Wave را از صفحه رسمی انتشار در GitHub دانلود کنید.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### تنظیم LLVM (مطابق نسخه Pre-Beta)
از آنجا که نسخه Pre-Beta از Wave به طور موقت از LLVM استفاده می‌کند، با استفاده از دستورات زیر LLVM را نصب کنید:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### بررسی نصب
برای اطمینان از اینکه نصب با موفقیت انجام شده است، دستور زیر را در ترمینال وارد کنید:

```bash
wavec --version
```

اگر اطلاعات نسخه نمایش داده شد، نصب با موفقیت انجام شده است.