---
sidebar_position: 6
---

# Puntero

## Introducción

Este documento explica la funcionalidad de punteros que ofrece el lenguaje Wave y cómo se utilizan.
Wave es un lenguaje que admite programación de sistemas de bajo nivel, y ofrece funcionalidad de punteros para situaciones que requieren manipulación explícita de direcciones de memoria.

Un puntero es una variable que apunta a la dirección de memoria de un tipo específico, permitiendo acceso o modificación directa del valor almacenado en memoria.
Esta funcionalidad desempeña un papel crucial en áreas como software de sistema, bibliotecas nativas, código crítico de rendimiento y control de hardware.

---

## Declaración de puntero

En Wave, los punteros se declaran en la forma `ptr<tipo>`.
Esto indica claramente que el puntero apunta a la dirección de memoria donde se almacena un valor del tipo especificado.

Por ejemplo, un puntero que apunta a un valor de tipo `i32` se puede declarar de la siguiente manera.

```wave
var p: ptr<i32>;
```

Esta declaración crea una variable puntero que aún no apunta a ninguna memoria, y se puede inicializar más tarde con una dirección real.

---

## Inicialización de punteros

Un puntero se puede inicializar refiriéndose a la dirección de una variable.
En Wave, se obtiene la dirección de memoria de una variable utilizando el operador `&`.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

En el código anterior, `&a` significa la dirección de memoria de la variable `a`, y el puntero `p` apunta a esa dirección.
A partir de este punto, se puede acceder directamente al valor de `a` a través de `p`.

---

## Desreferenciación de punteros

Se necesita desreferenciar para leer o modificar el valor real al que apunta el puntero.
En Wave, se utiliza la palabra clave `deref` para desreferenciar un puntero.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // output 10

deref p = 20;
println("{}", a); // output 20
```

En este ejemplo, `deref p` significa el valor en la ubicación de memoria a la que apunta el puntero `p`.
Se puede leer el valor o asignar uno nuevo para cambiar el contenido de la variable original.

---

## Puntero NULO

En Wave, un puntero que no apunta a una memoria válida se representa con la palabra clave `null`.
Una variable puntero se puede inicializar explícitamente como `null`, en cuyo caso no hace referencia a ninguna dirección de memoria.

```wave
var p: ptr<i32> = null;
```

Un puntero nulo se usa para expresar que aún no ha sido inicialmente intencionado.
Wave detecta intentos de desreferenciar un puntero nulo en la etapa de compilación como un error, evitando errores de ejecución o comportamientos indefinidos.

---

## Punteros múltiples

Wave soporta punteros múltiples que utilizan varios niveles de anidamiento.
Dado que un puntero en sí mismo es un valor, es posible declarar un puntero apuntando a otro puntero.

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

El uso de punteros múltiples permite expresar estructuras de referencia indirecta y se puede utilizar cuando se requieren estructuras de memoria complejas o representaciones de datos de bajo nivel.

---

## Arrays y punteros

Los punteros se pueden utilizar no solo para una única variable, sino también para apuntar a elementos de un array o al array completo.

Si cada elemento de un array es un puntero, se puede referenciar indirectamente varias ubicaciones de memoria a través de un array de punteros.

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println(
    "deref arr[0] = {}, deref arr[1] = {}",
    deref arr[0],
    deref arr[1]
); // 10, 20
```

También es posible referenciar el array completo con un único puntero.

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // salida dirección de memoria
```

Este método es útil cuando se pasa un array como función o a la hora de gestionar el manejo de memoria de bajo nivel.

---

## Seguridad y propiedad

Wave está diseñado para reducir los riesgos que pueden ocurrir al usar punteros, introduciendo conceptos de propiedad y sistema de vida similar a Rust.

Con ello, se intenta evitar en la medida de lo posible, problemas en la etapa de compilación como la desreferencia de punteros inválidos, punteros colgantes y dobles liberaciones.
Los punteros son herramientas poderosas, pero en Wave se aplican restricciones y verificaciones para garantizar que se utilicen de la manera más clara y segura posible.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;

    println("x = {}", deref p);

    deref p = 99;
    println("x = {}", x);
}
```

El resultado de la salida es el siguiente.

```text
x = 42
x = 99
```

Este ejemplo muestra cómo se puede leer y modificar de forma segura el valor de una variable a través de un puntero.

---

## Conclusión

Los punteros son una de las características clave que permiten la programación de bajo nivel de alto rendimiento en Wave.
Juegan un papel especialmente importante en áreas donde se necesita un control directo de la memoria, desarrollo de sistemas, implementación de bibliotecas nativas y control de hardware.

Wave mantiene el poder de los punteros, mientras que, a través de verificaciones a nivel de compilador y diseño del lenguaje, busca un uso lo más seguro y predecible posible.
Esto permite a los desarrolladores tomar decisiones equilibradas entre rendimiento y estabilidad.