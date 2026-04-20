---
sidebar_position: 10
---

# std::sys 使用方法

`std::sys` 是高层模块下的操作系统抽象层。

```text
std(高层)
  -> sys 调度器
  -> sys/linux 或 sys/macos
  -> 系统调用
```

## 基本规范

- 大多数函数返回原始系统调用值。
- `>= 0` 表示成功，`< 0` 表示失败（`-errno`）。
- 在高层应用程序代码中，尽可能先使用 `std::net`、`std::time`、`std::env` 而不是 `std::sys`。

## 1. 文件读取示例 (`std::sys::fs`)

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

## 2. 소켓 예제 (`std::sys::socket`)

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

## 3. 메모리 예제 (`std::sys::memory`)

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

## dispatcher 모듈

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` 분기는 dispatcher 내부에서만 사용됩니다.
