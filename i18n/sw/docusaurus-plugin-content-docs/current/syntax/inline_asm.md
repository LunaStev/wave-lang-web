---
sidebar_position: 7
---

# Assembly ya ndani ya msimbo

Assembly ya ndani ya Wave huandikwa kwa kizuizi `asm { ... }`. Inafaa kwa msimbo wa kiwango cha chini kama kernel, vipakiaji vya UEFI, system calls, port I/O na udhibiti wa CPU.

Malengo ya sasa ni Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, na freestanding `x86_64`/`aarch64`/`riscv64`. Malengo ya 32-bit bado hayajaungwa mkono.

## Muundo wa msingi

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Mistari ya string ni maagizo ya assembly. `in(...)` hutangaza ingizo, `out(...)` hutangaza matokeo, na `clobber(...)` hutangaza hali inayobadilishwa na asm.

## asm kama statement

asm kama statement hutumika pale ambapo thamani ya expression haihitajiki. Inaweza kuwa na matokeo kadhaa.

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

## asm kama expression

asm kama expression huzalisha thamani na kwa sasa inahitaji `out(...)` moja tu. `clobber("noreturn")` hairuhusiwi katika asm ya expression.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands na constraints

Operand zinaweza kutumia register maalum au darasa la constraint. x86_64 hutumia `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 hutumia `x0` ... `x30` na `w0` ... `w30`; RISC-V hutumia `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. Madarasa ya kawaida ni `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Register moja ya kimwili haiwezi kuwa operand na clobber kwa wakati mmoja.

## Mkataba wa clobber

`clobber("memory")` humaanisha asm inaweza kusoma au kuandika memory. `clobber("flags")` na `clobber("cc")` humaanisha flags zimebadilishwa. `clobber("stack")` inahitajika stack au maagizo ya call/return yanapotumika. `clobber("nostack")` huahidi kutogusa stack. `clobber("noreturn")` humaanisha control hairudi kwenye block ya sasa. `stack` na `nostack` haziwezi kuunganishwa.

## Nidhamu ya stack

asm ya kawaida haipaswi kubadilisha stack. `call`, `push`, `pop`, `ret`, matumizi ya moja kwa moja ya `rsp`/`esp` au `sp`, na maagizo yanayofanana yanahitaji `clobber("stack")`. Hata hivyo stack pointer lazima irejeshwe kabla ya kurudi.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm isiyorudi

Miruko isiyo ya moja kwa moja kama `jmp rax`, `jmp r11`, `br x0`, au `jr ra` inahitaji `clobber("noreturn")`. asm statement yenye clobber hii humaliza block ya IR kwa `unreachable`.

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

## Lebo za ndani

Kuruka kwenda lebo ya ndani hubaki ndani ya njia ileile ya asm/control-flow na hakuhitaji `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Malengo ya output

Malengo thabiti ya output ni variables na `deref` ya variables za pointer. Kwa field au array, andika kwanza kwenye variable ya muda.

```wave
out("rax") value
out("rax") deref ptr
```

## Mipaka

inline asm huchukuliwa kuwa na side effect kila wakati. Ubadilishaji mgumu wa stack bado unaweza kukataliwa. Function pointer na aina za calling convention zilizo wazi bado hazijathibitika, hivyo UEFI service calls zinaweza kutumia asm wrappers kwa sasa.
