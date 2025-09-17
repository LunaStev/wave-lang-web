---
sidebar_position: 3
---

# Whale (cadena de herramientas del compilador)

## Resumen

Whale es una cadena de herramientas de compilador dedicada para el lenguaje de programación Wave.
Whale se encarga de todo el proceso de análisis, optimización y conversión de código fuente escrito en Wave a binarios para plataformas objetivo.
Esta cadena de herramientas está diseñada exclusivamente para el lenguaje Wave y no considera soporte para otros lenguajes o integración con cadenas de herramientas externas.

## Objetivos de diseño

Los principales objetivos de diseño de Whale son los siguientes:

- Soporte exclusivo para Wave: Whale solo admite el lenguaje Wave y no considera la integración con otros lenguajes.
- Estructura modular: Cada función está compuesta de módulos independientes que se pueden agregar o eliminar según sea necesario.
- Uso de IR independiente: Whale no utiliza IR externos existentes como LLVM IR, sino que define su propia representación intermedia.
- Soporte para múltiples plataformas objetivo: Se pueden compilar en varios entornos independientemente del sistema operativo y la arquitectura de hardware.
- Control preciso: Está estructurado para que el desarrollador pueda controlar detalladamente todo el proceso de compilación.
- Eliminación de dependencias externas: Whale no depende de tiempos de ejecución o compiladores de C/C++ externos.

## Soporte de objetivo

Whale tiene como objetivo apoyar los siguientes entornos destino:

- Sistemas operativos:
  - Linux
  - Windows
  - macOS
  - UEFI (excluyendo BIOS)
  - WaveOS (sistema operativo propio)
- Arquitecturas:
  - x86_64 (AMD64)
  - ARM64
  - Otros se pueden ampliar mediante la adición de módulos

## Integración externa (FFI)

Whale está diseñado técnicamente para soportar FFI (Interfaz de Función Extranjera), pero de acuerdo con la filosofía de Wave, la interconexión con lenguajes externos no se recomienda ni se proporciona de manera estándar.
Wave está diseñado para implementar todas sus funciones dentro de su propio lenguaje.

## Escalabilidad

Whale se puede escalar de las siguientes maneras:

- Adición de módulos para nuevos sistemas operativos o arquitecturas
- Inserción de algoritmos de optimización definidos por el usuario
- Personalización de perfiles de compilación y configuraciones del enlazador
- Definición de formato de ejecución propio