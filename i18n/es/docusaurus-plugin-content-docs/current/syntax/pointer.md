---
sidebar_position: 6
---

# Puntero

## Introducción

Este documento explica las funcionalidades de puntero proporcionadas por el lenguaje Wave y su modo de uso.
Wave es un lenguaje que soporta programación de sistemas de bajo nivel, proporcionando funcionalidades de puntero para situaciones que requieren manipulación explícita de direcciones de memoria.

El diseño de punteros en Wave se basa en el Modelo de Tipo de Memoria Explícita de Wave.
Este modelo tiene como objetivo definir punteros y arreglos como tipos de memoria explícitos a nivel de lenguaje, en lugar de trucos gramaticales o abstracciones de bibliotecas.

Según este diseño, en Wave un puntero se expresa como un tipo en la forma `ptr<T>`, indicando claramente que es un tipo que señala la dirección de memoria que almacena un valor del tipo específico `T`.
Este enfoque permite expresar las estructuras de memoria de manera más intuitiva y coherente al tratar los punteros como parte del sistema de tipos, en lugar de operadores o sintaxis de declaración.

Un puntero es una variable que apunta a la dirección de memoria de un tipo específico, permitiendo acceso o modificación directa del valor almacenado en memoria.
Esta funcionalidad desempeña un papel crucial en áreas como software de sistema, bibliotecas nativas, código crítico de rendimiento y control de hardware.

---

## Declaración de puntero

En Wave, un puntero se declara en la forma `ptr<tipo>`.
Esto expresa claramente que es un puntero que señala la dirección de memoria donde se almacena un valor del tipo determinado.

Por ejemplo, un puntero que señala un valor de tipo `i32` puede declararse de la siguiente manera.

```wave
var p: ptr<i32>;
```

Esta declaración crea una variable de puntero que aún no apunta a ninguna dirección de memoria y que luego puede inicializarse con una dirección real.

---

## Inicialización de punteros

Un puntero puede inicializarse referenciando la dirección de una variable.
En Wave, se usa el operador de dirección `&` para obtener la dirección de memoria de una variable.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

En el código anterior, `&a` representa la dirección de memoria donde se almacena la variable `a`, y el puntero `p` apuntará a esa dirección.
Desde este punto, se puede acceder directamente al valor de `a` a través de `p`.

---

## Desreferenciación de punteros

Se necesita desreferenciación para leer o modificar el valor real al que apunta un puntero.
En Wave, se usa la palabra clave `deref` para desreferenciar un puntero.

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // output 10

deref p = 20;
println("{}", a); // output 20
```

En este ejemplo, `deref p` significa el valor en la ubicación de la memoria que apunta el puntero `p`.
Se puede leer el valor o asignar un nuevo valor para cambiar el contenido de la variable original.

---

## Puntero NULO

En Wave, un puntero que no señala a una memoria válida se representa con la palabra clave `null`.
Una variable de puntero puede inicializarse explícitamente a `null`, en cuyo caso no referencia ninguna dirección de memoria.

```wave
var p: ptr<i32> = null;
```

Los punteros nulos se usan para representar intencionadamente un estado aún no inicializado.
En Wave, los intentos de desreferenciar un puntero nulo se detectan en la fase de compilación y se manejan como errores para evitar errores de ejecución o comportamientos indefinidos.

---

## Punteros múltiples

Wave soporta el uso de punteros múltiples utilizando punteros anidados en varios niveles.
El propio puntero también es un valor, por lo que es posible declarar un puntero que señala a otro puntero.

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

Usar punteros múltiples permite expresar estructuras de referencia indirecta y se puede utilizar en casos que requieren estructuras de memoria complejas o representación de datos de bajo nivel.

---

## Arrays y punteros

Los punteros pueden usarse no solo para una sola variable, sino también para señalar un elemento de un arreglo o el arreglo completo.

Cuando cada elemento de un arreglo es un puntero, se puede referenciar indirectamente múltiples ubicaciones de memoria mediante un arreglo de punteros.

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

También es posible señalar todo un arreglo como un único puntero.

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // salida dirección de memoria
```

Este método se usa útilmente al pasar arreglos a funciones o al manejar memoria de bajo nivel.

---

## Seguridad y propiedad

Wave está diseñado con el objetivo de reducir los riesgos que pueden surgir al usar punteros, introduciendo un sistema de propiedad y duración similar al de Rust.

Con esto, se intenta prevenir problemas como desreferenciación de punteros no válidos, punteros colgantes y liberación doble, tanto como sea posible en la etapa de compilación.
Los punteros son herramientas poderosas, pero en Wave se imponen restricciones y verificaciones para que se usen de una manera lo más clara y segura posible.

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

Este ejemplo demuestra que es posible leer y modificar de manera segura el valor de una variable a través de un puntero.

---

## Conclusión

Los punteros son una de las características clave que permiten la programación de bajo nivel de alto rendimiento en Wave.
Desempeña un papel especialmente importante en áreas como el desarrollo de sistemas que requieren control directo de memoria, implementación de bibliotecas nativas y control de hardware.

Wave apunta a un uso de punteros que sea tan seguro y previsible como sea posible, mediante verificaciones a nivel de compilador y la estructura del lenguaje, sin perder la potencia de los punteros.
El desarrollador puede hacer elecciones equilibradas entre rendimiento y estabilidad.