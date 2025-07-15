---
sidebar_position: 3
---

# IF Statement

## Introduction

This section introduces the syntax of the IF statement, one of the control statements in Wave.
The IF statement is a control statement in programming that evaluates a condition and executes a specific code if the condition is true.
This allows you to control the flow of a program based on conditions, enabling the creation of flexible and logical code.

## Basic Structure

The IF statement evaluates a specific condition and executes the specified code block only if that condition is true.
The basic structure of the IF statement in Wave is as follows:

```wave
if (condition) {
    // Code to execute if the condition is true
}
```

Conditions are written using comparison operators (`==`, `!=`, `<`, `>`, `<=`, `>=`) or logical operators (`&&`, `||`, `!`). If the condition is false, the code block is not executed.

## Example

The following is a simple example of an IF statement:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("The weather is hot.");
}
```

In the code above, if the temperature value is greater than 25, the message "The weather is hot." will be printed.

## IF_ELSE Statement

If the condition is not true, you can write alternative code to execute using the IF-ELSE statement.
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

"You passed!" is printed if the score is 60 or higher, otherwise "You failed." is printed.

## Nested IF Statement

An IF statement can be used inside another IF statement. This is called a nested IF statement, and it is useful for handling complex conditions.

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

In the example above, messages "Excellent grade!", "You passed.", or "You failed." are printed depending on the score.

## Summary

- The IF statement is a control statement that evaluates a condition to execute a specific block of code.
- An ELSE statement can be added to specify code to execute if the condition is false.
- Nested IF statements are used to handle complex conditions.

Using the IF statement, you can make the flow of a program more logical and dynamic!