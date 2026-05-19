---
sidebar_position: 7
---

# Backend አማራጮች

እነዚህ options `wavec` የሚጠቀመውን LLVM backend እና linker path ይቆጣጠራሉ።

## አስፈላጊ options

እነዚህ options LLVM target, codegen detail, sysroot, linker ይመርጣሉ። `-C no-default-libs` automatic `libc`/`libm` link ያጠፋል።

## Freestanding policy

`--freestanding` hosted C runtime እንደሌለ ይቆጥራል፣ default libraries እና red zone ያጠፋል፣ static relocation ይመርጣል።

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI PE/COFF ይጠቀማል። Windows GNU target በመጠቀም COFF object ይፍጠሩ፣ ከዚያ `lld-link` በEFI options link ያድርጉ።

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability queries

Higher-level tools assumptions hard-code ከማድረግ ይልቅ `wavec print ...` በመጠቀም capability query ማድረግ አለባቸው።

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
