---
sidebar_position: 7
---

# Inline-Assembly

Wave-Inline-Assembly wird mit `asm { ... }` geschrieben. Es ist für Low-Level-Code wie Kernel, UEFI-Bootloader, Systemaufrufe, Port-I/O und CPU-Steuerung gedacht.

Aktuelle Targets sind Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64` und freestanding `x86_64`/`aarch64`/`riscv64`. 32-Bit-Targets werden noch nicht unterstützt.

## Grundform

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String-Zeilen sind Assembly-Instruktionen. `in(...)` deklariert Eingaben, `out(...)` Ausgaben und `clobber(...)` den Zustand, den das asm verändert.

## Statement-asm

Statement-asm wird verwendet, wenn kein Ausdruckswert benötigt wird. Es kann mehrere Ausgaben haben.

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

## Expression-asm

Expression-asm erzeugt einen Wert und erlaubt derzeit genau ein `out(...)`. `clobber("noreturn")` ist dort verboten.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operanden und Constraints

Operanden können konkrete Register oder Constraint-Klassen verwenden. x86_64 nutzt `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 nutzt `x0` ... `x30` und `w0` ... `w30`; RISC-V nutzt `a0`, `a1`, `t0`, `s0`, `ra`, `sp` und `xN`. Gemeinsame Klassen sind `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Ein physisches Register darf nicht zugleich Operand und Clobber sein.

## Clobber-Vertrag

`clobber("memory")` bedeutet, dass asm Speicher lesen oder schreiben kann. `clobber("flags")` und `clobber("cc")` melden veränderte Flags. `clobber("stack")` ist nötig, wenn Stack- oder Call/Return-Instruktionen benutzt werden. `clobber("nostack")` verspricht keinen Stack-Zugriff. `clobber("noreturn")` bedeutet, dass die Kontrolle nicht zum aktuellen Block zurückkehrt. `stack` und `nostack` dürfen nicht kombiniert werden.

## Stack-Disziplin

Normales asm darf den Stack nicht verändern. `call`, `push`, `pop`, `ret`, direkter Zugriff auf `rsp`/`esp` oder `sp` und ähnliche Instruktionen benötigen `clobber("stack")`. Trotzdem muss der Stack-Pointer vor der Rückkehr wiederhergestellt werden.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm ohne Rückkehr

Indirekte Sprünge wie `jmp rax`, `jmp r11`, `br x0` oder `jr ra` benötigen `clobber("noreturn")`. Statement-asm mit diesem Clobber beendet den IR-Block mit `unreachable`.

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

## Lokale Labels

Ein Sprung zu einem lokalen Label bleibt im selben asm/control-flow-Pfad und benötigt kein `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Ausgabeziele

Stabile Ausgabeziele sind Variablen und `deref` von Zeigervariablen. Für Felder oder Arrays zuerst in eine temporäre Variable schreiben.

```wave
out("rax") value
out("rax") deref ptr
```

## Einschränkungen

Inline-asm wird immer als nebenwirkend behandelt. Komplexe Stack-Manipulationen können weiterhin abgelehnt werden. Funktionszeiger und explizite Calling-Convention-Typen sind noch nicht stabil, daher können UEFI-Serviceaufrufe vorerst asm-Wrapper verwenden.
