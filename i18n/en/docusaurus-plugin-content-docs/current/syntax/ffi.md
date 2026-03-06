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
Currently, specifying an ABI is required in Wave, and only **`extern(c)`** is supported.

```wave
extern(c) fun functionName(arguments...) -> returnType;
```

---

## ABI Specification

ABI must be specified in an `extern` declaration.
Currently, the only supported ABI is `c`.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Declarations like `extern(rust)` may be parsed, but will cause errors during semantic analysis.

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
extern(c, "puts")
fun rust_func(i32);
```

This declaration specifies to use `puts` as the actual link symbol when `rust_func` is called.

---

### Block-level symbol specification

In block-level declarations, symbol names can be individually specified after each function.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
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
