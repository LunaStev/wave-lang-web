---
sidebar_position: 3
---

# comando IF

## Introducción

En esta sección se presenta la sintaxis del comando IF, uno de los comandos de control de Wave.
El comando IF es una instrucción de control que evalúa una condición y ejecuta un bloque de código determinado cuando la condición es verdadera.
Esto permite controlar el flujo del programa según una condición, escribiendo código flexible y lógico.

## Estructura básica

El comando IF evalúa una condición específica y sólo ejecuta el bloque de código designado si esa condición es verdadera (True).
La estructura básica del comando IF en Wave es la siguiente:

```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

La condición se redacta utilizando operadores de comparación (`==`, `!=`, `<`, `>`, `<=`, `>=`) o lógicos (`&&`, `||`, `!`). Si la condición es falsa (False), el bloque de código no se ejecuta.

## Ejemplo

A continuación, se presenta un ejemplo simple de un comando IF:

```wave
var temperatura :i32 = 30;

if (temperatura > 25) {
    println("Hace calor.");
}
```

En el código anterior, si el valor de temperatura es mayor que 25, se imprimirá el mensaje "Hace calor.".

## comando IF_ELSE

Para redactar el código que se ejecutará si la condición no es verdadera, se utiliza el comando IF-ELSE.
La estructura es la siguiente:

```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

### Ejemplo:

```wave
var puntaje :i32 = 70;

if (puntaje >= 60) {
    println("¡Aprobado!");
} else {
    println("No aprobado.");
}
```

Si el puntaje es 60 o más, se imprimirá "¡Aprobado!", de lo contrario, se imprimirá "No aprobado.".

## comando IF anidado

El comando IF también puede ser utilizado dentro de otro comando IF. Esto se denomina comando IF anidado y es útil para manejar condiciones complejas.

```wave
var puntaje :i32 = 85;

if (puntaje >= 60) {
    if (puntaje >= 90) {
        println("¡Excelente calificación!");
    } else {
        println("Aprobado.");
    } 
} else {
    println("No aprobado.");
}
```

En el ejemplo anterior, se imprimirá el mensaje "¡Excelente calificación!", "Aprobado." o "No aprobado." según el puntaje.

## Resumen

- El comando IF es una instrucción de control que evalúa una condición y ejecuta un bloque de código específico.
- Al agregar el comando ELSE, también se puede especificar el código que se ejecutará si la condición es falsa.
- El comando IF anidado se utiliza para manejar condiciones complejas.

¡El uso del comando IF permite estructurar el flujo del programa de forma más lógica y dinámica!