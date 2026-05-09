---
sidebar_position: 11
---

# Comentarios

Wave admite dos tipos de comentarios.

- Comentario de una línea: `//`
- Comentario en bloque: `/* ... */`

## Comentario de una línea

El contenido detrás de `//` se ignora hasta el final de la línea.

```wave
var x: i32 = 10; // line comment
x += 5;          // still works
```

## Comentario en bloque

El contenido entre `/*` y `*/` se ignora.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Los comentarios en bloque soportan múltiples líneas y anidación.

```wave
/* outer
   /* inner */
   outer end
*/
```

## Cadenas de texto y símbolos de comentario

Dentro de una cadena de texto, `/*`, `*/`, `//` no se tratan como inicio/fin de comentario.

```wave
var marker: str = "/*//*/";
```

## Error de comentario

Si un comentario en bloque no se cierra, produce un error de compilación (`E1002`).

```wave
/* not closed
```

El compilador muestra la ubicación de inicio, la causa y sugerencias de corrección.
