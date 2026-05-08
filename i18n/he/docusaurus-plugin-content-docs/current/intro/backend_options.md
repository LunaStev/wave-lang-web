---
sidebar_position: 7
---

# אופציות של ה-backend (`--llvm`, `--whale`)

מסמך זה מסביר את אפשרויות ה-CLI הקשורות ל-backend של `wavec`.

עקרונות חשובים:

- `wavec` הוא אינו מנהל חבילות.
- יש לשלוט בפעולות ה-backend בעזרת **ארגומנטים מפורשים** ככל האפשר.
- אופציות מפורטות של ה-backend מפורשות רק אחרי `--llvm`.

---

## 1. בחירת ה-backend

## 1.1 `--llvm`

`--llvm` עצמו הוא סימן תחילת חלקת אופציות ה-backend.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

כפי שמופיע, רק פריטים נתמכים מבין הארגומנטים אחרי `--llvm` מעובדים כהגדרות ה-backend של LLVM.

## 1.2 `--whale` (כרגע TODO)

כרגע `--whale` הוא **דגל דמי שמור**.

- ה-parser מזהה זאת.
- פipeline ה-backend של Whale עדיין לא משולב בפועל.
- בעת שימוש, זה מסתיים בשגיאת TODO.

---

## 2. אופציות נתמכות אחרי `--llvm`

## 2.1 יעד/קוד ייצור

- `--target <משולש>` / `--target=<משולש>`
- `--cpu <שם>` / `--cpu=<שם>`
- `--features <csv>` / `--features=<csv>`
- `--abi <שם>` / `--abi=<שם>`

נקודת יישום:

- שלב יצירת IR (TargetMachine): `יעד`, `cpu`, `תכונות`
- שלב אובייקט/קישור (קריאה ל-clang): `יעד`, `abi`

טריפל יעד מרכזיים לתיעוד כרגע:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 שרשרת כלים/קישור

- `--sysroot <נתיב>` / `--sysroot=<נתיב>`
- `-C linker=<נתיב>`
- `-C link-arg=<ארגומנט>` (ניתן לחזור)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

נקודת יישום:

- ביצירת אובייקט (עם clang `-c`) ב `--sysroot`
- 링크 단계에서 linker override, raw link arg 주입, link-sysroot 주입
- בעת השימוש ב-`-C no-default-libs` מושבת באופן אוטומטי `-lc -lm`

---

## 3. חוקי ניתוח (חשוב)

אם לא משתמשים ב-`--llvm`, פרטי האופציות של backend לא מתפרשות כאופציות גלובליות.

לדוגמה, הבאות ייחשבו שגיאות.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

יש לכתוב כפי שמוצג להלן.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. דוגמה לשימוש

יצירת אובייקט בסיסי:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

יצירת אובייקט קרנל freestanding:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

קישור מותאם אישית:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

השבתת קישור אוטומטי של libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

השימוש ב-`--freestanding` משפיע באופן פנימי כמו `-C no-default-libs`, ומתאים לבניות שלא מניחות ספריות ריצה בסיסיות, כמו קוד קרנל/בוט.

---

## 5. סיכום מצב

- Backend של LLVM: פועל
- Backend של Whale: מתוכנן (TODO), לא מיושם
