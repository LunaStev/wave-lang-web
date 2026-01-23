---
sidebar_position: 7
---

# Ensambliado en línea

## Introducción

Este documento explica la funcionalidad de ensamblaje en línea proporcionada por el lenguaje Wave.
El ensamblaje en línea es una de las características proporcionadas por Wave, diseñada para permitir el acceso directo al control de hardware de bajo nivel mientras se mantiene la conveniencia y la estructura de un lenguaje de alto nivel.

Permite realizar operaciones como la manipulación de registros, el acceso a direcciones de memoria y la ejecución de instrucciones específicas de la CPU que son difíciles de expresar en código Wave ordinario, y se utiliza en situaciones donde la optimización del rendimiento es importante o se necesita código fuertemente dependiente del hardware y la arquitectura.
Con esta funcionalidad, Wave puede abarcar desde un simple lenguaje de alto nivel hasta el ámbito de la programación de sistemas.

---

## Gramática básica

El ensamblaje en línea se escribe usando \`asm { ... } como bloque.
Dentro de este bloque se definen tanto las instrucciones de ensamblaje que se van a ejecutar realmente como el mapeo de entrada y salida para conectar las variables Wave con los registros de la CPU.

```wave
asm {
    "Instrucción ensambladora"          // Código ensamblador real (una instrucción por línea)
    ...
    in("registro") valor         // Mapeo de registro de entrada
    out("registro") variable      // Mapeo de registro de salida
}
```

Las instrucciones de ensamblaje se escriben en forma de cadena de caracteres, describiendo las instrucciones de bajo nivel que realmente se ejecutan en la CPU.
Puede escribirse en múltiples líneas y, en principio, solo debe haber un comando por línea.

Por ejemplo, se puede utilizar de la siguiente manera.

```wave
"mov rax, 1"
"syscall"
```

La sintaxis `in("registro")` se utiliza para cargar el valor de una variable o expresión de Wave en un registro de CPU especificado.
De este modo, en el código ensamblador, se puede utilizar el registro como un valor de entrada.

El siguiente ejemplo ilustra el caso de pasar el valor de la variable s al registro rdi, que es el primer registro de argumento de syscall según la convención x86-64.

```wave
in("rdi") s
```

Por el contrario, la sintaxis de variable `out("registro")` se usa para traer a una variable Wave el valor contenido en el registro especificado.
Esta técnica se utiliza cuando se necesita usar el resultado de la ejecución en ensamblador en el código Wave.

El siguiente ejemplo describe el caso de almacenar en la variable `ret` el valor del registro `rax` donde se guarda el valor de retorno de la llamada a `syscall`.

```wave
out("rax") ret
```

---

## Ejemplo simple

El siguiente ejemplo es un código sencillo que utiliza `syscall` en un entorno Linux x86-64 para imprimir una cadena a la salida estándar.

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

En este ejemplo, el código Wave establece directamente en los registros el puntero y la longitud de la cadena, y realiza la operación de llamada al sistema para imprimir.
El valor de retorno de la llamada al sistema se transmite a través del registro `rax`, y se recupera como variable Wave mediante la sintaxis `out`.

---

## Advertencias

El ensamblaje en línea es una función que deliberadamente elude la seguridad de tipos y la abstracción de Wave.
Si se utilizan instrucciones incorrectas o hay errores en la configuración del registro, el programa puede terminar de manera anormal o presentar comportamiento indefinido.

El mapeo de registros mediante `in` y `out` se valida en tiempo de compilación, pero no se garantiza la validez semántica ni el resultado de ejecución de las instrucciones de ensamblado.
Por lo tanto, al usar ensamblado en línea, se debe comprender completamente la arquitectura objetivo, la convención de llamadas y el funcionamiento de las instrucciones.
