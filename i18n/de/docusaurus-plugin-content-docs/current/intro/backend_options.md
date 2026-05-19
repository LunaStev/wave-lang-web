---
sidebar_position: 7
---

# Backend-Optionen

Diese Optionen steuern das LLVM-Backend und den Linker-Pfad von `wavec`.

## Wichtige Optionen

`--target=<triple>` wählt das LLVM-Target. `--cpu`, `--features` und `--abi` verfeinern die Codegenerierung. `--sysroot` beeinflusst Suchpfade beim Compile/Link. `-C linker=...`, `-C link-arg=...` und `-C link-sysroot=...` steuern den Linker. `-C no-default-libs` deaktiviert automatisches `libc`/`libm`-Linking. `-C relocation-model=...` und `-C code-model=...` wählen Low-Level-Codegen-Modelle.

## Freestanding-Richtlinie

`--freestanding` nimmt an, dass keine hosted C runtime vorhanden ist. Es deaktiviert Standardbibliotheken, deaktiviert die Red Zone, erzeugt no-unwind-artiges IR und bevorzugt für freestanding Targets statische Relocation, sofern nicht explizit überschrieben.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI-Pfad

UEFI verwendet PE/COFF, nicht SysV ELF. Der empfohlene Weg ist ein COFF object mit `--target x86_64-pc-windows-gnu --freestanding --emit=obj` zu erzeugen und danach mit `lld-link` samt `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64` und `/nodefaultlib` zu linken.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability-Abfragen

Höhere Tools sollten `wavec print target-list`, `supported-emit-kinds`, `supported-input-types` und `default-linker` abfragen, statt Annahmen fest zu kodieren.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
