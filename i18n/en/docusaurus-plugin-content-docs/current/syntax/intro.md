---
sidebar_position: 1
---

# Functions and Variables

## Introduction

The core design philosophy of the Wave programming language is to maintain a balance between low-level performance and high-level abstraction, thereby providing an efficient and flexible software development environment.
In this section, we introduce the most fundamental elements of a Wave program: functions and variables.

A function is a core unit structuring a program's behavior and logic, while a variable stores and manages the data needed in this process.
By accurately understanding how to define and use functions and variables, one can deeply utilize the structure and design intent of the Wave language.

---

## Function

In Wave, a function is a reusable block of code that can be executed independently.
It can group specific actions or calculations as one unit and can be called whenever needed throughout the program.

Using functions can reduce repetitive code and logically separate the program to enhance readability and maintainability.
They are also utilized for various purposes such as computation processing, input-output management, and logic separation.

In Wave, functions are defined with the `fun` keyword, consisting of a function name, parameter list, and a body enclosed in braces `{}`.

### Defining Functions

The most basic form of function definition in Wave is as follows.

```wave
fun main() {
    // Write your code here
}
```

The `main` function is the entry point for program execution, and every Wave program must have one `main` function.
The program starts execution from this function.

Functions can have parameters as needed and can return a computation result or value to the caller.
If there is a return value, the return type is specified in the function declaration.

### Example: Simple Function

The following example is a simple function that takes two integers and returns their sum.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // call add function
    println(result);            // Output: 12
}
```

In this example, the `add` function takes two integer parameters `a` and `b`, sums them, and returns the result.
In the `main` function, the `add` function is called, the returned value is stored in a variable, and then it is printed.

In this way, functions encapsulate specific actions, allowing them to be reused in various parts of the program.

## Variable

Variables are used to store and manipulate data within a program.
Wave is designed to clearly distinguish between mutable and immutable variables at the time of declaration, revealing the intention of data modification at the code level.

This way, changes in the program's state become clearer, reducing errors from unintended value changes.

### Mutable Variable

In Wave, variables are mutable by default.
This means that once declared, their values can be changed during program execution.

Mutable variables are declared using the var keyword.

```wave
var x :i32 = 10;
x = 20;
```

In the code above, `x` is initialized to `10` and can later be changed to `20`.
Mutable variables are used for data where the state needs to change.

### Immutable Variable

When a variable is declared as immutable, its value cannot be changed once an initial value is assigned.
Immutable variables are declared using the let keyword.

```wave
let y :i32 = 5;
// y = 10;   // Error: Cannot change value of an immutable variable.
```

Immutable variables guarantee that values are not changed, thus helping to increase the stability and predictability of the program.
It is recommended to use immutable variables for constant data that does not require changes.

In Wave, you can explicitly allow mutability by using `mut` with the `let` keyword.

```wave
let mut y :i32 = 5;
y = 10;
```

Here, the variable is declared with `let`, but value changes are allowed through the `mut` keyword.

### Variable Declaration Example

Below are examples of declaring mutable and immutable variables of various types.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

In this example, `x` and `name` are mutable variables, while `y` and `is_active` are immutable variables.
Wave clearly distinguishes between `var` and `let`, revealing the mutability of data at the code level.

Using mutable and immutable variables appropriately helps maintain data consistency and build a more robust and predictable program.