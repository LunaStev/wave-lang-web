---
sidebar_position: 13
---

# 제네릭 (Generics)

Wave 제네릭은 코드 중복 없이 타입 안전한 함수를 작성하기 위한 기능입니다.

핵심 규칙:

- 타입 인자는 반드시 명시합니다.
- 타입 추론은 허용하지 않습니다.

## 1. 제네릭 함수 선언

```wave
fun identity<T>(x: T) -> T {
    return x;
}
```

호출:

```wave
fun main() {
    var a: i32 = identity<i32>(10);
    var b: f64 = identity<f64>(3.14);
}
```

## 2. 다중 타입 파라미터

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

## 3. 제네릭 구조체

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var v: Vec<i32>;
}
```

## 4. 중첩 제네릭

```wave
struct Vec<T> {
    data: ptr<T>;
    len: i64;
}

fun main() {
    var nested: Vec<Vec<i32>>;
}
```

## 5. 표준 라이브러리와 함께 사용

```wave
import("std::math::int");
import("std::env::environ");

fun main() {
    var x: i32 = num_abs<i32>(-100, 0);

    var r: EnvResult<i32> = env_get_i32("PORT");
    var port: i32 = env_unwrap_or<i32>(r, 8080);
}
```

## 자주 하는 실수

```wave
var x: i32 = identity(10); // 타입 인자 누락 (허용 안 됨)
```

반드시 다음처럼 호출해야 합니다.

```wave
var x: i32 = identity<i32>(10);
```
