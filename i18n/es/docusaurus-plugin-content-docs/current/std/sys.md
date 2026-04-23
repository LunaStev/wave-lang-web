---
sidebar_position: 10
---

# Uso de std::sys

`std::sys` es una capa de abstracción del sistema operativo bajo módulos de alto nivel.

```text
std(alto nivel)
  -> dispatcher de sys
  -> sys/linux or sys/macos
  -> syscall
```

## Convenciones básicas

- La mayoría de las funciones devuelven el valor raw del syscall.
- `>= 0` éxito, `< 0` fallo(`-errno`).
- En código de aplicaciones de alto nivel, utilice primero `std::net`, `std::time`, `std::env` en lugar de `std::sys` si es posible.

## 1. Ejemplo de lectura de archivo (`std::sys::fs`)

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

## 2. Ejemplo de socket (`std::sys::socket`)

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

## 3. Ejemplo de memoria (`std::sys::memory`)

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

## Módulos de dispatcher

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

Las ramas `#[target(os="linux")]`, `#[target(os="macos")]` se utilizan solo dentro del dispatcher.
