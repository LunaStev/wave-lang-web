---
sidebar_position: 7
---

# バックエンドオプション

これらのオプションは `wavec` が使う LLVM backend と linker 経路を制御します。Wave は native code、freestanding system、UEFI、cross-compilation を対象にするため、明示的な制御を優先します。

## 重要なオプション

`--target=<triple>` は LLVM target を選びます。`--cpu`, `--features`, `--abi` は code generation を細分化します。`--sysroot` は compile/link の検索経路に影響します。`-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...` は linker を制御します。`-C no-default-libs` は自動 `libc`/`libm` リンクを無効化します。`-C relocation-model=...` と `-C code-model=...` は低レベル code generation model を選びます。

## Freestanding ポリシー

`--freestanding` は hosted C runtime がない前提です。既定ライブラリを無効化し、red zone を無効化し、no-unwind 系の IR を出し、明示的 override がなければ freestanding target で static relocation を優先します。

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## UEFI 経路

UEFI は SysV ELF ではなく PE/COFF を使います。推奨経路は `--target x86_64-pc-windows-gnu --freestanding --emit=obj` で COFF object を出し、`lld-link` に `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, `/nodefaultlib` を渡してリンクする方法です。

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Capability 問い合わせ

上位ツールは仮定をハードコードせず、`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker` を問い合わせるべきです。

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
