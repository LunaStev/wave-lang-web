---
sidebar_position: 1
---

# 安装

## 安装方法

Wave 可以通过提供的安装脚本轻松安装。
在终端中执行以下命令将自动安装指定版本的 Wave 编译器（`wavec`）。

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

安装脚本会检查系统环境，然后自动配置运行 Wave 所需的依赖关系和编译器。
如果未指定版本，将安装最新的稳定版本或根据指定标准的默认版本。

## 安装示例

要安装最新版本，请按以下方式执行。

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

如果要安装特定版本，请使用 `--version` 选项。

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

也可以指定像夜间构建这样更详细的版本。

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## 安装过程中执行的操作

安装脚本会自动处理多个步骤，以确保 Wave 能够正常运行。
首先，通过 `apt-get` 安装与 LLVM 14 相关的必需包。
然后，为了确保系统能够稳定引用 LLVM，创建到 `/usr/lib/libllvm-14.so` 的符号链接。

为了让 Wave 编译器正确找到 LLVM，设置 `LLVM_SYS_140_PREFIX` 环境变量，此设置将添加到 `~/.bashrc` 中，以便在后续的终端会话中保持。

然后下载并解压用户指定版本的 Wave 包（`.tar.gz`）。
解压后，将 `wavec` 可执行文件安装到 `/usr/local/bin`，以便在系统的任何地方都可以使用 `wavec` 命令。

安装完成后，可以通过 `wavec --version` 命令验证安装是否成功。

## 确认安装

安装完成后，您可以通过运行下面的命令来检查 Wave 编译器是否已正确安装。

```bash
wavec --version
```

如果执行命令时显示已安装的 Wave 版本信息，则表示安装成功。

---

## Wave卸载指南（`uninstall.sh`）

如果想从系统中移除 Wave，可以使用提供的卸载脚本。
该脚本的作用是清理安装过程中添加的文件和设置。

### 卸载方法

在终端执行以下命令。

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

完成卸载后，wavec 命令将不再可用，Wave 相关的可执行文件和设置都将从系统中删除。