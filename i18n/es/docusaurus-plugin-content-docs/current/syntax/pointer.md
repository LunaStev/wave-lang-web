---
sidebar_position: 6
---

# Puntero

## Modelo de Tipo de Memoria Explícita de Wave

El diseño de puntero de Wave se basa en el **Modelo de Tipo de Memoria Explícita de Wave**.
Este modelo pretende definir los punteros y arreglos como **tipos de memoria explícitos a nivel del lenguaje**, en lugar de trucos gramaticales o abstracciones de la biblioteca.

Con este diseño, en Wave los punteros se expresan en la forma de tipo `ptr<T>`, mostrando claramente que es un tipo que apunta a la dirección de memoria que almacena un valor del tipo `T`.
Este enfoque permite expresar las estructuras de memoria de manera más intuitiva y coherente al tratar los punteros como parte del sistema de tipos, en lugar de operadores o sintaxis de declaración.

---

En Wave, un puntero es un tipo explícito en la forma `ptr<T>`.
Para obtener una dirección se utiliza `&`, y para la desreferencia `deref`.

## Declaración e inicialización

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

El tipo puntero se puede anidar.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Desreferencia

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Regla del literal `null`

`null` es un **literal formal**. No es un identificador y no se puede usar como nombre de variable.

Regla clave:

- `null` solo se puede asignar a un destino `ptr<T>`.
- No se puede asignar a tipos no punteros como `i32`, `bool`, `array<...>`.
- No se pueden inicializar punteros con literales enteros (`0`, `123`, `-1`, etc.). Utiliza explícitamente `null`.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // ERROR
// var b: bool = null; // ERROR
```

## Aritmética de punteros

Wave soporta la siguiente aritmética de punteros.

- `ptr + int`: avance de puntero basado en GEP
- `int + ptr`: operación equivalente
- `ptr - int`: retroceso de puntero basado en GEP
- `ptr - ptr`: cálculo de diferencia en bytes `i64`

Puntos:

- `ptr<T> +/- n` se desplaza en función del tamaño de `T` (`sizeof(T)`).
- Por ejemplo, `ptr<i32> + 3` se desplaza `+12` en bytes.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (diferencia en bytes)
```

## Comparación de punteros

Los punteros se pueden usar para comparaciones.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Relación con el arreglo

Arreglo de punteros:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Puntero de array:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Nota de seguridad

Wave no es actualmente un modelo de seguridad de puntero basado en propiedad/vida como Rust.
Por lo tanto, no impide automáticamente la desreferencia `null`. Se recomienda implementar un patrón de verificación `null` explícito antes de `deref`.
