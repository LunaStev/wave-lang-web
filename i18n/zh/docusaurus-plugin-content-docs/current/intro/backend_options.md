---
sidebar_position: 7
---

# 后端选项（`--llvm`，`--whale`）

本文档描述了 `wavec` 的后端相关CLI选项。

重要原则：

- `wavec` 不是包管理器。
- 后端操作尽可能通过 **显式参数** 进行控制。
- 后端详细选项仅在`--llvm`之后解析。

---

## 1. 后端选择器

## 1.1 `--llvm`

`--llvm` 本身是后端选项块的起始标记。

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

如上所示，`--llvm`之后的参数仅支持作为LLVM后端设置处理。

## 1.2 `--whale`（当前TODO）

当前`--whale`是**预留的虚设标志**。

- 解析器可以识别。
- 实际的Whale后端流水线尚未连接。
- 使用时以TODO错误终止。

---

## 2. `--llvm`之后支持的选项

## 2.1 目标/代码生成

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

应用点：

- IR 生成（TargetMachine）阶段：`target`、`cpu`、`features`
- 对象/链接阶段（调用 clang）：`target`、`abi`

当前默认将记录的主要目标三重体：

- Linux：`x86_64-unknown-linux-gnu`，`aarch64-unknown-linux-gnu`
- Darwin：`x86_64-apple-darwin`，`aarch64-apple-darwin`
- 独立：`x86_64-unknown-none-elf`，`aarch64-unknown-none-elf`，`riscv64-unknown-none-elf`

## 2.2 工具链/链接

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>`（可重复）
- `-C no-default-libs`

应用点：

- 对象生成（clang `-c`）时使用 `--sysroot`
- 在链接阶段覆盖链接器，注入原始链接参数
- 使用 `-C no-default-libs` 时自动禁用 `-lc -lm`

---

## 3. 解析规则（重要）

如果不使用 `--llvm`，后台详细选项不会被解释为全局选项。

例如，以下是错误的。

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

必须如下所示撰写。

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. 使用示例

生成基本对象：

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

独立内核对象生成：

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

自定义链接：

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

禁用 libc/libm 自动链接：

```bash
wavec --llvm -C no-default-libs build app.wave
```

使用 `--freestanding` 时，其效果与 `-C no-default-libs` 一样，适用于不依赖运行时默认库的构建，例如内核/启动代码。

---

## 5. 状态摘要

- LLVM 后端: 运行中
- Whale 后端：已预订（TODO），未实现
