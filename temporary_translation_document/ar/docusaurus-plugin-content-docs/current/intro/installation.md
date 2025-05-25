---
sidebar_position: 1
---

# التثبيت

## طريقة التثبيت على Linux

### التنزيل وفك الضغط
قم بتنزيل أحدث إصدار من Wave من صفحة الإصدارات الرسمية على GitHub.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### إعداد LLVM (لإصدار Pre Beta)

نظرًا لأن إصدار Pre Beta من Wave يستخدم LLVM مؤقتًا، قم بتثبيت LLVM باستخدام الأوامر التالية:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### التحقق من التثبيت

للتحقق مما إذا كان التثبيت قد اكتمل بنجاح، أدخل الأمر التالي في الطرفية:

```bash
wave --version
```

إذا تم عرض معلومات الإصدار، فهذا يعني أن التثبيت قد تم بنجاح.