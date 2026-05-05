---
sidebar_position: 10
---

# استفاده از std::sys

`std::sys` یک لایه انتزاعی برای ماژول‌های سطح پایین مبتنی بر سیستم عامل است.

```text
std(سطح بالا)
  -> توزیع‌کننده sys
  -> sys/linux یا sys/macos
  -> فراخوانی سامانه
```

## قوانین پایه

- اکثر توابع مقدار فراخوانی سامانه خام را برمی‌گردانند.
- `>= 0` موفقیت، `< 0` شکست (`-errno`).
- اگر امکان دارد، در کدهای اپلیکیشن سطح بالا اول از `std::net`، `std::time`، `std::env` بجای `std::sys` استفاده کنید.

## 1. مثال خواندن فایل (`std::sys::fs`)

```wave
واردات("std::sys::fs");

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

## 2. مثال سوکت (`std::sys::socket`)

```wave
واردات("std::sys::socket");

fun main() {
    var fd: i64 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd < 0) {
        return;
    }

    shutdown(fd, SHUT_RDWR);
}
```

## 3. مثال حافظه (`std::sys::memory`)

```wave
واردات("std::sys::memory");

fun main() {
    var p: ptr<u8> = sys_alloc(4096);
    if (p == null) {
        return;
    }

    sys_free(p, 4096);
}
```

## ماژول توزیع‌کننده

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`، `#[target(os="macos")]` تقسیم‌بندی فقط در داخل توزیع‌کننده استفاده می‌شوند.
