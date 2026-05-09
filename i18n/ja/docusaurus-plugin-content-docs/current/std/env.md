---
sidebar_position: 3
---

# std::env 使用法

環境変数の検索と作業ディレクトリ制御を提供します。

## import

```wave
import("std::env::environ");
import("std::env::cwd");
import("std::env::consts");
```

## 1. 文字列環境変数の読み取り

```wave
fun main() {
    var buf: array<u8, 256>;
    var n: i64 = env_get("HOME", &buf[0], 256);

    if (n >= 0) {
        // bufはNUL終端文字列
    } else if (n == ENV_ERR_NOT_FOUND) {
        // キーなし
    } else if (n == ENV_ERR_NO_SPACE) {
        // バッファ不足
    }
}
```

## 2. 整数環境変数の読み取り（ジェネリック結果型）

```wave
fun main() {
    var port_res: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(port_res, 8080);

    var workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3. 現在のディレクトリ/移動

```wave
fun main() {
    var cwd: array<u8, 512>;
    var n: i64 = env_getcwd(&cwd[0], 512);

    if (n >= 0) {
        env_chdir("/tmp");
    }
}
```

## 主要な関数

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
