---
sidebar_position: 1
---

# インストール

## Linuxへのインストール方法

### ダウンロードと解凍
公式のGitHubリリースページから最新バージョンのWaveをダウンロードしてください。

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVMの設定（Pre-Beta時点）
Pre-Beta版のWaveは一時的にLLVMを使用しているため、以下のコマンドでLLVMをインストールしてください：

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### インストール確認
インストールが正しく行われたか確認するには、ターミナルで次のコマンドを入力してください：

```bash
wavec --version
```

バージョン情報が表示されれば、インストールは正常に完了しています。