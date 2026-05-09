---
sidebar_position: 3
---

# Jinsi ya kutumia std::env

Inatoa upatikanaji wa vigezo vya mazingira na udhibiti wa saraka ya kazi.

## ingiza

```wave
ingiza("std::env::environ");
ingiza("std::env::cwd");
ingiza("std::env::consts");
```

## 1. Soma kigezo cha mazingira cha mfululizo wa maandishi

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    ikiwa (n >= 0) {
        // buf ina mfululizo wa maandishi unaoishia na NUL
    } else if (n == ENV_ERR_NOT_FOUND) {
        // Hakuna ufunguo
    } else if (n == ENV_ERR_NO_SPACE) {
        // Ukosefu wa buffer
    }
}
```

## 2. Soma kigezo cha mazingira cha nambari kamili (aina ya matokeo ya generic)

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3. Saraka ya sasa/Kubadilisha

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    ikiwa (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## Kazi kuu

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
