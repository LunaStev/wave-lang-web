---
sidebar_position: 5
---

# Operator

## Introduction

Wave language provides various operators to perform calculations, logical judgments, comparisons, and bit operations between variables.

This document categorizes the main operators available in Wave and explains their operation methods, accompanied by examples.

Operators are divided into the following categories:

- Arithmetic Operators
- Comparison Operators
- Logical Operators
- Bitwise Operators
- Assignment Operators
- Other Special Operators

---

## Arithmetic Operators

Arithmetic operators perform basic mathematical operations on numerical data.

| Operator | Description         | Example (`a = 10`, `b = 3`)      |
| -------- | ------------------- | --------------------------------------------------- |
| `+`      | Addition            | `a + b` → `13`                                      |
| `-`      | Subtraction         | `a - b` → `7`                                       |
| `*`      | Multiplication      | `a * b` → `30`                                      |
| `/`      | Division            | `a / b` → `3` (Integer Division) |
| `%`      | Remainder Operation | `a % b` → `1`                                       |

---

## Comparison Operators

Comparison operators return a `bool` value as a result of comparing two values.

| Operator | Description              | Example (`a = 10`, `b = 3`) |
| -------- | ------------------------ | ---------------------------------------------- |
| `==`     | Equal                    | `a == b` → `false`                             |
| `!=`     | Not Equal                | `a != b` → `true`                              |
| `<`      | Less Than                | `a < b` → `false`                              |
| `>`      | Greater Than             | `a > b` → `true`                               |
| `<=`     | Less Than or Equal To    | `a <= 10` → `true`                             |
| `>=`     | Greater Than or Equal To | `a >= b` → `true`                              |

---

## Logical Operators

Logical operators handle combinations of true/false values for `bool` values.

| Operator | Name        | Description                                 | Example                   |
| -------- | ----------- | ------------------------------------------- | ------------------------- |
| `&&`     | Logical AND | Only `true` if both values are `true`       | `true && false` → `false` |
| \`\\   | Logical OR  | `true` if at least one is `true`            | \`true \\               |
| `!`      | Logical NOT | Invert `true` to `false`, `false` to `true` | `!true` → `false`         |

---

## Bitwise Operators

Bitwise operators manipulate integer type data at the bit level.

| Operator | Name        | Description                 | Example         |
| -------- | ----------- | --------------------------- | --------------- |
| `&`      | Bitwise AND | 1 if both bits are 1        | `a & b` → `2`   |
| \`\\   | Bitwise OR  | 1 if at least one bit is 1  | b`→`7\`         |
| `^`      | Bitwise XOR | 1 if the bits are different | `a ^ b` → `5`   |
| `~`      | Bitwise NOT | Invert bits                 | `~a` → `-7`     |
| `<<`     | Left Shift  | Move bits to the left       | `a << 1` → `12` |
| `>>`     | Right Shift | Move bits to the right      | `a >> 1` → `3`  |

---

## Assignment Operators

Used to store a value in a variable. In most cases, they can be combined with arithmetic operators for shorthand notation.

| Operator | Description               | Example (`a = 5`) |
| -------- | ------------------------- | ------------------------------------ |
| `=`      | Basic Assignment          | `a = 10`                             |
| `+=`     | Addition Assignment       | `a += 2` → `7`                       |
| `-=`     | Subtraction Assignment    | `a -= 1` → `4`                       |
| `*=`     | Multiplication Assignment | `a *= 3` → `15`                      |
| `/=`     | Division Assignment       | `a /= 5` → `1`                       |
| `%=`     | Remainder Assignment      | `a %= 4` → `1`                       |

---

## Other Special Operators

Wave also provides operators with unique or special meanings as follows.

| Operator | Name                                                       | Description                                    | Example                                |
| -------- | ---------------------------------------------------------- | ---------------------------------------------- | -------------------------------------- |
| `??`     | Null Coalescing Operator                                   | Uses the right value if the left value is null | `a ?? b` → `if a is null, then b`      |
| `?:`     | Conditional Operator (Ternary Operator) | Selects a value based on a condition           | `condition ? true value : false value` |
| `in`     | Inclusion Check                                            | Check if a value is included in a collection   | `"a" in list`                          |
| `is`     | Type Comparison Operator                                   | Check the type of a value                      | `x is i32`                             |
| `!&`     | NAND                                                       | Logical NAND Operation                         | Advanced Logical Operation             |
| \`!\\  | NOR                                                        | Logical NOR Operation                          | Advanced Logical Operation             |
| `!^`     | XNOR                                                       | Logical XNOR Operation                         | Advanced Logical Operation             |

---

## Summary

Wave provides a variety of operators ranging from mathematical operations to logical decisions, bit manipulation, and conditional branching.
These operators are essential tools for interacting with variables, constructing conditions, and managing complex computations or flow control.

The precedence and associativity of each operator will be covered later in the "Precedence and Evaluation Order" section.