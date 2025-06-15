---
sidebar_position: 1
---

# Installation

## How to Install on Linux

### Download and Extract
Download the latest version of Wave from the official GitHub releases page.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM Setup (as of Pre-Beta)
Since the Pre-Beta version of Wave temporarily uses LLVM, install it using the following commands:

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### Verify Installation
To verify that the installation was successful, enter the following command in your terminal:

```bash
wavec --version
```

If the version information is displayed, the installation was successful.