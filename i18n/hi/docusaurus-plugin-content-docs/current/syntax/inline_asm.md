---
sidebar_position: 7
---

# इनलाइन असेंबली

Wave में inline assembly `asm { ... }` ब्लॉक से लिखी जाती है। यह kernel, UEFI bootloader, system call, port I/O और CPU control जैसे low-level code के लिए है।

वर्तमान targets Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, और freestanding `x86_64`/`aarch64`/`riscv64` हैं। 32-bit targets अभी समर्थित नहीं हैं।

## मूल रूप

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String lines assembly instructions होती हैं। `in(...)` inputs, `out(...)` outputs, और `clobber(...)` asm द्वारा बदली जाने वाली state घोषित करता है।

## statement asm

statement asm वहाँ उपयोग होता है जहाँ expression value की जरूरत नहीं होती। इसमें कई outputs हो सकते हैं।

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

expression asm एक value बनाता है और अभी ठीक एक `out(...)` मांगता है। expression asm में `clobber("noreturn")` निषिद्ध है।

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands और constraints

Operands concrete registers या constraint classes का उपयोग कर सकते हैं। x86_64 `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15` का उपयोग करता है; AArch64 `x0` ... `x30` और `w0` ... `w30`; RISC-V `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`। सामान्य classes `r`, `m`, `rm`, `i`, `ri`, `im`, `irm` हैं। एक physical register operand और clobber दोनों नहीं हो सकता।

## clobber अनुबंध

`clobber("memory")` का अर्थ है कि asm memory पढ़ या लिख सकता है। `clobber("flags")` और `clobber("cc")` flags बदलने का संकेत देते हैं। stack या call/return instructions के लिए `clobber("stack")` चाहिए। `clobber("nostack")` stack न छूने का वादा है। `clobber("noreturn")` का अर्थ है कि control current block में वापस नहीं आता। `stack` और `nostack` साथ नहीं हो सकते।

## Stack अनुशासन

सामान्य asm को stack नहीं बदलना चाहिए। `call`, `push`, `pop`, `ret`, `rsp`/`esp` या `sp` का सीधा उपयोग, और समान instructions को `clobber("stack")` चाहिए। फिर भी लौटने से पहले stack pointer restore होना चाहिए।

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## न लौटने वाला asm

`jmp rax`, `jmp r11`, `br x0`, या `jr ra` जैसे indirect jumps को `clobber("noreturn")` चाहिए। ऐसे clobber वाला statement asm IR block को `unreachable` से समाप्त करता है।

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

## स्थानीय labels

local label पर jump उसी asm/control-flow path में रहता है और `noreturn` की जरूरत नहीं होती।

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output targets

स्थिर output targets variables और pointer variables का `deref` हैं। field या array के लिए पहले temporary variable में लिखें।

```wave
out("rax") value
out("rax") deref ptr
```

## सीमाएँ

inline asm को हमेशा side effect वाला माना जाता है। जटिल stack manipulation अभी भी reject हो सकती है। Function pointer और explicit calling convention types अभी stable नहीं हैं, इसलिए UEFI service calls अभी asm wrappers इस्तेमाल कर सकते हैं।
