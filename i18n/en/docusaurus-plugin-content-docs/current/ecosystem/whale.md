---
sidebar_position: 3
---

# Whale Compiler Toolchain

## Introduction

Whale is a dedicated compiler toolchain for the Wave programming language.
Whale manages the entire process of analyzing, optimizing, and converting source code written in Wave into binaries for target platforms.
This toolchain is specifically designed for the Wave language and does not consider support for other languages or integration with external toolchains.

## Design Goals

The main design goals of Whale are as follows:

- Wave Exclusive Support: Whale only supports the Wave language and does not consider integration with other languages.
- Modular Structure: Each feature is composed of independent modules that can be added or removed as needed.
- Independent IR Usage: Whale defines its own intermediate representation instead of using existing external IRs like LLVM IR.
- Multi-target Platform Support: It can build for various environments irrespective of the operating system and hardware architecture.
- Precise Control: It is structured to allow developers fine-grained control over the entire compilation process.
- Elimination of External Dependencies: Whale does not rely on external C/C++ runtimes or compilers.

## Target Support

Whale aims to support the following target environments:

- Operating Systems:
    - Linux
    - Windows
    - macOS
    - UEFI (excluding BIOS)
    - WaveOS (proprietary OS)
- Architectures:
    - x86_64 (AMD64)
    - ARM64
    - Others can be expanded through module addition.

## External Integration (FFI)

Whale is technically designed to support FFI (Foreign Function Interface), but integration with external languages is not recommended within Wave’s philosophy and is not provided as a standard feature.
Wave is designed to implement all functions within its native language.

## Extensibility

Whale can be extended in the following ways:

- Adding modules for new operating systems or architectures
- Inserting custom optimization algorithms
- Customizing build profiles and linker settings
- Defining proprietary execution formats