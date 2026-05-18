---
sidebar_position: 9.5
---

# export

`export` exposes a function implemented in Wave as an external linker symbol.
If `extern` imports an external function into Wave, `export` makes a Wave function callable from C, Rust, C++, Zig, or another native language through an object file.

---

## Overview

Wave FFI has two directions.

- `extern(c)` declares a function provided by an external library so Wave code can call it.
- `export(c)` emits a Wave function body as an external ABI symbol.

The two forms share the same ABI header shape, but their meaning is opposite.
With `extern`, the function body is outside Wave.
With `export`, the function body is inside Wave.

The only supported export ABI for now is `c`.

---

## Function-level export

The basic form is:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

This emits a public symbol named `add`.
The generated object file can be linked with external code that expects the C ABI.

---

## Symbol names

The Wave function name and the exported linker symbol can be different.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Here the Wave name is `add_i32`, but the object file exposes `wave_add_i32`.
External languages must declare and call the exported symbol name.

---

## Block-level export

Multiple functions using the same ABI can be grouped in a block.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

Block export uses each function name as its public symbol.
`export(c, "symbol") { ... }` is not allowed because a single alias for several functions would create linker symbol collisions.

---

## Calling from C

Build the Wave file as an object file.

```bash
wavec build math.wave --emit=obj -o math.o
```

Declare the exported symbol in C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Then link the C code and the Wave object file with a normal linker.

```bash
cc main.c math.o -o app
```

---

## extern versus export

`extern(c)` means Wave uses an external symbol.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` means external code can use a Wave symbol.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Both belong to FFI, but the direction is different.

---

## Limitations

Current `export` support has these limits.

- Only `export(c)` is supported.
- Exported functions cannot be generic.
- A block export cannot use one shared symbol alias.
- For stable interoperation, prefer integer, floating-point, boolean, and pointer arguments and return values for now.
- Aggregate types such as structs and arrays need stricter ABI rules and may be stabilized later.
- `export` is mainly useful when building objects or libraries. It is usually unnecessary for a plain executable.

---

## Recommended use cases

Use `export` when you need to:

- Provide Wave utility functions as a C ABI library.
- Call Wave functions from Rust, C, C++, Zig, or another native language.
- Gradually connect Wave-written `front`, `utils`, or runtime-free native modules to an existing build system.
- Let Vex or another build tool link Wave object files into an external project.
