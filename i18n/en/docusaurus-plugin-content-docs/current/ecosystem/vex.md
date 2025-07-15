---
sidebar_position: 2
---

# Vex Package Manager

## Introduction

Vex is a dedicated package manager and build system for the Wave programming language.
Vex supports project management across source code dependency management, build configuration, target platform specification, module installation and distribution.
Compatibility with external languages or systems is not considered; it is designed to operate exclusively within the Wave ecosystem.

## Design Goals

Vex is designed based on the following goals:

Wave-specific design: It targets only Wave projects, optimized for Wave's syntax, module structure, and execution environment.

- Intuitive command structure: Configured to perform major tasks with a single command without complex build scripts.
- Multi-target support: Allows easy switching of build targets according to OS and architecture.
- WSON-based configuration management: All project configuration information is defined in WSON (Wave Serialization Object Notation) format.
- Static build and deployment: Executables are built statically, enabling independent deployment without relying on external runtimes.