---
sidebar_position: 6
---

# 포인터

## Wave Explicit Memory Type Model

Wave의 포인터 설계는 **Wave Explicit Memory Type Model**을 기반으로 합니다.
이 모델은 포인터와 배열을 문법적 트릭이나 라이브러리 추상화가 아닌, **언어 차원의 명시적인 메모리 타입**으로 정의하는 것을 목표로 합니다.

이러한 설계에 따라 Wave에서는 포인터를 `ptr<T>` 형태의 타입으로 표현하며,
이는 특정 타입 `T`의 값을 저장하고 있는 메모리 주소를 가리키는 타입임을 명확하게 드러냅니다.
이 접근 방식은 포인터를 연산자나 선언 문법이 아닌 타입 시스템의 일부로 다룸으로써,
메모리 구조를 더 직관적이고 일관되게 표현할 수 있게 합니다.

---

Wave에서 포인터는 `ptr<T>` 형태의 명시적 타입입니다.
주소 획득은 `&`, 역참조는 `deref`를 사용합니다.

## 선언과 초기화

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

포인터 타입은 중첩 가능합니다.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## 역참조

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## `null` 리터럴 규칙

`null`은 **정식 리터럴**입니다. 식별자가 아니며 변수명으로 사용할 수 없습니다.

핵심 규칙:
- `null`은 오직 `ptr<T>` 대상에만 대입할 수 있습니다.
- `i32`, `bool`, `array<...>` 같은 비포인터 타입에는 대입할 수 없습니다.
- 정수 리터럴(`0`, `123`, `-1` 등)로 포인터를 초기화할 수 없습니다. 명시적으로 `null`을 사용합니다.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## 포인터 산술

Wave는 다음 포인터 산술을 지원합니다.

- `ptr + int`: GEP 기반 포인터 전진
- `int + ptr`: 동일 동작
- `ptr - int`: GEP 기반 포인터 후진
- `ptr - ptr`: `i64` 바이트 차이 계산

포인트:
- `ptr<T> +/- n`은 `T`의 크기(`sizeof(T)`)를 기준으로 이동합니다.
- 즉 `ptr<i32> + 3`은 바이트 기준으로 `+12` 이동입니다.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (byte diff)
```

## 포인터 비교

포인터는 비교에 사용할 수 있습니다.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## 배열과의 관계

포인터 배열:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

배열 포인터:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## 안전성 노트

Wave는 현재 Rust 같은 소유권/수명 기반 포인터 안전 모델이 아닙니다.
따라서 `null` 역참조를 자동으로 막아주지 않습니다. `deref` 전에 명시적으로 `null` 체크를 넣는 패턴을 권장합니다.
