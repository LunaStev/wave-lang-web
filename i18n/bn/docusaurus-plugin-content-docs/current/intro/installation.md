---
sidebar_position: 1
---

# ইন্সটলেশন

## ইনস্টল পদ্ধতি

টার্মিনালে নিম্নলিখিত কমান্ডগুলি চালান:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <সংস্করণ>
```

### উদাহরণ

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## ইনস্টলের সময় সম্পন্ন কার্য

- LLVM 14 এবং সম্পর্কিত প্যাকেজগুলির ইনস্টলেশন (`apt-get`)

- `/usr/lib/libllvm-14.so` এর সিম্বলিক লিঙ্ক তৈরি

- `LLVM_SYS_140_PREFIX` পরিবেশ ভেরিয়েবল সেট করা (`~/.bashrc`)

- নির্দিষ্ট সংস্করণের Wave `.tar.gz` ডাউনলোড

- আনজিপ করার পরে `wavec` কে `/usr/local/bin` এ ইনস্টল করুন

- `wavec --version` দিয়ে ইনস্টলেশন নিশ্চিত করুন

## ইনস্টলেশন নিশ্চিতকরণ

```bash
wavec --version
```

## Wave অপসারণ নির্দেশিকা (`uninstall.sh`)

### অপসারণ পদ্ধতি

টার্মিনালে নিম্নলিখিত কমান্ডগুলি চালান:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
