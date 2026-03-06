---
sidebar_position: 6
---

# `wavec` CLI参考

本文详述了**基于当前Wave编译器(`wavec`)实现标准**的CLI操作。

核心原则：

- `wavec`是编译器。
- 包的安装/解决（lockfile、registry、下载）不属于`wavec`的责任。
- 外部依赖通过执行`wavec`时的**显式CLI参数**传递。

---

## 1. 基本格式

```bash
wavec [全局选项] <命令> [命令选项]
```

例如：

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. 命令解析规则（重要）

`wavec`首先扫描所有参数中的**全局选项**，然后解释剩余参数为`<command>`。

即全局选项的位置是灵活的。

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

以上三个都是有效的。

使用`--`后，将停止全局选项扫描并转到命令区域。

```bash
wavec -- run main.wave
```

---

## 3. 命令

## 3.1 `run <file>`

编译并运行Wave文件。

```bash
wavec run hello.wave
```

操作：

1. 源解析 + 导入扩展
2. 生成LLVM IR
3. 本机二进制链接（`target/<file_stem>`）
4. 执行

特点:

- 执行的程序的退出代码由`wavec`传递。

---

## 3.2 `build <文件>`

生成可执行文件(exe)。

```bash
wavec build app.wave
```

输出二进制文件:

- `target/<文件名>`

## 3.3 `build`选项(`-o`, `-c`)

`build`命令可以用选项控制输出文件名和格式。

```bash
wavec build app.wave -o ./bin/app\nwavec build app.wave -c\nwavec build app.wave -c -o ./build/app.o
```

- `-o <文件>`: 指定输出文件名。
  - 默认（无`-c`）：指定可执行文件输出路径
  - 与`-c`一起：指定目标文件输出路径
- `-c`：省略链接，仅生成目标文件。
- 使用`-c`时，将目标路径输出到标准输出。

默认操作:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o`（路径输出）

---

## 3.4 `install std`, `update std`

标准库安装/更新命令。

```bash
wavec install std\nwavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help\nwavec --version
```

---

## 4. 全局选项

## 4.1 优化

允许值:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

例如：

```bash
wavec -O3 run main.wave
```

---

## 4.2 调试输出

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

允许项目:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 链接选项

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` 或 `--link <lib>`
- `-L<路径>` 或 `-L <路径>`

`wavec`在链接时内部传递为`-l<lib>`、`-L<path>`形式。

---

## 4.4 外部依赖选项（重要）

用于外部import(`pkg::...`)解析的选项。

### `--dep-root <dir>`

添加包根目录候选项。

```bash
wavec run app.wave --dep-root .vex/dep
```

寻找包`math`时：

- 检查`.vex/dep/math`

可以多次指定：

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

将包名固定到特定路径。

```bash
wavec run app.wave --dep math=.vex/dep/math
```

规则：

- `name`格式：`[A-Za-z_][A-Za-z0-9_]*`
- `--dep`必须是`name=path`格式
- 重复指定相同包名会导致错误

---

## 5. Import解析规则

Wave import分为以下三种：

1. 本地import
2. std import
3. 外部包import

## 5.1 本地

```wave
import("foo");
import("path/to/mod.wave");
```

从基准文件目录中查找`<path>.wave`。

## 5.2 std

```wave
import("std::io::format");
```

使用路径`~/.wave/lib/wave/std/...`。

## 5.3 外部包

```wave
import("math::add");
import("json::parser::core");
```

格式：

- 至少需要`package::module`两段

包根决定顺序：

1. `--dep name=path`明确映射
2. 从每个`--dep-root`搜索`<root>/<package>`

如果在多个dep-root中同时发现相同的包：

- 不自动选择，**产生歧义错误**
- 必须用`--dep name=path`固定

模块文件探索顺序：

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

例如：

```wave
import("math::core::vec");
```

探索：

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. 外部import实际示例

### 6.1 单一dep-root

目录：

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

代码：

```wave
import("math::add");
```

执行:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 消除歧义

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

两者都有`math`时会出错。 如下面那样固定。

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. 与Vex的角色分离

推荐结构：

- `wavec`: 编译/链接/执行 + 指定的依赖解析
- `vex`: 安装/管理依赖后 `wavec ... --dep-root ... --dep ...` 调用

例如：

```bash
# 内部由vex执行
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

此模式保持编译器简单和确定，由包管理器负责自动化。

---

## 8. 快速参考

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
```
