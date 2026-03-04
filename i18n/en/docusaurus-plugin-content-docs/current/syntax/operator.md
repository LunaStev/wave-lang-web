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

| Expression                 | Result                               |
| -------------------------- | ------------------------------------ |
| `ptr<T> + int`             | `ptr<T>` (GEP 이동) |
| `int + ptr<T>`             | `ptr<T>` (GEP 이동) |
| `ptr<T> - int`             | `ptr<T>` (GEP 이동) |
| `ptr<T> - ptr<T>`          | `i64` (바이트 차이)    |
| `ptr == ptr`, `ptr != ptr` | 포인터 비교                               |

## 예약 또는 미구현 항목

문법 토큰은 존재하지만 현재 표현식 연산으로는 지원되지 않는 항목이 있습니다.
예: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
