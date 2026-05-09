---
sidebar_position: ৭
---

# ব্যাকএন্ড বিকল্প (`--llvm`, `--whale`)

এই নথি `wavec` এর ব্যাকএন্ড সংক্রান্ত CLI বিকল্পগুলি ব্যাখ্যা করে।

প্রধান নীতি:

- `wavec` কোনো প্যাকেজ ম্যানেজার নয়।
- ব্যাক-এন্ড প্রক্রিয়া সম্ভব হলে **স্পষ্ট অর্গুমেন্ট** দিয়ে নিয়ন্ত্রিত হয়।
- ব্যাকএন্ড বিকল্পের বিবরণ শুধুমাত্র `--llvm` এর পরে ব্যাখ্যা করা হয়।

---

## ১। ব্যাকএন্ড নির্বাচক

## ১.১ `--llvm`

`--llvm` নিজেই ব্যাকএন্ড বিকল্প ব্লকের শুরু চিহ্ন।

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

উপরে উল্লেখিত, `--llvm` এর পরে আসা সমর্থিত আইটেমগুলি শুধুমাত্র LLVM ব্যাকএন্ড সেটআপ হিসেবে প্রক্রিয়াকৃত হবে।

## ১.২ `--whale` (বর্তমানে TODO)

বর্তমানে `--whale` একটি **রিজার্ভড ডামি ফ্ল্যাগ**।

- পার্সার চিনে নেয়।
- প্রকৃত Whale ব্যাকএন্ড পাইপলাইন এখনও সংযোগহীন।
- ব্যবহারের সময় TODO ত্রুটির মাধ্যমে বন্ধ হয়।

---

## ২। `--llvm` এর পরে সমর্থিত বিকল্পগুলি

## ২.১ লক্ষ্য/কোডজেন

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

প্রতিফলন বিন্দু:

- IR উৎপাদন (TargetMachine) স্তর: `target`, `cpu`, `features`
- বস্তু/লিঙ্ক স্তর (clang কল): `target`, `abi`

বর্তমানে ডকুমেন্ট করা প্রধান টার্গেট ট্রিপল:

- লিনাক্স: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- ডারউইন: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- ফ্রিস্ট্যান্ডিং: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## ২.২ টুলচেইন/লিঙ্ক

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (পুনরাবৃত্তি উপযুক্ত)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

প্রতিফলন বিন্দু:

- অব্জেক্ট অর্জনে (clang `-c`) `--sysroot`
- লিঙ্ক পর্যায়ে লিঙ্কার ওভাররাইড, রো লিঙ্ক আর্গ ইনজেকশন ও লিঙ্ক-সিসরুট ইনজেকশন
- `-C no-default-libs` ব্যবহারের সময় স্বয়ংক্রিয় `-lc -lm` নিষ্ক্রিয়।

---

## ৩। পার্সিং নিয়ম (গুরুত্বপূর্ণ)

`--llvm` ব্যবহার না করলে ব্যাকএন্ডের বিস্তারিত বিকল্পগুলি গ্লোবাল অপশনে পরিণত হয় না।

উদাহরণস্বরূপ নিচেরটি একটি ত্রুটি।

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

অবশ্যই নিচের মতো লিখতে হবে।

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## ৪। ব্যবহারের উদাহরণ

প্রাথমিক অব্জেক্ট উৎপাদন:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

ফ্রিস্ট্যান্ডিং কার্নেল অবজেক্ট তৈরি:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

কাস্টম লিঙ্ক:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm নিজস্ব লিংক নিষ্ক্রিয়করণ:

```bash
wavec --llvm -C no-default-libs build app.wave
```

`--freestanding` ব্যবহার করলে অভ্যন্তরীণভাবে `-C no-default-libs` এর মত কাজ করে, এবং কার্নেল/বুট কোডের মত রuntime এর মৌলিক লাইব্রেরি গঠিত না বলে ধরা হয় এমন বিল্ড তৈরির জন্য উপলব্ধ।

---

## ৫। অবস্থার সারাংশ

- LLVM ব্যাকেন্ড: কাজ করছে
- Whale ব্যাকেন্ড: সংরক্ষিত (TODO), অসম্পূর্ণ
