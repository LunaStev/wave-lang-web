---
sidebar_position: 1
---

# 安装

## 安装方法

在终端执行以下命令：

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### 例子

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

- 安装LLVM 14及相关包 (`apt-get`)

- 创建`/usr/lib/libllvm-14.so`的符号链接

- 设置`LLVM_SYS_140_PREFIX`环境变量（`~/.bashrc`）

- 下载指定版本的Wave `.tar.gz`

- 解压后将`wavec`安装到`/usr/local/bin`

- 通过`wavec --version`确认安装

## 确认安装

```bash
wavec --version
```

## Wave卸载指南（`uninstall.sh`）

### 卸载方法

在终端执行以下命令：

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
