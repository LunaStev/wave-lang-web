---
sidebar_position: 3
---

# Sentencia IF
## Introducción
En esta sección, se introduce la sintaxis de la sentencia IF, que es una de las sentencias de control en Wave. La sentencia IF en programación evalúa una condición y ejecuta un bloque de código específico cuando la condición es verdadera. Esto permite controlar el flujo del programa según condiciones y escribir código más flexible y lógico.

## Estructura básica
La sentencia IF evalúa una condición y ejecuta un bloque de código solo si la condición es verdadera. La estructura básica de la sentencia IF en Wave es la siguiente:


```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

La condición se puede escribir utilizando operadores de comparación (`==`, `!=`, `<`, `>`, `<=`, `>=`) o operadores lógicos (`&&`, `||`, `!`). Si la condición es falsa, el bloque de código no se ejecutará.

## Ejemplo
A continuación se muestra un ejemplo simple de una sentencia IF:

```wave
var temperatura :i32 = 30;

if (temperatura > 25) {
    println("Hace calor.");
}
```

En este código, si el valor de `temperatura` es mayor a 25, se imprimirá el mensaje "Hace calor."

## Sentencia IF_ELSE
Si deseas ejecutar un código alternativo cuando la condición no sea verdadera, puedes usar la sentencia IF-ELSE. La estructura es la siguiente:

```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

### Ejemplo:

```wave
var puntuación :i32 = 70;

if (puntuación >= 60) {
    println("¡Aprobado!");
} else {
    println("No aprobado.");
}
```

Si la puntuación es mayor o igual a 60, se imprimirá "¡Aprobado!", y si no es así, se imprimirá "No aprobado."

## Sentencia IF anidada
La sentencia IF puede usarse dentro de otras sentencias IF. Esto se conoce como sentencia IF anidada y es útil para manejar condiciones más complejas.

```wave
var puntuación :i32 = 85;

if (puntuación >= 60) {
    if (puntuación >= 90) {
        println("¡Excelente desempeño!");
    } else {
        println("Aprobado.");
    } 
} else {
    println("No aprobado.");
}
```

En este ejemplo, según la puntuación, se imprimirá el mensaje "¡Excelente desempeño!", "Aprobado." o "No aprobado."

## Resumen

* La sentencia IF evalúa una condición y ejecuta un bloque de código específico si la condición es verdadera.
* Se puede agregar una sentencia ELSE para ejecutar un código si la condición es falsa.
* Las sentencias IF anidadas se utilizan para manejar condiciones más complejas.

¡Usar la sentencia IF permite que el flujo del programa sea más lógico y dinámico!
