---
sidebar_position: 2
---

# Tipos de Datos

Este documento explica los diferentes tipos de datos que ofrece el lenguaje de programación Wave.
El lenguaje de programación Wave utiliza varios tipos de datos para almacenar valores y realizar operaciones.
Los tipos de datos principales incluyen enteros, números de punto flotante, cadenas de texto, entre otros. 
Cada tipo de dato define las características del dato y el manejo de la memoria correspondiente.

## Tipo de Entero
El tipo de entero se utiliza para almacenar **valores enteros**.
Por defecto, los enteros se declaran como `i32` (entero con signo de 32 bits) y `u32` (entero sin signo de 32 bits).
El lenguaje de programación Wave ofrece varias opciones con tamaños ajustables para definir con precisión el rango de los enteros.

* `i8` ~ `i1024`: Tipo de entero con signo, con tamaños que van desde 8 bits hasta 1024 bits.
* `u8` ~ `u1024`: Tipo de entero sin signo, con tamaños que van desde 8 bits hasta 1024 bits.

Ejemplo:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Tipo de Punto Flotante
El tipo de punto flotante se utiliza para almacenar valores de **números reales**.
Por defecto, los números de punto flotante se declaran como `f32`.
Además, ofrece varias opciones de tamaños que permiten definir con precisión el tamaño del número de punto flotante.

* `f32` ~ `f1024`: El tipo de punto flotante puede configurarse con tamaños que van desde 32 bits hasta 1024 bits, lo que permite realizar cálculos con mayor precisión en números reales.

Ejemplo:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Tipo de Cadena
El tipo de cadena se utiliza para manejar datos de texto. Se declara utilizando la palabra clave `str`.
Las cadenas se definen generalmente encerrándolas entre comillas dobles (`"`)` y se puede asignar un valor de cadena a una variable.

Ejemplo:
```wave
var text :str = "Hello Wave";
```

## Tipo Booleano
El tipo booleano es un tipo de dato que representa valores de **verdadero** (True) o **falso** (False). 
Se utiliza principalmente en sentencias condicionales, y los valores se establecen como `true` o `false`.

Ejemplo:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Tipo de Carácter
El tipo de carácter se utiliza para almacenar un solo carácter. 
Se declara utilizando la palabra clave `char` y solo puede contener un valor de un solo carácter.

Ejemplo:
```wave
var letter :char = 'A';
```

## Tipo de Byte
El tipo de byte se utiliza para almacenar datos de **1 byte** de tamaño. 
Es útil principalmente cuando se trabajan con datos binarios. 
Se declara utilizando la palabra clave `byte`.

Ejemplo:
```wave
var byteData :byte = 0xFF;
```

## Tipo de Puntero
El tipo de puntero se utiliza para referenciar **direcciones de memoria**.
Se declara utilizando la palabra clave `ptr` y se usa para almacenar direcciones de memoria.

Ejemplo:
```wave
var ptr :ptr<T> = &someVariable;
```

## Tipo de Arreglo
El tipo de arreglo se utiliza para almacenar **múltiples valores del mismo tipo de dato** en una secuencia ordenada.
Se declara utilizando la palabra clave `array`, y se puede especificar el tamaño o el tipo del arreglo.

Ejemplo:
```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Dado que cada tipo de dato tiene diferentes rangos y tamaños, se puede elegir el tipo adecuado según las necesidades del usua
rio para lograr una gestión eficiente de la memoria y los cálculos.