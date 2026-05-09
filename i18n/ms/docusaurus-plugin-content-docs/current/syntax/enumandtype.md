---
sidebar_position: 10
---

# Enum dan jenis alias

Wave mengekalkan sistem jenis eksplisit yang serupa dengan C,
Untuk kebolehbacaan dan kestabilan ABI, taip alias dan
Menyokong penghitungan berasaskan integer.

---

## Taip Alias
### Gambaran keseluruhan

Kata kunci jenis memberikan nama baharu kepada jenis sedia ada.
Ini tidak mencipta jenis baharu, tetapi merupakan kesetaraan lengkap (alias).

```wave
type MyInt = i32;
```

Dalam pengisytiharan di atas, MyInt adalah jenis yang sama seperti i32.

---

### Ciri-ciri

- Tiada overhed masa jalan
- ABI adalah sama
- Wujud hanya pada masa penyusunan
- Boleh digunakan sebagai jenis repr enum

---

### Contoh penggunaan

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Jenis kesetaraan

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

jenis bukan jenis baru, tetapi jenis dengan nama yang berbeza.

---

## penghitungan
### Gambaran keseluruhan

Enum Wave ialah jenis penghitungan berasaskan integer.
Setiap penghitungan mesti mempunyai jenis repr.


```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### jenis repr

-> i32 menunjukkan jenis integer enum ini dinyatakan sebagai.

Jenis perwakilan yang diterima:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` daripada jenis yang sepadan

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### Peraturan penugasan nilai

- Jika terdapat nilai eksplisit, gunakan nilai tersebut
- Jika tidak, nilai sebelumnya + 1
- Jika tiada nilai pertama, mulakan dari 0

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum ialah jenis nilai

Enum ialah nilai integer dan boleh digunakan secara bebas sebagai hujah fungsi atau nilai pulangan.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### digunakan sebagai pemalar

Varian enum ialah pemalar masa kompilasi.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## contoh sebenar

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
