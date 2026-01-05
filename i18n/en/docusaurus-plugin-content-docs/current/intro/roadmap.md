---
sidebar_position: 4
---

# Wave + Whale Integrated Development Roadmap v2

This document is a roadmap outlining the step-by-step integration development process of the Wave language and Whale compiler toolchain.
Wave and Whale initially start as separate components, but ultimately aim to be fully integrated into one independent language ecosystem.

The entire development stages follow the flow as below.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

Each stage proceeds based on the results of the previous stage, assuming unidirectional development where you do not revert to a previous structure once a stage is completed.

---

## Pre-Beta Stage

The goal of the Pre-Beta stage is to complete the front end of the Wave language and implement the full functionality of the language based on the LLVM backend.
In this stage, Whale is not used; compilation and execution are entirely done through LLVM.

Extending the syntax itself is not addressed at this stage.
The key goal is to make every grammatical element work based on the defined specifications.
Focus on stabilizing frontend architecture like error message quality, type checking, variable scope handling, etc.

The scope of implementation includes variable declaration, output, and basic operations, as well as the completion of function definition and calls, conditions (`if` / `else if` / `else`), loops (`while` / `break` / `continue`).
It also includes format output, explicit type specification, `ptr<T>` type pointer design, `array<T, N>` type array design.

In this stage, the Wave compiler is entirely written in Rust and uses inkwell and llvm-sys for LLVM IR generation and AOT execution.

---

## Alpha Stage

The goal for the Alpha stage is to introduce the Whale backend and establish a structure where LLVM and Whale are used concurrently.
LLVM remains the primary backend, and Whale is added as an optionally usable backend.

When running Wave code, you can choose which backend to use between LLVM and Whale through the `--backend` option.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

In this stage, the IR structure of Whale itself is designed and defined.
Key components such as Instruction, Value, Block are organized, and an IR Generator that converts Wave AST to Whale IR is implemented.

A code generator for Whale is also implemented, allowing execution in assembly or binary format.
In LLVM, types that are difficult or inefficient to implement, such as ultra-large integer types like `i1024` and advanced pointer structures, are introduced in this stage as Whale-specific features.

As a checkpoint, it should be possible to have Hello World output from the Whale backend, and variable declaration and assignment, pointer handling, and IR debugging tools should function properly.
This is the stage where the conversion from Wave to Whale IR is substantially carried out.

---

## Beta Stage

The goal of the Beta stage is to fully transition to Whale and remove LLVM dependency.
Starting from this stage, the compilation and execution of Wave use only Whale.

All LLVM-related dependencies and modules are removed, and the code generation and execution path are optimized based on Whale.
Simplifying and speeding up the flow from IR generation to execution is a key task.

Design optimization passes for Whale IR, and improve code generation speed and execution efficiency.
All syntax of Wave should be perfectly supported based on the Whale backend at this stage.

In terms of testing, both unit tests and the entire test suite are performed, verifying compatibility with WSON and the standard library, and checking cross-platform Whale builds.

---

## RC (Release Candidate) Stage

The goal of the RC stage is to start bootstrapping Wave.
From this stage, gradually remove the Rust implementation of the Wave compiler and begin rewriting the Wave compiler in the Wave language itself.

Rewrite the Wave IR generator based on Whale, replacing the core compiler logic and std/core libraries with Wave code.
Through this process, Whale enters the self-hosting phase.

Upon successful bootstrap, the first Wave-native compiler is born.

---

## Release Stage (v0.0.1)

The Release stage signifies the official first release of Wave.
At this point, Wave and Whale form a completely integrated independent language ecosystem.

Release components include the Wave language and standard library, Whale compiler toolchain, Vex package manager, and WSON data format.

Wave at this stage should have a compiler completely written in Wave code, and Whale's optimization should be complete.
The build and deployment flow through Vex is established, and cross OS builds like `vex build --windows` should also be possible.

---

## Development Meta Strategy

Wave + Whale development is not a simple stage progression, but is based on a clear strategy.
While developing Whale, adopt the train+rail strategy of simultaneously building the Wave backend, evolving both the backend structure and language design in parallel.

In the Alpha stage, the backend branching strategy via the `--backend` option plays an important role, providing a basis for directly comparing and verifying LLVM and Whale.

After the RC, the structure is reversed, with a plan to reverse the structure where Wave code, through Whale, compiles Wave itself, proceeding in earnest.