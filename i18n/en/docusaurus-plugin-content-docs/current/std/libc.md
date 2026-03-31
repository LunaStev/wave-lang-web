---
sidebar_position: 11
---

# std::libc Usage (Compatibility Layer)

`std::libc` is an optional layer used to interface directly with C libraries.

## When to Use

- When you need to call existing C library symbols as they are
- When using Wave code together with C code during gradual migration

In general Wave code, prioritize using `std::sys`/`std::*` first.

## Import Example

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. stdio Call

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2. malloc/free

```wave
fun main() {
    var p: ptr<i8> = malloc(128);
    if (p == null) {
        return;
    }

    memset(p, 0, 128);
    free(p);
}
```

## 3. Socket C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## Provided Modules

- `std::libc::errno`
- `std::libc::string`
- `std::libc::stdio`
- `std::libc::stdlib`
- `std::libc::unistd`
- `std::libc::time`
- `std::libc::socket`
- `std::libc::netinet`
- `std::libc::arpa`
- `std::libc::poll`
