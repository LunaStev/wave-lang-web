---
sidebar_position: 12
---

# 全局/局部存储规则

Wave在关键词层面明确区分存储寿命(storage)与可变性(mutability)。

## 总结

- 全局常量：`const`
- 全局存储变量：`static`
- 局部变量：`var`、`let`、`let mut`

即，**顶层只声明`const`和`static`**，
**函数/块内部局部只声明`var`和`let`系列**。

## 全局常量：`const`

`const`被视为编译时常量，无法重新分配。

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## 全局存储变量：`static`

`static`是具有全局存储空间的变量。
可以重新分配，若未赋初值则以类型的0值初始化。

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## 局部变量：`var` / `let`

在函数或块内部仅使用局部变量关键词。

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## 限制条件

- `var`，`let`不能在顶层使用。
- `const`,`static`不能在函数/块内部使用。
- `let`是不可变的，不能重新分配。
