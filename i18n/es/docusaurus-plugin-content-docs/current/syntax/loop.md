---
sidebar_position: 4
---

# Bucle

## Introducción

En el lenguaje Wave, se proporcionan bucles para poder ejecutar el código repetidamente.
Los bucles se utilizan para ejecutar el código repetidamente mientras se cumple una determinada condición, o para repetirlo un número específico de veces.

Los bucles admitidos en Wave incluyen:

- while loop: repetición basada en condiciones

- for loop: repetición basada en el número de veces

También se proporcionan las palabras clave break y continue, que permiten controlar el flujo durante la repetición.
Esta sección explica cómo usar los bucles y las palabras clave de control de flujo.

---

## while loop

El bucle `while` ejecuta repetidamente un bloque de código mientras la expresión condicional dada se evalúe como `true`.
La repetición finalizará cuando la condición sea `false`.

### Estructura básica

La siguiente es la sintaxis básica de un bucle `while`:

```wave
while (condición) {
    // código a repetir
}
```

- La condición debe ser de tipo `bool`.

- El bloque de código debe estar entre `{}` y puede contener una o más declaraciones.

### Ejemplo: Imprimir desde 0 hasta 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i es {}.", i);
    i = i + 1;
}
```

Este ejemplo se repite mientras `i` sea menor que 5, imprimiendo el valor en cada repetición y aumentando en 1 cada vez.

---

## Bucle for

El bucle `for` se utiliza de manera útil cuando se conoce el número de repeticiones.
Se compone especificando el valor inicial, la condición de término y la expresión de incremento.

### Estructura básica

```wave
for (var nombreVariable: tipo = valorInicial; condición; incremento) {
    // código a repetir
}
```

- nombreVariable: la variable utilizada para controlar la repetición

- condición: se ejecuta mientras sea `true`

- incremento: cambia el valor de la variable de repetición

### Ejemplo: Imprimir de 1 a 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Bucle anidado

Se puede escribir otro bucle dentro de un bucle, lo que se llama bucle anidado.
Son útiles, por ejemplo, al recorrer matrices bidimensionales o combinaciones.

### Ejemplo: Bucle while doble

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

---

## Bucle break

El bucle `break` finaliza inmediatamente el bucle y sale.
Es útil cuando se desea detener la repetición al cumplir una condición.

### Ejemplo: Finalización de la repetición en un valor específico

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

---

## Bucle continue

El bucle `continue` omite el resto de la repetición actual y comienza la siguiente repetición.
Se usa cuando solo se desea ejecutar parte del bloque de repetición bajo ciertas condiciones.

### Ejemplo: Imprimir solo números pares

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Resumen

| Gramática | Descripción                                                                       |
| --------- | --------------------------------------------------------------------------------- |
| while     | Repetición mientras la condición sea verdadera                                    |
| for       | Ejecución de la repetición con valor inicial, condición y expresión de incremento |
| break     | Finalización inmediata del bucle                                                  |
| continue  | Saltar a la siguiente repetición                                                  |

Los bucles de Wave están diseñados para manejar de manera flexible tanto las operaciones de repetición basadas en condiciones como en el número de veces.

La combinación de `break` y `continue` permite un control más sofisticado del flujo de repetición.