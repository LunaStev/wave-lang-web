---
sidebar_position: 1
---

# インストール

## インストール方法

ターミナルで以下のコマンドを実行してください：

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### 例

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## インストール中に実行される処理
- LLVM 14 および関連パッケージのインストール（`apt-get`使用）

- `/usr/lib/libllvm-14.so` へのシンボリックリンクを作成

- 環境変数 `LLVM_SYS_140_PREFIX` を設定（`~/.bashrc`）

- 指定されたバージョンの Wave `.tar.gz` ファイルをダウンロード

- 解凍して wavec を `/usr/local/bin` にインストール

- `wavec --version` でインストール確認

## インストール確認

```bash
wavec --version
```

## Wave アンインストールガイド（`uninstall.sh`）
### アンインストール方法
ターミナルで以下のコマンドを実行してください：

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
