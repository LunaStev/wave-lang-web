---
sidebar_position: 1
---

# インストール

## インストール方法

ターミナルで次のコマンドを実行します:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### 例

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## インストール中に実行される作業

- LLVM 14および関連パッケージのインストール（`apt-get`）

- `/usr/lib/libllvm-14.so` シンボリックリンクの作成

- `LLVM_SYS_140_PREFIX` 環境変数の設定（`~/.bashrc`）

- 指定されたバージョンのWave `.tar.gz` のダウンロード

- 解凍後、`wavec`を`/usr/local/bin`にインストール

- `wavec --version` でインストールを確認

## インストールの確認

```bash
wavec --version
```

## Wave削除ガイド（`uninstall.sh`）

### 削除方法

ターミナルで次のコマンドを実行します:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
