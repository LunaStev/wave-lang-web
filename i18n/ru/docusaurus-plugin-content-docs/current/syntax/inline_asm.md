---
sidebar_position: 7
---

# Встроенный ассемблер

Встроенный ассемблер Wave записывается блоком `asm { ... }`. Он предназначен для низкоуровневого кода: ядер, загрузчиков UEFI, системных вызовов, портового I/O и управления CPU.

Текущие цели: Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64` и freestanding `x86_64`/`aarch64`/`riscv64`. 32-битные цели пока не поддерживаются.

## Базовая форма

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Строки являются инструкциями ассемблера. `in(...)` объявляет входы, `out(...)` выходы, а `clobber(...)` состояние, которое изменяет asm.

## asm-оператор

asm-оператор используется там, где не нужен результат выражения. Он может иметь несколько выходов.

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

## asm-выражение

asm-выражение производит значение и сейчас требует ровно один `out(...)`. `clobber("noreturn")` в asm-выражении запрещён.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Операнды и ограничения

Операнды могут использовать конкретные регистры или классы ограничений. x86_64 использует `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 использует `x0` ... `x30` и `w0` ... `w30`; RISC-V использует `a0`, `a1`, `t0`, `s0`, `ra`, `sp` и `xN`. Общие классы: `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Один физический регистр не может одновременно быть операндом и clobber.

## Контракт clobber

`clobber("memory")` означает, что asm может читать или писать память. `clobber("flags")` и `clobber("cc")` означают изменение флагов. `clobber("stack")` нужен при использовании стека или инструкций call/return. `clobber("nostack")` обещает не трогать стек. `clobber("noreturn")` означает, что управление не возвращается в текущий блок. `stack` и `nostack` нельзя сочетать.

## Дисциплина стека

Обычный asm не должен изменять стек. `call`, `push`, `pop`, `ret`, прямой доступ к `rsp`/`esp` или `sp` и похожие инструкции требуют `clobber("stack")`. Даже тогда указатель стека должен быть восстановлен перед возвратом.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm без возврата

Косвенные переходы вроде `jmp rax`, `jmp r11`, `br x0` или `jr ra` требуют `clobber("noreturn")`. asm-оператор с таким clobber завершает IR-блок инструкцией `unreachable`.

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

## Локальные метки

Переход к локальной метке остаётся внутри того же asm/control-flow пути и не требует `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Цели вывода

Стабильные цели вывода — переменные и `deref` переменных-указателей. Для полей или массивов сначала выводите во временную переменную.

```wave
out("rax") value
out("rax") deref ptr
```

## Ограничения

Inline asm всегда считается имеющим побочные эффекты. Сложные манипуляции стеком всё ещё могут быть отклонены. Указатели на функции и явные типы calling convention пока нестабильны, поэтому вызовы сервисов UEFI могут временно использовать asm-обёртки.
