---
sidebar_position: 6
---

# Referencia CLI de `wavec`

Este documento explica en detalle el funcionamiento de CLI bajo la implementación actual del compilador Wave (`wavec`).

Principio clave:

- `wavec` es un compilador.
- La instalación/solución de paquetes (lockfile, registro, descarga) no es responsabilidad de `wavec`.
- Las dependencias externas se pasan como **argumentos CLI explícitos** al ejecutar `wavec`.

---

## 1. Formato básico

```bash
wavec [opciones-globales] <comando> [opciones-de-comando]
```

Por ejemplo:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Reglas de análisis de comandos (importante)

`wavec` primero escanea las **opciones globales** en todos los argumentos y luego interpreta el `<comando>` con los argumentos restantes.

Es decir, la posición de la opción global es flexible.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Los tres ejemplos anteriores son válidos.

Al usar `--`, se detiene el escaneo de opciones globales y se entrega todo lo que sigue al comando.

```bash
wavec -- run main.wave
```

---

## 3. Comandos

## 3.1 `run <archivo>`

Compila y ejecuta el archivo Wave.

```bash
wavec run hello.wave
```

Operación:

1. Análisis del origen + expansión de importaciones
2. Generación de LLVM IR
3. Enlace binario nativo (`target/<file_stem>`)
4. Ejecutar

Características:

- `wavec` transmite el código de salida del programa ejecutado.

---

## 3.2 `construir <archivo>`

Genera un archivo ejecutable (exe).

```bash
wavec build app.wave
```

Binario de salida:

- `target/<file_stem>`

## 3.3 `build` opciones (`-o`, `-c`)

El comando `build` permite controlar opcionalmente el nombre y formato del archivo de salida.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <archivo>`: Especifica el nombre del archivo de salida.
  - Por defecto (sin `-c`): Especifica la ruta de salida del archivo ejecutable
  - Con `-c`: Especifica la ruta de salida del archivo objeto
- `-c`: Omite el enlace y solo genera el archivo objeto.
- Cuando se usa `-c`, la ruta del objeto se imprime en stdout.

Comportamiento por defecto:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (imprime la ruta)

Ejemplo de objeto kernel independiente:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

También se pueden usar de la misma manera `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`.

---

## 3.4 `install std`, `update std`

Comando para instalar/actualizar la biblioteca estándar.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Opciones globales

## 4.1 Optimización

Valores permitidos:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Por ejemplo:

```bash
wavec -O3 ejecutar main.wave
```

---

## 4.2 Salida de depuración

```bash
wavec --debug-wave=tokens,ast,ir ejecutar main.wave
```

Elementos permitidos:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Opciones de enlace

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` or `--link <lib>`
- `-L<path>` o `-L <path>`

Cuando `wavec` enlaza, se transmite internamente en forma de `-l<lib>`, `-L<path>`.

---

## 4.4 Opciones de dependencias externas (importante)

Son opciones para interpretar importaciones externas (`pkg::...`).

### `--dep-root <dir>`

Añade candidatos para el directorio raíz del paquete.

```bash
wavec run app.wave --dep-root .vex/dep
```

Al buscar el paquete `math`:

- Verifica `.vex/dep/math`

Puede ser especificado varias veces:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Fija el nombre del paquete a una ruta específica.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Regla:

- Formato de `nombre`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` debe ser en formato `nombre=ruta`
- Es un error especificar nombres de paquete duplicados

---

## 4.5 Opciones de backend (`--llvm`, `--whale`)

Las opciones de control del backend solo se interpretan después de `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Elementos compatibles (resumen):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<ruta>`
- `-C link-arg=<arg>` (repetible)
- `-C no-default-libs`

Los principales objetivos según `wavec print target-list` actual:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` es actualmente un flag ficticio reservado y la tubería de backend real aún está por implementar (TODO).

---

## 5. Reglas para la interpretación de importaciones

Las importaciones en Wave se dividen en los siguientes tres tipos.

1. Importación local
2. Importación estándar
3. Importación de paquetes externos

## 5.1 Local

```wave
import("foo");
import("path/to/mod.wave");
```

Busca `<path>.wave` en el directorio del archivo de referencia.

## 5.2 Estándar

```wave
import("std::io::format");
```

Utiliza la ruta `~/.wave/lib/wave/std/...`.

## 5.3 Paquetes externos

```wave
import("math::add");
import("json::parser::core");
```

Formato:

- Se requieren al menos dos segmentos `paquete::módulo`.

Orden de determinación del raíz del paquete:

1. Mapa explícito `--dep nombre=ruta`
2. Buscando `<root>/<package>` en cada `--dep-root`

Si el mismo paquete se encuentra en varios dep-root simultáneamente:

- **Error de ambigüedad** sin selección automática
- Debe estar fijado mediante `--dep nombre=ruta`

Orden de exploración de archivos de módulo:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Por ejemplo:

```wave
import("math::core::vec");
```

Exploración:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Ejemplo práctico de importación externa

### 6.1 Único dep-root

Directorio:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Código:

```wave
import("math::add");
```

Ejecutar:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Resolución de ambigüedades

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

Si hay `math` en ambos lados, se producirá un error. Corrija como se muestra a continuación.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Separación de roles con Vex

Estructura recomendada:

- `wavec`: Compilar/enlazar/ejecutar + análisis de dependencias especificadas
- `vex`: Instalación/gestión de dependencias tras `wavec ... --dep-root ... Llamar a --dep ...`

Por ejemplo:

```bash
# Ejecutado internamente por vex
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Este modelo mantiene el compilador simple y determinista, mientras el gestor de paquetes se encarga de la automatización.

---

## 8. Referencia rápida

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reservado, no implementado
```
