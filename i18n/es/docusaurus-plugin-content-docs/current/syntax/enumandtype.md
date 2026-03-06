---
sidebar_position: 10
---

# Enumeraciones (enum) y alias de tipos (type alias)

Wave mantiene un sistema de tipos explícito similar a C,
pero también admite alias de tipos (type alias) y
enumeraciones (enum) basadas en enteros para mejorar la legibilidad y la estabilidad del ABI.

---

## Alias de tipos (Type Alias)

### Resumen

La palabra clave type otorga un nuevo nombre a un tipo existente.
Esto no crea un tipo nuevo, sino que es un alias completo.

```wave
type MyInt = i32;
```

En esta declaración, MyInt es un tipo completamente idéntico a i32.

---

### Características

- Sin sobrecarga en tiempo de ejecución
- Totalmente idéntico en el ABI
- Existe solo en tiempo de compilación
- Usable como tipo de representación de enum

---

### Ejemplo de uso

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Equivalencia de tipos

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type no es un tipo nuevo, sino un nombre diferente para el mismo tipo.

---

## Enumeración (enum)

### Resumen

El enum de Wave es una enumeración basada en enteros.
Todas las enumeraciones deben tener un tipo de representación (repr).

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### tipo repr

-> i32 indica en qué tipo entero se representa esta enumeración.

Tipos de representación (repr) permitidos:

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- `type alias` para el tipo correspondiente

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### Reglas de asignación de valores

- Usar el valor explícito si está presente
- De lo contrario, usar el valor anterior + 1
- Si no hay valor inicial, comenzar desde 0

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### La enumeración es un tipo de valor

La enumeración tiene un valor entero y se puede utilizar libremente como argumento de funciones o valor de retorno.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### Uso como constante

Una variante de enumeración es una constante en tiempo de compilación.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## Ejemplo real

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```