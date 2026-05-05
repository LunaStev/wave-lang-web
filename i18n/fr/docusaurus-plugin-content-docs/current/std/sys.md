---
sidebar_position: 10
---

# Utilisation de std::sys

`std::sys` est une couche d'abstraction de l'OS sous les modules de haut niveau.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux ou sys/macos
  -> syscall
```

## Conventions de base

- La plupart des fonctions renvoient la valeur brute du syscall.
- `>= 0` succès, `< 0` échec(`-errno`).
- Dans le code des applications de haut niveau, utilisez `std::net`, `std::time`, `std::env` avant `std::sys` si possible.

## 1. Exemple de lecture de fichier (`std::sys::fs`)

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

## 2. Exemple de socket (`std::sys::socket`)

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

## 3. Exemple de mémoire (`std::sys::memory`)

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

## Module de dispatcher

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

Les branches `#[target(os="linux")]`, `#[target(os="macos")]` sont utilisées uniquement à l'intérieur du dispatcher.
