---
sidebar_position: 10
---

# std::sys 사용법

`std::sys`는 고수준 모듈 아래의 OS 추상화 계층입니다.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## 기본 규약

- 대부분 함수는 raw syscall 값을 반환합니다.
- `>= 0` 성공, `< 0` 실패(`-errno`).
- 고수준 앱 코드에서는 가능하면 `std::sys` 대신 `std::net`, `std::time`, `std::env`를 먼저 사용하세요.

## 1) 파일 읽기 예제 (`std::sys::fs`)

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

## 2) 소켓 예제 (`std::sys::socket`)

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

## 3) 메모리 예제 (`std::sys::memory`)

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
