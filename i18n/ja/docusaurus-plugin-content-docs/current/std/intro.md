---
sidebar_position: 1
---

# 標準ライブラリ（std）

このセクションでは、Wave標準ライブラリの実際の使用法を説明します。

## モジュール

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

## 使用原則

- 高レベルコードでは`std::*`を使用します。
- OS依存機能は`std::sys::*`の後ろに隠されています。
- `std::libc`はC互換が必要な場合にのみ使用します。

## エラーハンドリング規約

多くの関数が次の規約に従います。

- `>= 0`: 成功
- `< 0`: 失敗（`-errno`またはモジュール別エラーコード）

例:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // エラーハンドリング
        return;
    }

    // rawにはNUL終端文字列が入っている
}
```
