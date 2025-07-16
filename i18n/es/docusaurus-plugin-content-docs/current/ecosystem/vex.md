---
sidebar_position: 2
---

# Vex (gestor de paquetes

## Resumen

Vex es un gestor de paquetes y sistema de construcción dedicado para el lenguaje de programación Wave.
Vex admite la gestión integral del proyecto, incluida la gestión de dependencias del código fuente, configuración de construcción, especificación de plataforma de destino, instalación y despliegue de módulos.
No se considera la compatibilidad con lenguajes o sistemas externos y está diseñado para funcionar únicamente dentro del ecosistema Wave.

## Objetivos de diseño

Vex se ha diseñado basándose en los siguientes objetivos:

Diseño exclusivo para Wave: está dirigido solo a proyectos Wave y está optimizado para la sintaxis, estructura de módulos y entorno de ejecución de Wave.

- Sistema de comandos intuitivo: se compone de manera que los trabajos principales se puedan realizar con un solo comando sin guiones de construcción complejos.
- Soporte multiobjetivo: se puede cambiar fácilmente el objetivo de construcción según el sistema operativo y la arquitectura.
- Gestión de configuración basada en WSON: toda la información de configuración del proyecto se define en formato WSON (Wave Serialization Object Notation).
- Construcción y despliegue estáticos: los archivos ejecutables se construyen estáticamente y se pueden desplegar independientemente sin depender de un tiempo de ejecución externo.