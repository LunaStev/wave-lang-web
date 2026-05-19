---
sidebar_position: 7
---

# ఇన్‌లైన్ అసెంబ్లీ

Wave inline assembly `asm { ... }` block తో వ్రాయబడుతుంది. kernel, UEFI bootloader, system call, port I/O, CPU control వంటి low-level code కోసం ఇది ఉపయోగపడుతుంది.

ప్రస్తుత targets: Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, మరియు freestanding `x86_64`/`aarch64`/`riscv64`. 32-bit targets ఇంకా మద్దతు పొందలేదు.

## ప్రాథమిక రూపం

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String lines assembly instructions. `in(...)` inputs, `out(...)` outputs, మరియు `clobber(...)` asm మార్చే state-ని ప్రకటిస్తాయి.

## statement asm

expression value అవసరం లేని చోట statement asm ఉపయోగిస్తారు. దీనికి అనేక outputs ఉండవచ్చు.

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

expression asm ఒక value ఉత్పత్తి చేస్తుంది; ప్రస్తుతం ఖచ్చితంగా ఒక `out(...)` కావాలి. expression asm లో `clobber("noreturn")` నిషేధం.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands మరియు constraints

Operands concrete registers లేదా constraint classes వాడవచ్చు. x86_64 `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 `x0` ... `x30` మరియు `w0` ... `w30`; RISC-V `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN` వాడుతుంది. సాధారణ classes `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. ఒక physical register operand మరియు clobber రెండూ కాలేదు.

## clobber ఒప్పందం

`clobber("memory")` అంటే asm memory చదవవచ్చు లేదా వ్రాయవచ్చు. `clobber("flags")` మరియు `clobber("cc")` flags మారుతాయని సూచిస్తాయి. stack లేదా call/return instructions వాడితే `clobber("stack")` అవసరం. `clobber("nostack")` stack తాకదని హామీ. `clobber("noreturn")` control ప్రస్తుత block కు తిరిగి రాదని అర్థం. `stack` మరియు `nostack` కలిపి వాడలేరు.

## Stack discipline

సాధారణ asm stack మార్చకూడదు. `call`, `push`, `pop`, `ret`, `rsp`/`esp` లేదా `sp` నేరుగా వాడటం వంటి instructions కు `clobber("stack")` అవసరం. అయినప్పటికీ return ముందు stack pointer restore చేయాలి.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## తిరిగి రాని asm

`jmp rax`, `jmp r11`, `br x0`, లేదా `jr ra` వంటి indirect jumps కు `clobber("noreturn")` అవసరం. ఈ clobber ఉన్న statement asm IR block ను `unreachable` తో ముగిస్తుంది.

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

local label కు jump అదే asm/control-flow path లోనే ఉంటుంది కాబట్టి `noreturn` అవసరం లేదు.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output targets

స్థిర output targets variables మరియు pointer variables యొక్క `deref`. field లేదా array కోసం ముందుగా temporary variable లో వ్రాయండి.

```wave
out("rax") value
out("rax") deref ptr
```

## పరిమితులు

inline asm ఎల్లప్పుడూ side effect ఉన్నదిగా పరిగణించబడుతుంది. క్లిష్టమైన stack manipulation ఇంకా తిరస్కరించబడవచ్చు. Function pointer మరియు explicit calling convention types ఇంకా stable కావు, కాబట్టి UEFI service calls ఇప్పటికి asm wrappers ఉపయోగించవచ్చు.
