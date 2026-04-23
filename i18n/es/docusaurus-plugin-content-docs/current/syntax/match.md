---
sidebar_position: 14
---

# Instrucción Match

## Introducción

Una instrucción `match` es una estructura de control que compara un valor con varios patrones para la ramificación.
Es útil para expresar intenciones de ramificación más claramente que una cadena de `if / else if`.

Actualmente, `match` en Wave es una **instrucción** y no admite la forma de expresión que se evalúa directamente a un valor.
Es decir, `var x = match (...) { ... }` no se puede usar.

---

## Sintaxis básica

```wave
match (valor) {
    patrón1 => {
        // bloque de ejecución
    }
    patrón2 => {
        // bloque de ejecución
    }
    _ => {
        // bloque por defecto
    }
}
```

Reglas de sintaxis:

- El encabezado utiliza el formato `match (expr)`.
- Cada arm usa el formato `patrón => { bloque }`.
- El cuerpo del arm debe estar entre `{ ... }`.
- Los arms se pueden separar solo con un salto de línea, o usar `,` o `;` como delimitadores.

---

## Tipos de patrones

Actualmente se admiten tres tipos de patrones.

1. Patrón literal entero

```wave
0 => { ... }
1 => { ... }
42 => { ... }
```

2. Patrón de identificador

```wave
Off => { ... }
On => { ... }
```

El patrón de identificador se usa para **valores que se pueden interpretar como constantes enteras**, como las variantes de `enum`.

3. Patrón comodín (`_`)

```wave
_ => { ... }
```

Es el arm por defecto que se ejecuta cuando no coincide con ningún patrón.

---

## Tipo de valor a coincidir

Según la implementación actual, el valor objetivo de `match` debe ser tipo **entero o `enum`**.
Cadenas de texto, números de coma flotante, estructuras, etc., no se pueden usar como valores para `match`.

---

## Ejemplo 1: Ramificación de enteros

```wave
fun classify_num(v: i32) -> i32 {
    var result: i32 = -1;

    match (v) {
        0 => {
            result = 10;
        }
        1 => {
            result = 20;
        }
        _ => {
            result = 99;
        }
    }

    return result;
}
```

---

## Ejemplo 2: Ramificación de `enum`

```wave
enum Mode -> i32 {
    Off = 0,
    On = 1,
    Unknown = 2
}

fun classify_mode(m: Mode) -> i32 {
    match (m) {
        Off => {
            return 1;
        }
        On => {
            return 2;
        }
        _ => {
            return 3;
        }
    }
}
```

---

## Reglas de funcionamiento

- Al igual que en `switch`, solo se ejecuta **un arm coincidido**.
- No hay un `fallthrough` automático.
- El arm `_` solo se puede usar una vez como máximo.
- La gramática permite que no haya arm `_`. (Si no hay arm coincidido, no se ejecuta ningún arm)

---

## Advertencias

1. Prohibición de casos duplicados

- Declarar un caso duplicado provoca un error de compilación.

2. Prohibición de duplicado en `_`

- El arm `_` no se puede declarar más de una vez.

3. El bloque del arm es obligatorio

- Detrás de `=>` debe haber `{ ... }`.

4. El patrón debe ser constante

- Use solo valores que puedan interpretarse como constantes enteras o variantes de `enum` para patrones de identificador.

---

## Resumen

`match` de Wave es una estructura de control de instrucción optimizada para la ramificación de enteros/`enum`.
Utiliza una estructura de `=>` + bloque, y se puede usar un comodín (`_`) para configurar una ramificación por defecto.

Cuantos más casos de ramificación haya, más fácil es de leer que `if / else if`, y puede aclarar la intención.
