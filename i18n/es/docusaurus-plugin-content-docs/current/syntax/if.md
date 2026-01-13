---
sidebar_position: 3
---

# comando IF

## Introducción

Esta sección explica la sintaxis y el uso del comando IF, uno de los comandos de control que ofrece el lenguaje Wave.
El comando IF es una estructura de control básica que evalúa una condición y ejecuta un bloque de código específico solo si dicha condición es verdadera.

Esto permite que el programa no solo siga un flujo de ejecución de arriba hacia abajo, sino que también realice diferentes acciones según la situación y las condiciones.
El comando IF es un elemento central en casi todos los programas y se utiliza esencialmente para implementar ramas lógicas y control de flujo.

## Estructura básica

El comando IF primero evalúa una expresión condicional y solo ejecuta el bloque de código escrito entre llaves `{}` si el resultado es verdadero (True).
Si la condición es falsa (False), el bloque se omite y se procede al siguiente código.

La estructura básica del comando IF en Wave es la siguiente.

```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
}
```

En la expresión condicional se pueden usar libremente operadores de comparación o lógicos.
Por ejemplo, se pueden comparar relaciones de valores mediante operadores de comparación como `==`, `!=`, `<`, `>`, `<=`, `>=`, y combinar múltiples condiciones usando operadores lógicos como `&&`, `||`, `!`.

El resultado de la expresión condicional debe evaluarse como verdadero o falso, y si la condición es falsa, el código dentro del bloque IF no se ejecutará.

## Ejemplo

A continuación, se presenta un ejemplo simple del comando IF.

```wave
var temperatura :i32 = 30;

if (temperatura > 25) {
    println("Hace calor.");
}
```

En el código anterior se evalúa si el valor de la variable `temperature` es mayor que 25.
Si la condición es verdadera, se imprime el mensaje "El clima es caluroso.", y si es falsa, no se realiza ninguna acción.

El comando IF se utiliza para ejecutar código solo cuando se cumple una condición específica.

## Comando IF-ELSE

Si hay código que debe ejecutarse incluso cuando la condición no es verdadera, se puede añadir una cláusula ELSE al comando IF.
El comando IF-ELSE es una estructura que ejecuta uno de dos bloques de código de manera selectiva, dependiendo del resultado de la condición.

La estructura básica es la siguiente.

```wave
if (condición) {
    // Código a ejecutar si la condición es verdadera
} else {
    // Código a ejecutar si la condición es falsa
}
```

Si la condición es verdadera, se ejecuta el bloque IF; si es falsa, se ejecuta el bloque ELSE.
Solo se ejecuta uno de los dos bloques, nunca simultáneamente.

A continuación se muestra un ejemplo con una sentencia IF-ELSE.

```wave
var puntaje :i32 = 70;

if (puntaje >= 60) {
    println("¡Aprobado!");
} else {
    println("No aprobado.");
}
```

Este código imprime diferentes mensajes según si `score` es 60 o más.
Si la condición es verdadera, se imprime "¡Aprobado!"; de lo contrario, se imprime "No aprobado.".

## comando IF anidado

Una sentencia IF puede usarse dentro de otra sentencia IF, lo que se llama una sentencia IF anidada.
Las sentencias IF anidadas son útiles cuando se deben evaluar condiciones en múltiples etapas secuenciales.

El siguiente ejemplo es una sentencia IF anidada que imprime resultados diferentes según la puntuación.

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

Este código primero verifica si la puntuación es 60 o más.
Si es menos de 60, se imprime directamente "No aprobado.".
Si es 60 o más, se evalúa nuevamente la condición: si la puntuación es 90 o más, se imprime "¡Excelente rendimiento!"; de lo contrario, se imprime "Aprobado.".

Con las sentencias IF anidadas, se pueden expresar condiciones complejas de forma escalonada.

## Resumen

La sentencia IF es una instrucción básica de control que evalúa condiciones para dirigir el flujo de ejecución del programa.
El uso del ELSE permite definir claramente el comportamiento cuando la condición es falsa, y con sentencias IF anidadas se pueden manejar combinaciones de condiciones complejas.

El uso adecuado de las sentencias IF puede estructurar el flujo del programa de manera más lógica y clara.