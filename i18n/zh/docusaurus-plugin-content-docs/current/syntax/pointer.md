---
sidebar_position: 6
---

# 指针

## Wave 显式内存类型模型

Wave 的指针设计基于 **Wave 显式内存类型模型**。
该模型旨在将指针和数组定义为语言层面的显式内存类型，而不是语法技巧或库抽象。

根据这种设计，在 Wave 中，指针表示为 `ptr<T>` 形式的类型，明确表示为指向存储特定类型 `T` 的值的内存地址的类型。
这种方法将指针作为类型系统的一部分来处理，而不是作为操作符或声明语法，使内存结构表达得更直观和一致。

---

在 Wave 中，指针是 `ptr<T>` 形式的显式类型。
地址获取使用 `&`，解引用使用 `deref`。

## 声明和初始化

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

指针类型是可嵌套的。

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## 解引用

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## `null` 字面量规则

`null` 是正式字面量。 不是标识符，不能用作变量名。

核心规则：

- `null` 仅能赋值给 `ptr<T>` 对象。
- 无法赋值给诸如 `i32`、`bool`、`array<...>` 等非指针类型。
- 不能用整数字面量（`0`、`123`、`-1` 等）初始化指针。 显式使用 `null`。

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // 错误
// var b: bool = null; // 错误
```

## 指针算术

Wave 支持以下指针算术。

- `ptr + int`：基于 GEP 的指针前进
- `int + ptr`：相同操作
- `ptr - int`：基于 GEP 的指针后退
- `ptr - ptr`：计算 `i64` 字节差异

要点：

- `ptr<T> +/- n` 是以 `T` 的大小 (`sizeof(T)`) 为基准移动。
- 即 `ptr<i32> + 3` 是按字节 `+12` 移动。

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12（字节差异）
```

## 指针比较

指针可以用于比较。

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## 与数组的关系

指针数组：

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

数组指针:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## 安全性备注

Wave目前不是像Rust那样的所有权/生命周期基础的指针安全模型。
因此，不会自动阻止对`null`的反向引用。 建议在`deref`之前明确加入`null`检查模式。
