---
sidebar_position: 4
---

# Bucle

## Introducción

En el lenguaje Wave se proporcionan bucles para manejar situaciones en las que el mismo código debe ejecutarse varias veces.
Los bucles se utilizan para seguir ejecutando el código mientras se cumpla una condición o para repetirlo un número determinado de veces.

Esto permite expresar tareas repetitivas con un código claro y conciso, sin necesidad de escribir nuevamente la misma lógica.
Wave admite tanto bucles basados en condiciones como basados en conteo, y ofrece palabras clave para controlar el flujo de ejecución dentro de los bucles.

Esta sección explica cómo usar las sentencias `while` y `for`, así como las palabras clave `break` y `continue` para controlar el flujo de repeticiones.

---

## while loop

La sentencia `while` ejecuta repetidamente un bloque de código mientras la condición dada se evalúe como verdadera (`true`).
En el momento en que la condición se evalúa como falsa (`false`), la repetición se termina de inmediato.

Este método es adecuado cuando el número de repeticiones no es claro y se debe repetir hasta que se satisfaga una condición específica.

### Estructura básica

La estructura básica de la sentencia while en Wave es la siguiente.

```wave
while (condición) {
    // código a repetir
}
```

La condición debe evaluarse a tipo `bool`, y dentro del bloque de código entre llaves `{}` se pueden escribir una o más sentencias.

### Ejemplo: Imprimir desde 0 hasta 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i es {}.", i);
    i = i + 1;
}
```

En este ejemplo, la repetición se realiza mientras la variable `i` sea menor que 5.
En cada repetición se imprime el valor actual y se incrementa el valor de `i` en uno para que la condición eventualmente sea falsa.

---

## Bucle for

La sentencia `for` es adecuada para su uso cuando el número de repeticiones es relativamente claro.
Permite definir al mismo tiempo el valor inicial, la condición y la expresión de incremento para expresar claramente el flujo del ciclo.

Una ventaja es que los elementos necesarios para controlar la repetición están reunidos en un solo lugar, lo que facilita entender la estructura del ciclo de un vistazo.

### Estructura básica

```wave
for (초기화; 조건식; 증감식) {
    // 반복할 코드
}
```

Wave의 for 초기화는 여러 형태를 지원합니다.

- 암시적 `var` 타입 초기화
- `var` / `let mut` / `const` 선언 초기화
- 일반 식 초기화 (기존 변수 재사용)

### 예제 1: 암시적 타입 초기화

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### 예제 2: `var` / `let mut` 초기화

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### 예제 3: 식 기반 초기화 (기존 변수 재사용)

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

선언형 초기화(`var`, `let mut`, `i :i32 = ...`)는 루프 스코프 변수로 동작하고,  
식 기반 초기화(`i = ...`)는 바깥 변수 자체를 갱신합니다.

---

## Bucle anidado

Los ciclos pueden escribirse dentro de otros ciclos, lo que se llama ciclos anidados.
Los ciclos anidados son útiles para recorrer estructuras de datos bidimensionales o manejar combinaciones de varias condiciones.

### Ejemplo: Bucle while doble

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

En este ejemplo, cada vez que se ejecuta el ciclo `while` externo, se ejecuta completamente el ciclo `while` interno.
Esto permite manejar secuencialmente combinaciones de tipo (`i`, `j`).

---

## Bucle break

La sentencia `break` termina inmediatamente el ciclo y mueve el flujo de ejecución fuera de ese ciclo.
Se utiliza cuando no es necesario continuar la repetición durante el ciclo.

### Ejemplo: Finalización de la repetición en un valor específico

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

En este ejemplo, dentro de un ciclo infinito, cuando `i` llega a 5, se ejecuta `break` y se termina el ciclo.
Así, la sentencia `break` es útil para controlar el ciclo independientemente de la condición de repetición.

---

## Bucle continue

La sentencia `continue` omite el resto del código en la repetición actual y comienza la siguiente repetición.
Se utiliza cuando deseas omitir solo cierta lógica bajo una condición específica.

### Ejemplo: Imprimir solo números pares

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

En este código, cuando `i` es impar, se ejecuta `continue`, omitiendo la parte de impresión.
Como resultado, solo se imprimen los valores pares.

---

## Resumen

Los ciclos de Wave están diseñados para expresar de manera natural tanto bucles basados en condiciones como en número de repeticiones.
La sentencia `while` es adecuada para ciclos basados en condiciones, mientras que la sentencia `for` es útil cuando el número de veces y el flujo del ciclo son claros.

El uso combinado de `break` y `continue` permite controlar finamente el flujo de ejecución durante los ciclos, creando lógicas de repetición más sofisticadas y flexibles.
