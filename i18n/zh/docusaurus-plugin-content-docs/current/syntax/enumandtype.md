---
sidebar_position: 10
---

# 枚举 (enum) 和类型别名 (type alias)

Wave 保持与 C 类似的显式类型系统，同时为了可读性和 ABI 稳定性，支持类型别名 (type alias) 和基于整数的枚举 (enum)。

---

## 类型别名 (Type Alias)

### 概述

type 关键字为现有类型赋予新名称。
这不是创建新类型，而是完全等同（别名）。

```wave
type MyInt = i32;
```

在上述声明中，MyInt 与 i32 是完全相同的类型。

---

### 特点

- 无运行时开销
- 在 ABI 上完全相同
- 仅存在于编译时
- 可用作 enum 的 repr 类型

---

### 使用示例

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### 类型等同性

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type 不是新类型，只是名称不同的类型。

---

## 枚举 (enum)

### 概述

Wave的枚举是基于整数的枚举类型。
所有枚举必须拥有repr类型。

```wave
枚举ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr类型

-> i32 表示此枚举将被表示为哪种整数类型。

允许的repr类型：

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- 该类型的`类型别名`

```wave
类型 MyInt = i32;

枚举Example -> MyInt {
    X,
    Y
}
```

---

### 值分配规则

- 如果有显式值，则使用该值
- 如果没有，则前一个值 + 1
- 如果没有第一个值，则从0开始

```wave
枚举E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### 枚举是值类型

枚举是整数值，可自由用作函数参数和返回值。

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### 用作常量

枚举变体是编译时常量。

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## 实际示例

```wave
类型 MyInt = i32;

枚举 ShaderUniformType -> MyInt {
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