---
sidebar_position: 10
---

# Usage of std::sys

`std::sys` is the OS abstraction layer beneath the high-level module.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## Basic Conventions

- Most functions return raw syscall values.
- `>= 0` success, `< 0` failure (`-errno`).
- In high-level app code, prefer using `std::net`, `std::time`, `std::env` over `std::sys` whenever possible.

## 1. File Reading Example (`std::sys::fs`)

```wave
import("std::sys::fs");

fun main() {
    var fd: i64 = open("/etc/hosts", 0, 0);
    if (fd < 0) {
        return;
    }

    var buf: array<u8, 256>;
    var n: i64 = read(fd, &buf[0], 256);
    close(fd);
}
```

## 2. Socket Example (`std::sys::socket`)

```wave
import("std::sys::socket");

fun main() {
    var fd: i64 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd < 0) {
        return;
    }

    shutdown(fd, SHUT_RDWR);
}
```

## 3. Memory Example (`std::sys::memory`)

```wave
import("std::sys::memory");

fun main() {
    var p: ptr<u8> = sys_alloc(4096);
    if (p == null) {
        return;
    }

    sys_free(p, 4096);
}
```

## Dispatcher Module

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` branches are used only inside the dispatcher.
