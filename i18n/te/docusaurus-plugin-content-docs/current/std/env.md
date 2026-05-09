---
sidebar_position: 3
---

# std:: env వినియోగం

ఎన్విరాన్మెంట్ వేరియబుల్ లుక్అప్ మరియు వర్కింగ్ డైరెక్టరీ నియంత్రణను అందిస్తుంది.

## import

```wave
import("std::env::environ");
import("std::env::cwd");
import("std::env::consts");
```

## 1) స్ట్రింగ్ ఎన్విరాన్మెంట్ వేరియబుల్స్ చదవడం

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    if (n >= 0) {
        // buf అనేది NUL ముగించబడిన స్ట్రింగ్
    } else if (n == ENV_ERR_NOT_FOUND) {
        // కీ లేదు
    } else if (n == ENV_ERR_NO_SPACE) {
        // బఫర్ అయిపోయింది
    }
}
```

## 2) పూర్ణాంక పర్యావరణ వేరియబుల్స్ చదవడం (సాధారణ ఫలితం రకం)

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3) ప్రస్తుత డైరెక్టరీ/తరలింపు

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    if (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## ప్రధాన విధి

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
