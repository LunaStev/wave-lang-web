---
sidebar_position: 7
---

# 인라인 어셈블리

## 소개

Wave의 인라인 어셈블리는 `asm { ... }` 블록으로 작성합니다.
Wave 코드 안에서 레지스터, 메모리, 시스템 호출 경로를 직접 제어할 수 있습니다.

현재 지원 타깃:
- Linux `x86_64`
- macOS (Darwin) `arm64`

Windows는 아직 지원하지 않습니다.

---

## 기본 형태

`asm`은 **문(statement)** 으로도, **식(expression)** 으로도 사용할 수 있습니다.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

구성 요소:
- 문자열 줄: 실제 어셈블리 명령어
- `in(...)`: 입력 오퍼랜드
- `out(...)`: 출력 오퍼랜드
- `clobber(...)`: 파괴되는 레지스터/상태/메모리 힌트

---

## `asm` 문 (Statement)

반환값이 없어도 되는 경우 일반 문장으로 사용합니다.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

`out(...)`은 여러 개를 둘 수 있습니다.

---

## `asm` 식 (Expression)

값을 직접 생성하는 식으로 사용할 수 있습니다.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

주의:
- `asm` 식은 **정확히 1개의 `out(...)`** 만 허용합니다.

---

## `in(...)` / `out(...)` 제약식

`in("...")`, `out("...")`의 문자열은 다음 둘 중 하나입니다.

1. 구체 레지스터
- 예: `"rax"`, `"rdi"`, `"x0"`, `"w1"`

2. 제약 클래스(constraint class)
- 예: `"r"`, `"m"`, `"rm"`

예시:

```wave
in("r") &buf
out("rax") ret
```

출력 대상(`out(...) target`)은 현재 구현 기준으로 다음 패턴을 권장합니다.
- 변수: `out("rax") ret`
- 포인터 역참조: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)`는 한 번에 여러 항목을 받을 수 있고, 여러 번 써도 됩니다.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

주요 항목:
- 레지스터: `"rax"`, `"x0"` 등
- 특수: `"memory"`, `"cc"`(타깃별 내부 정규화)

컴파일러는 보수적 안전 모드에서 기본 clobber를 자동으로 추가합니다.
(`memory`, flags/cc 계열 등)

---

## 오퍼랜드 자리표시자 (`$0`, `$1`, ...)

명령 문자열 안에서 오퍼랜드를 참조할 때 `$N`을 사용합니다.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

참고:
- `%0` 스타일을 써도 내부적으로 `$0` 스타일로 변환됩니다.

---

## 입력 오퍼랜드 현재 지원 범위

`in(...)` 값은 현재 다음 형태를 지원합니다.
- 변수 식별자
- 정수 리터럴
- 문자열 리터럴
- `&identifier`
- `deref identifier`
- 음수 정수/실수 리터럴

복잡한 일반 표현식은 제한될 수 있으므로, 필요 시 임시 변수에 담아 전달하는 패턴을 권장합니다.

---

## 주의사항

인라인 어셈블리는 타입 시스템의 보호를 부분적으로 우회합니다.
잘못된 레지스터 지정, 제약식 충돌, clobber 누락은 잘못된 코드 생성이나 런타임 오동작을 유발할 수 있습니다.

권장 사항:
- 타깃 ABI와 호출 규약을 먼저 확정
- 입력/출력 레지스터와 clobber를 명시적으로 관리
- 메모리를 직접 건드리면 `clobber("memory")`를 함께 선언
