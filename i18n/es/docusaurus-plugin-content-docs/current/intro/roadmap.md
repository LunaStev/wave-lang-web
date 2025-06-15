---
sidebar_position: 4
---

# Hoja de Ruta Integrada de Desarrollo: Wave + Whale v2

## Fases Generales

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Fase Pre-Beta

> Objetivo: Completar el frontend del lenguaje Wave + implementar todas las funciones usando el backend LLVM

### Características Principales
* Uso exclusivo de LLVM (sin Whale)

* No se añade nueva sintaxis; solo se implementan las especificaciones existentes

* Estabilización de la estructura centrada en el frontend: mensajes de error, verificación de tipos, ámbito de variables, etc.

### Alcance de Implementación
* Declaración de variables, salida, operaciones

* Definición y llamada de funciones

* if / else if / else

* while / break / continue

* Salida formateada, declaración explícita de tipos

* Diseño de punteros (formato `ptr<T>`)

* Diseño de arreglos (formato `array<T, N>`)

* Verificación de tipos y AST estructurado

### Tecnologías Usadas
* Rust (todo el compilador de Wave)

* LLVM (generación de IR, ejecución AOT)

* inkwell / llvm-sys

---

## Fase Alpha

> Objetivo: Comenzar la integración de Whale, uso paralelo con LLVM / Iniciar implementación del backend basado en Whale

### Características Principales
* LLVM es el backend predeterminado

* Whale es un backend opcional

* La ejecución de código Wave se puede dividir usando la opción `--backend`

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Tareas Relacionadas con Whale
* Diseño y definición de la estructura IR de Whale (Instrucción, Valor, Bloque, etc.)

* Implementación del generador de IR para Whale

* Generador de código para Whale (ensamblador o binario)

* Tipos exclusivos de Whale (ej. `i1024`, punteros avanzados)

### Puntos de Control
* Imprimir "Hello World" con Whale

* Declaración/asignación de variables en Whale

* Herramientas de depuración para IR de Whale

* Manejo de punteros en Whale

* Iniciar conversión: Wave → Whale IR

---

## Fase Beta

> Objetivo: Transición total a Whale, eliminar LLVM. Optimizar la combinación Whale + Wave

### Características Principales
* Uso exclusivo de Whale

* Eliminación completa de LLVM (dependencias y módulos)

* Enfoque en la optimización del código

* IR → ejecución rápida y eficiente

### Alcance de Optimización
* Diseño de optimizaciones para IR de Whale

* Mejora de velocidad en la generación de código Whale

* Soporte completo de toda la sintaxis de Wave en Whale

### Pruebas
* Pruebas unitarias + suite de pruebas completa

* Pruebas de compatibilidad con WSON y la biblioteca estándar

* Validación de builds multiplataforma de Whale

---

## Fase RC (Release Candidate)

> Objetivo: Comenzar el bootstrapping de Wave — eliminar completamente el código Rust

### Características Principales
* Reescribir el compilador de Wave usando el propio lenguaje Wave

* Ejecutar código Wave basado en Whale

* Whale entra en etapa self-hosting

### Alcance de Trabajo
* Reescribir el generador de IR de Wave basado en Whale

* Eliminar Rust y reemplazar con código Wave

* Escribir bibliotecas std y core en Wave

* Con bootstrapping exitoso, nace el primer compilador nativo de Wave

---

## Fase de Lanzamiento (v0.0.1)

> Objetivo: Lanzamiento oficial / Proveer un ecosistema de lenguaje completamente independiente basado en Whale

### Componentes
* Wave (lenguaje y biblioteca estándar)

* Whale (toolchain del compilador)

* Vex (gestor de paquetes)

* WSON (formato de datos)

### Características
* Compilador completamente hecho en Wave (bootstrapping exitoso)

* Whale completamente optimizado

* Sistema de build y despliegue con Vex establecido

* Incluye parser + serialización de WSON

* Soporte para build multiplataforma (`vex build --windows`, etc.)

---

## Estrategia Meta de Desarrollo

| Estrategia                    | Descripción                                                                      |
| ----------------------------- | -------------------------------------------------------------------------------- |
| Estrategia Tren + Rieles      | Desarrollar Whale mientras se construye el backend de Wave en paralelo           |
| Estrategia de Branch Backend  | Selección de LLVM o Whale mediante la opción `--backend`, clave en la fase alpha |
| Plan de Inversión Estructural | A partir de la fase RC, Wave compila a sí mismo a través de Whale                |
