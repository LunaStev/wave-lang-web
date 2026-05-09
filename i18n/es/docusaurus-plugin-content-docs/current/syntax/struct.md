---
sidebar_position: 8
---

# Estructura

## Resumen

Las estructuras en el lenguaje Wave son un elemento sintáctico clave para declarar tipos de datos definidos por el usuario.
El uso de estructuras permite agrupar y representar valores de diferentes tipos como una sola unidad lógica, lo que permite modelar estructuras de datos complejas de manera clara y segura.

Las estructuras en Wave funcionan como tipos por valor (value types).
Todos los campos deben tener un tipo explícito y cuando se crea una instancia de estructura, todos los campos deben estar inicializados.
Estas reglas aseguran que el estado de la estructura sea siempre completo y predecible.
-------------------------------------------------------------------------------------------------------

## Sintaxis de declaración de estructura

Una estructura se declara utilizando la palabra clave `struct`.
El nombre de la estructura utiliza la notación PascalCase, y el cuerpo de la estructura puede definir uno o más campos.

Los campos se declaran en el formato `nombre: tipo;` y cada declaración de campo debe terminar con un punto y coma.

```wave
struct Caja {
 tamaño: i32;
 peso: f32;
}
```

El orden en que se escriben los campos al declarar una estructura es el mismo que se utiliza para el orden de disposición en memoria.
Dentro de una estructura solo se permiten declaraciones de campos y no se pueden incluir funciones o métodos.
La lógica operativa se define por separado fuera de la estructura.
----------------------------------------------------------------------------------

## Sintaxis de creación de estructura

Una estructura se crea en un formato literal utilizando el nombre de la estructura.
Un literal de estructura es \`NombreDeEstructura { nombreDelCampo: valor; ... Se escribe en el formato }.

```wave
var b: Caja = Caja {
 tamaño: 42;
 peso: 10.5;
};
```

Al crear una estructura, todos los campos definidos deben inicializarse necesariamente, y si falta alguno, se producirá un error de compilación.

Al inicializar, el orden de los campos no necesita coincidir con el orden de declaración de la estructura, pero el tipo de los valores pasados a cada campo debe coincidir exactamente con el tipo definido en la estructura.
Wave no permite la conversión implícita de tipos durante el proceso de inicialización de campos de estructuras.

---

## Sintaxis de acceso a campo de estructura

Los campos de una estructura se acceden mediante la notación de punto.
El acceso a los campos utiliza la misma sintaxis tanto para lectura como para escritura.

```wave
println("Tamaño: {}", b.tamaño);
println("Peso: {}", b.peso);
```

Intentar utilizar un nombre de campo inexistente provocará un error en la etapa de compilación.
La estructura es un tipo de valor, por lo que al asignar la estructura completa o pasarla como argumento de función, todos los campos incluidos en la estructura se copian juntos.

---

## Sintaxis de definición de método de estructura

El lenguaje Wave no permite definir métodos directamente dentro de una estructura.
En su lugar, se utiliza la palabra clave `proto` para declarar un conjunto de métodos asociados a la estructura.

El bloque `proto` es el ámbito de las funciones pertenecientes a una estructura específica, y las funciones definidas en este bloque se usan como métodos de dicha estructura.

El método utiliza `self` como el primer parámetro para recibir una instancia de estructura.
`self` representa el valor completo de la estructura y se pasa por copia de valor.

```wave
prototipo Caja {
    fun print(self) {
        println("tamaño={}, peso={}", self.size, self.weight);
    }

    fun tamaño_agregado(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

El bloque `proto` no necesita estar en el mismo archivo que la declaración de la estructura y se pueden definir métodos para la misma estructura en varios bloques `proto`.

La llamada al método utiliza la notación de punto y funciona de la misma manera que las llamadas de función normales.

```wave
b.print();
var n: i32 = b.tamaño_agregado(5);
```

---

## Uso de estructuras como argumentos de funciones

Las estructuras se procesan por copia de valor cuando se transmiten como argumentos de función.
Incluso si se modifican los campos de la estructura dentro de una función, no afecta a la instancia de la estructura que hizo la llamada.

```wave
fun calc(caja: Caja) -> i32 {
    return caja.size * 2;
}
```

Incluso cuando se utiliza una estructura como valor de retorno de una función, ocurre una copia de valor.
Este comportamiento garantiza la inmutabilidad de la estructura y un flujo de datos predecible.

---

## Estructura anidada (Nested Struct)

En Wave, se puede utilizar otra estructura como tipo de campo de una estructura.
Las estructuras son tipos completos, por lo que se pueden anidar libremente incluyendo una estructura dentro de otra.

```wave
struct Posición {
    x: i32;
    y: i32;
}

struct Jugador {
    nombre: str;
    pos: Posición;
}
```

Los campos de estructuras anidadas se acceden mediante el uso continuo de notación de punto.

```wave
var p: Jugador = Jugador {
    nombre: "Alice";
    pos: Posición { x: 10; y: 20; };
};

println("Jugador X: {}", p.pos.x);
println("Jugador Y: {}", p.pos.y);
```

Se puede anidar un literal de estructura dentro de otro literal de estructura y las reglas de inicialización de campos se aplican de la misma manera.

---

## Arreglo de estructuras

Las estructuras se pueden utilizar como tipo de elemento en un arreglo.
La sintaxis de arreglos en Wave utiliza el formato `array<tipo, tamaño>` y se pueden especificar tipos de estructuras de manera similar.

```wave
var jugadores: array<Jugador, 3> = [
    Jugador { nombre: "A"; pos: Posición { x: 1; y: 2; }; },
    Jugador { nombre: "B"; pos: Posición { x: 3; y: 4; }; },
    Jugador { nombre: "C"; pos: Posición { x: 5; y: 6; }; }
];
```

Al acceder a elementos de un arreglo de estructuras, se utiliza primero el índice del arreglo seguido de la notación de punto para acceder a los campos dentro de la estructura.

```wave
println("Segundo Jugador X: {}", jugadores[1].pos.x);
```

---

## Compatibilidad de operaciones básicas de estructuras

Las estructuras en Wave son tipos definidos por el usuario, por lo tanto, no participan automáticamente en operaciones aritméticas o de comparación.

Si se necesita comparación de igualdad, ordenamiento, hashing o cálculos numéricos para estructuras, esos comportamientos deben definirse explícitamente a través de un bloque `proto`.
Wave no proporciona operadores implícitos para estructuras; se requiere que todas las operaciones se definan explícitamente.