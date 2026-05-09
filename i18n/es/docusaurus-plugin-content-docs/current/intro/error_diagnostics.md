---
sidebar_position: 5
---

# Diagnóstico de errores

El compilador Wave muestra los errores junto con el código (`E####`), ubicación/contexto de la fuente y sugerencias de resolución todo a la vez.

## Formato de salida

El formato básico es el siguiente.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Elementos de salida:

- `--> file:line:column`: código de error y resumen
- `^`: ubicación del problema
- Bloque de código fuente + resaltado con signo de intercalación (`^`)
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Códigos de error representativos

- `E1002` Carácter inesperado
- `E1003` Comentario de bloque sin cerrar
- `E1004` Cadena de texto sin cerrar
- `E1005` Escape de cadena de texto incorrecto
- `E1006` Literal de carácter incorrecto
- `E2001` Formato de literal numérico incorrecto
- `E3001` Error de sintaxis de parser
- `E3001` Error de validación semántica
- `E3102` Asignación de `null` a un no puntero
- `E9001` Prohibida la reducción implícita de enteros
- `E9001` Error interno de generación de código de backend

## Los errores de backend también muestran la ubicación en el código fuente

Incluso si ocurre un pánico interno en la etapa de generación de código (LLVM), cuando sea posible, se mostrará la ubicación real de la llamada/declaración.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Cuando no se puede inferir una posición, se usa la posición de respaldo, y este hecho se indica en la `nota`.
