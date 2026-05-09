---
sidebar_position: 11
---

# שימוש std::libc (שכבת תאימות)

`std::libc` היא שכבה אופציונלית לשימוש בעת עבודה ישירה עם ספריית C.

## מתי להשתמש

- כאשר יש לקרוא לסמלי ספריית C קיימים כפי שהם
- בעת מיגרציה הדרגתית עם קוד Wave וקוד C ביחד

בקוד Wave רגיל, השתמשו תחילה ב-`std::sys`/`std::*`.

## דוגמת import

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## 1. קריאת stdio

```wave
fun main() {
    puts("שלום מ-libc" כ-ptr<i8>);
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

## 3. ממשק C ABI לסוקטים

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## מודולים מסופקים

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
