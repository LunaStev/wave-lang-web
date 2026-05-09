---
sidebar_position: 5
---

# דיאגנוסטיקה של שגיאות

הקומפיילר של Wave מציג את השגיאות עם קוד (`E####`) יחד עם מיקום מקור/הקשר/טיפים לפתרון.

## פורמט פלט

העיצוב הבסיסי הוא כדלקמן.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

פריטי פלט:

- `--> file:line:column`: קוד שגיאה ותמצית
- `^`: מיקום הבעיה
- בלוק מקור + סימון caret (`^`) מודגש
- `הקשר`, `צפוי`, `נמצא`, `הערה`, `עזרה`, `הצעה`

## קוד שגיאה מייצג

- `E1002` תו לא צפוי
- `E1003` הערת בלוק לא סגורה
- `E1004` מחרוזת לא סגורה
- `E1005` תו escape לא חוקי
- `E1006` ליטרל תו לא חוקי
- `E2001` פורמט ליטרל מספר לא חוקי
- `E3001` שגיאת תחביר של המפענח
- `E3001` שגיאת אימות סמנטי
- `E3102` השמה של `null` לאובייקט שאינו מצביע
- `E9001` צמצום מספרי שלם בלתי מפורש אסור
- `E9001` שגיאה פנימית ביצירת קוד בגיבוי

## גם בשגיאת גיבוי מוצגת מיקום מקור

בשלב יצירת הקוד (LLVM), גם במקרים של panic פנימי, אם אפשרי, משוערת ומוצגת מיקום הקריאה/ההצהרה בפועל.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

כשלא ניתן לשער את המיקום, נעשה שימוש במיקום fallback, והעובדה מוצגת ב-`הערה`.
