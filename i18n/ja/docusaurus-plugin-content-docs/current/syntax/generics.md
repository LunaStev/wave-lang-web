---
sidebar_position: 13
---

# ジェネリック (Generics)

Waveジェネリックは、コードの重複なく型安全な関数を作成するための機能です。

核心規則:

- 型引数は必ず明示します。
- 型推論は許可されていません。

## 1. ジェネリック関数宣言

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

呼び出し:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. 複数の型パラメータ

```wave
struct Pair<A, B> {
    first: A;
    second: B;
}

fun pair<A, B>(a: A, b: B) -> Pair<A, B> {
    return Pair<A, B> {
        first: a;
        second: b;
    };
}

fun main() {
    var p: Pair<i32, f64> = pair<i32, f64>(1, 2.5);
}
```

## 3. ジェネリック構造体

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. ネストされたジェネリック

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. 標準ライブラリと共に使用

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## よくあるミス

```wave
var x: i32 = identity(10); // 型引数の欠落（許可されません）
```

必ず次のように呼び出してください。

```wave
var x: i32 = identity<i32>(10);
```
