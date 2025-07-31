---
sidebar_position: 7
---

# Inline Assembly

## Introduction

This document covers inline assembly in the Wave language.
Inline assembly is one of the features provided by Wave, offering extreme level syntax that allows direct access to low-level hardware control while maintaining the convenience of high-level language.

In other words, it enables operations such as register manipulation, direct memory access, and execution of special commands that are difficult to handle with general Wave code. It is used when performance optimization or hardware-dependent tasks are needed.

---

## Basic Syntax

```wave
asm {
    "assembly command"          // actual assembly code (one command per line)
    ...
    in("register") value         // input register mapping
    out("register") variable      // output register mapping
}
```

### Grammar Components

1. Assembly Command
    - Written in `"..."` string format, it is a low-level assembly command executed on the actual CPU.
    - Multiple lines can be written, with one command per line.
    - Example:
           ```wave
           "mov rax, 1"
           "syscall"
           ```

2. `in("register") value`
    - Loads the value of a variable (or expression) into the specified register.
    - Example:
           ```wave
           in("rdi") s
           ```
        -> Puts the value of the variable `s` into `rdi`, the first syscall argument register in the x86-64 convention.

3. `out("register") variable`
    - Fetches the value of the specified register into a Wave variable.
    - Example:
           ```wave
           out("rax") ret
           ```
        -> Stores the value of the `rax` register, where the return value of the `syscall` is stored, into the variable `ret`.

---

## Simple Example

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

---

## Precautions

- Inline assembly circumvents the type safety of Wave, so using incorrect instructions may lead to program crashes or undefined behavior.
- `in` and `out` mappings are verified at compile time, but the validity of the commands themselves is not guaranteed.
