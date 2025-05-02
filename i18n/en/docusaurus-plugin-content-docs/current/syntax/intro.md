---
sidebar_position: 1
---

# Functions and Variables

## Introduction
The core design philosophy of the Wave programming language is to balance low-level performance with high-level abstraction to provide an efficient and flexible environment for software development.
In this section, we introduce the basic building blocks of a Wave program: functions and variables. These components are essential for structuring logic and managing data within your program.
Understanding how to define and work with functions and variables will help you unlock the full potential of Wave.

---

## Functions
In Wave, a function serves as a reusable block of code that can be executed independently.
Functions encapsulate specific behaviors and can be called from anywhere in your program as needed. This allows you to perform computations, manage I/O operations, and break your code into manageable units.

A function signature in Wave begins with the `fun` keyword, followed by the function name, any parameters (if present), and the function body enclosed in braces `{}`.

### Defining a Function
A basic function in Wave is defined like this:

```wave
fun main() {
    // write your code here
}
```

* The `main` function is always required as the entry point for program execution.

* Functions can have parameters and return values. The return type is specified after the function name.

### Example: A Simple Function

```wave
fun add(a :i32; b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // call the add function
    println(result);            // output: 12
}
```

In the example above:

* The `add` function takes two integers, `a` and `b`, and returns their sum.

* The main function calls add and prints the result.

## Variables
Variables are used to store and manipulate data within your program.
Wave supports both mutable variables and immutable variables in declarations, giving developers fine-grained control over data handling.

### Mutable Variables
By default, variables in Wave are mutable, meaning their values can be changed during program execution.

Use the `var` keyword to declare a mutable variable:
```wave
var x :i32 = 10; // mutable variable
x = 20;
```

In this example:

* x is a mutable variable initialized to 10, which is later changed to 20.

### Immutable Variables
An immutable variable cannot be changed once a value is assigned.

Use the `let` keyword to declare an immutable variable:
```wave
let y :i32 = 5;         // immutable variable
// y = 10;              // error: cannot change an immutable variable
```

Here:

* y is immutable, and attempting to reassign it causes a compile error.

You can create a temporarily mutable variable by combining `let` with `mut`:

```wave
let mut y :i32 = 5;
y = 10; 
```

### Variable Declaration Examples
Here are examples of declaring both mutable and immutable variables of various types:

```wave
var x :i32 = 10;                    // mutable integer variable
let y :f64 = 3.14159;               // immutable floating-point variable
var name :str = "Wave";             // mutable string variable
let is_active :bool = true;         // immutable boolean variable
```

* `x` is a mutable integer.

* `y` is an immutable floating-point number.

* `name` is a mutable string.

* `is_active` is an immutable boolean.

Using `var` for mutable variables and `let` for immutable variables, Wave enables you to enforce data consistency and program state control more effectively, resulting in more robust and predictable code.