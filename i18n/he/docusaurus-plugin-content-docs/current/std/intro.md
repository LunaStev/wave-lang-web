---
sidebar_position: 1
---

# ספריית סטנדרט (std)

סעיף זה מסביר כיצד להשתמש בפועל בספריית הסטנדרט של Wave.

## מודולים

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## עקרונות שימוש

- במקרים של קוד ברמה גבוהה, השתמש ב-`std::*`.
- יכולות תלויות מערכת מופיעות מאחורי `std::sys::*`.
- השתמש ב-`std::libc` רק כאשר יש צורך בתמיכה ב-C.

## תקן לטיפול בשגיאות

פונקציות רבות עוקבות אחרי התקן הבא.

- `>= 0`: הצלחה
- `< 0`: כישלון (`-errno` או קוד שגיאה מותאם למודול)

דוגמה:

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // טיפול בשגיאות
        return;
    }

    // raw מכיל מחרוזת NUL מסיימת
}
```
