---
sidebar_position: 1
---

# 安装

## 安装方法
在终端中运行以下命令：

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### 示例

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## 安装过程中执行的操作
- 安装 LLVM 14 及相关软件包（通过 `apt-get`）

- 创建指向 `/usr/lib/libllvm-14.so` 的符号链接

- 设置环境变量 LLVM_SYS_140_PREFIX（写入 `~/.bashrc`）

- 下载指定版本的 Wave `.tar.gz` 文件

- 解压并将 `wavec` 安装到 `/usr/local/bin`

- 通过命令 `wavec --version` 验证是否安装成功

## 验证安装

```bash
wavec --version
```

## Wave 卸载指南（`uninstall.sh`）
### 卸载方法
在终端中运行以下命令：

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
