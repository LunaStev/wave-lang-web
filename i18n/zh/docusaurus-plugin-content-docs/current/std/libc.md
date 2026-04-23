---
sidebar_position: 11
---

# std::libc 使用方法（兼容层）

`std::libc`是用于直接与C库接口的可选层。

## 何时使用

- 当需要直接调用现有C库符号时
- 在渐进式迁移中同时使用Wave代码和C代码时

在通用Wave代码中，请优先使用`std::sys`/`std::*`。

## import 示例

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1）stdio 调用

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2）malloc/free

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

## 3）套接字C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## 提供模块

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
