---
sidebar_position: 1
---

# 安裝

## Linux 安裝方法

### 下載和解壓
從 GitHub 的官方發佈頁面下載最新版本的 Wave。

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM 設置 (Pre Beta 版本)
Wave 的 Pre Beta 版本暫時使用 LLVM，因此請使用以下命令安裝 LLVM：

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### 驗證安裝
要檢查安裝是否完成，請在終端中輸入以下命令：

```bash
wavec --version
```

如果顯示版本資訊，則安裝成功完成。