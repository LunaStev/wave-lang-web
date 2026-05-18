---
sidebar_position: 9.5
---

# export

`export` 用于把在 Wave 中实现的函数公开为外部链接器符号。
如果 `extern` 是把外部函数导入 Wave，那么 `export` 是让 C、Rust、C++、Zig 或其他原生语言可以通过对象文件调用 Wave 函数。

---

## 概述

Wave 的 FFI 有两个方向。

- `extern(c)` 声明由外部库提供的函数，使 Wave 代码可以调用它。
- `export(c)` 把 Wave 函数体生成为外部 ABI 符号。

两种形式共享相同的 ABI 头部形态，但含义相反。
使用 `extern` 时，函数体在 Wave 之外。
使用 `export` 时，函数体在 Wave 之内。

目前唯一支持的 export ABI 是 `c`。

---

## 函数级 export

基本形式如下：

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

这会生成名为 `add` 的公开符号。
生成的对象文件可以与期望 C ABI 的外部代码链接。

---

## 符号名称

Wave 函数名和导出的链接器符号名可以不同。

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

这里 Wave 内部名称是 `add_i32`，但对象文件公开的是 `wave_add_i32`。
外部语言必须声明并调用导出的符号名称。

---

## 块级 export

多个使用同一 ABI 的函数可以放在一个块中。

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

块级 export 使用每个函数名作为公开符号。
`export(c, "symbol") { ... }` 不允许使用，因为多个函数共享一个别名会造成链接器符号冲突。

---

## 从 C 调用

先把 Wave 文件构建为对象文件。

```bash
wavec build math.wave --emit=obj -o math.o
```

在 C 中声明导出的符号。

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

然后用普通链接器把 C 代码和 Wave 对象文件链接在一起。

```bash
cc main.c math.o -o app
```

---

## extern 与 export

`extern(c)` 表示 Wave 使用外部符号。

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` 表示外部代码可以使用 Wave 符号。

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

两者都属于 FFI，但方向不同。

---

## 限制

当前 `export` 支持有以下限制。

- 只支持 `export(c)`。
- 导出的函数不能是泛型函数。
- 块级 export 不能使用一个共享符号别名。
- 为了稳定互操作，目前推荐使用整数、浮点数、布尔值和指针作为参数和返回值。
- struct 和 array 等聚合类型需要更严格的 ABI 规则，可能在后续版本稳定。
- `export` 主要在构建对象文件或库时有意义。普通可执行文件通常不需要它。

---

## 推荐用途

在以下情况下使用 `export`：

- 把 Wave 工具函数作为 C ABI 库提供。
- 从 Rust、C、C++、Zig 或其他原生语言调用 Wave 函数。
- 将用 Wave 编写的 `front`、`utils` 或无 runtime 原生模块逐步接入现有构建系统。
- 让 Vex 或其他构建工具把 Wave 对象文件链接到外部项目中。
