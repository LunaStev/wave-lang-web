---
sidebar_position: 10
---

# كيفية استخدام std::sys

`std::sys` هو طبقة تجريد لنظام التشغيل تحت الوحدات النمطية عالية المستوى.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## الاتفاقية الأساسية

- ترجع معظم الدوال قيمة استدعاء النظام الخام.
- `>= 0` نجاح، `< 0` فشل (`-errno`).
- في كود التطبيقات عالية المستوى، يُرجى استخدام `std::sys` و`std::net` و`std::time` بدلًا من `std::env` إن أمكن.

## 1. مثال على قراءة الملفات (`std::sys::fs`)

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

## 2. مثال على المقبس (`std::sys::socket`)

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

## 3. مثال على الذاكرة (`std::sys::memory`)

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

## وحدة الموزع

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]` و `#[target(os="macos")]` يتم استخدامها فقط داخل الموزع.
