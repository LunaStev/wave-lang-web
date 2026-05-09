---
sidebar_position: 8
---

# লিঙ্ক sysroot ম্যানুয়াল নিয়ন্ত্রণ (`-C link-sysroot`)।

এই নথি `wavec` এ লিঙ্ক স্তরের sysroot কে **স্পষ্টভাবে নিয়ন্ত্রিত করার পদ্ধতি** বর্ণনা করে।

মূল নীতি:

- `--sysroot=<path>`: কম্পাইল স্তর (clang `-c`) sysroot।
- `-C link-sysroot=<path>`: লিঙ্ক স্তর (লিঙ্কার) sysroot।

অর্থাৎ, কম্পাইল এবং লিঙ্কের sysroot কে পৃথকভাবে পরিচালিত করা হয়।

---

## ১। কেন প্রয়োজন

ক্রস লিঙ্কে `-C linker=<path>` ব্যবহারে, প্রায়ই লিঙ্ক ড্রাইভার (যেমন: `aarch64-linux-gnu-gcc`) যে রানটাইম পথ (`crt1.o`, `libc`, `libm`) উল্লেখ করে থাকে সেটিকে আলাদাভাবে উল্লেখ করতে হয়।

এই সময়ে লিঙ্ক sysroot কে স্বয়ংক্রিয়ভাবে অনুমান না করে CLI এ স্পষ্টভাবে সরবরাহ করার জন্য নকশা করা হয়।

---

## ২। বিকল্প সংজ্ঞা

## ২.১ `-C link-sysroot=<path>`

লিঙ্ক স্তরে `--sysroot=<path>` ইনজেক্ট করা হয়।

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

অভ্যন্তরীণভাবে `-C link-arg=--sysroot=<path>` এর একই অর্থ হবে।

## ২.২ `-C link-arg=--sysroot=<path>`

বিদ্যমান রaw লিঙ্ক আর্গুমেন্ট পদ্ধতি সমর্থন করা হয়।

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## ৩। যাচাইকরণ নিয়ম

লিঙ্ক স্তর প্রয়োজনীয় বিল্ডের সময় নিম্নলিখিত শর্তগুলি একযোগে সম্পূর্ণ হলে ব্যবহারের ত্রুটি দ্বারা সমাপ্ত হবে।

1. `-C linker=...` ব্যবহার
2. `--sysroot=<path>` ব্যবহার
3. লিঙ্ক sysroot(`-C link-sysroot` অথবা `-C link-arg=--sysroot=...`) নির্ধারিত হয়নি

ত্রুটি বার্তার উদাহরণ:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## ৪। ব্যবহার উদাহরণ

## ৪.১ AArch64 Linux ক্রস লিঙ্ক

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

## ৪.২ রaw লিঙ্ক আর্গুমেন্ট পদ্ধতি

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## ৪.৩ লিঙ্কবিহীন বিল্ড (`--emit=obj`)।

লিঙ্ক স্তর না থাকলে লিঙ্ক sysroot প্রয়োজন হয় না।

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## ৫। সারসংক্ষেপ

- `--sysroot` হল কম্পাইল স্তর নিয়ন্ত্রণের জন্য
- `-C link-sysroot` হল লিঙ্ক স্তর নিয়ন্ত্রণের জন্য
- স্বয়ংক্রিয় অনুমানের চাইতে স্পষ্ট নিয়ন্ত্রণকে অগ্রাধিকার দেওয়া হয়
