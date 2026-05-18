---
sidebar_position: 9.5
---

# export

`export` Wave-এ লেখা ফাংশনকে বাহ্যিক linker symbol হিসেবে প্রকাশ করে। `extern` যদি বাহ্যিক ফাংশনকে Wave-এ আনে, তাহলে `export` Wave ফাংশনকে C, Rust, C++, Zig বা অন্য native ভাষা থেকে object file-এর মাধ্যমে কলযোগ্য করে।

---

## সারাংশ

Wave FFI দুই দিকে কাজ করে।

- `extern(c)` বাহ্যিক library-র দেওয়া ফাংশন ঘোষণা করে, যাতে Wave code সেটি কল করতে পারে।
- `export(c)` Wave ফাংশনের body-কে বাহ্যিক ABI symbol হিসেবে emit করে।

দুই রূপ একই ABI header আকৃতি ব্যবহার করে, কিন্তু অর্থ বিপরীত। `extern`-এ ফাংশনের body Wave-এর বাইরে থাকে। `export`-এ body Wave-এর ভিতরে থাকে।

বর্তমানে supported export ABI শুধু `c`।

---

## ফাংশন-স্তরের export

মূল রূপ হলো:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

এই code `add` নামে public symbol তৈরি করে। তৈরি object file C ABI প্রত্যাশা করা বাহ্যিক code-এর সঙ্গে link করা যায়।

---

## Symbol নাম

Wave ফাংশন নাম এবং exported linker symbol নাম আলাদা হতে পারে।

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

এখানে Wave নাম `add_i32`, কিন্তু object file `wave_add_i32` প্রকাশ করে। বাহ্যিক ভাষায় এই symbol নাম declare এবং call করতে হবে।

---

## ব্লক export

একই ABI ব্যবহার করা একাধিক function একটি block-এ রাখা যায়।

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

ব্লক export প্রতিটি function নামকে public symbol হিসেবে ব্যবহার করে। `export(c, "symbol") { ... }` অনুমোদিত নয়, কারণ এক alias বহু function-এ দিলে symbol collision হয়।

---

## C থেকে কল

Wave file-কে object file হিসেবে build করুন।

```bash
wavec build math.wave --emit=obj -o math.o
```

Export করা symbol C-তে declare করুন।

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

তারপর C code এবং Wave object file সাধারণ linker দিয়ে link করুন।

```bash
cc main.c math.o -o app
```

---

## extern এবং export

`extern(c)` মানে Wave বাহ্যিক symbol ব্যবহার করে।

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` মানে বাহ্যিক code Wave symbol ব্যবহার করতে পারে।

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

দুটিই FFI-এর অংশ, কিন্তু দিক আলাদা।

---

## সীমাবদ্ধতা

- শুধু `export(c)` supported।
- Exported functions generic হতে পারে না।
- ব্লক export এক shared symbol alias ব্যবহার করতে পারে না।
- স্থিতিশীল interop-এর জন্য আপাতত integer, floating-point, boolean এবং pointer ব্যবহার করুন।
- struct এবং array-এর মতো aggregate type-এর জন্য কঠোর ABI নিয়ম দরকার এবং পরে stable হতে পারে।
- `export` প্রধানত object file এবং library-এর জন্য উপযোগী, সাধারণ executable-এর জন্য নয়।

---

## প্রস্তাবিত ব্যবহার

- Wave utility functions-কে C ABI library হিসেবে দেওয়া।
- Rust, C, C++, Zig বা অন্য native ভাষা থেকে Wave functions call করা।
- Wave-এ লেখা `front`, `utils` বা runtime-free native modules ধীরে ধীরে বিদ্যমান build system-এ যুক্ত করা।
- Vex বা অন্য build tool-কে Wave object files বাহ্যিক project-এ link করতে দেওয়া।
