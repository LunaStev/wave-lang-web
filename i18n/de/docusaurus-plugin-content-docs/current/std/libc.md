---
sidebar_position: 11
---

# Verwendung von std::libc (Kompatibilitätsschicht)

`std::libc` ist eine optionale Schicht, die verwendet wird, wenn direkt mit der C-Bibliothek interagiert wird.

## Wann es verwendet wird

- Wenn bestehende C-Bibliothekssymbole direkt aufgerufen werden sollen
- Wenn während einer schrittweisen Migration Wave-Code und C-Code zusammen genutzt werden

Verwenden Sie in gewöhnlichem Wave-Code bevorzugt `std::sys`/`std::*`.

## Beispiel für import

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. Aufruf von stdio

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
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

## 3. Socket C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## Bereitgestellte Module

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
