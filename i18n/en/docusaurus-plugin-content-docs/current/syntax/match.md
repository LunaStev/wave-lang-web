---
sidebar_position: 14
---

# Match Statement

## Introduction

`match` is a control statement that branches based on comparing one value to multiple patterns.
It is useful when you want to more clearly express branching intent than with `if / else if` chains.

Currently, Wave's `match` is a **statement** and does not support the expression form that directly evaluates to a value.
That is, `var x = match (...) { ... }` form cannot be used.

---

## Basic Syntax

```wave
match (value) {
    pattern1 => {
        // execution block
    }
    pattern2 => {
        // execution block
    }
    _ => {
        // default block
    }
}
```

Syntax Rules:

- The header uses the `match (expr)` format.
- Each arm uses the `pattern => { block }` format.
- The arm body must necessarily use `{ ... }` blocks.
- Between arms, you can simply use line breaks, or use a `,` or `;` as separators.

---

## Pattern Types

Currently, the following three patterns are supported.

1. Integer Literal Pattern

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Identifier Pattern

```wave
Off => { ... }
On => { ... }
```

Identifier patterns are used for **values that can be interpreted as integer constants**, like enum variants.

3. Wildcard Pattern (`_`)

```wave
_ => { ... }
```

This is the default arm executed when no patterns match.

---

## Match Target Types

As per the current implementation, `match` target values must be of **integer or enum types**.
Strings, floating-point numbers, and structures cannot be used as targets for `match`.

---

## Example 1: Integer Branching

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Example 2: Enum Branching

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Behavior Rules

- Similar to `switch` statements, **only one matching arm is executed**.
- There is no automatic fallthrough.
- The `_` arm can be used only once.
- The absence of the `_` arm is grammatically allowed. (If there's no matching arm, no arm will be executed.)

---

## Cautionary Notes

1. Duplicate Cases Not Allowed

- Declaring the same case multiple times will cause a compile error.

2. Duplicate `_` Not Allowed

- The `_` arm cannot be declared more than once.

3. Arm Blocks Are Mandatory

- After `=>`, it must be followed by `{ ... }` blocks.

4. Patterns Must Be Constants

- For identifier patterns, use values that can be interpreted as integer constants or enum variants.

---

## Summary

Wave's `match` is a statement control optimized for integer or enum branching.
It uses the `=>` + block structure, and a wildcard (`_`) for forming default branches.

As the number of branch cases increases, it is easier to read and can more clearly express intent than `if / else if`.
