---
sidebar_position: 10
---

# Как использовать std::sys

`std::sys` это дополнительный слой для взаимодействия с операционной системой для высокоуровневых модулей.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## Основные правила

- Большинство функций возвращает значение как из raw syscall.
- `>= 0` успех, `< 0` ошибка(`-errno`).
- В высокоуровневом приложении, если возможно, сначала используйте `std::sys`, `std::net`, `std::time`, а не `std::env`.

## 1. Пример чтения файла (`std::sys::fs`)

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

## 2. Пример работы с сокетом (`std::sys::socket`)

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

## 3. Пример работы с памятью (`std::sys::memory`)

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

## Модули диспетчера

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` используется только внутри диспетчера.
