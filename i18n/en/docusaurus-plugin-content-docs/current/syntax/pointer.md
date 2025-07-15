---
sidebar_position: 6
---

# Pointer

## Introduction

This document explains the use of pointers in Wave.
Wave is a language that supports low-level system programming and provides pointers to allow explicit memory address manipulation.
A pointer is a variable that points to the memory address of a specific type, allowing direct access and modification of values.

---

## Pointer Declaration

In Wave, pointers are declared using the `ptr<type>` format. For example, an integer pointer can be declared as follows:

```wave
var p: ptr<i32>;
```

This declaration creates a pointer `p` that points to a value of type `i32`.

---

## Pointer Initialization

Pointers can be initialized with the address of a variable using the `&` operator:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

Here, `&a` refers to the memory address of variable `a`, and `p` becomes the pointer to that address.

---

## Pointer Dereferencing

Use the `deref` keyword to read or modify the value pointed to by a pointer. This is called dereferencing:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // Outputs 10

deref p = 20;
println("{}", a); // Outputs 20
```

---

## NULL Pointer

In Wave, a null pointer is expressed using the `null` keyword.
Pointer variables can be initialized to `null`, indicating they do not point to any valid memory:

```wave
var p: ptr<i32> = null;
```

Dereferencing a null pointer will result in a compiler error.

---

## Multiple Pointers

Wave supports multiple pointers. Pointers can be nested in multiple levels and used as follows:

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Arrays and Pointers

Pointers can point to either array elements or the entire array.

### Pointer to Array Elements

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Pointer to Entire Array

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Outputs memory address
```

---

## Safety and Ownership

Wave introduces an ownership and lifetime system similar to Rust, aiming to ensure memory safety during pointer use.
It thoroughly checks for issues such as invalid pointer dereferencing, double freeing, and dangling pointers.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Output:

```text
x = 42
x = 99
```

---

## Conclusion

Pointers are one of the key features in Wave enabling high-performance low-level programming.
They are very useful for system development that requires direct memory control, native libraries, hardware control, etc., and thanks to Wave's safe compiler structure, it can effectively prevent risks that may arise during pointer use.