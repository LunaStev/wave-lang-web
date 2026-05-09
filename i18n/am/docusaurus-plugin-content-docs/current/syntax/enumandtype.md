---
sidebar_position: 10
---

# Enums እና ተለዋጭ ስም ይተይቡ

Wave ከ C ጋር የሚመሳሰል ግልጽ ዓይነት ስርዓት ይይዛል፣
ለተነባቢነት እና ለABI መረጋጋት፣ ተለዋጭ ስሞችን ይተይቡ እና
ኢንቲጀር ላይ የተመሰረተ ቆጠራን ይደግፋል።

---

## አሊያስ ይተይቡ
### አጠቃላይ እይታ

የአይነት ቁልፍ ቃል ለነባር አይነት አዲስ ስም ይሰጣል።
ይህ አዲስ ዓይነት አይፈጥርም, ነገር ግን ሙሉ እኩልነት (ተለዋጭ ስም) ነው.

```wave
type MyInt = i32;
```

ከላይ ባለው መግለጫ ውስጥ MyInt ከ i32 ጋር አንድ አይነት ነው.

---

### ባህሪያት

- የትርፍ ጊዜ ማስኬጃ የለም።
- ABI በትክክል ተመሳሳይ ነው።
- የሚጠናቀረው ጊዜ ብቻ ነው።
- እንደ ኢነም ሪፐብሊክ አይነት ሊያገለግል ይችላል።

---

### የአጠቃቀም ምሳሌ

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### እኩልነት ይተይቡ

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

ዓይነት አዲስ ዓይነት ሳይሆን የተለየ ስም ያለው ዓይነት ነው።

---

## መቁጠር
### አጠቃላይ እይታ

የWave ብዛት ኢንቲጀር ላይ የተመሰረተ የመቁጠሪያ አይነት ነው።
እያንዳንዱ ስሌት አይነት repr ሊኖረው ይገባል።


```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr አይነት

-> i32 ይህ ኢንቲጀር በየትኛው ኢንቲጀር አይነት እንደተገለጸ ያሳያል።

ተቀባይነት ያላቸው ተወካዮች ዓይነቶች፡-

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` ከተዛማጅ አይነት

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### የእሴት ምደባ ደንቦች

- ግልጽ የሆነ እሴት ካለ ያንን እሴት ይጠቀሙ
- ካልሆነ የቀድሞ ዋጋ +1
- የመጀመሪያ እሴት ከሌለ ከ 0 ይጀምሩ

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum የእሴት ዓይነት ነው።

ኢነም የኢንቲጀር እሴት ነው እና በነጻነት እንደ የተግባር ነጋሪ እሴት ወይም የመመለሻ እሴት ሊያገለግል ይችላል።

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### እንደ ቋሚ ጥቅም ላይ ይውላል

የኢነም ተለዋጭ የማጠናቀሪያ ጊዜ ቋሚ ነው።

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## እውነተኛ ምሳሌ

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
