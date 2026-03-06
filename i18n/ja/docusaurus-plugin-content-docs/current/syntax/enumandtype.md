---
sidebar_position: 10
---

# 列挙型 (enum) と型エイリアス (type alias)

WaveはCに似た明示的な型システムを維持しながら、
可読性とABIの安定性のために型エイリアス（type alias）と
整数ベースの列挙型（enum）をサポートします。

---

## 型エイリアス (Type Alias)

### 概要

typeキーワードは既存の型に新しい名前を付けます。
これは新しい型を作るのではなく、完全な同値（エイリアス）です。

```wave
type MyInt = i32;
```

この宣言では、MyIntはi32と完全に同じ型です。

---

### 特徴

- ランタイムオーバーヘッドなし
- ABI上で完全に同一
- コンパイル時にのみ存在
- enumのrepr型として使用可能

---

### 使用例

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### 型同値性

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

typeは新しい型ではなく、名前が異なるだけの型です。

---

## 列挙型 (enum)

### 概要

Waveのenumは整数ベースの列挙型です。
すべての列挙型は必ずreprタイプを持たなければなりません。

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### reprタイプ

-> i32 はこのenumがどの整数型で表現されるかを示します。

許可されるreprタイプ:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- 該当タイプの`type alias`

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### 値の割り当てルール

- 明示的な値があればその値を使用
- なければ前の値 + 1
- 最初の値がなければ0から開始

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enumは値タイプです

enumは整数値であり、関数パラメータや戻り値として自由に使用可能です。

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### 定数として使用

enumバリアントはコンパイルタイムの定数です。

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## 実際の例

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```