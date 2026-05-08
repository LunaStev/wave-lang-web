---
sidebar_position: ৬
---

# `wavec` CLI রেফারেন্স

এই নথি **বর্তমান Wave কম্পাইলার(`wavec`) বাস্তবায়ন মান** এর CLI আচরণ নির্ভুলভাবে বর্ণনা করে।

মূল নীতি:

- `wavec` একটি কম্পাইলার।
- প্যাকেজ ইনস্টল/সমাধান (লকফাইল, রেজিস্ট্রি, ডাউনলোড) `wavec` এর দায়িত্ব নয়।
- বাহ্যিক নির্ভরশীলতাগুলি `wavec` চালানোর সময় **স্পষ্ট CLI প্যারামিটার** গুলির মাধ্যমে প্রদান করা হয়।

---

## ১। প্রাথমিক বিন্যাস

```bash
wavec [গ্লোবাল-বিকল্প] <কমান্ড> [কমান্ড-বিকল্প]
```

উদাহরণ:

```bash
wavec -O2 রান main.wave
wavec বিল্ড app.wave --link ssl -L ./native/lib
wavec রান app.wave --dep-root .vex/dep
```

---

## ২। কমান্ড পার্সিং নিয়ম (গুরুত্বপূর্ণ)

`wavec` প্রথমে পুরো ইনপুট থেকে **গ্লোবাল অপশন** স্ক্যান করে, তারপর অবশিষ্ট ইনপুট দিয়ে `<কমান্ড>` বিশ্লেষণ করে।

অর্থাৎ, গ্লোবাল অপশনের অবস্থান নমনীয়।

```bash
wavec -O3 রান main.wave
wavec রান main.wave -O3
wavec রান -O3 main.wave
```

উপরের ৩টি বৈধ।

ইনপুটে `--` ব্যবহার করলে, তার পরের অংশের গ্লোবাল অপশন স্ক্যান বন্ধ করে কমান্ড এলাকায় পাঠানো হয়।

```bash
wavec -- রান main.wave
```

---

## ৩। কমান্ডসমূহ

## ৩.১ `run <file>`

Wave ফাইল কম্পাইল এবং চালনা করা হয়।

```bash
wavec রান hello.wave
```

ক্রিয়া:

1. উৎস পার্সিং + আমদানি সম্প্রসারণ
2. LLVM IR জেনারেশন
3. নেটিভ বাইনারি লিঙ্ক (`target/<ফাইল স্টেম>`)
4. রান

বৈশিষ্ট্য:

- চালিত প্রোগ্রামের সমাপ্তি কোড `wavec` দ্বারা প্রেরিত হয়।

---

## ৩.২ `build <file>`

এক্সিকিউটেবল ফাইল (exe) তৈরি করে।

```bash
wavec বিল্ড app.wave
```

আউটপুট বাইনারি:

- `target/<ফাইল স্টেম>`

## ৩.৩ `build` অপশন (`-o`, `-c`)

`build` কমান্ডটি আউটপুট ফাইলের নাম এবং আউটপুট ফর্ম্যাট অপশন দ্বারা নিয়ন্ত্রণ করতে পারে।

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: আউটপুট ফাইলের নাম নির্ধারণ করে।
  - ডিফল্ট (`-c` ছাড়া): এক্সিকিউটেবল ফাইল আউটপুট পাথ নির্ধারণ করুন
  - `-c` সহ: অবজেক্ট ফাইল আউটপুট পাথ নির্ধারণ করুন
- `-c`: লিঙ্কিং বাদ দিয়ে কেবল অবজেক্ট ফাইল তৈরি করে।
- `-c` ব্যবহার করার সময় অবজেক্ট পাথ stdout-এ আউটপুট হয়।

মূল আচরণ:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (পাথ আউটপুট)

ফ্রিস্ট্যান্ডিং কার্নেল অবজেক্ট উদাহরণ:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`ও একই ভাবে ব্যবহার করা যায়।

---

## ৩.৪ `install std`, `update std`

স্ট্যান্ডার্ড লাইব্রেরি ইনস্টল/আপডেট কমান্ড।

```bash
wavec install std
wavec update std
```

---

## ৩.৫ `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## ৪। গ্লোবাল অপশন

## ৪.১ অপ্টিমাইজেশন

অনুমোদিত মান:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

উদাহরণ:

```bash
wavec -O3 run main.wave
```

---

## ৪.২ ডিবাগ আউটপুট

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

