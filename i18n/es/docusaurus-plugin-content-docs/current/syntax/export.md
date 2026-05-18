---
sidebar_position: 9.5
---

# export

`export` expone una función implementada en Wave como símbolo externo del enlazador.
Si `extern` importa una función externa hacia Wave, `export` permite que una función Wave sea llamada desde C, Rust, C++, Zig u otro lenguaje nativo mediante un archivo objeto.

---

## Resumen

La FFI de Wave tiene dos direcciones.

- `extern(c)` declara una función proporcionada por una biblioteca externa para que Wave pueda llamarla.
- `export(c)` emite el cuerpo de una función Wave como símbolo ABI externo.

Ambas formas comparten la misma cabecera ABI, pero su significado es opuesto.
Con `extern`, el cuerpo de la función está fuera de Wave.
Con `export`, el cuerpo de la función está dentro de Wave.

Por ahora, el único ABI de exportación admitido es `c`.

---

## Exportación por función

La forma básica es:

```wave
export(c) fun add(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Esto emite un símbolo público llamado `add`.
El archivo objeto generado puede enlazarse con código externo que espera el ABI de C.

---

## Nombres de símbolos

El nombre de la función Wave y el símbolo exportado pueden ser distintos.

```wave
export(c, "wave_add_i32") fun add_i32(a: i32, b: i32) -> i32 {
    return a + b;
}
```

Aquí el nombre en Wave es `add_i32`, pero el archivo objeto expone `wave_add_i32`.
Los lenguajes externos deben declarar y llamar el nombre del símbolo exportado.

---

## Exportación por bloque

Varias funciones que usan el mismo ABI pueden agruparse en un bloque.

```wave
export(c) {
    fun wave_inc_i32(a: i32) -> i32 {
        return a + 1;
    }

    fun wave_dec_i32(a: i32) -> i32 {
        return a - 1;
    }
}
```

La exportación por bloque usa el nombre de cada función como símbolo público.
`export(c, "symbol") { ... }` no está permitido porque un único alias para varias funciones causaría colisiones de símbolos.

---

## Llamada desde C

Compila el archivo Wave como objeto.

```bash
wavec build math.wave --emit=obj -o math.o
```

Declara el símbolo exportado en C.

```c
#include <stdio.h>

extern int wave_add_i32(int a, int b);

int main(void) {
    printf("%d\n", wave_add_i32(40, 2));
    return 0;
}
```

Luego enlaza el código C y el objeto Wave con un enlazador normal.

```bash
cc main.c math.o -o app
```

---

## extern frente a export

`extern(c)` significa que Wave usa un símbolo externo.

```wave
extern(c) fun puts(s: ptr<i8>) -> i32;
```

`export(c)` significa que el código externo puede usar un símbolo de Wave.

```wave
export(c) fun answer() -> i32 {
    return 42;
}
```

Ambos pertenecen a FFI, pero la dirección es distinta.

---

## Limitaciones

El soporte actual de `export` tiene estas limitaciones.

- Solo se admite `export(c)`.
- Las funciones exportadas no pueden ser genéricas.
- Una exportación por bloque no puede usar un único alias de símbolo compartido.
- Para una interoperabilidad estable, por ahora se recomiendan argumentos y retornos enteros, de punto flotante, booleanos y punteros.
- Los tipos agregados como structs y arrays necesitan reglas ABI más estrictas y pueden estabilizarse más adelante.
- `export` es más útil al construir objetos o bibliotecas. Normalmente no es necesario para un ejecutable simple.

---

## Usos recomendados

Usa `export` cuando necesites:

- Proporcionar funciones utilitarias de Wave como biblioteca ABI C.
- Llamar funciones Wave desde Rust, C, C++, Zig u otro lenguaje nativo.
- Conectar gradualmente módulos `front`, `utils` o nativos sin runtime escritos en Wave a un sistema de compilación existente.
- Permitir que Vex u otra herramienta enlace objetos Wave en un proyecto externo.
