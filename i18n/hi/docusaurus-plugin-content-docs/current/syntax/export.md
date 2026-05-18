---
sidebar_position: 9.5
---

# export

`export`는 Wave에서 구현한 함수를 외부 링커 심볼로 내보내기 위한 FFI 문법입니다.
`extern`이 외부 함수를 Wave 안으로 가져오는 선언이라면, `export`는 Wave 함수를 C, Rust, C++, Zig 같은 다른 언어에서 호출할 수 있도록 오브젝트 파일에 공개 심볼로 배치합니다.

---

## 개요

Wave의 FFI는 두 방향으로 나뉩니다.

- `extern(c)`는 외부 라이브러리의 함수를 Wave 코드에서 호출하기 위한 선언입니다.
- `export(c)`는 Wave 함수 본문을 외부 ABI 심볼로 내보내기 위한 선언입니다.

두 문법은 ABI 헤더 형태를 공유하지만 의미는 반대입니다.
`extern`은 함수 본문이 Wave 밖에 있고, `export`는 함수 본문이 Wave 안에 있습니다.

현재 지원되는 export ABI는 `c`입니다.

---

## 함수 단위 export

가장 기본 형태는 다음과 같습니다.

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

이 코드는 `add`라는 공개 심볼을 가진 함수를 생성합니다.
생성된 오브젝트 파일은 C ABI를 기대하는 외부 코드와 링크할 수 있습니다.

---

## 심볼 이름 지정

Wave 내부 함수 이름과 외부에 공개할 링커 심볼 이름을 다르게 만들 수 있습니다.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

이 경우 Wave 코드 안의 이름은 `add_i32`이지만, 오브젝트 파일에는 `wave_add_i32` 심볼로 노출됩니다.
외부 언어에서는 `wave_add_i32` 이름으로 선언해야 합니다.

---

## 블록 단위 export

같은 ABI를 사용하는 여러 함수를 한 블록에 묶을 수 있습니다.

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

블록 export는 각 함수의 이름을 그대로 공개 심볼로 사용합니다.
`export(c, "symbol") { ... }`처럼 블록 전체에 단일 심볼 별칭을 지정하는 방식은 허용되지 않습니다.
여러 함수가 같은 링커 심볼을 갖는 충돌을 막기 위해서입니다.

---

## 외부 C 코드에서 호출하기

Wave 코드를 오브젝트 파일로 빌드합니다.

```bash
wavec build math.wave --emit=obj -o math.o
```

C 코드에서는 export된 심볼을 `extern`으로 선언합니다.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

그 뒤 일반 링커로 C 코드와 Wave 오브젝트 파일을 함께 링크합니다.

```bash
cc main.c math.o -o app
```

---

## extern과 export의 차이

`extern(c)`는 Wave가 외부 심볼을 사용한다는 뜻입니다.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)`는 외부 코드가 Wave 심볼을 사용할 수 있게 만든다는 뜻입니다.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

둘 다 FFI에 속하지만, 방향이 다릅니다.

---

## 제한 사항

현재 `export`에는 다음 제한이 있습니다.

- `export(c)`만 지원합니다.
- exported function은 generic일 수 없습니다.
- 블록 export에는 단일 심볼 별칭을 지정할 수 없습니다.
- 안정적인 상호 운용을 위해 현재는 정수, 부동소수점, 불리언, 포인터 중심의 인자와 반환값을 권장합니다.
- 구조체와 배열 같은 aggregate 타입의 export ABI는 더 엄격한 규칙이 필요하며 이후 버전에서 안정화될 수 있습니다.
- `export`는 오브젝트 또는 라이브러리 형태로 링크할 때 의미가 큽니다. 일반 실행 파일만 만들 때는 보통 필요하지 않습니다.

---

## 권장 사용처

`export`는 다음 상황에서 사용합니다.

- Wave로 작성한 유틸리티 함수를 C ABI 라이브러리로 제공할 때
- Rust, C, C++, Zig 같은 언어에서 Wave 함수를 호출해야 할 때
- Wave로 작성한 `front`, `utils`, 런타임 없는 네이티브 모듈을 기존 빌드 시스템에 점진적으로 연결할 때
- Vex나 다른 빌드 도구가 Wave 오브젝트 파일을 외부 프로젝트와 링크해야 할 때
