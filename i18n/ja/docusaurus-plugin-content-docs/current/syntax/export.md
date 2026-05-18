---
sidebar_position: 9.5
---

# export

`export` は、Wave で実装した関数を外部リンカーシンボルとして公開するための文法です。
`extern` が外部関数を Wave に取り込む宣言であるのに対し、`export` は Wave 関数を C、Rust、C++、Zig などのネイティブ言語からオブジェクトファイル経由で呼び出せるようにします。

---

## 概要

Wave の FFI には二つの方向があります。

- `extern(c)` は、外部ライブラリが提供する関数を Wave から呼び出すための宣言です。
- `export(c)` は、Wave の関数本体を外部 ABI シンボルとして出力します。

二つの形式は同じ ABI ヘッダーの形を共有しますが、意味は逆です。
`extern` では関数本体が Wave の外にあります。
`export` では関数本体が Wave の中にあります。

現在サポートされる export ABI は `c` のみです。

---

## 関数単位の export

基本形は次の通りです。

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

これは `add` という公開シンボルを出力します。
生成されたオブジェクトファイルは、C ABI を期待する外部コードとリンクできます。

---

## シンボル名

Wave の関数名とエクスポートされるリンカーシンボル名は別にできます。

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

この場合、Wave 内での名前は `add_i32` ですが、オブジェクトファイルでは `wave_add_i32` が公開されます。
外部言語では公開シンボル名を宣言して呼び出す必要があります。

---

## ブロック単位の export

同じ ABI を使う複数の関数はブロックにまとめられます。

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

ブロック export は各関数名をそのまま公開シンボルとして使います。
`export(c, "symbol") { ... }` は許可されません。複数の関数が同じ別名を持つとリンカーシンボルが衝突するためです。

---

## C から呼び出す

Wave ファイルをオブジェクトファイルとしてビルドします。

```bash
wavec build math.wave --emit=obj -o math.o
```

C 側で公開シンボルを宣言します。

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

その後、通常のリンカーで C コードと Wave オブジェクトファイルをリンクします。

```bash
cc main.c math.o -o app
```

---

## extern と export の違い

`extern(c)` は Wave が外部シンボルを使うことを意味します。

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` は外部コードが Wave シンボルを使えることを意味します。

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

どちらも FFI に属しますが、方向が異なります。

---

## 制限事項

現在の `export` には次の制限があります。

- `export(c)` のみサポートします。
- export された関数はジェネリックにできません。
- ブロック export では共有シンボル別名を使えません。
- 安定した相互運用のため、現時点では整数、浮動小数点、真偽値、ポインターの引数と戻り値を推奨します。
- struct や array などの集約型 export ABI は、より厳密な規則が必要で、将来のバージョンで安定化される可能性があります。
- `export` は主にオブジェクトやライブラリを作るときに有用です。通常の実行ファイルだけを作る場合はほとんど不要です。

---

## 推奨される用途

`export` は次の場合に使います。

- Wave のユーティリティ関数を C ABI ライブラリとして提供する。
- Rust、C、C++、Zig などのネイティブ言語から Wave 関数を呼び出す。
- Wave で書いた `front`、`utils`、runtime のないネイティブモジュールを既存のビルドシステムへ段階的に接続する。
- Vex や他のビルドツールが Wave オブジェクトファイルを外部プロジェクトへリンクする。
