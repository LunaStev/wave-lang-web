---
sidebar_position: 11
---

# استفاده از std::libc (لایه سازگاری)

`std::libc` یک لایه اختیاری برای تعامل مستقیم با کتابخانه C است.

## چه زمانی استفاده شود

- هنگام نیاز به فراخوانی مستقیم نمادهای موجود در کتابخانه C
- هنگام استفاده همزمان از کدهای Wave و C در مهاجرت تدریجی

در کدهای معمولی Wave ابتدا از `std::sys`/`std::*` استفاده کنید.

## مثال ایمپورت

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. فراخوانی stdio

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## 2. تخصیص/آزادسازی حافظه

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

## 3. سوکت C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## ماژول ارائه‌دهنده

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
