---
sidebar_position: 7
---

# 内联汇编

## 介绍

Wave的内联汇编是通过 `asm { ... 通过 `}\` 块编写。
在Wave代码中可以直接控制寄存器、内存、系统调用路径。

当前支持的目标:

- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- freestanding `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`

Windows와 32비트 타깃은 아직 지원하지 않습니다.

---

## 基本形式

`asm`可以用于**语句**，也可以用于**表达式**。

```wave
asm {
    "指令"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

组成要素:

- 字符串行: 实际汇编指令
- `in(...)`: 输入操作数
- `out(...)`: 输出操作数
- `clobber(...)`: 被破坏的寄存器/状态/内存提示

---

## `asm` 语句

在不需要返回值的情况下作为一般语句使用。

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

`out(...)` 可以放置多个。

---

## `asm` 表达式

可以用作直接生成值的表达式。

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

注意:

- `asm` 表达式**只允许一个 `out(...)`**。

---

## `in(...)` / `out(...)` 约束

`in("...")`, `out("...")`的字符串是以下两者之一。

1. 具体寄存器

- 예: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. 约束类(constraint class)

- 例如：`"r"`, `"m"`, `"rm"`

例:

```wave
in("r") &buf
out("rax") ret
```

输出目标(\`out(...) 根据当前实现，推荐使用以下模式。

- 变量：`out("rax") ret`
- 指针反向引用：`out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` 可以一次接收多个项目，也可以多次使用。

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

主要项目:

- 寄存器：`"rax"`, `"x0"` 等
- 特殊：`"memory"`, `"cc"`（基于目标的内部规范化）

编译器在保守安全模式下会自动添加基本的clobber。
(`memory`, flags/cc 계열 등; RISC-V freestanding에서는 주로 `memory`)

---

## 操作数占位符 (`$0`, `$1`, ...)

在命令字符串中引用操作数时使用 `$N`。

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

注意：

- 即使使用 `%0` 样式，也会在内部转换为 `$0` 样式。

---

## 输入操作数当前支持范围

`in(...)` 值目前支持以下形式：

- 变量标识符
- 整数字面量
- 字符串字面量
- `&identifier`
- `deref identifier`
- 负整数/实数字面量

复杂的通用表达式可能会受到限制，因此建议在需要时先放入临时变量中传递。

---

## 注意事项

内联汇编部分绕过了类型系统的保护。
错误的寄存器指定、约束冲突、漏掉 clobber 可能导致错误的代码生成或运行时行为。

建议:

- 首先确定目标 ABI 和调用约定
- 明确管理输入/输出寄存器和 clobber
- 如果直接操作内存，请同时声明 `clobber("memory")`。
