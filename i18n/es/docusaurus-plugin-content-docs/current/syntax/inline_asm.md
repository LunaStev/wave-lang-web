---
sidebar_position: 7
---

# Ensambliado en línea

## Introducción

Este documento trata sobre el ensambliado en línea del lenguaje Wave.
El ensambliado en línea es una de las características proporcionadas por Wave, un nivel extremo de gramática que permite acceder directamente al control de hardware de bajo nivel mientras se mantiene la conveniencia de un lenguaje de alto nivel.

Es decir, permite manipular registros, acceder directamente a la memoria y ejecutar instrucciones especiales, difíciles de manejar con el código Wave normal, y se utiliza cuando se requiere la optimización del rendimiento o tareas dependientes del hardware.

---

## Gramática básica

```wave
asm {
    "Instrucción ensambladora"          // Código ensamblador real (una instrucción por línea)
    ...
    in("registro") valor         // Mapeo de registro de entrada
    out("registro") variable      // Mapeo de registro de salida
}
```

### Elementos gramaticales

1. Instrucción ensambladora
    - Se escribe en forma de cadena de caracteres `"..."`, y es una instrucción de ensamblado de bajo nivel que se ejecuta en la CPU real.
    - Puede escribirse en varias líneas, con una instrucción por línea.
    - Ejemplo:
           ```wave
           "mov rax, 1"
           "syscall"
           ```

2. `in("registro") valor`
    - Carga el valor de una variable (o expresión) en el registro especificado.
    - Ejemplo:
           ```wave
           in("rdi") s
           ```
        -> Coloca el valor de la variable `s` en el registro `rdi`, que es el primer registro de argumento de syscall según la convención x86-64.

3. `out("registro") variable`
    - Obtiene el valor del registro especificado como una variable Wave.
    - Ejemplo:
           ```wave
           out("rax") ret
           ```
        -> Almacena el valor del registro `rax`, donde se guarda el valor de retorno del `syscall`, en la variable `ret`.

---

## Ejemplo simple

```wave
fun main() {
    var msg_ptr: ptr<i8> = "¡Hola desde syscall!\n";
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

## Advertencias

- El ensambliado en línea elude la seguridad de tipos de Wave, por lo que el uso incorrecto de instrucciones puede provocar que el programa termine de manera anormal o que ocurra un comportamiento indefinido.
- El mapeo de `in`, `out` se verifica en tiempo de compilación, pero no se garantiza la validez de las instrucciones en sí.
