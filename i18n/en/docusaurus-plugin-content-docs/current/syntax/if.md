---
sidebar_position: 3
---

# IF Statement

## Introduction

This section explains the syntax and usage of the IF statement, one of the control statements provided in the Wave language.
The IF statement is a basic control structure that evaluates a condition and executes a certain block of code only if the condition is true.

This allows programs to perform different actions based on situations and conditions, rather than simply executing from top to bottom.
The IF statement is a core element in nearly all programs, used essentially to implement logical branching and flow control.

## Basic Structure

The IF statement first evaluates a condition, and only if the result is true, it executes the code block written within curly brackets `{}`.
If the condition is false, it skips the block and moves to the next code.

The basic structure of the IF statement in Wave is as follows.

```wave
if (condition) {
    // Code to execute if the condition is true
}
```

In conditional expressions, you can freely use comparison or logical operators.
For example, comparison operators such as `==`, `!=`, `<`, `>`, `<=`, `>=` can compare the relationships of values,
and logical operators like `&&`, `||`, `!` can be used to combine multiple conditions.

The result of a conditional expression must be evaluated to true or false. If the condition is false, the code within the IF block is not executed.

## Example

Here is the simplest form of an IF statement example.

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("The weather is hot.");
}
```

In the above code, it evaluates whether the value of the `temperature` variable is greater than 25.
If the condition is true, the message "The weather is hot." is output, and if it is false, no action is taken.

This way, the IF statement is used when you want to execute code only when a specific condition is satisfied.

## IF-ELSE statement

If there is code that needs to be executed even if the condition is not true, you can add an ELSE clause to the IF statement.
The IF-ELSE statement is a structure that selectively executes one of two code blocks based on the result of a condition.

The basic structure is as follows.

```wave
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

If the condition is true, the IF block is executed; if the condition is false, the ELSE block is executed.
Only one of the two blocks will execute, and they never execute simultaneously.

The following is an example of using the IF-ELSE statement.

```wave
var score :i32 = 70;

if (score >= 60) {
    println("You passed!");
} else {
    println("You failed.");
}
```

In this code, different messages are printed depending on whether the `score` is 60 or higher.
"You passed!" is printed if the condition is true, otherwise "You failed." is printed.

## Nested IF Statement

An IF statement can be used within another IF statement, which is called a nested IF statement.
Nested IF statements are useful when multiple levels of conditions need to be evaluated sequentially.

The following example is of a nested IF statement that prints different results depending on the score.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Excellent grade!");
    } else {
        println("You passed.");
    } 
} else {
    println("You failed.");
}
```

In this code, it first checks if the score is 60 or above.
If it is less than 60, "You failed." is printed immediately.
If it is 60 or above, it evaluates the condition again, and if the score is 90 or above, "Excellent performance!" is printed, otherwise, "You passed." is printed.

In this way, nested IF statements allow complex condition branching to be expressed step by step.

## Summary

The IF statement is a basic control statement that evaluates conditions to control the execution flow of a program.
Using the ELSE clause allows for the clear definition of behavior when conditions are false, and with nested IF statements, complex branching with multiple conditions is possible.

By using IF statements appropriately, the flow of a program can be organized more logically and clearly.