---
sidebar_position: 9
---

# FFI

This document describes the FFI (Foreign Function Interface) specification for calling functions implemented externally in the Wave language.
Through FFI, Wave programs can directly interface with native libraries written in other languages.

---

## Overview

Wave's FFI works on a declaration basis.
External functions are not implemented in Wave code, and only specify which ABI (Application Binary Interface) they adhere to.
The actual implementation is resolved from an external library at the linking stage.

FFI operates by declaring only the existence of functions at compile time, and the linker connects the actual symbols when creating the executable.

---

## extern Declaration

External functions are declared using the extern keyword.
All external function declarations require ABI specification.

```wave
extern(abi) fun functionName(arguments...) -> returnType;
```

---

## ABI Specification

ABI must be specified in an `extern` declaration.
ABI indicates which calling convention and symbol rules an external function follows.

```wave
extern(c) fun printf(fmt: ptr<u8>);
extern(rust) fun rust_func(i32);
```

ABI is treated as an identifier, and no specific ABI is provided as a default at the language level.
All external functions must explicitly specify an ABI.

---

## Function-level extern declaration

To declare a single external function, write as follows.

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

This declaration means that the `InitWindow` symbol following the C ABI exists in an external library.

---

## Block-level extern declaration

If there are multiple external functions using the same ABI, they can be declared together in a block form.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Block-level declarations are semantically identical to function-level declarations, serving merely as syntax for readability and structuring.

---

## Symbol naming

In some ABIs, the function name in Wave might not match the actual linker symbol name.
In this case, you can specify the actual symbol name to be linked for an external function in a string.

### Function-level symbol specification

```wave
extern(rust, "_ZN4test10rust_func117h123abcE")
fun rust_func(i32);
```

This declaration specifies that the `_ZN4test10rust_func117h123abcE` symbol should be used when calling `rust_func`.

---

### Block-level symbol specification

In block-level declarations, symbol names can be individually specified after each function.

```wave
extern(rust) {
    fun rust_func1(i32) "_ZN4test10rust_func117h123abcE";
    fun rust_func2(i32) "_ZN4test10rust_func217h456defE";
}
```

---

## Pointer Type

Pointers are represented in the form `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` directly corresponds to pointers in external languages, and memory ownership or lifecycle is not managed by Wave.

---

## Struct Usage

Structs can be used as arguments or return values of external functions.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

When using structs in FFI, the field order is preserved as declared, following the memory layout required by the ABI.

---

## External Function Call

Functions declared as `extern` are called in the same manner as regular functions.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

There is no syntactical difference in calls, and calling conventions and symbol linking are entirely handled by the ABI and linker.

---

## Linking

The actual implementation of external functions is provided by external libraries at the linking stage.
The Wave compiler generates object files including external function calls, and the linker resolves symbols through the specified libraries.

The method of specifying libraries is done through build tools and CLI options.

---

## Limitations

Wave does not provide the following features.

- Function Pointers
- Callback Functions
- Automatic Memory Management
- Inter-language Exception Handling Integration

These features may be addressed separately in future versions.