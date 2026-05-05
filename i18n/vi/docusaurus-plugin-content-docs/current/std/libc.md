---
sidebar_position: 11
---

# Cách sử dụng std::libc (tầng tương thích)

`std::libc` là lớp tùy chọn được sử dụng khi tương tác trực tiếp với thư viện C.

## Khi nào sử dụng

- Khi cần gọi các symbol thư viện C hiện có sang thư viện hiện có
- Khi sử dụng mã Wave và mã C cùng lúc trong khi chuyển đổi từng bước

Trong mã Wave thông thường, hãy ưu tiên sử dụng `std::sys`/`std::*`.

## Ví dụ import

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. Gọi stdio

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

## Mô-đun cung cấp

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
