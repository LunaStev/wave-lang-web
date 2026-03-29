---
sidebar_position: 1
---

# Standard Library (std)

This section explains the practical usage of the Wave standard library.

## Module

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

## Usage Principles

- In high-level code, use `std::*`.
- OS-dependent features are hidden behind `std::sys::*`.
- Use `std::libc` only when C compatibility is needed.

## Error Handling Convention

Many functions follow this convention.

- `>= 0`: Success
- `< 0`: Failure (`-errno` or module-specific error code)

Example:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Handle error
        return;
    }

    // raw contains a NUL-terminated string
}
```
