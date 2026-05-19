---
sidebar_position: 7
---

# የውስጥ አሰምብሊ

የWave inline assembly በ `asm { ... }` block ይጻፋል። kernel, UEFI bootloader, system call, port I/O እና CPU control ያሉ low-level code ለመጻፍ ይጠቅማል።

የአሁኑ targets Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, እና freestanding `x86_64`/`aarch64`/`riscv64` ናቸው። 32-bit targets እስካሁን አይደገፉም።

## መሠረታዊ ቅርጽ

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String lines assembly instructions ናቸው። `in(...)` input, `out(...)` output, እና `clobber(...)` asm የሚቀይረውን state ያሳውቃሉ።

## statement asm

statement asm የexpression value በማያስፈልግበት ቦታ ይጠቀማል። ብዙ outputs ሊኖሩት ይችላሉ።

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

expression asm value ያመነጫል፣ በአሁኑ ጊዜ ትክክለኛ አንድ `out(...)` ይፈልጋል። በexpression asm ውስጥ `clobber("noreturn")` አይፈቀድም።

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands እና constraints

Operands concrete registers ወይም constraint classes ሊጠቀሙ ይችላሉ። x86_64 `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 `x0` ... `x30` እና `w0` ... `w30`; RISC-V `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN` ይጠቀማል። የጋራ classes `r`, `m`, `rm`, `i`, `ri`, `im`, `irm` ናቸው። አንድ physical register በተመሳሳይ ጊዜ operand እና clobber መሆን አይችልም።

## የclobber ውል

`clobber("memory")` asm memory ሊያነብ ወይም ሊጽፍ ይችላል ማለት ነው። `clobber("flags")` እና `clobber("cc")` flags መቀየራቸውን ያሳያሉ። stack ወይም call/return instructions ሲጠቀሙ `clobber("stack")` ያስፈልጋል። `clobber("nostack")` stack እንዳይነካ ቃል ኪዳን ነው። `clobber("noreturn")` control ወደ current block አይመለስም ማለት ነው። `stack` እና `nostack` አብረው መጠቀም አይቻልም።

## Stack discipline

መደበኛ asm stack መቀየር የለበትም። `call`, `push`, `pop`, `ret`, `rsp`/`esp` ወይም `sp` በቀጥታ መጠቀም ያሉ instructions `clobber("stack")` ይፈልጋሉ። ቢሆንም return ከመደረጉ በፊት stack pointer መመለስ አለበት።

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## የማይመለስ asm

`jmp rax`, `jmp r11`, `br x0`, ወይም `jr ra` ያሉ indirect jumps `clobber("noreturn")` ይፈልጋሉ። ይህ clobber ያለው statement asm IR block በ `unreachable` ያበቃል።

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

ወደ local label የሚደረግ jump በዚያው asm/control-flow path ውስጥ ይቆያል፣ ስለዚህ `noreturn` አያስፈልግም።

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output targets

የተረጋጋ output targets variables እና የpointer variables `deref` ናቸው። field ወይም array ላይ output ካስፈለገ መጀመሪያ temporary variable ውስጥ ይጻፉ።

```wave
out("rax") value
out("rax") deref ptr
```

## ገደቦች

inline asm ሁልጊዜ side effect እንዳለው ይታያል። ውስብስብ stack manipulation አሁንም ሊታገድ ይችላል። Function pointer እና explicit calling convention types ገና stable አይደሉም፣ ስለዚህ UEFI service calls ለአሁን asm wrappers ሊጠቀሙ ይችላሉ።
