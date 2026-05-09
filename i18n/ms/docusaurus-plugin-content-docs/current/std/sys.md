---
sidebar_position: 10
---

# std::penggunaan sys

`std::sys` ialah lapisan abstraksi OS di bawah modul peringkat tinggi.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## peraturan asas

- Kebanyakan fungsi mengembalikan nilai syscall mentah.
- `>= 0` berjaya, `< 0` gagal (`-errno`).
- Dalam kod apl peringkat tinggi, jika boleh, gunakan `std::sys`, `std::net` dan `std::time` dahulu dan bukannya `std::env`.

## 1) Contoh bacaan fail (`std::sys::fs`)

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

## 2) Contoh soket (`std::sys::socket`)

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

## 3) Contoh ingatan (`std::sys::memory`)

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

## modul penghantar

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

Cawangan `#[target(os="linux")]`, `#[target(os="macos")]` hanya digunakan di dalam penghantar.
