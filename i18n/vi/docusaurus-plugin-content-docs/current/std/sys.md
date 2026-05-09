---
sidebar_position: 10
---

# Cách sử dụng std::sys

`std::sys` là tầng trừu tượng của OS dưới mô-đun cao cấp.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## Quy ước cơ bản

- Hầu hết các hàm trả về giá trị syscall thô.
- `>= 0` thành công, `< 0` thất bại(`-errno`).
- Trong mã ứng dụng cao cấp, nếu có thể, hãy sử dụng `std::sys`, `std::net`, `std::time` trước thay vì `std::env`.

## 1. Ví dụ đọc tệp (`std::sys::fs`)

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

## 2. Ví dụ socket (`std::sys::socket`)

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

## 3. Ví dụ bộ nhớ (`std::sys::memory`)

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

## mô-đun bộ điều phối

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

Các nhánh `#[target(os="linux")]`, `#[target(os="macos")]` chỉ được sử dụng bên trong bộ điều phối.
