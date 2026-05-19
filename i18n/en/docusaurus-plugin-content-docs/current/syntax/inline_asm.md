---
sidebar_position: 7
---

# Inline Assembly

Wave inline assembly is written with `asm { ... }`. It is for low-level code such as kernels, UEFI bootloaders, system calls, port I/O, and CPU control.

Current targets: Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, and freestanding `x86_64`/`aarch64`/`riscv64`. 32-bit targets are not supported yet.

## Basic Form

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String lines are assembly instructions. `in(...)` declares inputs, `out(...)` declares outputs, and `clobber(...)` declares state modified by the asm.

## Statement asm

Statement asm is used where no expression value is required. It may have multiple outputs.

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

## Expression asm

Expression asm produces a value and currently requires exactly one `out(...)`. `clobber("noreturn")` is forbidden in expression asm.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands and Constraints

Operands may use concrete registers or constraint classes. x86_64 uses `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 uses `x0` ... `x30` and `w0` ... `w30`; RISC-V uses `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, and `xN`. Common classes are `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. A physical register cannot be both an operand and a clobber.

## Clobber Contract

`clobber("memory")` means the asm may read or write memory. `clobber("flags")` and `clobber("cc")` mean condition flags are modified. `clobber("stack")` is required when stack or call/return instructions are used. `clobber("nostack")` promises no stack use. `clobber("noreturn")` means control never returns to the current block. `stack` and `nostack` cannot be combined.

## Stack Discipline

Normal asm must not modify the stack. `call`, `push`, `pop`, `ret`, direct `rsp`/`esp` or `sp` use, and similar instructions require `clobber("stack")`. Even then, the stack pointer must be restored before returning.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## Non-returning asm

Indirect jumps such as `jmp rax`, `jmp r11`, `br x0`, or `jr ra` need `clobber("noreturn")`. Statement asm with this clobber ends the IR block with `unreachable`.

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

## Local Labels

A jump to a local label stays inside the same asm/control-flow path and does not require `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output Targets

Stable output targets are variables and `deref` of pointer variables. For field or array output, write to a temporary first.

```wave
out("rax") value
out("rax") deref ptr
```

## Limitations

Inline asm is always side-effecting. Complex stack manipulation may still be rejected. Function pointer and explicit call-convention types are not stable yet, so UEFI service calls may still use asm wrappers for now.
