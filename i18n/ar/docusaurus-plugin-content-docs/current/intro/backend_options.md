---
sidebar_position: 7
---

# خيارات الخلفية

تتحكم هذه الخيارات في backend الخاص بـ LLVM ومسار linker الذي يستخدمه `wavec`.

## خيارات مهمة

`--target=<triple>` يختار LLVM target. `--cpu`, `--features`, و`--abi` تضبط code generation. يؤثر `--sysroot` على مسارات البحث في compile/link. تتحكم خيارات `-C linker=...`, `-C link-arg=...`, و`-C link-sysroot=...` في linker. يعطل `-C no-default-libs` ربط `libc`/`libm` التلقائي.

## سياسة freestanding

`--freestanding` يفترض عدم وجود hosted C runtime. يعطل المكتبات الافتراضية وred zone، وينتج IR بطابع no-unwind، ويفضل static relocation لأهداف freestanding ما لم يوجد override صريح.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## مسار UEFI

تستخدم UEFI صيغة PE/COFF وليس SysV ELF. المسار الموصى به هو إنتاج COFF object باستخدام `--target x86_64-pc-windows-gnu --freestanding --emit=obj` ثم الربط عبر `lld-link` مع `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, و`/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## استعلامات capability

ينبغي للأدوات الأعلى أن تستعلم `wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, و`default-linker` بدلاً من ترميز افتراضات ثابتة.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
