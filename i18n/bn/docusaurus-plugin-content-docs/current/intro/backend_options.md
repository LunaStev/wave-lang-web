---
sidebar_position: 7
---

# Backend অপশন

এই options `wavec` ব্যবহৃত LLVM backend এবং linker path নিয়ন্ত্রণ করে।

## গুরুত্বপূর্ণ options

এই options LLVM target, codegen detail, sysroot এবং linker বেছে নেয়। `-C no-default-libs` automatic `libc`/`libm` link বন্ধ করে।

## Freestanding policy

`--freestanding` hosted C runtime নেই ধরে নেয়, default libraries ও red zone বন্ধ করে, এবং static relocation পছন্দ করে।

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI PE/COFF ব্যবহার করে। Windows GNU target দিয়ে COFF object বানিয়ে `lld-link` দিয়ে EFI options সহ link করুন।

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability query

উচ্চ-স্তরের tools hard-code না করে `wavec print ...` দিয়ে capability query করা উচিত।

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
