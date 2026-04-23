---
sidebar_position: 11
---

# Uso de std::libc (capa de compatibilidad)

`std::libc` es una capa opcional para interactuar directamente con la biblioteca C.

## Cuándo usar

- Cuando necesita llamar directamente a símbolos de la biblioteca C existentes
- Cuando se usa código Wave junto con código C durante una migración progresiva

En código Wave general, use primero `std::sys`/`std::*`.

## Ejemplo de importación

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. Llamada a stdio

```wave
fun main() {
    puts("hola desde libc" as ptr<i8>);
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

## 3. Sockets C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## Módulos proporcionados

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
