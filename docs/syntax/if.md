---
sidebar_position: 3
---

# IF Statement
## Introduction
This section introduces the syntax of the IF statement, one of the control statements in Wave.
An IF statement is a control structure in programming that evaluates a condition and executes specific code when the condition is true.
This allows you to control the flow of the program based on conditions, making it possible to write flexible and logical code.

## Basic Structure
The IF statement evaluates a specific condition and only executes the designated block of code if the condition is true.
The basic structure of the IF statement in Wave is as follows:

```wave
if (condition) {
    // Code to execute if the condition is true
}
```

The condition is written using comparison operators (==, !=, <, >, <=, >=) or logical operators (&&, ||, !) and so on.
If the condition is false, the code block is not executed.

## Example
Here’s a simple example of an IF statement:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("The weather is hot.");
}
```

In the above code, if the temperature value is greater than 25, the message "The weather is hot." is printed.

## IF_ELSE Statement
If the condition is false and you want to execute an alternative set of code, you use the IF-ELSE statement.
The structure is as follows:

```wave
if (condition) {
    // Code to execute if the condition is true
} else {
    // Code to execute if the condition is false
}
```

### Example:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("You passed!");
} else {
    println("You failed.");
}
```

If the score is 60 or above, "You passed!" is printed, otherwise, "You failed." is printed.

## Nested IF Statements
An IF statement can be used inside another IF statement. This is called a nested IF statement, and it is useful when handling complex conditions.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Excellent performance!");
    } else {
        println("You passed.");
    } 
} else {
    println("You failed.");
}
```

In the example above, based on the score, the message "Excellent performance!", "You passed.", or "You failed." is printed.

## Summary

* An IF statement is a control structure that evaluates a condition and executes a specific code block.
* The ELSE statement can be added to specify the code to execute if the condition is false.
* Nested IF statements are used when dealing with complex conditions.

By using IF statements, you can structure the flow of your program in a more logical and dynamic way!