---
sidebar_position: 6
---

# `wavec` CLI Reference

`wavec` is a low-level compiler, similar in role to `rustc` or `cc`. Package resolution, lockfiles, registries, and workspaces belong to higher-level tools such as Vex.

## Basic form

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Core commands

`build <input...>` performs compilation, checking, linking, and optional execution through flags. `check <file>` is an alias for `build <file> --emit=check`. `run <file>` is an alias for `build <file> --run`. `print <item>` reports compiler capabilities such as targets, emit kinds, input types, and default linker choices.

## Input rules

`build` accepts one or more inputs. File extensions are inferred automatically: `.wave` for Wave source, `.ll` for LLVM IR, `.bc` for bitcode, `.s` or `.asm` for assembly, and `.o` or `.obj` for object files. `--input-type=<kind>` forces one type for every input.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Emit rules

`--emit` supports `check`, `ast`, `ir`, `bc`, `asm`, `obj`, and `bin`. `check` is a control mode, not a normal artifact, so it must be used alone. If `bin` is emitted with other artifacts, `-o` names the final linked binary; intermediate artifacts follow `--out-dir` or default paths.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Running compiled output

`--run` is allowed only when exactly one runnable `bin` artifact is produced. It is not valid with `--shared` or non-runnable emit modes. Arguments after `--` are passed to the produced executable.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding and bare-metal

`--freestanding` is for kernels, bootloaders, firmware, and embedded targets. It disables default `libc`/`libm` linking, disables the red zone for the backend, and emits code suitable for no-runtime environments.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend control

Use `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, and `-C no-default-libs` for precise compiler and linker control.

## Capability queries

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, and `default-linker` are intended for tools such as Vex to validate the installed compiler without guessing.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
