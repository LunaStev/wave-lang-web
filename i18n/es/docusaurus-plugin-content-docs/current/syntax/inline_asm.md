---
sidebar_position: 7
---

# Ensambliado en línea

## Introducción

El ensamblaje en línea de Wave se escribe usando `asm { ... Se escribe en un bloque `}\`.
Se pueden controlar directamente los registros, la memoria y los caminos de llamada del sistema dentro del código Wave.

Objetivos actualmente soportados:

- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- `x86_64` independiente
- `aarch64` independiente
- `riscv64` independiente

Windows y los objetivos de 32 bits no están soportados aún.

---

## Forma básica

`asm` puede usarse tanto como una **declaración** como una **expresión**.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Componentes:

- Línea de cadena: instrucción de ensamblaje real
- `in(...)`: operando de entrada
- `out(...)`: operando de salida
- `clobber(...)`: pista de registros/estado/memoria destruidos

---

## Declaración `asm`

Se usa como una declaración general cuando no se requiere un valor de retorno.

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

`out(...)` puede admitir varios.

---

## Expresión `asm`

Se puede usar como una expresión que genera valores directamente.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Aviso:

- La expresión `asm` solo permite **exactamente 1 `out(...)`**.

---

## Restricción `in(...)` / `out(...)`

La cadena de `in("...")`, `out("...")` es una de las dos siguientes.

1. Registro específico

- Ejemplo: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Clase de restricción

- Por ejemplo: `"r"`, `"m"`, `"rm"`

Ejemplo:

```wave
in("r") &buf
out("rax") ret
```

Destino de salida(`out(...) se recomienda el siguiente patrón según la implementación actual para el `target\`.

- Variable: `out("rax") ret`
- Desreferencia de puntero: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` puede aceptar varios elementos a la vez y también se puede usar múltiples veces.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Elementos principales:

- Registros: `"rax"`, `"x0"`, etc.
- Especial: `"memory"`, `"cc"` (normalización interna por objetivo)

El compilador añade automáticamente clobber básico en modo seguro conservador.
(`memory`, y series de flags/cc; en RISC-V independiente generalmente `memory`)

---

## Marcadores de posición de operando (`$0`, `$1`, ...)

Se usa `$N` para referenciar operandos dentro de una cadena de comandos.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Nota:

- El estilo `%0` se convierte internamente en el estilo `$0`.

---

## Rango de soporte actual para operandos de entrada

Los valores `in(...)` actualmente admiten las siguientes formas.

- Identificador de variable
- Literal de entero
- Literal de cadena
- `&identifier`
- Identificador de desreferencia (`deref identifier`)
- Literal de número entero/real negativo

Las expresiones generales complejas pueden estar limitadas, por lo que se recomienda transmitirlas a través de variables temporales cuando sea necesario.

---

## Advertencias

El ensamblaje en línea esquiva parcialmente las protecciones del sistema de tipos.
Asignaciones incorrectas de registros, conflictos de restricciones o la falta de clobber pueden provocar la generación de código incorrecto o errores en tiempo de ejecución.

Recomendaciones:

- Primero, confirme el ABI y las convenciones de llamada de destino.
- Administre explícitamente los registros de entrada/salida y clobber.
- Declare `clobber("memory")` cuando manipule memoria directamente.
