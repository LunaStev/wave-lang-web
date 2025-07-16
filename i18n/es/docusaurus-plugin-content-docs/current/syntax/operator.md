---
sidebar_position: 5
---

# Operador

## Introducción

El lenguaje Wave ofrece una variedad de operadores que permiten realizar cálculos entre variables, evaluaciones lógicas, comparaciones, y operaciones de bits.

Este documento explica los principales operadores disponibles en Wave, organizados por categoría, y proporciona el funcionamiento de cada uno junto con ejemplos.

Los operadores se clasifican en las siguientes categorías:

- Operadores aritméticos
- Operadores de comparación
- Operadores lógicos
- Operadores de bits
- Operadores de asignación
- Otros operadores especiales

---

## Operadores aritméticos

Los operadores aritméticos realizan operaciones matemáticas básicas sobre datos numéricos.

| Operador | Descripción         | Ejemplo (`a = 10`, `b = 3`)     |
| -------- | ------------------- | -------------------------------------------------- |
| `+`      | Adición             | `a + b` → `13`                                     |
| `-`      | Sustracción         | `a - b` → `7`                                      |
| `*`      | Multiplicación      | `a * b` → `30`                                     |
| `/`      | División            | `a / b` → `3` (división entera) |
| `%`      | Operación de módulo | `a % b` → `1`                                      |

---

## Operadores de comparación

Los operadores de comparación devuelven un valor `bool` como resultado de comparar dos valores.

| Operador | Descripción   | Ejemplo (`a = 10`, `b = 3`) |
| -------- | ------------- | ---------------------------------------------- |
| `==`     | Igual         | `a == b` → `falso`                             |
| `!=`     | Distinto      | `a != b` → `verdadero`                         |
| `<`      | Menor         | `a < b` → `falso`                              |
| `>`      | Mayor         | `a > b` → `verdadero`                          |
| `<=`     | Menor o igual | `a <= 10` → `verdadero`                        |
| `>=`     | Mayor o igual | `a >= b` → `verdadero`                         |

---

## Operadores lógicos

Los operadores lógicos procesan combinaciones de verdadero/falso para valores `bool`.

| Operador   | Nombre     | Descripción                                     | Ejemplo                   |
| ---------- | ---------- | ----------------------------------------------- | ------------------------- |
| `&&`       | Lógico AND | Solo `true` cuando ambos valores son `true`     | `true && false` → `falso` |
| \\\`\\ | Lógico OR  | Si uno de los dos es `true`, entonces es `true` | \\\`true \\           |
| `!`        | Lógico NOT | Invierte `true` a `falso` y `falso` a `true`    | `!true` → `falso`         |

---

## Operadores de bits

Los operadores de bits manipulan datos enteros a nivel de bits.

| Operador   | Nombre               | Descripción                      | Ejemplo         |
| ---------- | -------------------- | -------------------------------- | --------------- |
| `&`        | Bit AND              | Solo 1 cuando ambos bits son 1   | `a & b` → `2`   |
| \\\`\\ | Bit OR               | 1 si uno de los bits es 1        | b`→`7\\\`     |
| `^`        | Bit XOR              | 1 cuando los bits son diferentes | `a ^ b` → `5`   |
| `~`        | NOT de bit           | Invertir bits                    | `~a` → `-7`     |
| `<<`       | Shift a la izquierda | Mover bits a la izquierda        | `a << 1` → `12` |
| `>>`       | Shift a la derecha   | Mover bits a la derecha          | `a >> 1` → `3`  |

---

## Operadores de asignación

Se utiliza para almacenar un valor en una variable. En la mayoría de los casos, se puede combinar con operadores aritméticos para abreviar.

| Operador | Descripción                             | Ejemplo (`a = 5`) |
| -------- | --------------------------------------- | ------------------------------------ |
| `=`      | Asignación básica                       | `a = 10`                             |
| `+=`     | Asignación después de la suma           | `a += 2` → `7`                       |
| `-=`     | Asignación después de la resta          | `a -= 1` → `4`                       |
| `*=`     | Asignación después de la multiplicación | `a *= 3` → `15`                      |
| `/=`     | Asignación después de la división       | `a /= 5` → `1`                       |
| `%=`     | Asignación después del módulo           | `a %= 4` → `1`                       |

---

## Otros operadores especiales

Wave también ofrece operadores con significados únicos o especiales como los siguientes.

| Operador    | Nombre                                                      | Descripción                                              | Ejemplo                                           |
| ----------- | ----------------------------------------------------------- | -------------------------------------------------------- | ------------------------------------------------- |
| `??`        | Operador de fusión nula                                     | Usa el valor de la derecha si el de la izquierda es nulo | `a ?? b` → `si a es nulo, entonces b`             |
| `?:`        | Operador condicional (operador ternario) | Selecciona un valor basado en una condición              | `condición ? valor si verdadero : valor si falso` |
| `in`        | Verifica la inclusión                                       | Verifica si un valor está incluido en una colección      | `"a" en lista`                                    |
| `is`        | Operador de comparación de tipos                            | Verifica el tipo de un valor                             | `x es i32`                                        |
| `!&`        | NAND                                                        | Operación lógica NAND                                    | Operación lógica avanzada                         |
| \\\`!\\ | NOR                                                         | Operación lógica NOR                                     | Operación lógica avanzada                         |
| `~^`        | XNOR                                                        | Operación lógica XNOR                                    | Operación lógica avanzada                         |

---

## Resumen

Wave ofrece una variedad de operadores desde operaciones matemáticas hasta evaluación lógica, manipulación de bits y división de condiciones.
Estos operadores interactúan con variables o forman condiciones y son herramientas indispensables para cálculos complejos o control de flujo.

La prioridad y la dirección de combinación de cada operador se podrán tratar en la sección "Prioridad y orden de evaluación" posteriormente.