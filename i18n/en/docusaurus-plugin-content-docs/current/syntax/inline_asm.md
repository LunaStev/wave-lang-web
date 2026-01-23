---
sidebar_position: 7
---

# Inline Assembly

## Introduction

This document describes the inline assembly feature provided by the Wave language.
Inline assembly is one of the features provided by Wave. It is a syntax designed to directly access low-level hardware control while maintaining the convenience and structure of high-level languages.

It enables tasks such as register manipulation, memory address unit access, and execution of specific CPU instructions that are difficult to express with general Wave code. It is used when performance optimization or hardware and architecture-dependent code is required.
Through this feature, Wave can encompass system programming areas beyond just being a high-level language.

---

## Basic Syntax

Inline assembly is written with `asm { ... } ` block.
Within this block, the assembly instructions that will be executed and the input/output mappings to connect Wave variables with CPU registers are defined.

```wave
asm {
    "assembly command"          // actual assembly code (one command per line)
    ...
    in("register") value         // input register mapping
    out("register") variable      // output register mapping
}
```

The assembly instructions are written in string form, detailing the low-level commands executed on the actual CPU.
It can be written in multiple lines, with the principle of writing only one command per line.

For example, it can be used in the following form.

```wave
"mov rax, 1"
"syscall"
```

The `in("register")` value syntax is used to load the value of a Wave variable or expression into the specified CPU register.
Through this, the register can be used as an input value in assembly code.

The example below shows the case of transferring the value of variable s to rdi, the first syscall argument register in the x86-64 convention.

```wave
in("rdi") s
```

Conversely, the `out("register")` variable syntax is used to bring the value in the specified register into a Wave variable.
This method is used when the result of the assembly execution needs to be used in Wave code.

The following example shows the case of storing the value of the `rax` register, where the return value of the `syscall` is stored, into the variable `ret`.

```wave
out("rax") ret
```

---

## Simple Example

The example below is a simple code that prints a string to standard output using `syscall` in a Linux x86-64 environment.

```wave
fun main() {
    var msg_ptr: ptr<I8> = "Hello from syscall!\n";
    var ret_val: i64;

    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

In this example, Wave code directly sets the pointer and length of the string to the register and calls the system call to perform the output operation.
The return value of the system call is delivered via the `rax` register and is brought back into a Wave variable through the `out` syntax.

---

## Precautions

Inline assembly is a feature that intentionally circumvents Wave's type safety and abstraction.
If incorrect commands are used or register setting errors occur, the program may terminate abnormally or undefined behavior may occur.

The mapping of registers through `in` and `out` is verified at compile time, but the semantic validity or execution results of assembly instructions are not guaranteed.
Therefore, when using inline assembly, you must accurately understand the target architecture, calling conventions, and the behavior of the instructions.
