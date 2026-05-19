---
sidebar_position: 7
---

# Backend विकल्प

ये options `wavec` द्वारा उपयोग किए गए LLVM backend और linker path को नियंत्रित करते हैं।

## महत्वपूर्ण options

ये options LLVM target, codegen details, sysroot और linker चुनते हैं। `-C no-default-libs` automatic `libc`/`libm` link बंद करता है।

## Freestanding policy

`--freestanding` hosted C runtime न होने का मानता है, default libraries और red zone बंद करता है, और static relocation को प्राथमिकता देता है।

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI PE/COFF उपयोग करता है। Windows GNU target से COFF object बनाएं और `lld-link` से EFI options के साथ link करें।

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability queries

ऊपरी tools को assumptions hard-code करने के बजाय `wavec print ...` से capability query करनी चाहिए।

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
