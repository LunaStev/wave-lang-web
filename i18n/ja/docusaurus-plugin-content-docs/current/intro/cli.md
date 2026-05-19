---
sidebar_position: 6
---

# `wavec` CLI リファレンス

`wavec` は `rustc` や `cc` と同じ位置づけの低レベルコンパイラです。パッケージ解決、lockfile、registry、workspace 管理は Vex のような上位ツールの責任です。

## 基本形式

```bash
wavec [global-options] <command> [command-options] [input...]
```

## 主要コマンド

`build <input...>` はフラグでコンパイル、検査、リンク、任意の実行を制御します。`check <file>` は `build <file> --emit=check` の別名です。`run <file>` は `build <file> --run` の別名です。`print <item>` は target、emit kind、input type、既定 linker などの capability を出力します。

## 入力規則

`build` は 1 個以上の入力を受け取ります。拡張子から `.wave` は Wave source、`.ll` は LLVM IR、`.bc` は bitcode、`.s` と `.asm` は assembly、`.o` と `.obj` は object と推論します。`--input-type=<kind>` は全入力に同じ型を強制します。

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## emit 規則

`--emit` は `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` をサポートします。`check` は通常の成果物ではなく制御モードなので単独でのみ使えます。`bin` と他の成果物を同時に出す場合、`-o` は最終リンク済みバイナリだけに適用され、中間成果物は `--out-dir` または既定パスに従います。

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## 生成物の実行

`--run` は実行可能な `bin` 成果物が正確に 1 つ生成される場合のみ有効です。`--shared` や実行不能な emit モードとは併用できません。`--` 以降の引数は生成された実行ファイルに渡されます。

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding と bare-metal

`--freestanding` は kernel、bootloader、firmware、embedded target 向けです。既定の `libc`/`libm` リンクを無効化し、backend の red zone を無効化し、runtime のない環境に適したコードを生成します。

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Backend 制御

精密制御には `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, `-C no-default-libs` を使います。

## Capability 問い合わせ

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker` は、Vex のようなツールが推測せずに compiler を検証するためのコマンドです。

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
