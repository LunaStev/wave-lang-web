---
sidebar_position: 10
---

# Verwendung von std::sys

`std::sys` ist eine OS-Abstraktionsschicht unterhalb des hochrangigen Moduls.

```text
std(high-level)
  -> sys-Dispatcher
  -> sys/linux oder sys/macos
  -> syscall
```

## Grundlegende Konventionen

- Die meisten Funktionen geben den rohen Syscall-Wert zurück.
- `>= 0` Erfolg, `< 0` Fehlschlag (`-errno`).
- Im hochrangigen App-Code verwenden Sie nach Möglichkeit zuerst `std::net`, `std::time`, `std::env` anstelle von `std::sys`.

## 1. Beispiel zum Lesen von Dateien (`std::sys::fs`)

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

## 2. Socket-Beispiel (`std::sys::socket`)

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

## 3. Speicherbeispiel (`std::sys::memory`)

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

## Dispatcher-Modul

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` Verzweigungen werden nur innerhalb des Dispatchers verwendet.
