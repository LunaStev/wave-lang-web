---
sidebar_position: 10
---

# std::sys 使用法

`std::sys`は高水準モジュール下のOS抽象化層です。

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## 基本規約

- ほとんどの関数はraw syscallの値を返します。
- `>= 0` 成功, `< 0` 失敗(`-errno`)。
- 高レベルのアプリコードでは可能な限り`std::sys`の代わりに`std::net`、`std::time`、`std::env`を先に使用してください。

## 1. ファイル読み取り例 (`std::sys::fs`)

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

## 2. ソケット例 (`std::sys::socket`)

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

## 3. メモリ例 (`std::sys::memory`)

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

## dispatcherモジュール

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` の分岐はdispatcherの内部でのみ使用されます。
