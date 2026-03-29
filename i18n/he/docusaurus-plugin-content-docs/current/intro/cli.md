---
sidebar_position: 6
---

# הפניה ל-CLI של `wavec`

מסמך זה מתאר בפירוט את פעולת CLI של **המהדר Wave (`wavec`) בהתאם ליישום הנוכחי**.

עקרונות יסוד:

- `wavec` הוא מהדר.
- התקנה/פתרון חבילות (lockfile, registry, הורדה) אינם באחריות `wavec`.
- תלויות חיצוניות מועברות ל-`wavec` בעת ההפעלה באמצעות **ארגומנטים מפורשים של CLI**.

---

## 1. פורמט בסיסי

```bash
wavec [אפשרויות גלובליות] <פקודה> [אפשרויות פקודה]
```

לדוגמה:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. חוקי ניתוח פקודה (חשוב)

`wavec` סורק תחילה את כל הארגומנטים עבור **אפשרויות גלובליות**, ולאחר מכן מפרש את ה-`<command>` מהארגומנטים שנותרו.

כלומר, למיקום האפשרויות הגלובליות יש גמישות.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

שלוש האפשרויות הללו כולן תקפות.

שימוש ב-`--` מפסיק את סריקת אפשרויות הגלובליות ומעביר את האזור לפקודות.

```bash
wavec -- הפעל main.wave
```

---

## 3. פקודות

## 3.1 `הפעל <קובץ>`

מקומפל ומנוהל קובץ Wave.

```bash
wavec הפעל hello.wave
```

פעולה:

1. ניתוח מקור + הרחבת ייבוא
2. יצירת LLVM IR
3. קישור בינרי מקורי (`target/<file_stem>`)
4. הפעלה

מאפיינים:

- קוד הסיום של התוכנית שהופעלה מועבר על ידי `wavec`.

---

## 3.2 `בנה <קובץ>`

מייצר קובץ הפעלה (exe).

```bash
wavec build app.wave
```

בינרי פלט:

- `target/<file_stem>`

## 3.3 אפשרות `בנה` (`-o`, `-c`)

ניתן לשלוט בשם קובץ הפלט ותבנית הפלט כמשתנה במסגרת פקודת `בנה`.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <קובץ>`: מציין את שם קובץ הפלט.
  - ברירת מחדל (ללא `-c`): ייחוס נתיב הפלט של קובץ ההפעלה
  - בשימוש עם `-c`: ייחוס נתיב פלט של קובץ אובייקט
- `-c`: ייצור קובץ אובייקט בלבד, ללא קישור.
- בשימוש `-c`, נתיב האובייקט מודפס ל-stdout.

ברירת מחדל של פעולה:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (הדפסת נתיב)

freestanding 커널 오브젝트 예시:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`도 같은 방식으로 사용할 수 있습니다.

---

## 3.4 `התקן std`, `עדכן std`

פקודת התקנה/עדכון ספרייה סטנדרטית.

```bash
wavec התקן std
wavec עדכן std
```

---

## 3.5 `--עזרה`, `--גרסה`

```bash
wavec --עזרה
wavec --גרסה
```

---

## 4. אפשרויות גלובליות

## 4.1 אופטימיזציה

ערכים מותרים:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

לדוגמה:

```bash
wavec -O3 הפעל main.wave
```

---

## 4.2 פלט איתור באגים

```bash
wavec --debug-wave=tokens,ast,ir הפעל main.wave
```

פריטים מותרים:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 אפשרויות קישור

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` או `--link <lib>`
- `-L<path>` או `-L <path>`

בעת קישור, `wavec` מעביר אותו כ `-l<lib>`, `-L<path>` פנימית.

---

## 4.4 אפשרויות תלות חיצוניות (חשוב)

זוהי אפשרות לפרשנות של import חיצוני (`pkg::...`).

### `--dep-root <dir>`

מוסיף מועמד לספריית השורש של החבילה.

```bash
wavec run app.wave --dep-root .vex/dep
```

בעת חיפוש החבילה `math`:

- בדוק את `.vex/dep/math`

ניתן לציין מספר פעמים:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

מייצב את שם החבילה לנתיב מסוים.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

כללים:

- פורמט `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` חייב להיות בפורמט `name=path`
- אם שם החבילה זהה מצוין מספר פעמים, תופיע שגיאה

---

## 4.5 백엔드 옵션 (`--llvm`, `--whale`)

백엔드 제어 옵션은 `--llvm` 뒤에서만 해석됩니다.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

지원 항목(요약):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (반복 가능)
- `-C no-default-libs`

현재 `wavec print target-list` 기준 주요 타깃:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale`은 현재 예약된 더미 플래그이며, 실제 백엔드 파이프라인은 아직 미구현(TODO)입니다.

---

## 5. כללי פירוש יבוא

היבוא של Wave מחולק לשלוש אפשרויות הבאות.

1. יבוא מקומי
2. יבוא std
3. יבוא חבילה חיצונית

## 5.1 מקומי

```wave
import("foo");
import("path/to/mod.wave");
```

חפש את `<path>.wave` במדריך קובץ הבסיס.

## 5.2 std

```wave
import("std::io::format");
```

השימוש בנתיב `~/.wave/lib/wave/std/...`.

## 5.3 חבילת חוץ

```wave
import("math::add");
import("json::parser::core");
```

פורמט:

- נדרש לפחות שני סגמנטים `package::module`

סדר קביעת שורש החבילה:

1. מיפוי מפורש של `--dep name=path`
2. חפש `<root>/<package>` בכל `--dep-root`

אם אותה חבילה נמצאת בו-זמנית במספר dep-root:

- שגיאת **אמביגות** ולא נבחר אוטומטית
- חייב להיות מקובע באמצעות `--dep name=path`

סדר חיפוש קבצי מודול:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

לדוגמה:

```wave
import("math::core::vec");
```

חיפוש:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. דוגמה מעשית ל-import חיצוני

### 6.1 dep-root יחיד

ספריה:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

קוד:

```wave
import("math::add");
```

הפעלה:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 פתרון אי-בהירות

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

אם קיים `math` בשני המקומות, יתעורר שגיאה. ניתן לתקן זאת כך:

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. הפרדת תפקידים עם Vex

מבנה מומלץ:

- `wavec`: הידור/קישור/הרצה + פתרון תלות שהוגדרה
- `vex`: התקנה/ניהול תלות ולאחר מכן `wavec ... --dep-root ... קריאה ל-`--dep ...

לדוגמה:

```bash
# מורץ על ידי vex באופן פנימי
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

מודל זה שומר על הקומפיילר פשוט ודטרמיניסטי, בעוד מנהל החבילות אחראי לאוטומציה.

---

## 8. עיון מהיר

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
