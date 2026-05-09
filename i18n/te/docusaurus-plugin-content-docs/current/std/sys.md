---
sidebar_position: 10
---

# std::sys వినియోగం

`std::sys` అనేది హై-లెవల్ మాడ్యూల్స్ క్రింద ఉన్న OS యొక్క సంగ్రహణ పొర.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## ప్రాథమిక నియమాలు

- చాలా ఫంక్షన్‌లు ముడి సిస్కాల్ విలువలను అందిస్తాయి.
- `>= 0` విజయవంతమైంది, `< 0` విఫలమైంది (`-errno`).
- ఉన్నత-స్థాయి యాప్ కోడ్‌లో, వీలైతే, `std::sys`కి బదులుగా ముందుగా `std::net`, `std::time` మరియు `std::env`ని ఉపయోగించండి.

## 1) ఫైల్ రీడింగ్ ఉదాహరణ (`std::sys::fs`)

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

## 2) సాకెట్ ఉదాహరణ (`std::sys::socket`)

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

## 3) మెమరీ ఉదాహరణ (`std::sys::memory`)

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

## డిస్పాచర్ మాడ్యూల్

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` శాఖలు డిస్పాచర్ లోపల మాత్రమే ఉపయోగించబడతాయి.
