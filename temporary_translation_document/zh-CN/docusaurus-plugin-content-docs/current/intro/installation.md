---
sidebar_position: 1
---

# 安装

## Linux 安装方法

### 下载和解压
从 GitHub 的官方发布页面下载最新版本的 Wave。

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM 设置 (Pre Beta 版本)
Wave 的 Pre Beta 版本暂时使用 LLVM，因此请使用以下命令安装 LLVM：

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### 验证安装
要检查安装是否完成，请在终端中输入以下命令：

```bash
wavec --version
```

如果显示版本信息，则安装成功完成。