---
sidebar_position: 2
---

# Syntax

## 1. Basic Structure

- The content of the file starts and ends with an object (`object`) enclosed in curly braces `{}`.

- An object consists of pairs of attribute names (key) and values (value).

- Attribute names and values are separated by a colon (`:`) or an equal sign (`=`).

## 2. Comments

- Comments start with `//` or `#` and are written on a single line.

- Comments apply until the end of the line.

- Multi-line comments are not supported separately, and if you write comments over multiple lines, you must add `//` or `#` to each line.

## 3. Object

- An object is enclosed in curly braces `{}` and includes key-value pairs.

- You can use a `:` or `=` symbol between keys and values. Both symbols can be used interchangeably.

- Each attribute is separated by a comma (`,`).

- Objects can nest other objects inside them.

Example:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array

- An array is enclosed in square brackets `[]`, and its elements are separated by commas (`,`).

- Elements of an array can be of various data types such as objects, strings, and numbers.

- In WSON, arrays can be included within objects, and arrays can nest other arrays or objects inside them.

Example:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Key-Value Pair

- Attribute names are composed of strings, with the value placed after `:` or `=` without spaces.

- Types of values include strings, numbers, booleans, objects, and arrays.

- A string is enclosed in double quotes `"`.

- Numbers are used without double quotes and can be integers or floating-point numbers.

Example:

```
name: "John Doe"
age = 25
```

## 6. Data Types

- A string is a piece of text enclosed in double quotes `"`.

```
"hello world"
```

- Numbers: integer or floating-point values.

```
42
3.14
```

- Boolean: uses the values `true` or `false`.

```
is_active = true
```

- Object: a pair of keys and values enclosed in curly braces `{}`.
- Array: a list of elements enclosed in square brackets `[]`.

## 7. Example Description

```ws
{
    // Status code and message information
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # User age
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```