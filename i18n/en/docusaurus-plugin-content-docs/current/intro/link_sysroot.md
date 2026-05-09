---
sidebar_position: 8
---

# Manual control of link sysroot (`-C link-sysroot`)

This document describes how to **explicitly control** the link stage sysroot in `wavec`.

Key Principles:

- `--sysroot=<path>`: compile-stage (clang `-c`) sysroot
- `-C link-sysroot=<path>`: link-stage (linker) sysroot

In other words, handle the sysroot of compile and link separately.

---

## 1. Why is it necessary?

When using `-C linker=<path>` in cross linking, it is often necessary to separately specify the runtime paths (`aarch64-linux-gnu-gcc`, `crt1.o`, `libc`) referenced by the link driver (e.g., `libm`).

At this point, the link sysroot is not automatically inferred and is designed to be explicitly passed on the CLI.

---

## 2. Definition of Options

## 2.1 `-C link-sysroot=<path>`

Inject `--sysroot=<path>` into the link stage.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Internally, it has the same meaning as `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

The existing raw link argument method continues to be supported.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Validation Rules

If the following conditions are simultaneously met in a build requiring a link stage, it terminates with a usage error.

1. Use of `-C linker=...`
2. Use of `--sysroot=<path>`
3. Link sysroot not specified (`-C link-sysroot` or `-C link-arg=--sysroot=...`)

Example error message:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Usage Example

## 4.1 AArch64 Linux Cross Link

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 Raw Link Argument Method

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Build Without Link (`--emit=obj`)

If there is no link stage, a link sysroot is not required.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Summary

- `--sysroot` is compile-stage control
- `-C link-sysroot` is link-stage control
- Prefer explicit control over automatic inference
