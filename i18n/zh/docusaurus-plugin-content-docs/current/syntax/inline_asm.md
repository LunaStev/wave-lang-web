---
sidebar_position: 7
---

# 内联汇编

Wave的内联汇编是通过 `asm { ... 通过 `}\` 块编写。 이 기능은 운영체제, UEFI 부트로더, 시스템 호출, 포트 I/O, CPU 제어처럼 일반 Wave 문법만으로 표현하기 어려운 저수준 코드를 위해 존재합니다.

현재 구현 기준 지원 타깃은 Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, freestanding `x86_64`/`aarch64`/`riscv64`입니다. 32비트 타깃은 아직 지원 대상이 아닙니다.

## 基本形式

```wave
asm {
    "指令"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

- 문자열 줄은 실제 어셈블리 명령입니다.
- `in(...)`은 입력 오퍼랜드입니다.
- `out(...)`은 출력 오퍼랜드입니다.
- `clobber(...)`는 asm이 파괴하거나 관찰 가능하게 변경하는 상태를 선언합니다.

## statement asm

statement asm은 반환값이 필요 없는 위치에서 사용합니다. 출력은 여러 개를 둘 수 있습니다.

```wave
let mut ret: i64 = 0;
asm {
    "mov rax, 39"
    "syscall"
    out("rax") ret
    clobber("memory")
    clobber("flags")
}
```

## expression asm

expression asm은 값을 생성하는 식입니다. 현재는 정확히 하나의 `out(...)`만 허용합니다.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

`clobber("noreturn")`은 expression asm에서 금지됩니다. 값을 반환해야 하는 식이 현재 블록으로 돌아오지 않는 것은 타입/제어 흐름과 충돌하기 때문입니다.

## 오퍼랜드와 제약식

`in("...")`과 `out("...")`에는 구체 레지스터나 제약 클래스를 지정합니다.

- x86_64 예: `rax`, `rbx`, `rcx`, `rdx`, `rdi`, `rsi`, `r8` ... `r15`, `r`
- AArch64 예: `x0` ... `x30`, `w0` ... `w30`, `sp`, `lr`, `r`
- RISC-V 예: `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `x10`, `r`
- 공통 클래스: `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`

같은 물리 레지스터를 입력/출력과 clobber에 동시에 지정하면 오류입니다.

```wave
asm {
    "mov rax, rax"
    in("rax") x
    // 오류: rax는 입력 오퍼랜드로 이미 사용 중입니다.
    clobber("rax")
}
```

## clobber 계약

| 항목                                  | 의미                                                                    |
| ----------------------------------- | --------------------------------------------------------------------- |
| `clobber("memory")`                 | asm이 메모리를 읽거나 쓸 수 있음을 알립니다.                           |
| `clobber("flags")`, `clobber("cc")` | 조건 플래그/상태 레지스터 변경을 알립니다.                              |
| `clobber("stack")`                  | asm이 stack pointer나 call/return/push/pop을 사용함을 명시합니다. |
| `clobber("nostack")`                | asm이 stack을 건드리지 않는다는 명시적 계약입니다.                      |
| `clobber("noreturn")`               | asm이 현재 함수/블록으로 돌아오지 않음을 알립니다.                        |

`stack`과 `nostack`은 동시에 사용할 수 없습니다.

## stack discipline

일반 asm은 stack을 변경하면 안 됩니다. 다음 명령 패턴은 `clobber("stack")`가 필요합니다.

- x86_64: `call`, `push`, `pop`, `ret`, `iret`, `leave`, `enter`, `rsp`/`esp` 직접 접근
- AArch64: `bl`, `blr`, `ret`, `sp` 직접 접근
- RISC-V: `call`, `jal`, `jalr`, `ret`, `sp` 직접 접근

`clobber("stack")`를 선언해도 stack pointer는 원래 값으로 복구해야 합니다. 컴파일러가 단순 `sub/add rsp` 같은 균형을 확인할 수 없는 경우 오류가 발생할 수 있습니다.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

원래 위치로 돌아오지 않는 커널 진입이나 tail jump는 `clobber("noreturn")`을 사용합니다.

```wave
fun jump_to_kernel(entry: u64, boot_info: ptr<u8>, stack_top: u64) {
    asm {
        "mov rsp, rdx"
        "and rsp, -16"
        "mov rdi, rcx"
        "jmp rbx"
        in("rbx") entry
        in("rcx") boot_info
        in("rdx") stack_top
        clobber("stack")
        clobber("noreturn")
    }
}
```

`clobber("noreturn")`이 있는 statement asm은 IR에서 `unreachable`로 끝납니다.

## local label과 jump

로컬 label로 이동하는 asm은 현재 블록으로 돌아오는 흐름이므로 `noreturn`이 필요하지 않습니다.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

반대로 `jmp rax`, `jmp r11`, `br x0`, `jr ra`처럼 레지스터/메모리로 간접 분기하는 asm은 현재 블록으로 돌아오지 않는 흐름으로 간주하므로 `clobber("noreturn")`가 필요합니다.

## 출력 대상

현재 안정적으로 권장되는 출력 대상은 다음과 같습니다.

```wave
out("rax") value
out("rax") deref ptr
```

복잡한 `out("rax") object.field` 또는 `out("rax") array[i]` 형태는 아직 안정화 대상입니다. 필요하면 임시 변수에 받은 뒤 Wave 코드로 저장하세요.

## 제한 사항

- inline asm은 항상 side effect가 있는 것으로 취급됩니다.
- 복잡한 stack 조작은 컴파일러가 완전히 증명하지 못할 수 있습니다.
- 함수 포인터와 명시적 call convention 타입은 아직 별도 언어 기능으로 안정화되지 않았습니다.
- UEFI service call 같은 코드는 당분간 asm wrapper를 사용할 수 있지만, 장기적으로는 함수 포인터/callconv 기능으로 대체하는 것이 목표입니다.
