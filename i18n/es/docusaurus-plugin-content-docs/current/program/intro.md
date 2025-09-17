---
sidebar_position: 1
---

# Imprimir Hola Wave

Este documento explica cómo escribir un programa de salida básico en el lenguaje Wave.

---

## Código de ejemplo

```wave
fun main() {
    println("Hola Wave");
}
```

---

## Descripción

- `fun main()`

  Es la función de entrada del programa Wave. Se llama primero en ejecución.

- `println()`

  Es una función de salida temporal que imprime una cadena de texto, y añade un salto de línea (`\n`) después de la salida.

- `;` (punto y coma)

  Todas las sentencias en Wave terminan con un punto y coma.

---

## Resultado de ejecución

```text
Hola Wave
```

---

## Ejemplo adicional

Wave admite interpolación de cadenas.

```wave
fun main() {
    var name: str = "Wave";
    println("Hola, {}!", name);
}
```

Salida:

```text
Hola, Wave!
```

---

> Este ejemplo muestra el uso básico de la función de salida de la biblioteca estándar de Wave.