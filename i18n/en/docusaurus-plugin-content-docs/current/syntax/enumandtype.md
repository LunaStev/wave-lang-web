---
sidebar_position: 10
---

# Enumeration (enum) and Type Alias (type alias)

Wave maintains an explicit type system similar to C, while supporting type alias for readability and ABI stability, and integer-based enumeration.

---

## Type Alias

### Overview

The type keyword gives a new name to an existing type.
This is not about creating a new type, but rather a complete alias.

```wave
type MyInt = i32;
```

In the above declaration, MyInt is completely identical to i32.

---

### Features

- No runtime overhead
- Completely identical in terms of ABI
- Exists only at compile-time
- Can be used as repr type for enum

---

### Usage Example

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Type Equivalence

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type is not a new type but just a differently named type.

---

## Enumeration (enum)

### Overview

Wave's enum is an integer-based enumeration.
All enumerations must have a repr type.

```wave
enum ShaderUniformType -> i32 {
 A = 0,
 B,
 C = 10,
 D
}
```

---

### repr type

-> i32 indicates the integer type in which this enum is represented.

Allowed repr types:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` for the type

```wave
type MyInt = i32;

enum Example -> MyInt {
 X,
 Y
}
```

---

### Value assignment rules

- Use the specified value if present
- If not, use the previous value + 1
- If there is no first value, start from 0

```wave
enum E -> i32 {
 A, // 0
 B, // 1
 C = 10, // 10
 D // 11
}
```

---

### An enum is a value type

An enum is an integer value and can freely be used as a function argument or return value.

```wave
fun f(t: ShaderUniformType) -> i32 {
 return t;
}
```

---

### Used as a constant

An enum variant is a compile-time constant.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## Actual example

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