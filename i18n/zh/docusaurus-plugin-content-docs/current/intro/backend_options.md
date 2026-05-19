---
sidebar_position: 7
---

# 后端选项

这些选项控制 `wavec` 使用的 LLVM backend 和 linker 路径。Wave 面向 native code、freestanding system、UEFI 和 cross-compilation，因此优先采用显式控制。

## 重要选项

`--target=<triple>` 选择 LLVM target。`--cpu`, `--features`, `--abi` 细化 code generation。`--sysroot` 影响 compile/link 搜索路径。`-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...` 控制 linker。`-C no-default-libs` 关闭自动 `libc`/`libm` 链接。`-C relocation-model=...` 和 `-C code-model=...` 选择低层 code generation model。

## Freestanding 策略

`--freestanding` 假定没有 hosted C runtime。它关闭默认库，禁用 red zone，生成 no-unwind 风格的 IR，并在没有显式覆盖时为 freestanding target 倾向 static relocation。

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI 路径

UEFI 使用 PE/COFF 而不是 SysV ELF。推荐路径是用 `--target x86_64-pc-windows-gnu --freestanding --emit=obj` 生成 COFF object，然后用 `lld-link` 加 `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, `/nodefaultlib` 链接。

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability 查询

上层工具应查询 `wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker`，而不是硬编码假设。

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
