---
sidebar_position: 2
---

# Functions and Variables

## introduction

In the Wave programming language, the key design philosophy revolves around balancing low-level performance with high-level abstractions to provide an efficient and flexible environment for software development. This section introduces the fundamental building blocks of a Wave program: functions and variables. These constructs are essential for organizing logic and managing data within your programs. Understanding how to define and manipulate them is crucial to harnessing the full potential of Wave.

---

## Functions
Functions in Wave serve as reusable blocks of code that can be executed independently. The structure of a function allows you to encapsulate specific behavior and invoke it as needed throughout your program. Functions can be used to perform calculations, manage I/O operations, and organize code into manageable segments.

The function signature consists of the `fun` keyword, followed by the function name, parameters (if any), and the body of the function enclosed in curly braces `{}`.

### Defining a Function
A basic function in Wave is defined as follows:

```wave
fun main() {
    // Your code here
}
```

* The `main` function is always required as the entry point for program execution.
* Functions can have parameters, and they may return a value. The return type, if applicable, is specified after the function name.

### Example: Simple Function
A basic function in Wave is defined as follows:

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Calls the add function
    println(result);            // Outputs: 12
}
```

In this example:
* `add` is a function that takes two integers `a` and `b` and returns their sum.
* The `main` function calls `add` and prints the result.

## Variables
Variables are used to store data that can be accessed and manipulated throughout a program. Wave provides flexibility in variable declaration, supporting both mutable and immutable variables to give developers control over data management.

### Mutable Variables
By default, variables in Wave are **mutable**, meaning their values can be changed during program execution. You declare mutable variables using the `var` keyword.

```wave
var x :i32 = 10; // Mutable variable
x = 20;
```

In this case:
* `x` is a mutable variable that initally holds the value `10` but can later be updated to any other value, such as `20`.

### Immutable Variables
If you want a variable to hold a constant value that cannot be changed, you can declare it as **immutable** by using `var imm`. Once an immutable variable is assigned a value, it cannot be reassigned.

```wave
var imm y :i32 = 5;     // Immutable variable
// y = 10;              // Error: Immutable variables cannot be changed
```

Here:
* `y` is immutable, and attempting to change its value results in a compilation error.

### Variable Declaration Examples
Here are some examples of declaring variables of various types, both mutable and immutable:

```wave
var x :i32 = 10;                    // Mutable variable
var imm y :f64 = 3.14159            // Immutable variable
var name :str = "Wave";             // Mutable variable
var imm is_active :bool = true;     // Immutable variable
```

* `x` is a mutable integer.
* `y` is an immutable floating-point number.
* `name` is a mutable string.
* `is_active` is an immutable boolean.

In Wave, the `var` keyword is used for declaring mutable variables, while `var imm` is used for declaring immutable variables that cannot be modified after their initial assignment.

By distinguishing between mutable and immutable variables, Wave provides greater control over data consistency and program state, allowing you to write more robust and predictable code.