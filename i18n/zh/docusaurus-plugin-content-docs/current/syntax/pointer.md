---
sidebar_position: 6
---

# 指针

## 介绍

本文档介绍Wave指针的使用方式。
Wave作为支持低级系统编程的语言，提供指针功能，使显式内存地址操作成为可能。
指针是指向特定类型内存地址的变量，通过它可以直接访问和修改值。

---

## 指针声明

在Wave中，指针以`ptr<类型>`形式声明。 例如，整数型指针可以这样声明：

```wave
var p: ptr<i32>;
```

此声明创建一个指向`i32`类型值的指针`p`。

---

## 指针初始化

可以使用`&`运算符初始化指针为变量的地址：

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

这里`&a`意味着变量`a`的内存地址，`p`成为指向该地址的指针。

---

## 指针解引用

要读取或修改指针指向的值，使用`deref`关键字。 这称为解引用：

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // 输出10

deref p = 20;
println("{}", a); // 输出20
```

---

## NULL指针

在Wave中，通过`null`关键词表示空指针。
指针变量可以初始化为`null`，此时它不指向任何有效内存：

```wave
var p: ptr<i32> = null;
```

对空指针解引用时，编译器将报错。

---

## 多重指针

Wave支持多重指针。 指针可以多层嵌套声明和使用：

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1); // 1
println("{}", deref deref p2); // 1
println("{}", deref deref deref p3); // 1
```

---

## 数组和指针

指针可以指向数组元素或数组本身。

### 指向数组元素的指针

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### 指向整个数组的指针

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // 输出内存地址
```

---

## 安全性和所有权

Wave 通过引入类似于 Rust 的所有权和生命周期系统，确保在使用指针时的内存安全。
因此，严格检查无效的指针解引用、重复释放、悬空指针等问题避免发生。

```wave
fun main() {
 let x: i32 = 42;
 let p: ptr<i32> = &x;
 
 println("x = {}", deref p);
 
 deref p = 99;
 println("x = {}", x);
}
```

输出:

```text
x = 42
x = 99
```

---

## 结论

指针是 Wave 中实现高性能低级编程的核心功能之一。
它对于需要直接内存控制的系统开发、原生库、硬件控制等非常有用，借助 Wave 的安全编译器架构，可以有效防止使用指针时可能出现的危险因素。