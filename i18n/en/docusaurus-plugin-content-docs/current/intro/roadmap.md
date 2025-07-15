---
sidebar_position: 4
---

# Wave + Whale Integrated Development Roadmap v2

## Overall Stages

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta Stage

> Objective: Complete the Wave language frontend + Implement full functionality using LLVM backend

### Key Features

- Use only LLVM (No Whale)

- No grammar additions, only existing specifications implemented

- Stabilize frontend-centric structure like error messages, type checking, variable scoping, etc.

### Implementation Scope

- Variable declaration, output, operations

- Function definition and invocation

- if / else if / else

- while / break / continue

- Format output, type specification

- Pointer design (in `ptr<T>` format)

- Array design (`array<T, N>`)

- Type checking and structural AST

### Technologies Used

- Rust (Entire Wave Compiler)

- LLVM (IR generation, AOT execution)

- inkwell / llvm-sys

---

## Alpha Stage

> Objective: Begin introducing Whale, use alongside LLVM / Start implementing Whale-based backend

### Key Features

- LLVM is the default backend

- Whale is an optional backend

- Wave code execution can branch with `--backend` option

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale-related Work

- Design and define Whale IR structure (Instruction, Value, Block, etc.)

- Implement IR Generator for Whale

- Whale code generator (Assembly or Binary)

- Implement types only possible with Whale (`i1024`, advanced pointers, etc.)

### Checkpoint

- Print Hello World with Whale

- Variable declaration/assignment in Whale

- Implement Whale IR debugging tool

- Handle pointer types in Whale

- Proceed with Wave → Whale IR conversion

---

## Beta Stage

> Objective: Complete transition to Whale, remove LLVM. Optimize Whale + Wave combination

### Key Features

- Use only Whale

- Complete removal of LLVM (dependencies and modules)

- Code-centric optimization

- Fast and efficient from IR to execution

### Optimization Scope

- Design Whale IR optimization pass

- Improve Whale code generation speed

- All Wave grammar perfectly supported in Whale

### Testing

- Unit tests + full test suite

- WSON, test standard library compatibility

- Verify cross-platform Whale build

---

## RC (Release Candidate) Stage

> Objective: Start Wave bootstrap — Complete removal of Rust code

### Key Features

- Begin rewriting the Wave compiler in Wave

- Execute Wave code itself based on Whale

- Whale enters self-hosting phase

### Work Scope

- Rewrite the Wave IR generator based on Whale

- Remove Rust + Replace with Wave code

- Write std and core libraries in Wave

- First Wave-native compiler born upon successful bootstrap

---

## Release Stage (v0.0.1)

> Objective: Official release / Provide a complete Whale-based independent language ecosystem

### Components

- Wave (Language and Standard Library)

- Whale (Compiler Toolchain)

- Vex (Package Manager)

- WSON (Data Format)

### Features

- Complete Wave-only compiler (Successful bootstrap)

- Whale optimization complete

- Establish Vex build and deployment system

- Includes WSON parser + serialization

- Cross OS build possible (`vex build --windows`, etc.)

---

## Development Meta Strategy

| Strategy                   | Description                                                                      |
| -------------------------- | -------------------------------------------------------------------------------- |
| Train + Rail Strategy      | Simultaneously develop Whale while structuring Wave backend as parallel progress |
| Backend Branching Strategy | Select LLVM/Whale with `--backend` option, critical structure at alpha           |
| Structure Inversion Plan   | From rc onward, Wave code compiles itself through Whale                          |
