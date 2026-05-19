---
sidebar_position: 9.5
---

# export

`export` חושף פונקציה שמומשה ב-Wave כסמל חיצוני של המקשר. אם `extern` מייבא פונקציה חיצונית אל Wave, אז `export` מאפשר לקרוא לפונקציית Wave מתוך C, Rust, C++, Zig או שפה native אחרת דרך קובץ object.

---

## סקירה

ל-FFI של Wave יש שני כיוונים.

- `extern(c)` מצהיר על פונקציה שמסופקת על ידי ספרייה חיצונית כדי שקוד Wave יוכל לקרוא לה.
- `export(c)` מפיק את גוף פונקציית Wave כסמל ABI חיצוני.

שתי הצורות חולקות מבנה כותרת ABI דומה, אבל המשמעות הפוכה. ב-`extern` גוף הפונקציה נמצא מחוץ ל-Wave. ב-`export` גוף הפונקציה נמצא בתוך Wave.

כרגע ABI הייצוא היחיד שנתמך הוא `c`.

---

## export ברמת פונקציה

הצורה הבסיסית היא:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

הקוד הזה מפיק סמל ציבורי בשם `add`. אפשר לקשר את קובץ ה-object שנוצר עם קוד חיצוני שמצפה ל-C ABI.

---

## שמות סמלים

שם הפונקציה ב-Wave ושם סמל המקשר המיוצא יכולים להיות שונים.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

כאן השם בתוך Wave הוא `add_i32`, אבל קובץ ה-object חושף את `wave_add_i32`. שפות חיצוניות צריכות להצהיר ולקרוא לשם הסמל המיוצא.

---

## export בבלוק

אפשר לקבץ כמה פונקציות שמשתמשות באותו ABI בתוך בלוק.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

ב-export בבלוק משתמשים בשם של כל פונקציה כסמל ציבורי. `export(c, "symbol") { ... }` אינו מותר, כי alias יחיד לכמה פונקציות ייצור התנגשות סמלים.

---

## קריאה מתוך C

בנה את קובץ Wave כקובץ object.

```bash
wavec build math.wave --emit=obj -o math.o
```

הצהר על הסמל המיוצא ב-C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

לאחר מכן קשר את קוד C ואת קובץ ה-object של Wave עם linker רגיל.

```bash
cc main.c math.o -o app
```

---

## extern ו-export

`extern(c)` אומר ש-Wave משתמש בסמל חיצוני.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` אומר שקוד חיצוני יכול להשתמש בסמל של Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

שניהם שייכים ל-FFI, אבל הכיוון שונה.

---

## מגבלות

- רק `export(c)` נתמך.
- פונקציות מיוצאות לא יכולות להיות generic.
- export בבלוק לא יכול להשתמש ב-alias סמל משותף אחד.
- לשילוב יציב, מומלץ כרגע להשתמש במספרים שלמים, מספרי נקודה צפה, bool ומצביעים.
- טיפוסים מרוכבים כמו struct ו-array צריכים כללי ABI קשיחים יותר וייתכן שיוצבו בהמשך.
- `export` שימושי בעיקר לקבצי object וספריות, לא לקובץ הרצה פשוט.

---

## שימושים מומלצים

- לספק פונקציות עזר של Wave כספריית C ABI.
- לקרוא לפונקציות Wave מתוך Rust, C, C++, Zig או שפה native אחרת.
- לחבר בהדרגה מודולי `front`, `utils` או מודולים native ללא runtime שנכתבו ב-Wave למערכת build קיימת.
- לאפשר ל-Vex או לכלי build אחר לקשר קבצי object של Wave לפרויקט חיצוני.
