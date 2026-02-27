---
sidebar_position: 9
---

# FFI

Este documento explica las especificaciones de la FFI (Interfaz de Función Externa) para llamar a funciones implementadas externamente en el lenguaje Wave.
A través de la FFI, los programas de Wave pueden integrarse directamente con bibliotecas nativas escritas en otros lenguajes.

---

## Resumen

La FFI de Wave opera basada en declaraciones.
Las funciones externas no se implementan en el código Wave, solo se especifica qué ABI (Interfaz Binaria de Aplicación) siguen.
La implementación real se resuelve en la etapa de enlace desde bibliotecas externas.

La FFI declara únicamente la existencia de la función en tiempo de compilación, y el enlazador conecta los símbolos reales al crear el ejecutable.

---

## Declaración extern

Las funciones externas se declaran utilizando la palabra clave extern.
현재 Wave에서는 ABI 지정이 반드시 필요하며, **`extern(c)`만 지원**합니다.

```wave
extern(c) fun 함수명(인자들...) -> 반환타입;
```

---

## Especificación de ABI

`extern` 선언에는 ABI를 명시해야 합니다.
현재 지원되는 ABI는 `c` 하나입니다.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

`extern(rust)` 같은 선언은 파싱될 수 있어도 의미 분석 단계에서 에러가 발생합니다.

---

## Declaración extern a nivel de función

Para declarar una sola función externa, se escribe de la siguiente manera.

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

Esta declaración significa que el símbolo `InitWindow` siguiendo el ABI de C existe en una biblioteca externa.

---

## Declaración extern a nivel de bloque

Si hay varias funciones externas que usan el mismo ABI, se pueden declarar en forma de bloque.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

La declaración a nivel de bloque es semánticamente idéntica a la declaración a nivel de función, y es simplemente una sintaxis para mejorar la legibilidad y estructuración.

---

## Especificación del nombre del símbolo

En algunos ABI, el nombre de la función Wave puede no coincidir con el nombre del símbolo del enlazador real.
En este caso, se puede especificar el nombre real del símbolo al que se enlazará la función externa como una cadena de texto.

### Especificación de símbolos a nivel de función

```wave
extern(c, "puts")
fun rust_func(i32);
```

이 선언은 `rust_func` 호출 시 실제 링크 심볼로 `puts`를 사용하도록 지정합니다.

---

### Especificación de símbolos a nivel de bloque

En la declaración a nivel de bloque, se puede especificar el nombre del símbolo individualmente después de cada función.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## Tipo puntero

El puntero se expresa en la forma `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` corresponde directamente con un puntero del lenguaje externo y Wave no gestiona la propiedad de memoria o el ciclo de vida.

---

## Uso de estructuras

Las estructuras se pueden utilizar como argumento o valor de retorno de una función externa.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Cuando se usa una estructura en FFI, el orden de los campos se mantiene como se declaró y sigue el layout de memoria requerido por el ABI.

---

## Llamada a funciones externas

Las funciones declaradas con `extern` se llaman de la misma manera que las funciones normales.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

No hay diferencias gramaticales en la llamada, y el convenio de la llamada y conexión de símbolos es manejado completamente por el ABI y el enlazador.

---

## Enlazado

La implementación real de una función externa se proporciona desde bibliotecas externas en la etapa de enlace.
El compilador de Wave genera un archivo objeto que incluye llamadas a funciones externas, y el enlazador resuelve los símbolos a través de las bibliotecas especificadas.

La especificación de bibliotecas se realiza a través de herramientas de compilación y opciones de CLI.

---

## Limitaciones

Wave no proporciona las siguientes características.

- Puntero a función
- Funciones de callback
- Gestión automática de memoria
- Gestión integrada de excepciones entre lenguajes

Estas características pueden ser tratadas por separado en versiones futuras.
