---
sidebar_position: 7
---

# Backend Options

These options control the LLVM backend and linker path used by `wavec`. They are intentionally explicit because Wave targets native code, freestanding systems, UEFI, and cross-compilation.

## Important options

`--target=<triple>` selects the LLVM target. `--cpu`, `--features`, and `--abi` refine code generation. `--sysroot` affects compile/link search paths. `-C linker=...`, `-C link-arg=...`, and `-C link-sysroot=...` control the linker. `-C no-default-libs` disables automatic `libc`/`libm` linking. `-C relocation-model=...` and `-C code-model=...` select low-level code generation models.

## Freestanding policy

`--freestanding` assumes no hosted C runtime. It disables default libraries, disables the red zone, emits no-unwind style IR, and favors static relocation for freestanding targets unless explicitly overridden.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI path

UEFI uses PE/COFF, not SysV ELF. The recommended path is to emit a COFF object with `--target x86_64-pc-windows-gnu --freestanding --emit=obj`, then link it with `lld-link` using `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, and `/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability queries

Higher-level tools should query `wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, and `default-linker` rather than hard-coding assumptions.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
