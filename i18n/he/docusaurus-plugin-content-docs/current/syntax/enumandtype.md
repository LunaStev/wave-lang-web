---
sidebar_position: 10
---

# enum ו-type alias

Wave שומר על מערכת טיפוסים מפורשת דומה לזו של C, אך לצורך קריאות ויציבות ABI הוא תומך ב-type alias ו-enum מבוססי מספרים.

---

## type alias (סוג כינוי)

### סקירה כללית

הפקודה type מעניקה שם חדש לטיפוס קיים.
זה אינו יוצר טיפוס חדש, אלא זהות מלאה (alias).

```wave
type MyInt = i32;
```

בהצהרה הנ״ל, MyInt זהה לחלוטין ל-i32.

---

### תכונות

- אין תקורה בזמן ריצה
- זהה לחלוטין מבחינת ABI
- קיים רק בזמן קומפילציה
- ניתן לשימוש כסוג repr של enum

---

### דוגמה לשימוש

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### שוויון סוג

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type אינו סוג חדש אלא סוג עם שם שונה בלבד.

---

## מניית (enum)

### סקירה כללית

ה-enum של Wave הוא מניית מבוססת מספרים שלמים.
כל מנייה חייבת להיות עם סוג repr.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### סוג repr

-> i32 מציין איזה סוג של מספר שלם מייצג ה-enum הזה.

סוגי repr מותרים:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` של סוג זה

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### כללי הקצאת ערכים

- אם קיים ערך מוגדר, השתמשו בערך זה
- אם לא קיים, הערך הקודם + 1
- אם אין ערך ראשון, מתחילים מ-0

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum הוא סוג ערך

enum הוא ערך שלם וניתן לשימוש חופשי כפרמטר פונקציה או ערך החזרה.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### שימוש כקבוע

וריאנט enum הוא קבוע בזמן קומפילציה.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## דוגמה ממשית

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```