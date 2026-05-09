---
sidebar_position: 11
---

# Utilisation de std::libc (couche de compatibilité)

`std::libc` est une couche optionnelle utilisée pour interagir directement avec les bibliothèques C.

## Quand l'utiliser

- Lorsqu'il faut appeler directement des symboles de bibliothèque C existants
- Lors de l'utilisation simultanée de code Wave et de code C pendant une migration progressive

Pour le code Wave général, utilisez d'abord `std::sys`/`std::*`.

## Exemple d'import

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. Appel de stdio

```wave
fun main() {
    puts("bonjour de libc" as ptr<i8>);
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

## Modules disponibles

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
