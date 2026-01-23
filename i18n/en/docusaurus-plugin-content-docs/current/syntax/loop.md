---
sidebar_position: 4
---

# Loop

## Introduction

The Wave language provides loops to handle situations where the same code needs to be executed multiple times.
Loops are used to continually execute code while a specific condition is met or for a set number of repetitions.

This allows for expressing repetitive tasks with concise and clear code without the need to repeatedly write the same logic.
Wave supports both condition-based and count-based looping, along with keywords to control flow during the loop.

This section explains how to use `while` and `for` loops, as well as the `break` and `continue` keywords, which control loop flow.

---

## while loop

The `while` loop repeatedly executes a block of code as long as the given condition evaluates to `true`.
The loop terminates as soon as the condition becomes `false`.

This method is suitable for situations where the number of repetitions is unclear and you need to repeat until a specific condition is met.

### Basic Structure

The basic structure of the `while` loop in Wave is as follows.

```wave
while (condition) {
    // code to repeat
}
```

The condition must evaluate to a `bool`, and you can write one or more statements inside the code block enclosed in braces `{}`.

### Example: Print numbers from 0 to 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i is {}.", i);
    i = i + 1;
}
```

In this example, the loop runs as long as the variable `i` is less than 5.
In each iteration, the current value is printed, and the value of `i` is incremented by 1 so that the condition eventually becomes false.

---

## for loop

The `for` loop is a type of loop suitable for use when the number of iterations is relatively clear.
By defining the initial value, condition expression, and increment/decrement in one go, the flow of the loop can be clearly expressed.

Because all the elements needed to control the loop are gathered in one place, it is easy to understand the loop structure at a glance.

### Basic Structure

```wave
for (var variableName: type = initialValue; condition; increment/decrement) {
    // code to repeat
}
```

Here, the loop variable starts with an initial value, and the loop executes as long as the condition is true.
At the end of each iteration, the increment/decrement expression is executed, changing the value of the loop variable.

### Example: Print numbers from 1 to 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

In this example, the loop runs while `i` starts from 1 up to 5 inclusively.
In each iteration, the value of `i` is printed and then incremented by 1.

---

## Nested Loops

You can write a loop inside another loop, and this is called a nested loop.
Nested loops are useful for iterating over two-dimensional data structures or handling combinations of multiple conditions.

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

In this example, each time the outer `while` loop runs, the inner `while` loop runs completely.
This allows sequential processing of combinations in the form of (`i`, `j`).

---

## break Statement

The `break` statement immediately terminates the loop and transfers control outside the loop.
It is used when there is no need to continue the loop further.

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

In this example, within an infinite loop, when `i` becomes 5, `break` is executed, terminating the loop.
In this way, the `break` statement is useful when you want to control the loop independently of its condition.

---

## continue Statement

The `continue` statement skips the remaining code in the current iteration and starts the next iteration immediately.
It is used when you want to skip certain logic under specific conditions.

### Example: Print only even numbers

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

In this code, if `i` is odd, `continue` is executed, skipping the print section.
As a result, only even values are printed.

---

## Summary

Loops in Wave are designed to naturally express both condition-based and count-based iterations.
The `while` loop is suitable for condition-centric repetition, while the `for` loop is useful when the iteration count and flow are clear.

By using `break` and `continue` together, you can finely control the execution flow even during iteration, allowing you to construct more sophisticated and flexible loop logic.