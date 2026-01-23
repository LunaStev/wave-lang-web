---
sidebar_position: 2
---

# Data Type

This document describes the various data types provided by the Wave programming language.
In Wave, you can store and operate on values using various data types, each clearly defining the way of representing and handling the data in memory.

Clearly specifying data types is one of the core design philosophies of Wave.
This allows you to clearly express the intent of your code, catch errors early at compile time, and ensure efficient memory use and stable execution.

---

## Integer Type

The integer type is used to store integer values.
Wave commonly uses `i32` (signed 32-bit integer) and `u32` (unsigned 32-bit integer) by default, but allows for very fine-grained specification of integer bit sizes as needed.

Signed integer types are available from `i8` to `i1024`, while unsigned integer types can be used from `u8` to `u1024`.
This allows for a wide range of requirements to be met, from simple calculations to large integer operations, cryptographic processing, and low-level system programming.

The following is a simple example using integer types.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Floating-Point Type

The floating-point type is used to store real-number values.
The default floating-point type used in Wave is `f32`, but larger sizes can be selected for higher precision.

Wave provides floating-point types from `f32` to `f128`, allowing users to choose between precision and performance.
This allows for real number operations to be used in various applications, from general numerical calculations to precise scientific computations.

Below is an example using floating-point types.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## String Type

The string type is used to handle text data.
In Wave, strings are declared using the `str` keyword and string literals are expressed with double quotes (`"`).

Strings are widely used for message output, handling user inputs, and processing text-based data in programs.

Here is a basic example of using the string type.

```wave
var text: str = "Hello Wave";
```

---

## Boolean Type

The boolean type represents True or False values.
Wave uses the `bool` type, with values designated as `true` or `false`.

The boolean type plays a key role in conditionals and loops, used to control the flow of the program.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Character Type

The character type is used to store a single character.
Declared using the `char` keyword, it can hold only a single character.

Character literals are expressed using single quotes (`'`).

```wave
var letter: char = 'A';
```

## Byte Type

The byte type is used to store data of 1-byte size.
This type is useful for low-level data processing such as binary data handling, file I/O, and network programming.

In Wave, byte types are declared using the `byte` keyword.

```wave
var byteData: byte = 0xFF;
```

## Pointer Type

Pointer types are used to directly reference memory addresses.
In Wave, pointer types are declared in the form `ptr<T>`, allowing safe expression of memory addresses of specific types.

Pointers are used for low-level memory access, often utilized in system programming or performance-critical code.

```wave
var ptr: ptr<T> = &someVariable;
```

## Array Type

Array types are used to sequentially store multiple values of the same data type.
In Wave, arrays are declared in the form `array<type, size>`, and the size is explicitly specified at compile time.

This clarifies the memory structure and allows stable access.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Each data type is designed to allow selection of appropriate range and size for their purpose and characteristics.
Choosing the proper data type results in efficient memory management as well as significantly improved code stability and readability.
