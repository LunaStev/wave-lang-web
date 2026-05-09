---
sidebar_position: 10
---

# एनम (enum) और टाइप एलियास (type alias)

Wave C के समान स्पष्ट टाइप सिस्टम बनाए रखते हुए टाइप एलियास (type alias) और इन्टेज़र-आधारित एनम (enum) का समर्थन करता है, पठनीयता और ABI स्थिरता सुनिश्चित करता है।

---

## टाइप एलियास (Type Alias)

### सारांश

type कीवर्ड मौजूदा प्रकार को एक नया नाम देता है।
यह एक नया प्रकार नहीं बनाता है, बल्कि यह पूर्ण समानता (उपनाम) है।

```wave
type MyInt = i32;
```

उपरोक्त घोषणा में, MyInt पूरी तरह से i32 के समान प्रकार है।

---

### विशेषताएँ

- कोई रनटाइम ओवरहेड नहीं
- ABI के संदर्भ में पूरी तरह से समान
- केवल संकलन समय में मौजूद
- enum के प्रतिनिधित्व प्रकार के रूप में उपयोग योग्य

---

### उपयोग का उदाहरण

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### प्रकार समानता

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // ठीक है
}
```

type एक नया प्रकार नहीं है, बल्कि केवल नाम में भिन्न प्रकार है।

---

## गणना (enum)

### सारांश

Wave का enum पूर्णांक आधारित गणना है।
सभी गणना अनिवार्य रूप से एक repr प्रकार होना चाहिए।

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr प्रकार

-> i32 यह दर्शाता है कि इस enum को किस पूर्णांक प्रकार के रूप में व्यक्त किया गया है।

स्वीकृत repr प्रकार:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- उक्त प्रकार के `type उपनाम`

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### मूल्य आवंटन नियम

- यदि स्पष्ट मान है, तो उस मान का उपयोग करें
- यदि नहीं, तो पिछला मान + 1
- यदि पहला मान नहीं है, तो 0 से शुरु करें

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum एक मूल्य प्रकार है

enum एक पूर्णांक मान है और इसे फ़ंक्शन के तर्कों और वापसी मानों के रूप में स्वतंत्र रूप से उपयोग किया जा सकता है।

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### समानधर्मी के रूप में उपयोग होने वाली अवधि

enum का संस्करण संकलन समय पर निश्चित होता है।

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## वास्तविक उदाहरण

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