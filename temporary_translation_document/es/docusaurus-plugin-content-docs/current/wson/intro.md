---
sidebar_position: 2
---

# Sintaxis

## 1. Estructura básica

* El contenido del archivo comienza y termina con un objeto encerrado entre llaves `{}`.
* Un objeto consta de pares clave-valor, donde la clave es el nombre del atributo y el valor es el valor del atributo.
* La clave y el valor se separan por dos puntos (`:`) o un signo igual (`=`).

## 2. Comentarios

* Los comentarios comienzan con `//` o `#` y se escriben en una sola línea.
* Los comentarios aplican hasta el final de la línea.
* No se admiten comentarios multilínea. Si necesitas comentar varias líneas, debes agregar `//` o `#` al inicio de cada línea.

## 3. Objeto

Un objeto está encerrado entre llaves `{}` y contiene pares clave-valor.
Se puede usar tanto `:` como `=` entre la clave y el valor. Ambos símbolos son intercambiables.
Cada atributo está separado por una coma (`,`).
Se pueden anidar otros objetos dentro de un objeto.

Ejemplo:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Arreglo

* Un arreglo está encerrado entre corchetes `[]`, y los elementos están separados por comas (`,`).
* Los elementos de un arreglo pueden ser objetos, cadenas, números u otros tipos de datos.
* En WSON, los arreglos pueden estar contenidos dentro de objetos, y los arreglos pueden contener otros arreglos u objetos.

Ejemplo:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Pares clave-valor

* Los nombres de los atributos son cadenas y se colocan directamente después de `:` o `=`, sin espacios.
* El valor puede ser de tipos como cadenas, números, booleanos, objetos o arreglos.
* Las cadenas se encierran entre comillas dobles (`"`).
* Los números se escriben sin comillas y pueden ser enteros o de punto flotante.

Ejemplo:

```
name: "John Doe"
age = 25
```

## 6. Tipos de datos

- Cadena (String): Texto encerrado entre comillas dobles (`"`).

```
"hello world"
```

- Número (Number): Un valor entero o de punto flotante.

```
42
3.14
```

- Booleano (Boolean): El valor es `true` o `false`.

```
is_active = true
```

* Objeto (Object): Un conjunto de pares clave-valor encerrados entre `{}`.
* Arreglo (Array): Una lista de elementos encerrados entre `[]`.

## 7. Explicación del ejemplo

```ws
{
    // Información sobre el código de estado y el mensaje
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Edad del usuario
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```