---
sidebar_position: 7
---

# インラインアセンブリ

## 紹介

Waveのインラインアセンブリは`asm { ... }`ブロックとして記述します。
Waveコード内でレジスタ、メモリ、システムコール経路を直接制御できます。

現在サポートされているターゲット:

- Linux `x86_64`
- macOS (Darwin) `arm64`

Windowsはまだサポートされていません。

---

## 基本形態

`asm`は\*\*文(statement)\*\*としても、\*\*式(expression)\*\*としても使用できます。

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

構成要素:

- 文字列行: 実際のアセンブリ命令
- `in(...)`: 入力オペランド
- `out(...)`: 出力オペランド
- `clobber(...)`: 破壊されるレジスタ/状態/メモリのヒント

---

## `asm`文 (Statement)

戻り値がなくてもよい場合は通常の文として使用します。

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

`out(...)`は複数を置くことができます。

---

## `asm`式 (Expression)

値を直接生成する式として使用できます。

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

注意:

- `asm`式は\*\*正確に1つの`out(...)`\*\*のみ許可します。

---

## `in(...)` / `out(...)`制約式

`in("...")`, `out("...")`の文字列は次のうちのいずれかです。

1. 具体的なレジスタ

- 例: `"rax"`, `"rdi"`, `"x0"`, `"w1"`

2. 制約クラス(constraint class)

- 例: `"r"`, `"m"`, `"rm"`

例:

```wave
in("r") &buf
out("rax") ret
```

出力対象(`out(...) target`)は現在の実装基準として次のパターンを推奨します。

- 変数: `out("rax") ret`
- ポインタ参照外し: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)`は一度に複数の項目を受け取ることができ、何度も書くことができます。

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

主要項目:

- レジスタ: `"rax"`, `"x0"` など
- 特殊: `"memory"`, `"cc"`(ターゲット別内部正規化)

コンパイラは保守的安全モードで基本的なclobberを自動で追加します。
(`memory`、フラグ/cc系など)

---

## オペランドプレースホルダー (`$0`, `$1`, ...)

命令文字列内でオペランドを参照する際に`$N`を使用します。

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

参考:

- `%0`スタイルを使用しても、内部的に`$0`スタイルに変換されます。

---

## 入力オペランドの現在のサポート範囲

`in(...)`値は現在次の形式をサポートしています。

- 変数識別子
- 整数リテラル
- 文字列リテラル
- `&identifier`
- `deref identifier`
- 負の整数/実数リテラル

複雑な一般表現は制限される場合があるため、必要に応じて一時変数に入れて渡すパターンを推奨します。

---

## 段落1

インラインアセンブリは型システムの保護を部分的に回避します。
不正なレジスターの指定、制約式の競合、clobberの欠如は、不正なコード生成やランタイム動作不良を引き起こす可能性があります。

推奨事項:

- ターゲットABIと呼び出し規約を最初に確定
- 入力/出力レジスターとclobberを明示的に管理
- メモリに直接触れる場合は`clobber("memory")`を一緒に宣言
