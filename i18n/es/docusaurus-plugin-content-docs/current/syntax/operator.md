---
sidebar_position: 5
---

# Operador

Este documento recopila operadores realmente utilizables según el compilador actual.

## Aritmética

| Operador | Descripción    |
| -------- | -------------- |
| `+`      | Adición        |
| `-`      | Sustracción    |
| `*`      | Multiplicación |
| `/`      | División       |
| `%`      | Módulo         |

## Comparación

| Operador | Descripción   |
| -------- | ------------- |
| `==`     | Igual         |
| `!=`     | Distinto      |
| `<`      | Menor         |
| `<=`     | Menor o igual |
| `>`      | Mayor         |
| `>=`     | Mayor o igual |

## Lógica

| Operador   | Descripción |
| ---------- | ----------- |
| `&&`       | Lógico AND  |
| \\\`\\ | Lógico OR   |
| `!`        | Lógico NOT  |

## Bit

| Operador   | Descripción          |
| ---------- | -------------------- |
| `&`        | Bit AND              |
| \\\`\\ | Bit OR               |
| `^`        | Bit XOR              |
| `~`        | NOT de bit           |
| `<<`       | Shift a la izquierda |
| `>>`       | Shift a la derecha   |

## Asignación

| Operador | Descripción                             |
| -------- | --------------------------------------- |
| `=`      | Asignación básica                       |
| `+=`     | Asignación después de la suma           |
| `-=`     | Asignación después de la resta          |
| `*=`     | Asignación después de la multiplicación |
| `/=`     | Asignación después de la división       |
| `%=`     | Asignación después del módulo           |

## Unario / Puntero / Conversión

| Operador/Palabra clave | Descripción                          |
| ---------------------- | ------------------------------------ |
| `++`, `--`             | Incremento/Decremento prefijo/sufijo |
| `&x`                   | Obtención de dirección               |
| `deref p`              | Desreferenciación de punteros        |
| `expr as T`            | Conversión explícita                 |

## Operaciones de puntero

| Expresión                  | Resultado                                        |
| -------------------------- | ------------------------------------------------ |
| `ptr<T> + int`             | `ptr<T>` (desplazamiento GEP) |
| `int + ptr<T>`             | `ptr<T>` (desplazamiento GEP) |
| `ptr<T> - int`             | `ptr<T>` (desplazamiento GEP) |
| `ptr<T> - ptr<T>`          | `i64` (diferencia en bytes)   |
| `ptr == ptr`, `ptr != ptr` | Comparación de punteros                          |

## Elementos reservados o no implementados

Existen tokens gramaticales que no son compatibles con las operaciones expresionales actuales.
Por ejemplo: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
