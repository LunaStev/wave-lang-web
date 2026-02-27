---
sidebar_position: 2
---

# Tipo de datos

Este documento explica los diversos tipos de datos proporcionados por el lenguaje de programación Wave.
En Wave, se pueden almacenar y operar valores a través de varios tipos de datos, y cada tipo de dato define claramente la forma de representar esos datos y cómo se manejan en memoria.

Designar claramente los tipos de datos es una de las filosofías de diseño central de Wave.
Esto permite expresar claramente la intención del código, detectar errores temprano durante la compilación, y garantizar un uso eficiente de la memoria y una ejecución estable.

---

## Tipo entero

El tipo entero se utiliza para almacenar valores enteros.
En Wave, generalmente se utilizan `i32` (entero con signo de 32 bits) y `u32` (entero sin signo de 32 bits), pero se puede especificar el tamaño en bits de los enteros de manera muy detallada si es necesario.

Los tipos enteros con signo se ofrecen desde `i8` hasta `i1024`, y los tipos enteros sin signo están disponibles desde `u8` hasta `u1024`.
Esto permite satisfacer una amplia gama de necesidades, desde cálculos simples hasta operaciones de enteros de gran tamaño, procesamiento criptográfico y programación de sistemas de bajo nivel.

A continuación, se presenta un ejemplo simple que utiliza tipos de enteros.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Tipo de punto flotante

El tipo de punto flotante se utiliza para almacenar valores reales.
El tipo de punto flotante que Wave utiliza por defecto es `f32`, y si se necesita una mayor precisión, se puede elegir un tipo de tamaño mayor.

Wave ofrece tipos de punto flotante desde `f32` hasta `f128`, permitiendo al usuario escoger entre precisión de cálculo y rendimiento.
Esto permite gestionar operaciones de números reales para diversos propósitos, desde cálculos numéricos generales hasta cálculos científicos precisos.

A continuación, se presenta un ejemplo que utiliza tipos de punto flotante.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Tipo cadena de caracteres

El tipo de cadena se utiliza para manejar datos de texto.
En Wave, las cadenas se declaran usando la palabra clave `str`, y los literales de cadena se expresan entre comillas dobles (`"`).

Las cadenas se utilizan ampliamente en programas para la salida de mensajes, el manejo de entradas de usuario y el procesamiento de datos basados en texto, entre otros.

A continuación, se presenta un ejemplo básico del uso de tipos de cadena.

```wave
var text: str = "Hola Wave";
```

---

## Tipo booleano

El tipo booleano es un tipo de datos que representa valores de verdadero (True) o falso (False).
En Wave se utiliza el tipo `bool`, y los valores se asignan como `true` o `false`.

El tipo booleano desempeña un papel clave en sentencias condicionales y bucles, y se utiliza para controlar el flujo del programa.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Tipo carácter

El tipo carácter se utiliza para almacenar un solo carácter.
Se declara utilizando la palabra clave `char` y sólo puede contener un carácter.

Los literales de carácter se expresan entre comillas simples (`'`).

```wave
var letter: char = 'A';
```

## Tipo byte

El tipo byte se utiliza para almacenar datos de tamaño de 1 byte.
Este tipo es útil principalmente cuando se requiere procesamiento de datos de bajo nivel, como en el manejo de datos binarios, entrada/salida de archivos y programación de redes.

En Wave, el tipo byte se declara utilizando la palabra clave `byte`.

```wave
var byteData: byte = 0xFF;
```

## Tipo puntero

El tipo puntero se utiliza para referenciar directamente direcciones de memoria.
Wave에서는 `ptr<T>` 형태로 포인터 타입을 선언합니다.

Los punteros se utilizan cuando se requiere acceso a memoria de bajo nivel, y se emplean principalmente en la programación de sistemas o en códigos donde el rendimiento es crítico.

```wave
var ptr: ptr<T> = &someVariable;
```

## `null` 리터럴

Wave에서 `null`은 정식 리터럴입니다.

- `null`은 식별자가 아닙니다. (`var null = ...` 형태 불가)
- `null`은 오직 `ptr<T>` 타입에만 대입할 수 있습니다.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERROR
// var b: bool = null;   // ERROR
```

## Tipo arreglo

El tipo de arreglo se utiliza para almacenar múltiples valores del mismo tipo de datos de manera secuencial.
En Wave, los arreglos se declaran en la forma `array<tipo, tamaño>`, y el tamaño del arreglo se especifica claramente en tiempo de compilación.

Esto permite que la estructura de la memoria sea clara y que el acceso a los datos sea estable.

```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Cada tipo de datos está diseñado para permitir la selección de un alcance y tamaño adecuadas a su uso y características.
Seleccionar el tipo de datos adecuado permite gestionar la memoria de manera eficiente, mejorando significativamente la estabilidad y legibilidad del código.
