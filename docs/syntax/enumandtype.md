---
sidebar_position: 10
---

# 열거형 (enum)과 타입 별칭 (type alias)

Wave는 C와 유사한 명시적 타입 시스템을 유지하면서도,
가독성과 ABI 안정성을 위해 타입 별칭(type alias) 과
정수 기반 열거형(enum) 을 지원한다.

---

## 타입 별칭 (Type Alias)
### 개요

type 키워드는 기존 타입에 새로운 이름을 부여한다.
이는 새로운 타입을 만드는 것이 아니라, 완전한 동치(alias) 이다.

```wave
type MyInt = i32;
```

위 선언에서 MyInt는 i32와 완전히 동일한 타입이다.

---

### 특징

- 런타임 오버헤드 없음
- ABI 상 완전히 동일
- 컴파일 타임에만 존재
- enum의 repr 타입으로 사용 가능

---

### 사용 예시

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### 타입 동치성

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type은 새 타입이 아니라 이름만 다른 타입이다.

---

## 열거형 (enum)
### 개요

Wave의 enum은 정수 기반 열거형이다.
모든 열거형은 반드시 repr 타입을 가져야 한다.


```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### repr 타입

-> i32 는 이 enum이 어떤 정수 타입으로 표현되는지를 나타낸다.

허용되는 repr 타입:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- 해당 타입의 `type alias`

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### 값 할당 규칙

- 명시적 값이 있으면 해당 값 사용
- 없으면 이전 값 + 1
- 첫 값이 없으면 0부터 시작

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum은 값 타입이다

enum은 정수 값이며, 함수 인자·리턴값으로 자유롭게 사용 가능하다.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### 상수로 사용

enum variant는 컴파일 타임 상수다.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## 실제 예제

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