---
sidebar_position: 7
---

# گزینه‌های backend

این گزینه‌ها backend مربوط به LLVM و مسیر linker مورد استفاده `wavec` را کنترل می‌کنند.

## گزینه‌های مهم

`--target=<triple>`، LLVM target را انتخاب می‌کند. `--cpu`, `--features`, و `--abi` code generation را دقیق‌تر می‌کنند. `--sysroot` روی مسیرهای جستجوی compile/link اثر می‌گذارد. `-C linker=...`, `-C link-arg=...`, و `-C link-sysroot=...` linker را کنترل می‌کنند. `-C no-default-libs` لینک خودکار `libc`/`libm` را خاموش می‌کند.

## سیاست freestanding

`--freestanding` نبود hosted C runtime را فرض می‌کند. کتابخانه‌های پیش‌فرض و red zone را غیرفعال می‌کند، IR با سبک no-unwind می‌سازد و برای freestanding targetها static relocation را ترجیح می‌دهد مگر اینکه override صریح وجود داشته باشد.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## مسیر UEFI

UEFI از PE/COFF استفاده می‌کند، نه SysV ELF. مسیر پیشنهادی تولید COFF object با `--target x86_64-pc-windows-gnu --freestanding --emit=obj` و سپس link با `lld-link` و گزینه‌های `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, `/nodefaultlib` است.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## پرس‌وجوی capability

ابزارهای بالادستی باید به جای hard-code کردن فرضیات، `wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, و `default-linker` را query کنند.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
