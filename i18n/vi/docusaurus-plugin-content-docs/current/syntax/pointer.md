---
sidebar_position: 6
---

# Con trỏ

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
- 정수 리터럴(`0`, `123`, `-1` 등)으로 포인터를 초기화할 수 없습니다. 명시적으로 `null`을 사용합니다.

```wave
var p: ptr<i32> = null;           // OK
var arrp: ptr<array<i32, 3>> = null; // OK

// var n: i32 = null;             // ERROR
// var b: bool = null;            // ERROR
// var null: i32 = 1;             // ERROR (`null`은 예약 리터럴)
```

## 포인터 연산 범위 (현재)

현재 포인터는 주로 비교에 사용됩니다.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

주의:

- 포인터 산술(`p + 1`, `p - 1`)은 현재 지원되지 않습니다.

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
