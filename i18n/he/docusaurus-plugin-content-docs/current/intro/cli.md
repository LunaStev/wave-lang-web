---
sidebar_position: 6
---

# מדריך CLI של `wavec`

`wavec` הוא compiler ברמה נמוכה בדומה ל-`rustc` או `cc`. פתרון packages, lockfile, registry ו-workspace שייך לכלים ברמה גבוהה כמו Vex.

## צורה בסיסית

```bash
wavec [global-options] <command> [command-options] [input...]
```

## פקודות מרכזיות

`build <input...>` מבצע compile, check, link והרצה אופציונלית דרך flags. `check <file>` הוא alias של `build <file> --emit=check`, `run <file>` הוא alias של `build <file> --run`, ו-`print <item>` מציג capability של compiler.

## כללי קלט

`build` מקבל קלט אחד או יותר ומסיק סוג לפי extension. `--input-type=<kind>` כופה סוג אחד לכל הקלטים.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## כללי emit

`--emit` תומך ב-`check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`. `check` הוא control mode וחייב להיות לבד.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## הרצת התוצר

`--run` תקף רק כשנוצר `bin` יחיד שניתן להרצה. ארגומנטים אחרי `--` מועברים ל-executable.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding ו-bare-metal

`--freestanding` מיועד ל-kernel, bootloader, firmware ו-embedded target; הוא מכבה default libs, red zone ומפיק code ללא runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## שליטה ב-backend

השתמשו ב-target, cpu, features, abi, sysroot וב-`-C ...` לשליטה מדויקת ב-compiler/linker.

## שאילתות capability

`wavec print ...` מאפשר ל-Vex לבדוק compiler בלי לנחש.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
