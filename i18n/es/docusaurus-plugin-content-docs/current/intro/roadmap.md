---
sidebar_position: 4
---

# Hoja de ruta de desarrollo unificado de Wave + Whale v2

Este documento es una hoja de ruta que resume el proceso de desarrollo integrado del lenguaje Wave y la cadena de herramientas del compilador Whale, paso a paso.
Wave y Whale comienzan como componentes separados inicialmente, pero finalmente se integrarán completamente en un ecosistema lingüístico independiente.

Todas las etapas de desarrollo siguen el flujo siguiente.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → lanzamiento
```

Cada etapa progresa sobre los resultados de la anterior y se basa en un desarrollo unidireccional que no permite volver a la estructura anterior una vez que la etapa se completa.

---

## Fase Pre-Beta

El objetivo de la fase Pre-Beta es completar el frontend del lenguaje Wave e implementar todas las funciones del lenguaje basado en el backend de LLVM.
En esta etapa no se utiliza Whale; la compilación y ejecución se realizan enteramente a través de LLVM.

La tarea de ampliar la gramática en sí no se lleva a cabo en esta etapa.
El objetivo clave es hacer que todos los elementos gramaticales funcionen realmente basándose en las especificaciones ya definidas.
Se centra en estabilizar la estructura del frontend, como la calidad de los mensajes de error, la verificación de tipos y el manejo del alcance de variables.

El alcance de implementación incluye la declaración de variables, salida, operaciones básicas, así como la definición y llamada de funciones; las estructuras condicionales (`if` / `else if` / `else`) y los ciclos (`while` / `break` / `continue`) también se completan en esta etapa.
También incluye la salida formateada, la especificación de tipos explícitos, el diseño de punteros en la forma `ptr<T>`, y el diseño de matrices en la forma `array<T, N>`.

En esta etapa, el compilador Wave se escribe completamente en Rust, utilizando inkwell y llvm-sys para la generación de LLVM IR y la ejecución AOT.

---

## Fase Alpha

El objetivo de la fase Alpha es introducir el backend de Whale y establecer una estructura que use LLVM y Whale conjuntamente.
LLVM se mantiene como el backend principal, y Whale se añade como un backend opcional.

Al ejecutar el código de Wave, se puede elegir qué backend usar entre LLVM y Whale mediante la opción `--backend`.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

En esta etapa, se diseña y se define la estructura IR del propio Whale.
Se organizan los componentes clave como Instruction, Value, Block, y se implementa un generador IR que convierte el AST de Wave en IR de Whale.

Además, se implementa un generador de código para Whale que permite la ejecución en forma de ensamblaje o binario.
Los tipos difíciles de implementar o ineficientes en LLVM, como tipos enteros enormes como `i1024` o estructuras avanzadas de punteros, se introducen como funciones exclusivas de Whale en esta etapa.

Como checkpoint, el backend de Whale debe ser capaz de mostrar Hello World, y las declaraciones de variables, asignaciones, manejo de punteros y herramientas de depuración IR deben funcionar correctamente.
Es la etapa en la que se realiza de manera sustancial la conversión de Wave a Whale IR.

---

## Fase Beta

El objetivo de la etapa beta es cambiar completamente a Whale y eliminar la dependencia de LLVM.
Desde esta etapa, la compilación y ejecución de Wave utilizan únicamente Whale.

Todas las dependencias y módulos relacionados con LLVM se eliminan, y la generación y ejecución de código se optimizan en base a Whale.
La tarea principal es simplificar y acelerar el flujo desde la generación de IR hasta la ejecución.

Se diseña un pase de optimización para el IR de Whale y se mejora la velocidad de generación de código y la eficiencia de ejecución.
Toda la gramática de Wave debe ser completamente compatible con el backend de Whale en esta etapa.

En cuanto a las pruebas, se realizan tanto pruebas unitarias como suites de pruebas completas, y se verifica la compatibilidad con WSON y la biblioteca estándar, así como la capacidad de compilación cruzada de Whale.

---

## Etapa de RC (Release Candidate)

El objetivo de la etapa RC es iniciar el bootstrap de Wave.
A partir de esta etapa, se comienza a eliminar gradualmente la implementación en Rust del compilador Wave y a reescribir el compilador Wave con el propio lenguaje Wave.

Se reescribe el generador de IR de Wave basado en Whale y se reemplaza la lógica central del compilador y las bibliotecas std / core con código Wave.
A través de este proceso, Whale ingresa a la etapa de autoalojamiento.

Al lograrse el bootstrap, nacerá el primer compilador nativo de Wave.

---

## Etapa de lanzamiento (v0.0.1)

La etapa de lanzamiento significa el primer lanzamiento oficial de Wave.
En este punto, Wave y Whale componen un ecosistema de lenguajes independiente completamente integrado.

Los componentes de la release incluyen el lenguaje Wave y la biblioteca estándar, la cadena de herramientas del compilador Whale, el gestor de paquetes Vex y el formato de datos WSON.

El Wave de esta etapa debe tener un compilador completamente escrito en código Wave y la optimización de Whale debe estar completa.
El flujo de compilación y despliegue a través de Vex se establece y debe ser posible una compilación cruzada de OS, como `vex build --windows`.

---

## Estrategia de meta-desarrollo

El desarrollo de Wave + Whale no es simplemente una progresión de etapas, sino que se basa en una estrategia clara.
Al desarrollar Whale al mismo tiempo que se compone el backend de Wave, se adopta la estrategia de tren+raíl, desarrollando conjuntamente la estructura del backend y el diseño del lenguaje.

En la etapa Alpha, la estrategia de bifurcación del backend mediante la opción `--backend` juega un papel crucial y proporciona una base para comparar y verificar directamente LLVM y Whale.

Después de RC, la estructura se invierte y se lleva a cabo el plan de inversión estructural donde el código Wave se compila a sí mismo a través de Whale.