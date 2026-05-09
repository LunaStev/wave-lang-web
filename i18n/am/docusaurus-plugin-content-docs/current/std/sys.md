---
sidebar_position: 10
---

# std :: sys አጠቃቀም

`std::sys` ከከፍተኛ ደረጃ ሞጁሎች በታች የ OS ረቂቅ ንብርብር ነው።

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## መሠረታዊ ደንቦች

- አብዛኛዎቹ ተግባራት ጥሬ የሳይካል እሴቶችን ይመለሳሉ።
- `>= 0` ተሳክቷል፣ `< 0` አልተሳካም (`-errno`)።
- በከፍተኛ ደረጃ መተግበሪያ ኮድ ከተቻለ `std::sys`፣ `std::net` እና `std::time` በመጀመሪያ ከ`std::env` ይጠቀሙ።

## 1) የፋይል ንባብ ምሳሌ (`std::sys::fs`)

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

## 2) የሶኬት ምሳሌ (`std::sys::socket`)

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

## 3) የማህደረ ትውስታ ምሳሌ (`std::sys::memory`)

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

## መላኪያ ሞጁል

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

የ`#[target(os="linux")]`፣ `#[target(os="macos")]` ቅርንጫፎች በ ላኪው ውስጥ ብቻ ጥቅም ላይ ይውላሉ።
