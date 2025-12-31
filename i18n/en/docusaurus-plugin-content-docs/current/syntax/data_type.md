---
sidebar_position: 2
---

# Data Type

This document describes the various data types provided by the Wave programming language.
The Wave programming language can store and manipulate values using various data types.
Major data types include integers, floating-point numbers, and strings. Each data type defines the characteristics and memory handling of the data.

## Integer Type

The integer type is used to store **integer values**.
By default, integers are declared as `i32` (signed 32-bit integer) and `u32` (unsigned 32-bit integer).
The Wave programming language offers options for fine-grain control over the range of integers.

- `i8` ~ `i1024`: Signed integer type, can be set from 8-bit to 1024-bit.
- `u8` ~ `u1024`: Unsigned integer type, allows size setting from 8-bit to 1024-bit.

Example:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Floating-Point Type

The floating-point type is used to store real-number values.
By default, floating-point numbers are declared as `f32`.
Additionally, it offers various size options for precise definition of floating-point numbers.

- `f32` ~ `f128`: 부동소수점 타입은 32비트부터 128비트까지 크기를 설정할 수 있습니다. This allows for higher precision in real-number calculations.

Example:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## String Type

The string type is used to handle text data. Use the `str` keyword to declare a string.
Strings are typically defined inside double quotes (`"`), allowing assignment to variables.

Example:

```wave
var text :str = "Hello Wave";
```

## Boolean Type

The boolean type represents data with **True** or **False** values.
Primarily used in conditional statements, with values set to `true` or `false`.

Example:

```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Character Type

The character type is used to store a single character.
Declared using the `char` keyword, it holds only a single character value.

Example:

```wave
var letter :char = 'A';
```

## Byte Type

The byte type is used to store data of **1-byte** size.
It is mainly useful for handling binary data. Declared using the `byte` keyword.

Example:

```wave
var byteData :byte = 0xFF;
```

## Pointer Type

The pointer type is used to reference **memory addresses**.
Declared using the `ptr` keyword, it's used to store memory addresses.

Example:

```wave
var ptr :ptr<T> = &someVariable;
```

## Array Type

The array type is used to sequentially store **multiple identical data types**.
Using the `array` keyword, you can specify the size or type of the array.

Example:

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Since each data type can be set with various ranges and sizes, users can select a type that suits their needs for efficient memory management and computation.