অনুমোদিত আইটেম:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## ৪.৩ লিঙ্ক অপশন

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` অথবা `--link <lib>`
- `-L<path>` অথবা `-L <path>`

`wavec` লিংক করার সময় অভ্যন্তরীণভাবে `-l<lib>`, `-L<path>` ফর্ম্যাটে প্রদান করে।

---

## ৪.৪ বহিরাগত নির্ভরতা অপশন (গুরুত্বপূর্ণ)

বাহ্যিক ইম্পোর্ট (`pkg::...`) বিশ্লেষণের জন্য অপশন।

### `--dep-root <dir>`

প্যাকেজ রুট ডিরেক্টরি প্রার্থী যুক্ত করুন।

```bash
wavec run app.wave --dep-root .vex/dep
```

প্যাকেজ `math` খুঁজলে:

- `.vex/dep/math` পরীক্ষা করুন

বহুবার নির্ধারণ করা সম্ভব:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

প্যাকেজের নাম নির্দিষ্ট পথে স্থির করুন।

```bash
wavec run app.wave --dep math=.vex/dep/math
```

নিয়ম:

- `নাম` ফরম্যাট: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` হবে অবশ্যই `name=path` ফরম্যাটে
- একই প্যাকেজ নাম পুনরাবৃত্তি করলে ত্রুটি

---

## ৪.৫ ব্যাকএন্ড বিকল্প (`--llvm`, `--whale`)

ব্যাকএন্ড নিয়ন্ত্রণ অপশন শুধুমাত্র `--llvm` এর পরে বিশ্লেষণ করা হয়।

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

সহায়ক আইটেম (সারাংশ):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (পুনরাবৃত্তি সম্ভব)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

বর্তমানে `wavec print target-list` এর মূল লক্ষ্য:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` বর্তমানে একটি সংরক্ষিত ডামি পতাকা হিসেবে রয়েছে, এবং প্রকৃত ব্যাকএন্ড পাইপলাইন এখনও কার্যকর হয়নি (TODO)।

---

## ৫। আয়তন নিয়ম আমদানি ব্যাখ্যা

ওয়েভ আমদানিটি নিম্নলিখিত ৩টি ভাগে বিভক্ত করা হয়।

1. লোকাল আমদানি
2. স্ট্যান্ডার্ড আমদানি
3. বহিরাগত প্যাকেজ আমদানি

## ৫.১ লোকাল

```wave
import("foo");
import("path/to/mod.wave");
```

এটি মূল ফাইল ডিরেক্টরিতে `<path>.wave` খুঁজে পায়।

## ৫.২ স্ট্যান্ডার্ড

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` পথটি ব্যবহার করা হয়।

## ৫.৩ বহিরাগত প্যাকেজ

```wave
import("math::add");
import("json::parser::core");
```

ফর্ম্যাট:

- কমপক্ষে `package::module` এর ২টি সেগমেন্ট প্রয়োজন

প্যাকেজ রুট ঠিক নির্ধারণের অনুক্রম:

1. `--dep name=path` স্পষ্ট ম্যাপিং
2. প্রতি `--dep-root` থেকে `<root>/<package>` অনুসন্ধান করুন

একই প্যাকেজ কয়েকটি dep-rootএ এক সঙ্গে খুঁজে পেলে:

- স্বয়ংক্রিয়ভাবে নির্বাচন না করে **অস্পষ্টতা ত্রুটি** হবে
- `--dep name=path` দিয়ে নিশ্চিৎ করতে হবে

মডিউল ফাইল অনুসন্ধানের ক্রম:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

উদাহরণ:

```wave
import("math::core::vec");
```

অনুসন্ধান:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## ৬। বাহ্যিক আমদানি বাস্তব উদাহরণ

### ৬.১ একক dep-root

ডিরেক্টরি:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

কোড:

```wave
import("math::add");
```

সম্পাদন:

```bash
wavec run main.wave --dep-root .vex/dep
```

### ৬.২ অস্পষ্টতা দূরীকরণ

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

উভয় পাশে `math` থাকলে ত্রুটি ঘটে। নিচের মত সুনিশ্চিত করুন।

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## ৭। Vex-এর সঙ্গে ভূমিকা বিভাজন

প্রস্তাবিত গঠন:

- `wavec`: কম্পাইল/লিঙ্ক/এগজেকিউট + স্পষ্ট নিয়ন্তা বিশ্লেষণ
- `vex`: নির্ভরতাগুলি স্থাপন/ব্যবস্থাপনার পর `wavec ... --dep-root ... --dep ...` কলে

উদাহরণ:

```bash
# অভ্যন্তরীণভাবে vex সম্পাদিত
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

এই মডেলটি কম্পাইলারকে সহজ এবং সিদ্ধান্তমূলক রাখে, যখন প্যাকেজ ম্যানেজার স্বয়ংক্রিয়ীকরণের দায়িত্ব নেয়।

---

## ৮। দ্রুত রেফারেন্স

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
