---
sidebar_position: 7
---

# Backend options (`--llvm`, `--whale`)

This document describes the backend-related CLI options for `wavec`.

Important principles:

- `wavec` is not a package manager.
- The backend operation is controlled by **explicit arguments** as much as possible.
- Backend detailed options are interpreted only after `--llvm`.

---

## 1. Backend selector

## 1.1 `--llvm`

`--llvm` itself is the start marker of the backend option block.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

As above, only the supported items among the arguments following `--llvm` are processed as LLVM backend settings.

## 1.2 `--whale` (currently TODO)

Currently, `--whale` is a **reserved dummy flag**.

- The parser recognizes it.
- The actual Whale backend pipeline is not yet connected.
- It will terminate with a TODO error upon use.

---

## 2. Options supported after `--llvm`

## 2.1 Target/Codegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Reflection points:

- IR generation (TargetMachine) stage: `target`, `cpu`, `features`
- Object/Link stage (clang call): `target`, `abi`

The major target triples for documentation by default are:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Toolchain/Link

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (repeatable)
- `-C no-default-libs`

Reflection points:

- In object creation (clang `-c`), `--sysroot`
- In the link stage, linker override, raw link arg injection
- Automatic deactivation of `-lc -lm` when using `-C no-default-libs`

---

## 3. Parsing Rules (Important)

If `--llvm` is not used, backend-specific options are not interpreted as global options.

For example, the following is an error.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

It must be written as below.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Usage Example

Create Default Object:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Creating freestanding kernel objects:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Custom Link:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Disable Automatic Linking of libc/libm:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Using `--freestanding` behaves similarly to `-C no-default-libs`, targeting builds that do not assume a runtime standard library, like kernel/boot code.

---

## 5. Status Summary

- LLVM Backend: Running
- Whale Backend: Scheduled (TODO), Not Implemented
