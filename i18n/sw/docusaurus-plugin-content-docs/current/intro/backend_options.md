---
sidebar_position: 7
---

# Chaguo za backend

Chaguo hizi hudhibiti LLVM backend na njia ya linker inayotumiwa na `wavec`.

## Chaguo muhimu

Options hizi huchagua LLVM target, codegen detail, sysroot na linker. `-C no-default-libs` huzima link ya `libc`/`libm`.

## Sera ya freestanding

`--freestanding` huchukulia hakuna hosted C runtime, huzima default libraries na red zone, na hupendelea static relocation inapofaa.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Njia ya UEFI

UEFI hutumia PE/COFF. Tengeneza COFF object kwa Windows GNU target kisha link kwa `lld-link` na options za EFI.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Maswali ya capability

Zana za juu zinapaswa query capability kwa `wavec print ...` badala ya hard-code.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
