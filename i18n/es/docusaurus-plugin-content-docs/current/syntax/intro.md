---
sidebar_position: 1
---

# Funciones y variables

## Introducción

La filosofía central del diseño del lenguaje de programación Wave es proporcionar un entorno eficiente y flexible para el desarrollo de software, equilibrando el rendimiento de bajo nivel y la abstracción de alto nivel.
Esta sección introduce las funciones y variables, que son los componentes básicos de un programa Wave.

Las funciones son la unidad básica de operación y lógica en el programa, mientras que las variables almacenan y gestionan los datos necesarios en el proceso.
Comprender cómo definir y usar funciones y variables permite explotar más profundamente la estructura e intención de diseño del lenguaje Wave.

---

## Función

En Wave, una función es un bloque de código reutilizable que puede ejecutarse independientemente.
Puede agrupar acciones o cálculos específicos en una sola unidad, que puede llamarse cuando sea necesario a través del programa.

El uso de funciones permite reducir el código repetido y separar lógicamente el programa, mejorando su legibilidad y mantenibilidad.
También se utilizan con fines variados como procesamiento de cálculos, manejo de entrada/salida, y separación de lógica.

En Wave, las funciones se definen con la palabra clave `fun` y consisten en el nombre de la función, una lista de parámetros, y el cuerpo de la función encerrado entre llaves `{}`.

### Definición de Función

La forma más básica de definir una función en Wave es la siguiente.

```wave
fun main() {
    // Escribe tu código aquí
}
```

La función `main` es el punto de entrada de ejecución del programa, y debe existir una función `main` en cada programa Wave.
El programa comienza su ejecución en esta función.

Las funciones pueden tener parámetros según sea necesario y también pueden devolver resultados de cálculos o valores al llamador.
Si hay un valor de retorno, se debe especificar el tipo de retorno en la declaración de la función.

### Ejemplo: Función simple

El siguiente ejemplo es una función simple que toma dos enteros y devuelve su suma.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Llamada a la función add
    println(result);            // Salida: 12
}
```

En este ejemplo, la función `add` toma dos parámetros enteros `a` y `b`, los suma y devuelve el resultado.
En la función `main`, se llama a la función `add`, se almacena el valor devuelto en una variable y luego se imprime.

Así, las funciones encapsulan acciones específicas y permiten su reutilización en varias partes del programa.

## Variable

Las variables se utilizan para almacenar y manipular datos dentro de un programa.
Wave está diseñado para distinguir claramente entre variables mutables e inmutables al declararlas, revelando la intención de los cambios de datos a nivel de código.

Esto hace que los cambios de estado del programa sean más claros y ayuda a reducir errores por cambios de valores no intencionados.

### Variable Mutable

En Wave, las variables son mutables por defecto.
Es decir, se pueden cambiar los valores durante la ejecución del programa después de su declaración.

Las variables mutables se declaran utilizando la palabra clave var.

```wave
var x :i32 = 10;
x = 20;
```

En el código anterior, `x` comienza con el valor inicial `10` y puede cambiarse a `20` después.
Para datos que necesitan cambiar de estado, se utilizan variables mutables.

### Variable Inmutable

Si declaras una variable como inmutable, no puedes cambiar su valor después de que se haya asignado inicialmente.
Las variables inmutables se declaran utilizando la palabra clave let.

```wave
let y :i32 = 5;
// y = 10;   // Error: las variables inmutables no pueden cambiar su valor.
```

Las variables inmutables garantizan que los valores no cambien, lo que ayuda a aumentar la estabilidad y predictibilidad del programa.
Se recomienda usar variables inmutables para datos constantes que no necesitan cambiar de valor.

En Wave, puede usar mut junto con la palabra clave `let` para permitir explícitamente la mutabilidad.

```wave
let mut y :i32 = 5;
y = 10;
```

En el caso de las variables, se declaran con `let`, pero se permite el cambio de valor usando la palabra clave `mut`.

### Ejemplo de Declaración de Variables

A continuación se muestra un ejemplo de declaración de variables mutables e inmutables de varios tipos.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

En este ejemplo, `x` y `name` son variables mutables, mientras que `y` e `is_active` son variables inmutables.
En Wave, se distingue claramente entre `var` y `let` para mostrar la mutabilidad de los datos a nivel de código.

Usar adecuadamente variables mutables e inmutables ayuda a mantener la consistencia de los datos y a crear programas más robustos y predecibles.