---
sidebar_position: 7
---

# Inline Assembly

## Introduction

Inline assembly in Wave is written with `asm {... It is written within a `}\` block.
Within Wave code, you can directly control registers, memory, and system call paths.

Currently supported targets:

- Linux `x86_64`
- macOS (Darwin) `arm64`

Windows is not supported yet.

---

## Basic Form

`asm` can be used both as a **statement** and as an **expression**.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Components:

- String line: actual assembly instruction
- `in(...)`: input operands
- `out(...)`: output operands
- `clobber(...)`: hints for clobbered registers/status/memory

---

## `asm` Statement

It is used as a regular statement if no return value is needed.

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

Multiple `out(...)` can be used.

---

## `asm` Expression

It can be used as an expression that directly generates a value.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Caution:

- `asm` expressions allow **exactly 1 `out(...)`**.

---

## `in(...)` / `out(...)` Constraints

The strings for `in("...")`, `out("...")` are one of the following.

1. Specific Registers

- Examples: `"rax"`, `"rdi"`, `"x0"`, `"w1"`

2. Constraint Class

- Examples: `"r"`, `"m"`, `"rm"`

Example:

```wave
in("r") &buf
out("rax") ret
```

Output Target (`out(...) target`) the following pattern is recommended based on current implementation.

- Variable: `out("rax") ret`
- Pointer dereference: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` can take multiple items at once, and can be used multiple times.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Key Items:

- Registers: `"rax"`, `"x0"`, etc.
- Special: `"memory"`, `"cc"` (internally normalized per target)

The compiler automatically adds default clobbers in conservative safety mode.
(`memory`, flags/cc series, etc.)

---

## Operand placeholders (`$0`, `$1`, ...)

Use `$N` to refer to operands within a command string.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Note:

- Even if `%0` style is used, it is internally converted to `$0` style.

---

## Current support range for input operands

`in(...)` values currently support the following forms.

- Variable identifier
- Integer literal
- String literal
- `&identifier`
- `deref identifier`
- Negative integer/real literal

Complex general expressions may be restricted, so it is recommended to store them in temporary variables for transmission when necessary.

---

## Precautions

Inline assembly partially bypasses the protection of the type system.
Incorrect register specification, constraint conflicts, and missing clobbers can cause incorrect code generation or runtime malfunctions.

Recommendations:

- First finalize the target ABI and calling conventions
- Explicitly manage input/output registers and clobbers
- Declare `clobber("memory")` when directly touching memory
