---
sidebar_position: 7
---

# インラインアセンブリ

Wave のインラインアセンブリは `asm { ... }` ブロックで記述します。カーネル、UEFI ブートローダ、システムコール、ポート I/O、CPU 制御などの低レベルコード向けの機能です。

現在の対象は Linux `x86_64`/`aarch64`、Darwin `x86_64`/`aarch64`、Windows GNU `x86_64`、freestanding `x86_64`/`aarch64`/`riscv64` です。32 ビットターゲットはまだ未対応です。

## 基本形

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

文字列行は実際のアセンブリ命令です。`in(...)` は入力、`out(...)` は出力、`clobber(...)` は asm が変更する状態を宣言します。

## 文としての asm

文としての asm は式の値が不要な場所で使います。出力は複数持てます。

```wave
let mut ret: i64 = 0;
asm {
    "mov rax, 39"
    "syscall"
    out("rax") ret
    clobber("memory")
    clobber("flags")
}
```

## 式としての asm

式としての asm は値を生成し、現在は正確に 1 つの `out(...)` を要求します。`clobber("noreturn")` は式 asm では禁止です。

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## オペランドと制約

オペランドには具体的なレジスタまたは制約クラスを指定できます。x86_64 は `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`、AArch64 は `x0` ... `x30` と `w0` ... `w30`、RISC-V は `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN` を使います。共通クラスは `r`, `m`, `rm`, `i`, `ri`, `im`, `irm` です。同じ物理レジスタをオペランドと clobber の両方に指定することはできません。

## clobber 契約

`clobber("memory")` は asm がメモリを読み書きする可能性を示します。`clobber("flags")` と `clobber("cc")` はフラグ変更を示します。`clobber("stack")` はスタックや call/return 命令を使う場合に必要です。`clobber("nostack")` はスタックを触らない契約です。`clobber("noreturn")` は現在のブロックに戻らないことを示します。`stack` と `nostack` は同時に使えません。

## スタック規律

通常の asm はスタックを変更してはいけません。`call`, `push`, `pop`, `ret`, `rsp`/`esp` または `sp` の直接使用などは `clobber("stack")` が必要です。それでも戻る前にスタックポインタを復元する必要があります。

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## 戻らない asm

`jmp rax`, `jmp r11`, `br x0`, `jr ra` のような間接ジャンプには `clobber("noreturn")` が必要です。この clobber を持つ文 asm は IR ブロックを `unreachable` で終えます。

```wave
fun jump_to_kernel(entry: u64, boot_info: ptr<u8>, stack_top: u64) {
    asm {
        "mov rsp, rdx"
        "and rsp, -16"
        "mov rdi, rcx"
        "jmp rbx"
        in("rbx") entry
        in("rcx") boot_info
        in("rdx") stack_top
        clobber("stack")
        clobber("noreturn")
    }
}
```

## ローカルラベル

ローカルラベルへのジャンプは同じ asm/control-flow 経路内に留まるため、`noreturn` は不要です。

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## 出力先

安定している出力先は変数とポインタ変数の `deref` です。フィールドや配列へ出力する場合は、まず一時変数に受けてから保存してください。

```wave
out("rax") value
out("rax") deref ptr
```

## 制限事項

inline asm は常に副作用を持つものとして扱われます。複雑なスタック操作はまだ拒否される場合があります。関数ポインタと明示的な calling convention 型はまだ安定していないため、UEFI サービス呼び出しは当面 asm ラッパーを使うことがあります。
