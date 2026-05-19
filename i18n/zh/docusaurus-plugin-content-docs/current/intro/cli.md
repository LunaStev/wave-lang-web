---
sidebar_position: 6
---

# `wavec` CLI 参考

`wavec` 是类似 `rustc` 或 `cc` 的低层编译器。包解析、lockfile、registry 和 workspace 管理应由 Vex 等上层工具负责。

## 基本形式

```bash
wavec [global-options] <command> [command-options] [input...]
```

## 核心命令

`build <input...>` 通过标志控制编译、检查、链接和可选执行。`check <file>` 是 `build <file> --emit=check` 的别名。`run <file>` 是 `build <file> --run` 的别名。`print <item>` 输出 target、emit kind、input type、默认 linker 等 capability。

## 输入规则

`build` 接受一个或多个输入。扩展名会自动推断：`.wave` 为 Wave source，`.ll` 为 LLVM IR，`.bc` 为 bitcode，`.s` 和 `.asm` 为 assembly，`.o` 和 `.obj` 为 object。`--input-type=<kind>` 会强制所有输入使用同一类型。

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit 规则

`--emit` 支持 `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`。`check` 是控制模式，不是普通产物，因此只能单独使用。如果 `bin` 与其他产物一起生成，`-o` 只命名最终链接后的二进制，中间产物遵循 `--out-dir` 或默认路径。

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## 运行编译结果

`--run` 只在恰好生成一个可运行的 `bin` 产物时允许使用。它不能与 `--shared` 或不可运行的 emit 模式组合。`--` 之后的参数会传给生成的可执行文件。

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding 和 bare-metal

`--freestanding` 面向 kernel、bootloader、firmware 和 embedded target。它关闭默认 `libc`/`libm` 链接，禁用 backend red zone，并生成适合无 runtime 环境的代码。

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend 控制

精确控制可使用 `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, `-C no-default-libs`。

## Capability 查询

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker` 用于让 Vex 等工具在不猜测的情况下验证已安装的 compiler。

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
