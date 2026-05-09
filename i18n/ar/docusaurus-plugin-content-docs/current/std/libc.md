---
sidebar_position: 11
---

# دليل استخدام std::libc (طبقة توافق)

`std::libc` هي طبقة اختيارية تُستخدم عند التفاعل مباشرةً مع مكتبات C.

## متى يُستخدم

- عند الحاجة إلى استدعاء الرموز الموجودة في مكتبات C مباشرةً
- عند استخدام كود Wave بشكل تدريجي مع كود C أثناء عملية الترحيل التدريجي

في كود Wave العادي، يُفضل استخدام `std::sys`/`std::*`.

## مثال على الاستيراد

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. استدعاء stdio

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

## 3. واجهة التطبيق الثنائية لـ C (socket C ABI)

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## الوحدات المتاحة

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
