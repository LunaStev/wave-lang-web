---
sidebar_position: 13
---

# 泛型 (Generics)

Wave 泛型是一种用于编写类型安全函数而无需代码重复的功能。

核心规则：

- 类型参数必须明确指定。
- 不允许类型推断。

## 1）泛型函数声明

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

调用：

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. 多类型参数

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

## 3. 泛型结构体

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. 嵌套泛型

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. 与标准库一起使用

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## 常见错误

```wave
var x: i32 = identity(10); // 类型参数缺失（不允许）
```

必须如下所示调用。

```wave
var x: i32 = identity<i32>(10);
```
