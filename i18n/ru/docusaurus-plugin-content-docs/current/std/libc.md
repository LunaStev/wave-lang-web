---
sidebar_position: 11
---

# Как использовать std::libc (слой совместимости)

`std::libc` — это необязательный слой, который используется при непосредственном взаимодействии с библиотекой C.

## Когда использовать

- Когда необходимо вызывать существующий символ библиотеки C как есть
- Когда использовать код Wave и код C совместно в рамках постепенной миграции

В общем коде Wave сначала рекомендуется использовать `std::sys`/`std::*`.

## Пример импорта

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. вызов stdio

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

## 3. сокет C ABI

```wave
import("std::libc::socket");

fun main() {
 var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
 if (fd >= 0) {
 shutdown(fd, SHUT_RDWR);
 }
}
```

## Предоставляемые модули

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
