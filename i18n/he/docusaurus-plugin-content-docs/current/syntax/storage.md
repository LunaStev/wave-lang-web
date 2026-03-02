---
sidebar_position: 12
---

# 전역/지역 저장 규칙

Wave는 저장 수명(storage)과 변경 가능성(mutability)을 키워드 레벨에서 명확히 구분합니다.

## 요약

- 전역 상수: `const`
- 전역 저장 변수: `static`
- 지역 변수: `var`, `let`, `let mut`

즉, **top-level에는 `const`와 `static`만 선언**하고,
**함수/블록 내부 지역에는 `var`와 `let` 계열만 선언**합니다.

## 전역 상수: `const`

`const`는 컴파일 시점 상수로 취급되며 재할당할 수 없습니다.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## 전역 저장 변수: `static`

`static`은 전역 저장 공간을 가지는 변수입니다.
재할당이 가능하며, 초기값을 주지 않으면 타입의 0 값으로 초기화됩니다.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## 지역 변수: `var` / `let`

함수나 블록 내부에서는 지역 변수 키워드만 사용합니다.

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

## 제약 사항

- `var`, `let`은 top-level에서 사용할 수 없습니다.
- `const`, `static`은 함수/블록 내부에서 사용할 수 없습니다.
- `let`은 불변이며 재할당할 수 없습니다.
