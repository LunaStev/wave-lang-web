---
sidebar_position: 1
---

# Funciones y Variables

## Introducción

La filosofía central del diseño del lenguaje de programación Wave es lograr un equilibrio entre el rendimiento de bajo nivel y la abstracción de alto nivel, proporcionando un entorno eficiente y flexible para el desarrollo de software. 
Esta sección introduce los elementos básicos de los programas Wave: funciones y variables. 
Estos componentes son esenciales para estructurar la lógica y gestionar los datos dentro de un programa. 
Al comprender cómo definir y manejar funciones y variables, se puede aprovechar al máximo el potencial de Wave.

---

## Funciones
En Wave, las funciones actúan como **bloques de código reutilizables** que se pueden ejecutar de forma independiente. 
Las funciones encapsulan comportamientos específicos y permiten que se llamen cuando sea necesario a lo largo del programa. 
Esto permite realizar cálculos, gestionar operaciones de entrada/salida (I/O) o dividir el código en unidades más manejables.

La firma de una función en Wave comienza con la palabra clave `fun`, seguida del nombre de la función, los parámetros (si los hay), y el cuerpo de la función encerrado entre llaves `{}`.

### Definir una función
Una función básica en Wave se define de la siguiente manera:

```wave
fun main() {
    // Escribe tu código aquí
}
```

* La función `main` es siempre necesaria como punto de entrada para ejecutar el programa.
* Las funciones pueden tener parámetros y devolver valores. El tipo de retorno se especifica después del nombre de la función.

### Ejemplo: Función simple

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Llamada a la función add
    println(result);            // Imprime: 12
}
```

En el ejemplo anterior:

* La función `add` recibe dos enteros `a` y `b`, y devuelve su suma.
* La función `main` llama a `add` y luego imprime el resultado.

## Variables
Las variables se utilizan para almacenar y manipular datos dentro de un programa. 
Wave soporta tanto **variables mutables** como **inmutables**, proporcionando al desarrollador control sobre la gestión de datos.

### Variables mutables
En Wave, las variables son **mutables** por defecto, lo que significa que sus valores pueden cambiar durante la ejecución del programa. 

Las variables mutables se declaran utilizando la palabra clave `var`.
```wave
var x :i32 = 10; // Variable mutable
x = 20;
```

En este ejemplo:
* `x` es una variable mutable que inicialmente tiene el valor `10`, pero puede cambiar a `20`.

### Variables inmutables
Cuando se declara una variable como **inmutable**, su valor no puede cambiar una vez que se le ha asignado.
Las variables inmutables se declaran usando **var imm**.

```wave
var imm y :i32 = 5;     // Variable inmutable
// y = 10;              // Error: No se puede modificar una variable inmutable
```

Aquí:
`y` es una variable inmutable, por lo que cualquier intento de cambiar su valor resultará en un error de compilación.

### Ejemplo de declaración de variables
A continuación se muestra un ejemplo de cómo declarar variables mutables e inmutables de diferentes tipos:

```wave
var x :i32 = 10;                    // Variable mutable de tipo entero
var imm y :f64 = 3.14159;           // Variable inmutable de tipo flotante
var name :str = "Wave";             // Variable mutable de tipo cadena
var imm is_active :bool = true;     // Variable inmutable de tipo booleano
```

* `x` es una variable mutable de tipo entero.
* `y` es una variable inmutable de tipo flotante.
* `name` es una variable mutable de tipo cadena.
* `is_active` es una variable inmutable de tipo booleano.

En Wave, las variables mutables se declaran con la palabra clave `var`, mientras que las variables inmutables se declaran con `var imm`.

Al distinguir entre variables mutables e inmutables, Wave permite un control más efectivo sobre la consistencia de los datos y el estado del programa, lo que ayuda a escribir código más robusto y predecible.