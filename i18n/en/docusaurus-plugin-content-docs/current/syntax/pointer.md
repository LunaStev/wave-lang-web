---
sidebar_position: 6
---

# Pointer

## Introduction

This document explains the pointer features offered by the Wave language and how to utilize them.
Wave is a language that supports low-level system programming and provides pointer functionality, considering situations where explicit memory address manipulation is necessary.

A pointer is a variable that points to a memory address of a specific type, allowing direct access to or modification of the value stored in memory.
This feature plays a crucial role in areas like system software, native libraries, performance-critical code, and hardware control.

---

## Pointer Declaration

In Wave, pointers are declared in the form `ptr<type>`.
This clearly expresses that it is a pointer pointing to the memory address that stores a value of that type.

For example, a pointer to a value of type `i32` can be declared as follows.

```wave
var p: ptr<i32>;
```

This declaration creates a pointer variable that does not point to any memory yet, which can be later initialized with an actual address.

---

## Pointer Initialization

Pointers can be initialized by referencing the address of a variable.
In Wave, the address operator `&` is used to obtain the memory address of a variable.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

In the code above, `&a` represents the memory address where variable `a` is stored, and pointer `p` points to that address.
From this point, you can directly access the value of `a` through `p`.

---

## Pointer Dereferencing

To read or modify the actual value pointed to by a pointer, dereferencing is necessary.
In Wave, pointers are dereferenced using the `deref` keyword.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // Outputs 10

deref p = 20;
println("{}", a); // Outputs 20
```

In this example, `deref p` refers to the value at the memory location pointed to by pointer `p`.
You can read the value or assign a new value to change the contents of the original variable.

---

## NULL Pointer

In Wave, pointers that do not point to valid memory are represented with the `null` keyword.
Pointer variables can be explicitly initialized with `null`, in which case they do not reference any memory address.

```wave
var p: ptr<i32> = null;
```

A null pointer is used to deliberately express an uninitialized state.
In Wave, attempts to dereference a null pointer are detected at compile time and treated as errors, preventing runtime errors or undefined behavior.

---

## Multiple Pointers

Wave supports multilayer pointers that use pointers in several stages.
Pointers themselves are also values, so it is possible to declare a pointer to a pointer.

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

Using multilayer pointers allows you to express indirect reference structures, which can be useful in cases requiring complex memory structures or low-level data representation.

---

## Arrays and Pointers

Pointers can be used to point not only to a single variable but also to array elements or an entire array.

If each element of an array is a pointer, multiple memory locations can be indirectly referenced through a pointer array.

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println(
    "deref arr[0] = {}, deref arr[1] = {}",
    deref arr[0],
    deref arr[1]
); // 10, 20
```

It is also possible to point to the entire array as a single pointer.

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Outputs memory address
```

This method is useful when passing arrays to functions or when handling low-level memory processing.

---

## Safety and Ownership

Wave is designed with the goal of introducing an ownership and lifetime system similar to Rust to reduce risks associated with using pointers.

This aims to prevent issues like invalid pointer dereferencing, dangling pointers, and double frees as much as possible at the compile stage.
Pointers are powerful tools, but Wave applies restrictions and checks to ensure they are used in a clear and safe manner as much as possible.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;

    println("x = {}", deref p);

    deref p = 99;
    println("x = {}", x);
}
```

The output result is as follows.

```text
x = 42
x = 99
```

This example shows that you can safely read and modify the value of a variable through a pointer.

---

## Conclusion

Pointers are one of the key features in Wave enabling high-performance low-level programming.
It plays a particularly important role in areas like system development requiring direct memory control, native library implementation, and hardware control.

Wave aims for safe and predictable pointer use as much as possible by maintaining the power of pointers, while implementing compiler-level checks and language design.
This allows developers to make balanced choices between performance and stability.