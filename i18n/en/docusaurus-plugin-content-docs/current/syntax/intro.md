---
sidebar_position: 1
---

# Functions and Variables

## Introduction

The core design philosophy of the Wave programming language is to balance low-level performance with high-level abstraction, providing an efficient and flexible environment for software development.
This section introduces the basic components of a Wave program: functions and variables. These components are essential in structuring logic and managing data within a program.
Understanding how to define and work with functions and variables allows you to maximize the potential of Wave.

---

## Function

In Wave, a function acts as a **reusable block of code** that can be executed independently.
Functions encapsulate specific actions and allow them to be called as needed throughout the program.
This enables you to perform calculations, manage I/O operations, or separate code into manageable units.

In Wave, the signature of a function begins with the `fun` keyword and consists of the function's name, parameters (if any), and a body enclosed in braces `{}`}.

### Defining Functions

A basic function in Wave is defined as follows:

```wave
fun main() {
    // Write your code here
}
```

- The `main` function is always required as the entry point for program execution.
- Functions can have parameters and return values. The return type is specified after the function name.

### Example: Simple Function

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // call add function
    println(result);            // Output: 12
}
```

In the above example:

- The `add` function takes two integers `a` and `b` and returns their sum.
- The `main` function calls `add` and prints the result.

## Variable

Variables are used to store and manipulate data within a program.
Wave supports both **mutable variables** and **immutable variables** in declarations, giving developers control over data management.

### Mutable Variable

In Wave, variables are **mutable** by default. This means their values can be changed during program execution.

Mutable variables are declared using the `var` keyword.

```wave
var x :i32 = 10; // Mutable variable
x = 20;
```

In the above example:

- `x` is a mutable variable, initialized to `10`, and can later be changed to `20`.

### Immutable Variable

When a variable is declared as **immutable**, its value cannot be changed once assigned.

Immutable variables are declared using the `let` keyword.

```wave
let y :i32 = 5;         // Immutable variable
// y = 10;              // Error: Cannot change value of an immutable variable.
```

Here:

- `y` is an immutable variable, and trying to change its value will cause a compile error.

However, if you want to use the `let` keyword for a mutable variable, you can use `mut` to temporarily make the variable mutable.

```wave
let mut y :i32 = 5;
y = 10; 
```

### Variable Declaration Example

Examples of declaring mutable and immutable variables of different types are as follows:

```wave
var x :i32 = 10;                    // Mutable integer variable
let y :f
```

- `x` is a mutable integer.
- `y` is an immutable floating-point number.
- `name` is a mutable string.
- `is_active` is an immutable boolean.

In Wave, mutable variables are declared using the `var` keyword, whereas immutable variables that cannot be changed after initial assignment are declared using the `let` keyword.

By distinguishing between mutable and immutable variables, Wave allows for more effective control over data consistency and program state.
This enables the writing of more robust and predictable code.