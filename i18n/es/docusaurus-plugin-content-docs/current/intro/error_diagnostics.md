---
sidebar_position: 5
---

# Diagnóstico de errores

El compilador Wave muestra los errores junto con el código (`E####`), ubicación/contexto de la fuente y sugerencias de resolución todo a la vez.

## Formato de salida

El formato básico es el siguiente.

```text
error[E3001]: validación semántica fallida: uso de identificador no declarado `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ no encontrado en este ámbito
   = contexto: validación semántica
   = ayuda: solucionar problemas de mutabilidad, ámbito y validez de expresión
```

Elementos de salida:

- `error[E....]`: código de error y resumen
- `--> file:line:column`: ubicación del problema
- Bloque de código fuente + resaltado con signo de intercalación (`^`)
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Códigos de error representativos

- `E1001` Carácter inesperado
- `E1002` Comentario de bloque sin cerrar
- `E1003` Cadena de texto sin cerrar
- `E1004` Escape de cadena de texto incorrecto
- `E1005` Literal de carácter incorrecto
- `E1006` Formato de literal numérico incorrecto
- `E2001` Error de sintaxis de parser
- `E3001` Error de validación semántica
- `E3102` Asignación de `null` a un no puntero
- `E3201` Prohibida la reducción implícita de enteros
- `E9001` Error interno de generación de código de backend

## Los errores de backend también muestran la ubicación en el código fuente

Incluso si ocurre un pánico interno en la etapa de generación de código (LLVM), cuando sea posible, se mostrará la ubicación real de la llamada/declaración.

```text
error[E9001]: error interno del compilador durante la generación de código (llvm-ir-generation)
  --> test.wave:12:9
   = encontrado: Función 'foo' no encontrada
   = nota: posición de código fuente inferida a partir del nombre de función no resuelto en pánico de backend
```

Cuando no se puede inferir una posición, se usa la posición de respaldo, y este hecho se indica en la `nota`.
