---
sidebar_position: 2
---

# Syntax

## 1. Basic Structure

* The content of the file starts and ends with an object enclosed in `{}` curly braces.
* An object consists of key-value pairs, where the key is the attribute name and the value is the attribute value.
* The attribute name and value are separated by a colon (`:`) or an equal sign (`=`).

## 2. Comments

* Comments start with `//` or `#` and are written on a single line.
* Comments apply to the rest of the line.
* Multiline comments are not supported. If you need to comment across multiple lines, you must add `//` or `#` at the beginning of each line.

## 3. Object

* An object is enclosed in `{}` curly braces and contains key-value pairs.
* You can use either `:` or `=` between the key and the value. Both symbols are interchangeable.
* Each property is separated by a comma (`,`).
* You can nest other objects inside an object.

Example:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Array

* An array is enclosed in `[]` square brackets, and elements are separated by commas (`,`).
* Array elements can be objects, strings, numbers, or other data types.
* In WSON, arrays can be included within objects, and arrays can also contain other arrays or objects.

Example:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Key-Value Pair

* Attribute names are strings and are placed immediately after `:` or `=`, without any spaces.
* The value can be of types such as strings, numbers, booleans, objects, or arrays.
* Strings are enclosed in double quotes (`"`).
* Numbers are written without quotes and can be integers or floating-point numbers.

Example:

```
name: "John Doe"
age = 25
```

## 6. Data Types

- String: Text wrapped in double quotes (`"`).

```
"hello world"
```

- Number: An integer or floating-point value.

```
42
3.14
```

- Boolean: The value is either `true` or `false`.

```
is_active = true
```

* Object: A set of key-value pairs enclosed in `{}`.
* Array: A list of elements enclosed in `[]`.

## 7. Example Explanation

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