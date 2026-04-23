---
sidebar_position: 1
---

# 标准库 (std)

本节说明Wave标准库的实际用法。

## 模块

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## 使用原则

- 在高级代码中使用`std::*`。
- OS依赖功能隐藏在`std::sys::*`后面。
- 仅在需要C兼容时使用`std::libc`。

## 错误处理规范

许多函数遵循以下规范。

- `>= 0`: 成功
- `< 0`: 失败（`-errno`或模块特定错误代码）

示例:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // 错误处理
        return;
    }

    // raw包含一个NUL终止字符串
}
```
