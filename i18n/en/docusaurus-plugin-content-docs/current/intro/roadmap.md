---
sidebar_position: 4
---

# Wave + Whale Integrated Development Roadmap v2

## Overall Phases

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta Phase

> Goal: Complete the frontend of the Wave language + implement full functionality using the LLVM backend

### Key Features
* LLVM-only usage (no Whale)

* No new syntax; only existing specifications will be implemented

* Stabilization of frontend-focused structure: error messages, type checking, variable scoping, etc.

### Implementation Scope
* Variable declaration, output, arithmetic operations

* Function definition and invocation

* if / else if / else

* while / break / continue

* Formatted output, explicit type declaration

* Pointer design (`ptr<T>` format)

* Array design (`array<T, N>`)

* Type checking and structured AST

### Technologies Used
* Rust (entire Wave compiler)

* LLVM (IR generation, AOT execution)

* inkwell / llvm-sys

---

## Alpha Phase

> Goal: Begin integration of Whale, use it alongside LLVM / Begin implementing Whale-based backend

### Key Features
* LLVM as the default backend

* Whale as an optional backend

* Execution of Wave code can branch using the --backend option

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale-Related Tasks
* Design and define Whale IR structure (Instruction, Value, Block, etc.)

* Implement IR Generator for Whale

* Implement Whale code generator (assembly or binary)

* Implement Whale-exclusive types (e.g., `i1024`, advanced pointer types)

### Checkpoints
* Output "Hello World" with Whale

* Variable declaration/assignment in Whale

* Implement Whale IR debugging tools

* Handle pointer types in Whale

* Start translation: Wave → Whale IR

---

## Beta Phase

> Goal: Full transition to Whale, remove LLVM. Optimize the Whale + Wave combination

### Key Features
* Whale-only usage

* Complete removal of LLVM (dependencies and modules)

* Focus on code optimization

* Fast and efficient from IR to execution

### Optimization Scope
* Design Whale IR optimization passes

* Improve Whale code generation speed

* Full support for all Wave syntax within Whale

### Testing
* Unit tests + complete test suite

* WSON and standard library compatibility tests

* Verify cross-platform Whale builds

---

## RC (Release Candidate) Phase

> Goal: Start bootstrapping Wave — fully remove Rust code

### Key Features
* Begin rewriting the Wave compiler using Wave itself

* Execute Wave code based on the Whale backend

* Whale enters the self-hosting stage

### Tasks
* Rewrite Wave IR generator using Whale backend

* Remove Rust and replace with Wave code

* Write std and core libraries in Wave

* Upon successful bootstrap, the first Wave-native compiler is born

---

## Release Phase (v0.0.1)

> Goal: Official release / Provide a fully Whale-based standalone language ecosystem

### Components
* Wave (language and standard library)

* Whale (compiler toolchain)

* Vex (package manager)

* WSON (data format)

### Highlights
* Fully Wave-only compiler (successful bootstrap)

* Whale optimization completed

* Vex build and deployment system established

* Includes WSON parser + serialization

* Cross-OS build support (`vex build --windows`, etc.)

---

## Development Meta Strategy

| Strategy              | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| Train + Rail Strategy | Develop Whale and build the Wave backend in parallel                          |
| Backend Branching     | Use `--backend` option to select LLVM/Whale; crucial structure in alpha phase |
| Structural Inversion  | From the rc phase onward, Wave code compiles Wave itself via Whale            |
