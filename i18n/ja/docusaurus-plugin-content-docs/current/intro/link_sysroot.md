---
sidebar_position: 8
---

# リンクsysroot手動除去 (`-C link-sysroot`)

この文書は、`wavec`でリンクユニットsysrootを**明示的に除去**する方法を説明します。

核心原則:

- `--sysroot=<path>`: コンパイル単位(clang `-c`) sysroot
- `-C link-sysroot=<path>`: リンク単位(linker) sysroot

つまり、コンパイルとリンクのsysrootを分離します。

---

## 1. なぜ必要か

クロスリンクで`-C linker=<path>`を使うと、リンクドライバ（例：`aarch64-linux-gnu-gcc`）が参照するランタイムパス(`crt1.o`, `libc`, `libm`)を別途指定しなければならない場合が多いです。

この場合、リンクsysrootは自動推論されず、CLIで明示的に伝達されるよう設定します。

---

## 2. オプション定義

## 2.1 `-C link-sysroot=<path>`

リンク単位に`--sysroot=<path>`を入力します。

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

内部的には`-C link-arg=--sysroot=<path>`と同じ意味です。

## 2.2 `-C link-arg=--sysroot=<path>`

既存のrawリンク引数方式も継続サポートします。

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. 検証規則

リンク単位が必要なビルドで次の条件が同時に成立するとusage errorで終了します。

1. `-C linker=...` 使用
2. `--sysroot=<path>` 使用
3. リンクsysroot(`-C link-sysroot`または`-C link-arg=--sysroot=...`) 未指定

エラーメッセージ例:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. 使用例示

## 4.1 AArch64 Linux クロスリンク

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 raw リンク引数方式

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 リンクがないビルド (`--emit=obj`)

リンク単位がなければリンクsysrootは必要ありません。

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. 整理

- `--sysroot`はコンパイル単位除去
- `-C link-sysroot`はリンク単位除去
- 自動推論より明示的除去を優先
