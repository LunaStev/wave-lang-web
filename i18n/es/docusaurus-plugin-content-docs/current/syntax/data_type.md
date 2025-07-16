---
sidebar_position: 2
---

# Tipo de datos

Este documento explica los diversos tipos de datos proporcionados por el lenguaje de programación Wave.
El lenguaje de programación Wave puede almacenar y operar valores utilizando diversos tipos de datos.
Los principales tipos de datos incluyen enteros, puntos flotantes y cadenas de caracteres. Cada tipo de datos define las características de los datos respectivos y la manera de manejar la memoria.

## Tipo entero

El tipo entero se utiliza para almacenar **valores enteros**.
Por defecto, los enteros se declaran como `i32` (entero de 32 bits con signo) y `u32` (entero de 32 bits sin signo).
El lenguaje de programación Wave ofrece diversas opciones de tamaño que permiten configurar con precisión el rango de enteros.

- `i8` ~ `i1024`: Tipo entero con signo, se puede configurar de 8 bits a 1024 bits.
- `u8` ~ `u1024`: Tipo entero sin signo, configurable de 8 bits a 1024 bits.

Ejemplo:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Tipo de punto flotante

El tipo de punto flotante se utiliza para almacenar valores reales.
Por defecto, los números de punto flotante se declaran como `f32`.
Además, ofrece diversas opciones de tamaño para definir con precisión el tamaño de los números de punto flotante.

- `f32` ~ `f1024`: El tipo de punto flotante se puede configurar entre 32 bits y 1024 bits. Esto permite realizar cálculos de números reales con mayor precisión.

Ejemplo:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Tipo cadena de caracteres

El tipo de cadena de caracteres se utiliza para manejar datos de texto. Las cadenas de caracteres se declaran usando la palabra clave `str`.
Las cadenas de caracteres se definen generalmente entre comillas dobles (`"`) y se pueden asignar como valores de variables.

Ejemplo:

```wave
var text :str = "Hola Wave";
```

## Tipo booleano

El tipo booleano es un tipo de datos que representa valores de **verdadero (True)** o **falso (False)**.
Se utiliza principalmente en declaraciones condicionales y se establecen como `true` o `false`.

Ejemplo:

```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Tipo carácter

El tipo carácter se utiliza para almacenar un solo carácter.
Se declara usando la palabra clave `char` y solo puede contener un valor de carácter.

Ejemplo:

```wave
var letter :char = 'A';
```

## Tipo byte

El tipo byte se utiliza para almacenar datos de tamaño de **1 byte**.
Es especialmente útil para manejar datos binarios. Se declara utilizando la palabra clave `byte`.

Ejemplo:

```wave
var byteData :byte = 0xFF;
```

## Tipo puntero

El tipo puntero se utiliza para hacer referencia a **direcciones de memoria**.
Se declara utilizando la palabra clave `ptr` y se utiliza para almacenar direcciones de memoria.

Ejemplo:

```wave
var ptr :ptr<T> = &someVariable;
```

## Tipo arreglo

El tipo de arreglo se utiliza para almacenar **múltiples elementos del mismo tipo de datos** de forma secuencial.
Se utiliza la palabra clave `array` y se puede especificar el tamaño o tipo del arreglo.

Ejemplo:

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Cada tipo de datos se puede configurar con varios rangos y tamaños, lo que permite elegir el tipo que se ajuste a las necesidades del usuario para una gestión eficiente de la memoria y el cálculo.
