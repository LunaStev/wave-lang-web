---
sidebar_position: 1
---

# Print Hello

This document explains how to write the most basic output program in the Wave language.

---

## example code

```wave
fun main() {
    println("Hello Wave");
}
```

---

## Description
- `fun main()`

    Wave This is the entry point function of the program. It is called first when run.

- `println()`

    Outputs a string with a temporary output function, and adds a line break (`\n`) after output.

- `;` (semicolon)

    All statements in Wave are terminated with a semicolon.

---

## execution result

```text
Hello Wave
```

---

## Additional examples
Wave supports string interpolation.

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

Output:

```text
Hello, Wave!
```

---

> This example demonstrates the use of the basic output functions of the Wave standard library.
