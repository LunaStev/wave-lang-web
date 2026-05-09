---
sidebar_position: 11
---

# std::penggunaan libc (lapisan keserasian)

`std::libc` ialah lapisan pilihan yang digunakan apabila antara muka terus dengan perpustakaan C.

## Bila nak guna

- Apabila anda perlu memanggil simbol perpustakaan C sedia ada sebagaimana adanya
- Apabila menggunakan kod Wave dan C bersama-sama semasa pemindahan beransur-ansur

Secara umum kod Wave, gunakan `std::sys`/`std::*` dahulu.

## contoh import

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1) panggilan stdio

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2) malloc/free

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

## 3) Soket C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## Modul yang disediakan

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
