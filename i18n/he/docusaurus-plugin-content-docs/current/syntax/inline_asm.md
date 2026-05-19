---
sidebar_position: 7
---

# אסמבלי מוטמע

אסמבלי מוטמע ב-Wave נכתב באמצעות בלוק `asm { ... }`. הוא מיועד לקוד ברמה נמוכה כמו kernels, מטעני UEFI, קריאות מערכת, port I/O ושליטה ב-CPU.

היעדים הנוכחיים הם Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, ו-freestanding `x86_64`/`aarch64`/`riscv64`. יעדי 32-bit עדיין אינם נתמכים.

## צורה בסיסית

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

שורות מחרוזת הן הוראות assembly. `in(...)` מצהיר על קלט, `out(...)` על פלט, ו-`clobber(...)` על מצב שה-asm משנה.

## asm כמשפט

asm כמשפט משמש כאשר לא נדרש ערך expression. הוא יכול להכיל כמה פלטים.

```wave
let mut ret: i64 = 0;
asm {
    "mov rax, 39"
    "syscall"
    out("rax") ret
    clobber("memory")
    clobber("flags")
}
```

## asm כביטוי

asm כביטוי מייצר ערך ודורש כרגע בדיוק `out(...)` אחד. `clobber("noreturn")` אסור ב-expression asm.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## אופרנדים ואילוצים

אופרנדים יכולים להשתמש באוגרים מסוימים או במחלקות אילוץ. x86_64 משתמש ב-`rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 משתמש ב-`x0` ... `x30` וב-`w0` ... `w30`; RISC-V משתמש ב-`a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. המחלקות המשותפות הן `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. אוגר פיזי אחד אינו יכול להיות גם operand וגם clobber.

## חוזה clobber

`clobber("memory")` אומר שה-asm עשוי לקרוא או לכתוב זיכרון. `clobber("flags")` ו-`clobber("cc")` מציינים שינוי flags. `clobber("stack")` נדרש כאשר משתמשים ב-stack או בהוראות call/return. `clobber("nostack")` מבטיח שאין שימוש ב-stack. `clobber("noreturn")` אומר שהשליטה אינה חוזרת לבלוק הנוכחי. אין לשלב `stack` עם `nostack`.

## משמעת stack

asm רגיל אינו אמור לשנות את ה-stack. `call`, `push`, `pop`, `ret`, שימוש ישיר ב-`rsp`/`esp` או `sp`, והוראות דומות דורשים `clobber("stack")`. גם אז יש לשחזר את ה-stack pointer לפני החזרה.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm שאינו חוזר

קפיצות עקיפות כמו `jmp rax`, `jmp r11`, `br x0`, או `jr ra` דורשות `clobber("noreturn")`. statement asm עם clobber כזה מסיים את בלוק ה-IR ב-`unreachable`.

```wave
fun jump_to_kernel(entry: u64, boot_info: ptr<u8>, stack_top: u64) {
    asm {
        "mov rsp, rdx"
        "and rsp, -16"
        "mov rdi, rcx"
        "jmp rbx"
        in("rbx") entry
        in("rcx") boot_info
        in("rdx") stack_top
        clobber("stack")
        clobber("noreturn")
    }
}
```

## תוויות מקומיות

קפיצה לתווית מקומית נשארת באותו נתיב asm/control-flow ואינה דורשת `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## יעדי פלט

יעדי פלט יציבים הם משתנים ו-`deref` של משתני מצביע. עבור field או array, כתבו קודם למשתנה זמני.

```wave
out("rax") value
out("rax") deref ptr
```

## מגבלות

inline asm תמיד נחשב כבעל side effect. מניפולציה מורכבת של stack עדיין עשויה להידחות. מצביעי פונקציה וסוגי calling convention מפורשים עדיין אינם יציבים, לכן קריאות שירות UEFI יכולות להשתמש ב-asm wrappers לעת עתה.
