---
sidebar_position: 7
---

# Ensamblador en línea

El ensamblador en línea de Wave se escribe con `asm { ... }`. Está pensado para código de bajo nivel como kernels, cargadores UEFI, llamadas al sistema, E/S de puertos y control de CPU.

Los targets actuales son Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64` y freestanding `x86_64`/`aarch64`/`riscv64`. Los targets de 32 bits todavía no están soportados.

## Forma básica

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Las líneas de cadena son instrucciones de ensamblador. `in(...)` declara entradas, `out(...)` declara salidas y `clobber(...)` declara el estado que el asm modifica.

## asm como sentencia

El asm como sentencia se usa cuando no se necesita un valor de expresión. Puede tener varias salidas.

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

## asm como expresión

El asm como expresión produce un valor y actualmente exige exactamente un `out(...)`. `clobber("noreturn")` está prohibido en asm de expresión.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operandos y restricciones

Los operandos pueden usar registros concretos o clases de restricción. x86_64 usa `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 usa `x0` ... `x30` y `w0` ... `w30`; RISC-V usa `a0`, `a1`, `t0`, `s0`, `ra`, `sp` y `xN`. Las clases comunes son `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Un registro físico no puede ser a la vez operando y clobber.

## Contrato de clobber

`clobber("memory")` indica que el asm puede leer o escribir memoria. `clobber("flags")` y `clobber("cc")` indican modificación de flags. `clobber("stack")` es obligatorio si se usan la pila o instrucciones call/return. `clobber("nostack")` promete no tocar la pila. `clobber("noreturn")` indica que el control no vuelve al bloque actual. `stack` y `nostack` no pueden combinarse.

## Disciplina de pila

El asm normal no debe modificar la pila. `call`, `push`, `pop`, `ret`, el uso directo de `rsp`/`esp` o `sp`, e instrucciones similares requieren `clobber("stack")`. Aun así, el puntero de pila debe restaurarse antes de volver.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm sin retorno

Los saltos indirectos como `jmp rax`, `jmp r11`, `br x0` o `jr ra` necesitan `clobber("noreturn")`. Un asm de sentencia con este clobber termina el bloque IR con `unreachable`.

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

## Etiquetas locales

Un salto a una etiqueta local permanece dentro del mismo camino de asm/control flow y no requiere `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Destinos de salida

Los destinos de salida estables son variables y `deref` de variables puntero. Para campos o arrays, escribe primero en una variable temporal.

```wave
out("rax") value
out("rax") deref ptr
```

## Limitaciones

El inline asm siempre se trata como con efectos laterales. La manipulación compleja de pila aún puede rechazarse. Los punteros de función y los tipos de convención de llamada explícita todavía no son estables, por lo que las llamadas UEFI pueden usar wrappers asm por ahora.
