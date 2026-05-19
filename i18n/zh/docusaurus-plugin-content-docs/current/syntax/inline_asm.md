---
sidebar_position: 7
---

# 内联汇编

Wave 的内联汇编使用 `asm { ... }` 块编写。它面向内核、UEFI 引导加载器、系统调用、端口 I/O 和 CPU 控制等低层代码。

当前目标包括 Linux `x86_64`/`aarch64`、Darwin `x86_64`/`aarch64`、Windows GNU `x86_64`，以及 freestanding `x86_64`/`aarch64`/`riscv64`。暂不支持 32 位目标。

## 基本形式

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

字符串行是实际的汇编指令。`in(...)` 声明输入，`out(...)` 声明输出，`clobber(...)` 声明 asm 会修改的状态。

## 语句 asm

语句 asm 用在不需要表达式值的位置。它可以有多个输出。

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

## 表达式 asm

表达式 asm 会产生一个值，目前必须且只能有一个 `out(...)`。表达式 asm 中禁止使用 `clobber("noreturn")`。

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## 操作数和约束

操作数可以使用具体寄存器或约束类。x86_64 使用 `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`；AArch64 使用 `x0` ... `x30` 和 `w0` ... `w30`；RISC-V 使用 `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`。通用约束类包括 `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`。同一个物理寄存器不能同时作为操作数和 clobber。

## Clobber 契约

`clobber("memory")` 表示 asm 可能读写内存。`clobber("flags")` 和 `clobber("cc")` 表示条件标志被修改。使用栈或 call/return 指令时需要 `clobber("stack")`。`clobber("nostack")` 承诺不使用栈。`clobber("noreturn")` 表示控制流不会返回当前块。`stack` 和 `nostack` 不能同时使用。

## 栈规则

普通 asm 不应修改栈。`call`, `push`, `pop`, `ret`，直接使用 `rsp`/`esp` 或 `sp`，以及类似指令都需要 `clobber("stack")`。即使如此，返回前也必须恢复栈指针。

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## 不返回的 asm

`jmp rax`, `jmp r11`, `br x0`, `jr ra` 等间接跳转需要 `clobber("noreturn")`。带有该 clobber 的语句 asm 会用 `unreachable` 结束 IR 块。

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

## 局部标签

跳转到局部标签仍位于同一个 asm/control-flow 路径中，因此不需要 `noreturn`。

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## 输出目标

稳定支持的输出目标是变量和指针变量的 `deref`。如果要输出到字段或数组，请先写入临时变量。

```wave
out("rax") value
out("rax") deref ptr
```

## 限制

inline asm 始终被视为有副作用。复杂的栈操作仍可能被拒绝。函数指针和显式调用约定类型尚未稳定，因此 UEFI 服务调用目前仍可使用 asm 包装器。
