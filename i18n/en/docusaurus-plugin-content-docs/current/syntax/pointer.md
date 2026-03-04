---
sidebar_position: 6
---

# Pointer

## Wave Explicit Memory Type Model

The pointer design in Wave is based on the **Wave Explicit Memory Type Model**.
This model aims to define pointers and arrays as **explicit memory types at the language level**, rather than through syntactic tricks or library abstractions.

According to this design, pointers in Wave are expressed as types in the form of `ptr<T>`, clearly indicating that it is a type pointing to a memory address storing a value of a specific type `T`.
This approach treats pointers as part of the type system, rather than through operators or declaration syntax, enabling a more intuitive and consistent expression of memory structures.

---

In Wave, pointers are explicit types in the form of `ptr<T>`.
Use `&` for address acquisition, and `deref` for dereferencing.

## Declaration and Initialization

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Pointer types can be nested.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Dereferencing

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## `null` Literal Rules

`null` is an **official literal**. It is not an identifier and cannot be used as a variable name.

Key Rules:

- `null` can only be assigned to `ptr<T>` targets.
- It cannot be assigned to non-pointer types like `i32`, `bool`, `array<...>`.
- A pointer cannot be initialized with integer literals (`0`, `123`, `-1`, etc.). Explicitly use `null`.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## Pointer Arithmetic

Wave supports the following pointer arithmetic.

- `ptr + int`: GEP-based pointer advance
- `int + ptr`: Same operation
- `ptr - int`: GEP-based pointer retreat
- `ptr - ptr`: `i64` byte difference calculation

Points:

- `ptr<T> +/- n` moves based on the size of `T` (`sizeof(T)`).
- Thus, `ptr<i32> + 3` moves `+12` bytes.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (byte diff)
```

## Pointer Comparison

Pointers can be used for comparisons.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Relation with Arrays

Pointer Arrays:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Array Pointer:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Safety Note

Wave does not currently have an ownership/lifetime-based pointer safety model like Rust.
Therefore, it does not automatically prevent `null` dereferencing. We recommend the pattern of explicitly inserting a `null` check before `deref`.
