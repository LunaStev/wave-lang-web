---
sidebar_position: 1
---

# Hello Wave 출력하기

This document explains how to write the most basic output program in the Wave language.

---

## Example Code

```wave
fun main() {
    println("Hello Wave");
}
```

---

## Description

- `fun main()`

  This is the entry point function of a Wave program. It is called first when executed.

- `println()`

  A temporary output function that prints a string and adds a newline (`\n`) after output.

- `;` (semicolon)

  All statements in Wave end with a semicolon.

---

## Execution Result

```text
Hello Wave
```

---

## Additional Example

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

> This example shows how to use the basic output function of the Wave standard library.