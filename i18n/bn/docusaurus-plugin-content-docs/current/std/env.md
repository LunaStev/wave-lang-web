---
sidebar_position: 3
---

# std::env ব্যবহারের নিয়ম

পরিবেশ ভেরিয়েবলের আবেদন এবং কাজের তফসিল নিয়ন্ত্রণ প্রদান করে।

## আমদানি

```wave
import("std::env::environ");
import("std::env::cwd");
import("std::env::consts");
```

## ১) স্ট্রিং পরিবেশ ভেরিয়েবল পড়া

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    if (n >= 0) {
        // buf হল একটি NUL সমাপ্ত স্ট্রিং
    } else if (n == ENV_ERR_NOT_FOUND) {
        // কোন চাবি নেই
    } else if (n == ENV_ERR_NO_SPACE) {
        // বাফার আউট
    }
}
```

## ২) পূর্ণসংখ্যা পরিবেশ ভেরিয়েবল পড়া (সাধারণ ফলাফল প্রকার)

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## ৩) বর্তমান তফসিল/আন্দোলন

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    if (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## প্রধান ফাংশন

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
