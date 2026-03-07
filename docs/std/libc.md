---
sidebar_position: 11
---

# std::libc 사용법 (호환 계층)

`std::libc`는 C 라이브러리와 직접 맞물릴 때 쓰는 선택적 레이어입니다.

## 언제 쓰나

- 기존 C 라이브러리 심볼을 그대로 호출해야 할 때
- 점진적 마이그레이션 중 Wave 코드와 C 코드를 함께 사용할 때

일반적인 Wave 코드에서는 `std::sys`/`std::*`를 우선 사용하세요.

## import 예시

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1) stdio 호출

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2) malloc/free

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

## 3) 소켓 C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## 제공 모듈

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
