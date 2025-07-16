---
sidebar_position: 4
---

# Hoja de ruta de desarrollo unificado de Wave + Whale v2

## Todas las fases

```matlab
pre-alpha → pre-beta → alpha → beta → rc → lanzamiento
```

---

## Fase Pre-Beta

> Objetivo: Completar el frontend del lenguaje Wave + Implementar todas las funciones usando el backend LLVM

### Características principales

- Solo se usa LLVM (sin Whale)

- No hay adiciones de sintaxis, solo implementación de las especificaciones existentes

- Estabilización de la estructura enfocada en el frontend, como mensajes de error, verificación de tipos, y alcance de variables

### Alcance de implementación

- Declaración de variables, salida, operación

- Definición y llamada de funciones

- if / else if / else

- while / break / continue

- Formato de salida, especificación de tipos

- Diseño de punteros (forma `ptr<T>`)

- Diseño de arreglos (`array<T, N>`)

- Verificación de tipos y AST estructurado

### Tecnologías utilizadas

- Rust (todo el compilador Wave)

- LLVM (generación IR, ejecución AOT)

- inkwell / llvm-sys

---

## Fase Alpha

> Objetivo: Iniciar la adopción de Whale, uso conjunto con LLVM / Comenzar la implementación del backend basado en Whale

### Características principales

- LLVM es el backend predeterminado

- Whale es el backend opcional

- Es posible bifurcar mediante la opción `--backend` al ejecutar el código Wave

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Trabajos relacionados con Whale

- Diseño y definición de la estructura IR de Whale (Instrucción, Valor, Bloque, etc.)

- Implementación de un generador IR para Whale

- Generador de código para Whale (ensamblaje o binario)

- Implementación de tipos posibles solo con Whale (`i1024`, punteros avanzados, etc.)

### Punto de control

- Salida de Hello World con Whale

- Declaración/asignación de variables en Whale

- Implementación de herramientas de depuración IR para Whale

- Manejo de tipos de puntero en Whale

- Proceso de conversión de Wave a Whale IR

---

## Fase Beta

> Objetivo: Cambio completo a Whale, eliminación de LLVM. Optimización de la combinación Whale + Wave

### Características principales

- Solo se usa Whale

- Eliminación completa de LLVM (dependencias y módulos)

- Enfoque en la optimización del código

- Desde IR hasta ejecución de manera rápida y eficiente

### Alcance de la optimización

- Diseño de optimización de Whale IR Pass

- Mejora de la velocidad de generación de código de Whale

- Soporte completo de todas las gramáticas de Wave en Whale

### Prueba

- Prueba unitaria + suite de pruebas completa

- Prueba de compatibilidad del estándar de la biblioteca WSON

- Verificación de la construcción de Whale multiplataforma

---

## Etapa de RC (Release Candidate)

> Objetivo: Iniciar bootstrap de Wave — Eliminar código Rust por completo

### Características principales

- Iniciar reescritura del compilador de Wave con Wave

- Ejecución del código de Wave basado en Whale

- Whale ingresa a la etapa de autoalojamiento

### Alcance del trabajo

- Reescribir el generador de Wave IR basado en Whale

- Eliminación de Rust + sustitución por código Wave

- Escritura de las bibliotecas std y core en Wave

- Al nacer el primer compilador nativo de Wave cuando el bootstrap sea exitoso

---

## Etapa de lanzamiento (v0.0.1)

> Objetivo: Lanzamiento oficial / Provisión de un ecosistema de lenguaje independiente completamente basado en Whale

### Componentes

- Wave (idioma y biblioteca estándar)

- Whale (cadena de herramientas del compilador)

- Vex (gestor de paquetes)

- WSON (formato de datos)

### Características

- Compilador exclusivo de Wave completo (bootstrap exitoso)

- Optimización de Whale completada

- Establecimiento del sistema de construcción y despliegue de Vex

- Incluye parser WSON + serialización

- Capacidad de construcción entre sistemas operativos (`vex build --windows`, etc.)

---

## Estrategia de meta-desarrollo

| Estrategia                             | Descripción                                                                              |
| -------------------------------------- | ---------------------------------------------------------------------------------------- |
| Estrategia de tren+riel                | Desarrollo concurrente de Whale mientras se configura simultáneamente el backend de Wave |
| Estrategia de ramificación del backend | Selección de LLVM/Whale con la opción `--backend`, estructura crucial en la alpha        |
| Plan de inversión de estructura        | A partir de rc, el código de Wave se compila a sí mismo a través de Whale                |
