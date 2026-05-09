---
sidebar_position: 10
---

# std::sys பயன்பாடு

`std::sys` என்பது உயர்நிலை தொகுதிகளுக்கு கீழே உள்ள OS இன் சுருக்க அடுக்கு ஆகும்.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## அடிப்படை விதிகள்

- பெரும்பாலான செயல்பாடுகள் மூல சைஸ்கல் மதிப்புகளை வழங்கும்.
- `>= 0` வெற்றி பெற்றது, `< 0` தோல்வியடைந்தது (`-errno`).
- உயர்நிலை பயன்பாட்டுக் குறியீட்டில், முடிந்தால், `std::sys`க்குப் பதிலாக முதலில் `std::net`, `std::time` மற்றும் `std::env` ஆகியவற்றைப் பயன்படுத்தவும்.

## 1) கோப்பு வாசிப்பு உதாரணம் (`std::sys::fs`)

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

## 2) சாக்கெட் உதாரணம் (`std::sys::socket`)

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

## 3) நினைவக உதாரணம் (`std::sys::memory`)

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

## அனுப்புனர் தொகுதி

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` கிளைகள் அனுப்பியவருக்குள் மட்டுமே பயன்படுத்தப்படுகின்றன.
