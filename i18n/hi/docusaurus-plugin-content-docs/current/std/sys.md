---
sidebar_position: 10
---

# std::sys का उपयोग

`std::sys` उच्च स्तरीय मॉड्यूल के अंतर्गत OS अमूर्त परत है।

```text
std(उच्च स्तर)
  -> sys डिस्पैचर
  -> sys/linux or sys/macos
  -> syscall
```

## मूल सिद्धांत

- अधिकांश फंक्शन raw syscall मान लौटाते हैं।
- `>= 0` सफलता, `< 0` विफलता(`-errno`)।
- उच्च स्तरीय ऐप कोड में यथासंभव `std::sys` के बजाय पहले `std::net`, `std::time`, `std::env` का उपयोग करें।

## 1. फ़ाइल पढ़ने का उदाहरण (`std::sys::fs`)

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

## 2. सॉकेट उदाहरण (`std::sys::socket`)

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

## 3. मेमोरी उदाहरण (`std::sys::memory`)

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

## डिस्पैचर मॉड्यूल

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` शाखा केवल डिस्पैचर के अंदर उपयोग की जाती है।
