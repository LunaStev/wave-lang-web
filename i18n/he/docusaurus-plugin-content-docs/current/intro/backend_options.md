---
sidebar_position: 7
---

# אפשרויות backend

אפשרויות אלו שולטות ב-LLVM backend ובנתיב ה-linker ש-`wavec` משתמש בו.

## אפשרויות חשובות

אפשרויות אלו בוחרות LLVM target, פרטי codegen, sysroot ו-linker. `-C no-default-libs` מכבה link אוטומטי של `libc`/`libm`.

## מדיניות freestanding

`--freestanding` מניח שאין hosted C runtime, מכבה default libraries ו-red zone ומעדיף static relocation כשמתאים.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## נתיב UEFI

UEFI משתמש ב-PE/COFF. מפיקים COFF object עם Windows GNU target ואז מקשרים עם `lld-link` ואפשרויות EFI.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## שאילתות capability

כלים ברמה גבוהה צריכים לבצע query ל-capability דרך `wavec print ...`, לא hard-code.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
