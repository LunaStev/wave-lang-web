---
sidebar_position: 1
---

# 安装

## 在 Linux 上的安装方法

### 下载并解压
从官方 GitHub 发布页面下载最新版本的 Wave。

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### 配置 LLVM（基于 Pre-Beta 版本）
由于 Wave 的 Pre-Beta 版本暂时使用 LLVM，请使用以下命令安装：

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### 验证安装
要确认是否安装成功，请在终端中输入以下命令：

```bash
wavec --version
```

如果显示版本信息，说明安装已成功完成。