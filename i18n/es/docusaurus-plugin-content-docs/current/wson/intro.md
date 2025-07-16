---
sidebar_position: 2
---

# Gramática

## 1. Estructura básica

- El contenido del archivo comienza y termina con un objeto (`object`) rodeado por llaves `{}`.

- El objeto se compone de pares de nombre de propiedad (key) y valor (value).

- El nombre de la propiedad y el valor se separan por un colon (`:`) o un signo igual (`=`).

## 2. Comentarios

- Los comentarios comienzan con `//` o `#` y se escriben por línea.

- El comentario se aplica hasta el final de esa línea.

- No se admiten comentarios de varias líneas, por lo que al escribir comentarios en varias líneas, se debe agregar `//` o `#` en cada línea.

## 3. Objeto (Object)

- El objeto está rodeado por llaves `{}` e incluye pares clave-valor.

- Entre la clave y el valor se pueden utilizar los símbolos `:` o `=`. Ambos símbolos pueden combinarse.

- Cada propiedad se separa por una coma (`,`).

- Se pueden anidar otros objetos dentro de un objeto.

Ejemplo:

```
{
    estado: "éxito",
    código = 200,
    usuario = { id: 123, nombre: "John Doe" }
}
```

## 4. Array (Array)

- El array está rodeado por corchetes `[]` y los elementos se separan por comas (`;`).

- Los elementos de un array pueden ser de diversos tipos de datos, como objetos, cadenas, números, etc.

- En WSON, un array puede estar contenido dentro de un objeto, y dentro del array pueden anidarse otros arrays u objetos.

Ejemplo:

```
tareas: [
    { id_tarea: 1, título: "Completar informe de proyecto" },
    { id_tarea: 2, título: "Revisar comentarios del equipo" }
]
```

## 5. Par Clave-Valor (Key-Value Pair)

- El nombre de la propiedad es una cadena de texto y el valor se coloca sin espacio detrás de `;`, `=`.

- El valor puede ser de tipos como cadena, número, booleano, objeto, array, etc.

- Las cadenas están rodeadas por comillas dobles "".

- Los números se utilizan sin comillas dobles y pueden ser enteros o de punto flotante.

Ejemplo:

```
nombre: "John Doe"
edad = 25
```

## 6. Tipos de Datos (Data Types)

- Cadena (String): Texto encerrado con comillas dobles "".

```
"hola mundo"
```

- Número (Number): Valor que es un entero o un flotante.

```
42
3.14
```

- Booleano (Boolean): Utiliza los valores `true` o `false`.

```
activo = true
```

- Objeto (Object): Par clave-valor encerrado con llaves `{}`.
- Array (Array): Lista de elementos encerrada con corchetes `[]`.

## 7. Explicación del Ejemplo

```ws
{
    // Código de estado e información del mensaje
    estado: "éxito",
    código: 200,
    mensaje: "Datos recuperados con éxito",

    usuario = {
        id = 123,
        nombre: "John Doe",
        correo_e: "john@example.com",
        edad: 25  # Edad del usuario
    },

    tareas: [
        {
            id_tarea: 1,
            título: "Completar informe de proyecto",
            estado: "en-progreso",
            fecha_venc: "2024-10-15"
        },
        {
            id_tarea: 2,
            título: "Revisar comentarios del equipo",
            estado: "pendiente",
            fecha_venc: "2024-10-20"
        }
    ]
}
```