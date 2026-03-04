---
sidebar_position: 12
---

# Global/Local Storage Rules

Wave clearly differentiates storage lifetime and mutability at the keyword level.

## Summary

- Global Constant: `const`
- Global Storage Variable: `static`
- Local Variable: `var`, `let`, `let mut`

Thus, **only `const` and `static` are declared at the top-level**,
**while only the `var` and `let` family are declared inside functions/blocks**.

## Global Constant: `const`

`const` is treated as a compile-time constant and cannot be reassigned.

```wave
const PAGE_SIZE: i32 = 4096;
const MAGIC: i32 = 0x1BADB002;
```

## Global Storage Variable: `static`

`static` is a variable with global storage.
It can be reassigned and is initialized to the zero value of the type if no initial value is provided.

```wave
static COUNTER: i32 = 0;
static VGA_BUFFER: ptr<char> = 0xb8000 as ptr<char>;
```

## Local Variable: `var` / `let`

Only local variable keywords are used inside functions or blocks.

```wave
fun main() -> i32 {
    var x: i32 = 10;
    let y: i32 = 20;
    let mut z: i32 = 30;

    x = x + 1;
    z = z + 1;
    return x + y + z;
}
```

## Constraints

- `var`, `let` cannot be used at the top-level.
- `const`, `static` cannot be used inside functions/blocks.
- `let` is immutable and cannot be reassigned.
