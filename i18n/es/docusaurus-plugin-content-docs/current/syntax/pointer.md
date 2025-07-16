---
sidebar_position: 6
---

# Puntero

## Introducción

Este documento explica cómo Wave utiliza punteros.
Wave es un lenguaje que soporta la programación de sistemas de bajo nivel, ofreciendo funcionalidades de punteros para permitir la manipulación explícita de direcciones de memoria.
Un puntero es una variable que señala una dirección de memoria de un tipo específico, permitiendo un acceso y modificación directos de los valores.

---

## Declaración de puntero

En Wave, un puntero se declara en el formato `ptr<tipo>`. Por ejemplo, un puntero de tipo entero se puede declarar de la siguiente manera:

```wave
var p: ptr<i32>;
```

Esta declaración crea un puntero `p` que apunta a un valor de tipo `i32`.

---

## Inicialización de punteros

Se puede inicializar un puntero con la dirección de una variable usando el operador `&`:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

Aquí, `&a` significa la dirección de memoria de la variable `a`, y `p` se convierte en un puntero que apunta a esa dirección.

---

## Desreferenciación de punteros

Para leer o modificar el valor al que apunta un puntero, se utiliza la palabra clave `deref`. A esto se le llama desreferenciación:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // output 10

deref p = 20;
println("{}", a); // output 20
```

---

## Puntero NULO

En Wave, un puntero nulo se representa con la palabra clave `null`.
Una variable puntero puede inicializarse como `null`, en cuyo caso no apuntará a ninguna memoria válida:

```wave
var p: ptr<i32> = null;
```

Si se desreferencia un puntero nulo, el compilador generará un error.

---

## Punteros múltiples

Wave admite punteros múltiples. Se pueden declarar y usar punteros anidados en múltiples niveles:

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Arrays y punteros

Los punteros también pueden apuntar a elementos de un array o al array en sí.

### Punteros que apuntan a elementos de un array

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Punteros que apuntan al array completo

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // salida dirección de memoria
```

---

## Seguridad y propiedad

Wave intenta garantizar la estabilidad de la memoria al usar punteros mediante la introducción de un sistema de propiedad y ciclo de vida similar al de Rust.
Por lo tanto, verifica meticulosamente para evitar problemas como la desreferenciación de punteros no válidos, la liberación doble y los punteros colgantes.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Salida:

```text
x = 42
x = 99
```

---

## Conclusión

Los punteros son una de las características clave que permiten la programación de bajo nivel de alto rendimiento en Wave.
Son muy útiles en el desarrollo de sistemas, bibliotecas nativas, control de hardware, etc., donde se necesita control directo de memoria, y gracias a la estructura del compilador seguro de Wave, se pueden prevenir eficazmente los riesgos relacionados con el uso de punteros.