---
sidebar_position: 1
---

# 표준 라이브러리 (std)

이 섹션은 Wave 표준 라이브러리의 실제 사용법을 설명합니다.

## 모듈

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

## 사용 원칙

- 고수준 코드에서는 `std::*`를 사용합니다.
- OS 의존 기능은 `std::sys::*` 뒤로 숨겨져 있습니다.
- `std::libc`는 C 호환이 필요한 경우에만 사용합니다.

## 에러 처리 규약

많은 함수가 다음 규약을 따릅니다.

- `>= 0`: 성공
- `< 0`: 실패 (`-errno` 또는 모듈별 에러 코드)

예시:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // 에러 처리
        return;
    }

    // raw에는 NUL 종료 문자열이 들어 있음
}
```
