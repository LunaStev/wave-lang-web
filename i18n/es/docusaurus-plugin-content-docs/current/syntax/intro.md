---
sidebar_position: 1
---

# Funciones y variables

## Introducción

La filosofía central de diseño del lenguaje de programación Wave es proporcionar un entorno eficiente y flexible para el desarrollo de software, equilibrando el rendimiento de bajo nivel y la abstracción de alto nivel.
Esta sección introduce las funciones y variables, que son los componentes básicos de un programa Wave. Estos componentes son esenciales para estructurar la lógica y gestionar los datos dentro de un programa.
Comprender cómo definir y manejar funciones y variables permite aprovechar al máximo el potencial de Wave.

---

## Función

En Wave, una función actúa como un **bloque de código reutilizable** que puede ejecutarse independientemente.
Las funciones encapsulan acciones específicas y permiten que se llamen cuando sea necesario a lo largo del programa.
Esto permite realizar cálculos, gestionar operaciones de E/S o dividir el código en unidades manejables.

En Wave, la firma de una función comienza con la palabra clave `fun`, seguida del nombre de la función, los parámetros (si los hay), y el cuerpo de la función encerrado entre llaves `{}`.

### Definición de Función

En Wave, una función básica se define como sigue:

```wave
fun main() {
    // Escribe tu código aquí
}
```

- La función `main` es siempre necesaria como punto de entrada para la ejecución del programa.
- Las funciones pueden tener parámetros y devolver valores. El tipo de retorno se especifica después del nombre de la función.

### Ejemplo: Función simple

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Llamada a la función add
    println(result);            // Salida: 12
}
```

En el ejemplo anterior:

- La función `add` toma dos enteros `a` y `b` y devuelve su suma.
- La función `main` llama a `add` y muestra el resultado.

## Variable

Las variables se utilizan para almacenar y manipular datos dentro de un programa.
Wave admite tanto **variables mutables** como **variables inmutables** en las declaraciones de variables, proporcionando al desarrollador control sobre la gestión de datos.

### Variable Mutable

En Wave, las variables son **mutables** por defecto. Es decir, su valor puede cambiar durante la ejecución del programa.

Las variables mutables se declaran utilizando la palabra clave var.

```wave
var x :i32 = 10; // Variable mutable
x = 20;
```

En el ejemplo anterior:

- `x` es una variable mutable que comienza con el valor inicial `10` y puede cambiarse a `20` más adelante.

### Variable Inmutable

Declarar una variable como **inmutable** significa que su valor no puede cambiar después de haber sido asignado una vez.

Las variables inmutables se declaran utilizando la palabra clave `let`.

```wave
let y :i32 = 5; // Variable inmutable
// y = 10; // Error: Las variables inmutables no pueden cambiar su valor.
```

Aquí:

- `y` es una variable inmutable, y cambiar su valor provocaría un error de compilación.

Sin embargo, si se desea utilizar la palabra clave `let` para declarar una variable mutable temporalmente, se puede utilizar `mut`.

```wave
let mut y :i32 = 5;
y = 10; 
```

### Ejemplo de Declaración de Variables

Aquí hay un ejemplo de declaración de variables mutables e inmutables de varios tipos:

```wave
var x :i32 = 10; // Variable entera mutable
let y :f64 = 3.14159; // Variable de punto flotante inmutable
var name :str = "Wave"; // Variable de cadena mutable
let is_active :bool = true; // Variable booleana inmutable
```

- `x` es un entero mutable.
- `y` es un número de punto flotante inmutable.
- `name` es una cadena mutable.
- `is_active` es un valor booleano inmutable.

En Wave, `var` se usa para declarar variables mutables, mientras que `let` se usa para declarar variables inmutables que no se pueden cambiar después de la asignación inicial.

Al diferenciar entre variables mutables e inmutables, Wave permite un control más efectivo sobre la consistencia de datos y el estado del programa.
Esto permite escribir un código más robusto y predecible.