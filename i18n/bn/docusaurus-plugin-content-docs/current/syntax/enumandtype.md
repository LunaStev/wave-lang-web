---
sidebar_position: 10
---

# পরিবর্তনশীল (enum) এবং টাইপ উপনাম (type alias)

Wave হল C-এর মত বৈশিষ্ট্যপূর্ণ টাইপ সিস্টেম যা পড়াশুনা এবং ABI স্থিরতার জন্য টাইপ উপনাম (type alias) এবং পূর্ণসংখ্যা উপর ভিত্তি করে পরিবর্তনশীল (enum) সমর্থন করে।

---

## টাইপ উপনাম (Type Alias)

### সারসংক্ষেপ

type কীওয়ার্ডটি বিদ্যমান টাইপের নতুন নাম দেয়।
এটি একটি নতুন টাইপ তৈরি করে না তবে এটি সম্পূর্ণরূপে সমান (অর্থাৎ সমার্থক)।

```wave
type MyInt = i32;
```

ওপরের ঘোষণায় MyInt হল i32 এর সাথে সম্পূর্ণরূপে সমান টাইপ।

---

### বৈশিষ্ট্য

- রানটাইম ওভারহেড নেই
- ABI অবস্থায় সম্পূর্ণরূপে সমান
- কেবলমাত্র কম্পাইল সময় উপস্থিত
- enum-এর repr টাইপ হিসাবে ব্যবহৃত হতে পারে

---

### ব্যবহারিক উদাহরণ

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### টাইপ সমমর্যাদা

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type কোনও নতুন টাইপ নয় বরং এটি কেবলমাত্র বিভিন্ন নামের টাইপ।

---

## পরিবর্তনশীল (enum)

### সারসংক্ষেপ

Wave-এর enum হল পূর্ণসংখ্যায় ভিত্তিক পরিবর্তনশীল।
প্রত্যেক পরিবর্তনশীলের অবশ্যই একটি repr টাইপ থাকতে হবে।

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr টাইপ

-> i32 এটি নির্দেশ করে যে এই enum টি কোন পূর্ণসংখ্যা টাইপ দ্বারা প্রকাশিত হয়।

অনুমোদিত repr টাইপ:

- `i8`, `i16`, `i32`, `i64`
- `i8`, `i16`, `i32`, `i64`
- ওই টাইপএর `টাইপ উপনাম`

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### মান বরাদ্দ নিয়মাবলী

- স্পষ্ট মান থাকলে সেই মান ব্যবহার করুন
- না থাকলে আগের মান + 1
- প্রথম মান না থাকলে 0 থেকে শুরু করুন

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum হল মান টাইপ।

enum হল পূর্ণসংখ্যা মান এবং এটি ফাংশনের প্যারামিটার বা রিটার্ন মান হিসাবে অবাধে ব্যবহারযোগ্য।

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### ধ্রুবক হিসাবে ব্যবহার করুন

enum variant হল কম্পাইল সময় ধ্রুবক।

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## বাস্তব উদাহরণ

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```
