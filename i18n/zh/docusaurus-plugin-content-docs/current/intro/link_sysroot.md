---
sidebar_position: 8
---

# 手动控制链接 sysroot (`-C link-sysroot`)

本文档说明如何在 `wavec` 中**明确控制**链接阶段的 sysroot。

核心原则：

- `--sysroot=<path>`: 编译阶段(clang `-c`) sysroot
- `-C link-sysroot=<path>`: 链接阶段(linker) sysroot

即，分别处理编译和链接的 sysroot。

---

## 1. 为什么需要

在交叉链接中使用 `-C linker=<path>` 时，经常需要单独指定链接驱动程序（例如：`aarch64-linux-gnu-gcc`）引用的运行时路径（`crt1.o`、`libc`、`libm`）。

此时，不自动推断链接 sysroot，而是在 CLI 中明确传递。

---

## 2. 选项定义

## 2.1 `-C link-sysroot=<path>`

向链接阶段注入 `--sysroot=<path>`。

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

在内部，等同于 `-C link-arg=--sysroot=<path>`。

## 2.2 `-C link-arg=--sysroot=<path>`

继续支持现有的原始链接参数方法。

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. 验证规则

在需要链接阶段的构建中，如果以下条件同时满足，则完成 usage error。

1. 使用 `-C linker=...`
2. 使用 `--sysroot=<path>`
3. 未指定链接 sysroot(`-C link-sysroot` 或 `-C link-arg=--sysroot=...`)

错误消息示例：

```text
使用 -C linker=... 时，--sysroot=<path> 仅用于编译阶段；通过 -C link-sysroot=<path> (或 -C link-arg=--sysroot=<path>) 明确传递链接器 sysroot
```

---

## 4. 使用示例

## 4.1 AArch64 Linux 交叉链接

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

## 4.2 原始链接参数方法

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 无链接的构建 (`--emit=obj`)

如果没有链接阶段，则不需要链接 sysroot。

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. 总结

- `--sysroot` 用于编译阶段控制
- `-C link-sysroot` 用于链接阶段控制
- 优先于自动推断的明确控制
