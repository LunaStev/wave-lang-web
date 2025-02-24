---
sidebar_position: 2
---

# Data Types
This document explains the various data types provided by the Wave programming language.
The Wave programming language uses various data types to store values and perform operations.
The main data types include integers, floating-point numbers, strings, and more. Each data type defines the characteristics of the data and how it is handled in memory.

## Integer
The integer type is used to store **integer values**.
By default, integers are declared as `i32` (signed 32-bit integer) and `u32` (unsigned 32-bit integer).
The Wave programming language provides various size options that allow you to finely adjust the range of integers.
* `i8` ~ `i1024`: Signed integer type, with sizes ranging from 8 bits to 1024 bits.
* `u8` ~ `u1024`: Unsigned integer type, with sizes ranging from 8 bits to 1024 bits.

Example:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Floating-Point Type
The floating-point type is used to store real (decimal) values.
By default, floating-point numbers are declared as `f32`.
Additionally, the language offers various size options to finely define the range of floating-point numbers.

* `f32` ~ `f1024`: The floating-point type can range from 32 bits to 1024 bits, allowing for higher precision in real number calculations.

Example:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## String Type
The string type is used to handle text data. Strings are declared using the `str` keyword.
Strings are typically defined by enclosing the text in double quotes (`"`), and you can assign string values to variables.

Example:
```wave
var text :str = "Hello Wave";
```

## Boolean Type
The boolean type is used to represent **true** or **false** values.
It is commonly used in conditional statements, where the value is set to either `true` or `false`.

Example:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Character Type
The character type is used to store a single character.
It is declared using the `char` keyword, and can hold only one character value.

Example:
```wave
var letter :char = 'A';
```

## Byte Type
The byte type is used to store **1-byte** sized data.
It is especially useful when dealing with binary data. The `byte` keyword is used for declaration.

Example:
```wave
var byteData :byte = 0xFF;
```

## Pointer Type
The pointer type is used to reference a **memory address**.
The `ptr` keyword is used to declare a pointer, and it is used to store memory addresses.

Example:
```wave
var ptr :ptr = &someVariable;
```

## Array Type
The array type is used to store **multiple values of the same data type** in a sequential manner.
The `array` keyword is used, and you can specify the size or type of the array.

```wave
var numbers: array<i32> = [1, 2, 3, 4, 5];
```

Since each data type can be set with various ranges and sizes, you can choose the appropriate type to ensure efficient memory management and calculations based on your needs.
