---
sidebar_position: 3
---

# std::env 사용법

환경 변수 조회와 작업 디렉터리 제어를 제공합니다.

## import

```wave
import("std::env::environ");
import("std::env::cwd");
import("std::env::consts");
```

## 1. 문자열 환경 변수 읽기

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    if (n >= 0) {
        // buf는 NUL 종료 문자열
    } else if (n == ENV_ERR_NOT_FOUND) {
        // 키 없음
    } else if (n == ENV_ERR_NO_SPACE) {
        // 버퍼 부족
    }
}
```

## 2. 정수 환경 변수 읽기 (제네릭 결과 타입)

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3. 현재 디렉터리/이동

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    if (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## 주요 함수

```wave
fun env_get(name: str, dst: ptr<u8>, dst_cap: i64) -> i64
fun env_exists(name: str) -> bool
fun env_get_i32(name: str) -> EnvResult<i32>
fun env_get_i64(name: str) -> EnvResult<i64>
fun env_get_i32_default(name: str, default_value: i32) -> i32
fun env_get_i64_default(name: str, default_value: i64) -> i64
fun env_getcwd(dst: ptr<u8>, cap: i64) -> i64
fun env_chdir(path: str) -> i64
fun env_access(path: str, mode: i32) -> i64
```
