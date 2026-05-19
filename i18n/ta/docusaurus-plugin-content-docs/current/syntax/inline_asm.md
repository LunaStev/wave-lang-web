---
sidebar_position: 7
---

# உள்ளமை assembly

Wave inline assembly `asm { ... }` block மூலம் எழுதப்படுகிறது. kernel, UEFI bootloader, system call, port I/O, CPU control போன்ற low-level code க்கான வசதிதான் இது.

தற்போதைய targets: Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, மற்றும் freestanding `x86_64`/`aarch64`/`riscv64`. 32-bit targets இன்னும் ஆதரிக்கப்படவில்லை.

## அடிப்படை வடிவம்

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String வரிகள் assembly instructions ஆகும். `in(...)` input-ஐ, `out(...)` output-ஐ, `clobber(...)` asm மாற்றும் state-ஐ அறிவிக்கிறது.

## statement asm

expression value தேவையில்லாத இடத்தில் statement asm பயன்படுத்தப்படுகிறது. பல outputs இருக்கலாம்.

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

expression asm ஒரு value உருவாக்குகிறது; தற்போது சரியாக ஒரு `out(...)` தேவை. expression asm-இல் `clobber("noreturn")` அனுமதிக்கப்படாது.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands மற்றும் constraints

Operands concrete registers அல்லது constraint classes பயன்படுத்தலாம். x86_64 `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 `x0` ... `x30` மற்றும் `w0` ... `w30`; RISC-V `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN` பயன்படுத்துகிறது. பொதுவான classes `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. ஒரே physical register operand மற்றும் clobber இரண்டாக இருக்க முடியாது.

## clobber ஒப்பந்தம்

`clobber("memory")` asm memory-ஐ படிக்கலாம் அல்லது எழுதலாம் என்பதைக் குறிக்கும். `clobber("flags")` மற்றும் `clobber("cc")` flags மாறுவதை குறிக்கும். stack அல்லது call/return instructions பயன்படுத்தினால் `clobber("stack")` தேவை. `clobber("nostack")` stack-ஐ தொடாதது என்ற வாக்குறுதி. `clobber("noreturn")` control தற்போதைய block-க்கு திரும்பாது என்பதைக் குறிக்கும். `stack` மற்றும் `nostack` சேர்ந்து வர முடியாது.

## Stack discipline

சாதாரண asm stack-ஐ மாற்றக் கூடாது. `call`, `push`, `pop`, `ret`, `rsp`/`esp` அல்லது `sp` நேரடி பயன்பாடு போன்றவை `clobber("stack")` தேவைப்படுத்தும். இருந்தாலும் return ஆகும் முன் stack pointer மீட்டமைக்கப்பட வேண்டும்.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## திரும்பாத asm

`jmp rax`, `jmp r11`, `br x0`, அல்லது `jr ra` போன்ற indirect jumps `clobber("noreturn")` தேவை. இந்த clobber உடைய statement asm IR block-ஐ `unreachable` மூலம் முடிக்கிறது.

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

## Local labels

local label-க்கு jump செய்வது அதே asm/control-flow path-இல் தங்குகிறது; `noreturn` தேவையில்லை.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output targets

நிலையான output targets variables மற்றும் pointer variables-ன் `deref`. field அல்லது array-க்கு output வேண்டும் என்றால் முதலில் temporary variable-இல் எழுதவும்.

```wave
out("rax") value
out("rax") deref ptr
```

## வரம்புகள்

inline asm எப்போதும் side effect உடையதாக கருதப்படுகிறது. சிக்கலான stack manipulation இன்னும் மறுக்கப்படலாம். Function pointer மற்றும் explicit calling convention types இன்னும் stable அல்ல; ஆகவே UEFI service calls தற்காலிகமாக asm wrappers பயன்படுத்தலாம்.
