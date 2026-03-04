---
sidebar_position: 5
---

# Operator

This document organizes the operators currently usable based on the compiler.

## Arithmetic

| Operator | Description    |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |
| `%`      | Remainder      |

## Comparison

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | Equal                    |
| `!=`     | Not Equal                |
| `<`      | Less Than                |
| `<=`     | Less Than or Equal To    |
| `>`      | Greater Than             |
| `>=`     | Greater Than or Equal To |

## Logical

| Operator | Description |
| -------- | ----------- |
| `&&`     | Logical AND |
| \`\\   | Logical OR  |
| `!`      | Logical NOT |

## Bitwise

| Operator | Description |
| -------- | ----------- |
| `&`      | Bitwise AND |
| \`\\   | Bitwise OR  |
| `^`      | Bitwise XOR |
| `~`      | Bitwise NOT |
| `<<`     | Left Shift  |
| `>>`     | Right Shift |

## Assignment

| Operator | Description               |
| -------- | ------------------------- |
| `=`      | Basic Assignment          |
| `+=`     | Addition Assignment       |
| `-=`     | Subtraction Assignment    |
| `*=`     | Multiplication Assignment |
| `/=`     | Division Assignment       |
| `%=`     | Remainder Assignment      |

## Unary / Pointer / Cast

| Operators/Keywords | Description           |
| ------------------ | --------------------- |
| `++`, `--`         | Pre/Post Increment    |
| `&x`               | Address Acquisition   |
| `deref p`          | Pointer Dereferencing |
| `expr as T`        | Explicit Cast         |

## Pointer Operations

| Expression                 | Result                                     |
| -------------------------- | ------------------------------------------ |
| `ptr<T> + int`             | `ptr<T>` (GEP Move)     |
| `int + ptr<T>`             | `ptr<T>` (GEP Move)     |
| `ptr<T> - int`             | `ptr<T>` (GEP Move)     |
| `ptr<T> - ptr<T>`          | `i64` (Byte Difference) |
| `ptr == ptr`, `ptr != ptr` | Pointer Comparison                         |

## Reserved or unimplemented items

There are grammar tokens that exist but are not currently supported by expression operations.
For example: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
