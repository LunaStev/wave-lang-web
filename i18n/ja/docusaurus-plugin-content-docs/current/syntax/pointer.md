---
sidebar_position: 6
---

# ポインター

## Wave Explicit Memory Type Model

Waveのポインタ設計は**Wave Explicit Memory Type Model**を基にしています。
このモデルは、ポインタと配列を文法的トリックやライブラリ抽象化ではなく、**言語レベルの明示的なメモリタイプ**として定義することを目標としています。

このような設計により、Waveではポインタを `ptr<T>` 形式のタイプで表現し、
これは特定のタイプ `T` の値を保存しているメモリアドレスを指すタイプであることを明確に示します。
このアプローチはポインタを演算子や宣言文法ではなく、
タイプシステムの一部として扱うことでメモリ構造をより直感的で一貫性のあるものにします。

---

Waveにおいて、ポインタは `ptr<T>` 形式の明示的な型です。
アドレスの取得には `&`、逆参照には `deref`を使用します。

## 宣言と初期化

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

ポインタ型はネスト可能です。

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## 逆参照

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## `null`リテラルの規則

`null`は**正式なリテラル**です。 識別子ではなく、変数名として使用することはできません。

核心規則:

- `null`は `ptr<T>` ターゲットだけに代入できます。
- `i32`、`bool`、`array<...>`のような非ポインタ型には代入できません。
- 整数リテラル (`0`、`123`、`-1` など) でポインタを初期化することはできません。 明示的に`null`を使用します。

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## ポインタの算術

Waveは次のポインタ演算をサポートしています。

- `ptr + int`: GEPベースのポインタの前進
- `int + ptr`: 同じ動作
- `ptr - int`: GEPベースのポインタの後退
- `ptr - ptr`: `i64` バイト差の計算

ポイント:

- `ptr<T> +/- n` は `T` のサイズ(`sizeof(T)`)に基づいて移動します。
- すなわち `ptr<i32> + 3` はバイト単位で `+12` 移動します。

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (バイト差)
```

## ポインタの比較

ポインタは比較に使用できます。

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## 配列との関係

ポインタ配列:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

配列ポインタ:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## 安全ノート

Waveは現在、Rustのような所有権/ライフタイムベースのポインタ安全モデルではありません。
したがって、`null`参照外しを自動的に防ぐことはありません。 `deref`前に明示的に`null`チェックを入れるパターンを推奨します。
