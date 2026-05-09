---
sidebar_position: 11
---

# std::libc 使用法（互換レイヤー）

`std::libc`はCライブラリと直接連携するときに使用するオプションレイヤーです。

## いつ使うか

- 既存のCライブラリシンボルをそのまま呼び出す必要があるとき
- 漸進的な移行中にWaveコードとCコードを一緒に使用する時

一般的なWaveコードでは、まず`std::sys`/`std::*`を使用してください。

## import例

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. stdio呼び出し

```wave
fun main() {
    puts("libcからのこんにちは" as ptr<i8>);
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

## 3. ソケット C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## 提供モジュール

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
