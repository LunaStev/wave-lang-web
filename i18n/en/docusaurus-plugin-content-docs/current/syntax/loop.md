---
sidebar_position: 4
---

# Loop

## Introduction

In the Wave language, loops are provided to allow repeated execution of code.
Loops are used to repeatedly execute code while a certain condition is met or a specific number of times.

The following loops are supported in Wave:

- while loop: condition-based repetition

- for loop: count-based repetition

In addition, keywords such as break and continue are provided to control the flow in the middle of loops.
This section explains how to use loops and flow control keywords.

---

## while loop

The `while` loop repeatedly executes a block of code as long as the given condition evaluates to `true`.
The loop terminates when the condition becomes `false`.

### Basic Structure

Here is the basic syntax for a `while` loop:

```wave
while (condition) {
    // code to repeat
}
```

- The condition must be of boolean type.

- The code block is enclosed in `{}` and can contain one or more statements.

### Example: Print numbers from 0 to 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i is {}.", i);
    i = i + 1;
}
```

In this example, the loop repeats until `i` is less than 5, prints the value each time, and increments by 1.

---

## for loop

The `for` loop is useful when the number of iterations is predetermined.
The loop is constructed by specifying the initial value, termination condition, and increment/decrement expression.

### Basic Structure

```wave
for (var variableName: type = initialValue; condition; increment/decrement) {
    // code to repeat
}
```

- Variable name: the variable used for loop control

- Condition: the loop executes as long as it is `true`

- Increment/Decrement: changes the value of the loop variable

### Example: Print numbers from 1 to 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Nested Loops

You can write another loop inside a loop, which is called nested loops.
This is useful for iterating over structures like 2D arrays or combinations.

### Example: Double while loop

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

---

## break Statement

The `break` statement immediately exits the loop and jumps outside.
It is useful for halting a loop when a specific condition is met.

### Example: Exit loop at a specific value

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

---

## continue Statement

The `continue` statement skips the rest of the current loop iteration and begins the next one.
It is used when you want to execute only part of the loop block under certain conditions.

### Example: Print only even numbers

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Summary

| Syntax   | Description                                                                             |
| -------- | --------------------------------------------------------------------------------------- |
| while    | Loops while a condition is true.                                        |
| for      | Executes loops with initial value, condition, and increment expression. |
| break    | Immediately exits loop.                                                 |
| continue | Skips to the next loop.                                                 |

Loops in Wave are designed for coherent handling of condition-based or count-based repeat operations.

Using `break` and `continue` statements allows for more precise loop flow control.