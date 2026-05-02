---
sidebar_position: 7
---

# バックエンドオプション (`--llvm`, `--whale`)

このドキュメントは、`wavec` のバックエンド関連 CLI オプションについて説明します。

重要原則:

- `wavec` はパッケージマネージャではありません。
- バックエンド動作は、可能な限り **明示的な引数** で制御します。
- バックエンドの詳細オプションは `--llvm` の後でのみ解釈されます。

---

## 1. バックエンドセレクタ

## 1.1 `--llvm`

`--llvm` 自体はバックエンドオプションブロックの開始マーカーです。

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

上記のように、`--llvm` の後に来る引数のうち対応するものだけがLLVMバックエンド設定として処理されます。

## 1.2 `--whale` (現在TODO)

現在、`--whale` は **予約されたダミーフラグ** です。

- パーサは認識します。
- 実際のWhaleバックエンドパイプラインはまだ接続されていません。
- 使用時にTODOエラーで終了します。

---

## 2. `--llvm` の後でサポートされているオプション

## 2.1 ターゲット/コード生成

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

反映ポイント:

- IR生成（TargetMachine）ステップ：`target`、`cpu`、`features`
- オブジェクト/リンクステップ（clang呼び出し）：`target`、`abi`

現在基本的に文書化する主要なターゲットトリプルは:

- Linux: `x86_64-unknown-linux-gnu`、`aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`、`aarch64-apple-darwin`
- フリースタンディング: `x86_64-unknown-none-elf`、`aarch64-unknown-none-elf`、`riscv64-unknown-none-elf`

## 2.2 ツールチェーン/リンク

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (繰り返し可能)
- `-C no-default-libs`

反映ポイント:

- オブジェクト生成（clang `-c`）で`--sysroot`
- リンクステップでのリンカオーバーライドと生リンク引数注入
- `-C no-default-libs`使用時の自動`-lc -lm`無効化

---

## 3. コマンド解析ルール（重要）

`--llvm`を使わないとバックエンドの詳細オプションはグローバルオプションとして解釈されません。

例えば以下はエラーです。

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

必ず以下のように記述してください。

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. 使用例

基本オブジェクト生成:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

フリースタンディングカーネルオブジェクト生成:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

カスタムリンク:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm自動リンク無効化:

```bash
wavec --llvm -C no-default-libs build app.wave
```

`--freestanding`を使用すると内部的に`-C no-default-libs`と同じ方向で動作し、カーネル/ブートコードのようにランタイム標準ライブラリを仮定しないビルドに合わせられます。

---

## 5. 状態要約

- LLVMバックエンド：動作中
- Whaleバックエンド：予約済み（TODO）、未実装
