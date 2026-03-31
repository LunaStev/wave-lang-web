---
sidebar_position: 6
---

# `wavec` CLI Reference

This document precisely explains the CLI behavior based on the **current Wave compiler (`wavec`) implementation**.

Core Principles:

- `wavec` is a compiler.
- Package installation/resolution (lockfile, registry, download) is not the responsibility of `wavec`.
- External dependencies are provided as **explicit CLI arguments** when running `wavec`.

---

## 1. Basic Format

```bash
wavec [global-options] <command> [command-options]
```

Example:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Command Parsing Rules (Important)

`wavec` first scans for **global options** among all arguments, then interprets the remaining as `<command>`.

Thus, the position of global options is flexible.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

All three are valid.

Using `--` stops global option scanning and passes the remainder to the command area.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

Compiles and runs a Wave file.

```bash
wavec run hello.wave
```

Operations:

1. Source parsing + import expansion
2. LLVM IR generation
3. Native binary linking (`target/<file_stem>`.)
4. Run

Features:

- `wavec` forwards the exit code of the executed program.

---

## 3.2 `build <file>`

Generates an executable file (exe).

```bash
wavec build app.wave
```

Output binary:

- `target/<file_stem>`

## 3.3 `build` options (`-o`, `-c`)

The `build` command allows you to control the output file name and format via options.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: Specify the output file name.
  - Default (without `-c`): Specify the path for the executable output.
  - With `-c`: Specify the path for the object file output.
- `-c`: Create only the object file, skipping the link.
- When using `-c`, the object path is output to stdout.

Default behavior:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (path output)

Example of a freestanding kernel object:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` can also be used in the same way.

---

## 3.4 `install std`, `update std`

Commands for installing/updating the standard library.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Global Options

## 4.1 Optimization

Allowed values:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Example:

```bash
wavec -O3 run main.wave
```

---

## 4.2 Debug output

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

Allowed items:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Link options

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` or `--link <lib>`
- `-L<path>` or `-L <path>`

Internally, `wavec` passes them in the form `-l<lib>`, `-L<path>` during linking.

---

## 4.4 External Dependency Options (Important)

These are options for interpreting external imports (`pkg::...`).

### `--dep-root <dir>`

Adds candidate package root directories.

```bash
wavec run app.wave --dep-root .vex/dep
```

When looking for the `math` package:

- Check `.vex/dep/math`

Can be specified multiple times:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Locks the package name to a specific path.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Rules:

- `name` format: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` must be in `name=path` format
- Error if the same package name is specified redundantly

---

## 4.5 Backend options (`--llvm`, `--whale`)

Backend control options are interpreted only after `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Supported items (summary):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (repeatable)
- `-C no-default-libs`

The major targets according to `wavec print target-list` are:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` is currently a reserved dummy flag, and the actual backend pipeline is not yet implemented (TODO).

---

## 5. Import Interpretation Rules

Wave imports are branched into the following three types.

1. Local import
2. Standard import
3. External package import

## 5.1 Local

```wave
import("foo");
import("path/to/mod.wave");
```

Finds `<path>.wave` from the base file directory.

## 5.2 Standard

```wave
import("std::io::format");
```

Uses the `~/.wave/lib/wave/std/...` path.

## 5.3 External Package

```wave
import("math::add");
import("json::parser::core");
```

Format:

- At least two segments `package::module` needed

Order of determining package root:

1. Explicit mapping with `--dep name=path`
2. Search `<root>/<package>` in each `--dep-root`

If the same package is found on multiple dep-roots simultaneously:

- No automatic selection, results in an **ambiguity error**
- Must be fixed with `--dep name=path`

Module file search order:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Example:

```wave
import("math::core::vec");
```

Search:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Practical Examples of External Import

### 6.1 Single dep-root

Directory:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Code:

```wave
import("math::add");
```

Execution:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Resolving Ambiguities

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

An error occurs if `math` is present on both sides. Fix it as shown below.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Role Separation with Vex

Recommended Structure:

- `wavec`: Compilation/Linking/Execution + Specified Dependency Resolution
- `vex`: Dependency Installation/Management followed by `wavec ... --dep-root ... --dep ...` Call

Example:

```bash
# Internally handled by vex
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

This model keeps the compiler simple and deterministic, while the package manager handles automation.

---

## 8. Quick Reference

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
