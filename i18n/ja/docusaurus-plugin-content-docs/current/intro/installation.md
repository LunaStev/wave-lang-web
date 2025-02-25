---
sidebar_position: 1
---

# インストール

## Linux のインストール方法

### ダウンロードと解凍
GitHub の公式リリースページから最新バージョンの Wave をダウンロードします。

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM の設定（Pre Beta バージョン）
Wave の Pre Beta バージョンでは一時的に LLVM を使用するため、次のコマンドで LLVM をインストールします。

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### インストール確認
インストールが完了したか確認するには、ターミナルで次のコマンドを入力してください。

```bash
wave --version
```

バージョン情報が表示されれば、インストールは正常に完了しています。