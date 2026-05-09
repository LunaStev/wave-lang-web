---
sidebar_position: 10
---

# Jinsi ya kutumia std::sys

`std::sys` ni safu ya kufunika OS chini ya module zenye kiwango cha juu.

```text
std(kiwango cha juu)
  -> mtumaji wa sys
  -> sys/linux au sys/macos
  -> wito wa mfumo
```

## Mkataba wa msingi

- Kazi nyingi zinarudisha thamani za mfumo za msingi.
- `>= 0` mafanikio, `< 0` kushindwa(`-errno`).
- Katika msimbo wa programu wa kiwango cha juu, tumia `std::net`, `std::time`, `std::env` kwanza badala ya `std::sys` inapowezekana.

## 1. Mfano wa kusoma faili (`std::sys::fs`)

```wave
ingiza("std::sys::fs");

fun main() {
    var fd: i64 = fungua("/etc/hosts", 0, 0);
    ikiwa (fd < 0) {
        rudi;
    }

    var buf: array<u8, 256>;
    var n: i64 = soma(fd, &buf[0], 256);
    funga(fd);
}
```

## 2. Mfano wa soketi (`std::sys::socket`)

```wave
ingiza("std::sys::socket");

fun main() {
    var fd: i64 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    ikiwa (fd < 0) {
        rudi;
    }

    zima(fd, SHUT_RDWR);
}
```

## 3. Mfano wa kumbukumbu (`std::sys::memory`)

```wave
ingiza("std::sys::memory");

fun main() {
    var p: ptr<u8> = sys_alloc(4096);
    ikiwa (p == null) {
        rudi;
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
