---
sidebar_position: 6
---

# `wavec` CLI リファレンス

この文書は、**現在のWaveコンパイラ（`wavec`）実装基準**のCLI動作を詳細に説明します。

核心原則:

- `wavec` はコンパイラです。
- パッケージのインストール/解決（ロックファイル、レジストリ、ダウンロード）は `wavec` の責任ではありません。
- 外部依存性は `wavec` 実行時に **明示的CLI引数** で渡します。

---

## 1. 基本形式

```bash
wavec [グローバルオプション] <コマンド> [コマンドオプション]
```

例:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. コマンド解析ルール（重要）

`wavec` は全体の引数から **global option** を最初にスキャンした後に、残りの引数で `<command>` を解釈します。

つまり、global option の位置は柔軟です。

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

上記の3つはすべて有効です。

`--` を使用すると、その後は global option のスキャンを停止し、コマンド領域に渡します。

```bash
wavec -- run main.wave
```

---

## 3. コマンド

## 3.1 `run <file>`

Wave ファイルをコンパイルして実行します。

```bash
wavec run hello.wave
```

動作:

1. ソース解析 + インポート拡張
2. LLVM IR 生成
3. ネイティブバイナリリンク (`target/<file_stem>`)
4. 実行

特徴:

- 実行されたプログラムの終了コードを `wavec` が伝達します。

---

## 3.2 `build <file>`

実行ファイル (exe) を生成します。

```bash
wavec build app.wave
```

出力バイナリ:

- `target/<file_stem>`

## 3.3 `build` オプション (`-o`, `-c`)

`build` コマンドは出力ファイル名と出力形式をオプションで制御できます。

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: 出力ファイル名を指定します。
  - デフォルト (`-c` なし): 実行ファイルの出力パスを指定
  - `-c` と共に: オブジェクトファイルの出力パスを指定
- `-c`: リンクを省略し、オブジェクトファイルのみを生成します。
- `-c` 使用時はオブジェクトパスを stdout に出力します。

デフォルト動作:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (パス出力)

フリースタンディングカーネルオブジェクトの例:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`、`riscv64-unknown-none-elf`も同様に使用できます。

---

## 3.4 `install std`, `update std`

標準ライブラリのインストール/アップデートコマンドです。

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. グローバルオプション

## 4.1 最適化

許可される値:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

例:

```bash
wavec -O3 run main.wave
```

---

## 4.2 デバッグ出力

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

許可される項目:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 リンクオプション

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` または `--link <lib>`
- `-L<path>` または `-L <path>`

`wavec`はリンク時に内部的に `-l<lib>`, `-L<path>` 形式で渡します。

---

## 4.4 外部依存オプション（重要）

外部import（`pkg::...`）解釈用オプションです。

### `--dep-root <dir>`

パッケージルートディレクトリの候補を追加します。

```bash
wavec run app.wave --dep-root .vex/dep
```

パッケージ `math` を探すとき:

- `.vex/dep/math` を検査

複数回指定可能:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

パッケージ名を特定のパスに固定します。

```bash
wavec run app.wave --dep math=.vex/dep/math
```

規則:

- `name` 形式: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` は必ず `name=path` 形式
- 同じパッケージ名を重複指定するとエラー

---

## 4.5バックエンドオプション (`--llvm`, `--whale`)

バックエンド制御オプションは `--llvm` の後でのみ解釈されます。

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

サポート項目（概要）:

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (繰り返し可能)
- `-C no-default-libs`

現在の `wavec print target-list` 基準の主要ターゲット:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` は現在予約されたダミーフラグであり、実際のバックエンドパイプラインはまだ未実装（TODO）です。

---

## 5. Import解釈規則

Wave importは次の3つに分岐します。

1. ローカルimport
2. std import
3. 外部パッケージimport

## 5.1 ローカル

```wave
import("foo");
import("path/to/mod.wave");
```

基準ファイルディレクトリから`<path>.wave`を探します。

## 5.2 std

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...`パスを使用します。

## 5.3 外部パッケージ

```wave
import("math::add");
import("json::parser::core");
```

形式：

- 最低限 `package::module` の2セグメントが必要

パッケージルートの決定順序：

1. `--dep name=path` の指定マッピング
2. 各`--dep-root`から`<root>/<package>`を検索

同じパッケージが複数のdep-rootで同時に発見された場合：

- 自動選択せずに**曖昧さエラー**
- `--dep name=path`で固定する必要があります

モジュールファイル探索順序：

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

例：

```wave
import("math::core::vec");
```

探索：

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. 外部インポート実践例

### 6.1 単一dep-root

ディレクトリ：

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

コード：

```wave
import("math::add");
```

実行：

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 曖昧さの解消

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

両方に`math`があるとエラーが出ます。 以下のように固定してください。

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vexとの役割分担

推奨構造：

- `wavec`: コンパイル/リンク/実行 + 指定された依存性の解釈
- `vex`: 依存性のインストール/管理後 `wavec ... --dep-root ... --dep ...` の呼び出し

例：

```bash
# 内部的にvexを実行
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

このモデルは、コンパイラをシンプルで決定的に保ちつつ、パッケージマネージャが自動化を担当します。

---

## 8. クイックリファレンス

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: 予約済み、未実装
```
