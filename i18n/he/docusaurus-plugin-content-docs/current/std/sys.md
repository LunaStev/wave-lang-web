---
sidebar_position: 10
---

# שימוש std::sys

`std::sys` היא השכבה המופשטת של מערכות הפעלה מתחת למודולים ברמה גבוהה יותר.

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## תקן בסיסי

- רוב הפונקציות מחזירות ערכי קריאת מערכת גולמיים.
- `>= 0` הצלחה, `< 0` כישלון(`-errno`).
- בקוד אפליקציות ברמה גבוהה, השתמשו תחילה ב-`std::sys`, `std::net`, `std::time` במקום `std::env` כאשר זה אפשרי.

## 1. דוגמת קריאת קובץ (`std::sys::fs`)

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

## 2. דוגמת סוקט (`std::sys::socket`)

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

## 3. דוגמת זיכרון (`std::sys::memory`)

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

## מודול dispatcher

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

הענפים `#[target(os="linux")]`, `#[target(os="macos")]` משמשים רק בתוך ה-dispatcher.
