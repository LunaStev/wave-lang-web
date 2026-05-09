---
sidebar_position: 8
---

# ביטול הדרגתי של sysroot לינק (`-C link-sysroot`)

מסמך זה מסביר כיצד **להגדיר באופן מפורש** את sysroot של מחלקת הלינק ב-`wavec`.

עקרון בסיסי:

- `--sysroot=<path>`: sysroot של מחלקת הקומפילציה (clang `-c`)
- `-C link-sysroot=<path>`: sysroot של מחלקת הלינק (linker)

כלומר, יש להפריד בין sysroot לקומפילציה ולינק.

---

## 1. למה זה נחוץ

כאשר משתמשים ב-`-C linker=<path>` ב-cross link, יש צורך בהגדרת נתיבי ריצה נוספים כגון `crt1.o`, `libc`, `libm`, בנפרד.

במקרה זה, אין לפנות ל-sysroot לינק אוטומטי, אבל יש להעביר אותו באופן מפורש ב-CLI.

---

## 2. הגדרת אפשרויות

## 2.1 `-C link-sysroot=<path>`

יש להזין `--sysroot=<path>` במחלקת הלינק.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

באופן פנימי זה שקול ל-`-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

שיטת הקלט של לינק raw נתמכת גם כן.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. כללי אימות

כאשר הדרישות הבאות מתקיימות בו זמנית בבניית מחלקת הלינק, תתרחש שגיאת שימוש.

1. שימוש ב-`-C linker=...`
2. שימוש ב-`--sysroot=<path>`
3. ללא הגדרת sysroot לינק (`-C link-sysroot` או `-C link-arg=--sysroot=...`)

דוגמה להודעת שגיאה:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. דוגמה לשימוש

## 4.1 לינק Cross של AArch64 Linux

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 שיטת קלט raw link

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 בנייה ללא לינק (`--emit=obj`)

כאשר אין מחלקת לינק, לינק sysroot אינו הכרחי.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. תמצית

- `--sysroot` מיועד למחלקת הקומפילציה
- `-C link-sysroot` מיועד למחלקת הלינק
- יש להעדיף הגדרה מפורשת על פני פנייה אוטומטית.
