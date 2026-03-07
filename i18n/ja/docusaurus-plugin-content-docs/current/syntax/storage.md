---
sidebar_position: 12
---

# グローバル/ローカル保存ルール

Waveはストレージの寿命と可変性をキーワードレベルで明確に区別します。

## 要約

- グローバル定数：`const`
- グローバル変数：`static`
- ローカル変数：`var`、`let`、`let mut`

つまり、トップレベルでは`const`と`static`のみを宣言し、
関数/ブロック内部のローカルには`var`と`let`系のみを宣言します。

## グローバル定数：`const`

`const`はコンパイル時の定数として扱われ、再割り当てはできません。

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## グローバル変数：`static`

`static`はグローバルのストレージを持つ変数です。
再割り当てが可能で、初期値を与えなければ型の0値で初期化されます。

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## ローカル変数：`var` / `let`

関数やブロック内部ではローカル変数キーワードのみを使用します。

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## 制約事項

- `var`、`let`はトップレベルで使用できません。
- `const`、`static`は関数/ブロック内部で使用できません。
- `let`は不変であり、再割り当てできません。
