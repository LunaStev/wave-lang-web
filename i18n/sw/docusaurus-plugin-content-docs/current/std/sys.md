---
sidebar_position: 10
---

# Jinsi ya kutumia std::sys

`std::sys` ni safu ya kufunika OS chini ya module zenye kiwango cha juu.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## Mkataba wa msingi

- Kazi nyingi zinarudisha thamani za mfumo za msingi.
- `>= 0` mafanikio, `< 0` kushindwa(`-errno`).
- Katika msimbo wa programu wa kiwango cha juu, tumia `std::sys`, `std::net`, `std::time` kwanza badala ya `std::env` inapowezekana.

## 1. Mfano wa kusoma faili (`std::sys::fs`)

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

## 2. Mfano wa soketi (`std::sys::socket`)

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

## 3. Mfano wa kumbukumbu (`std::sys::memory`)

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

## moduli ya dispatcher

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` matawi yanatumika tu ndani ya dispatcher.
