---
sidebar_position: 4
---

# Wave + Whale 集成开发路线图 v2

本文档是整理了 Wave 语言与 Whale 编译器工具链集成开发过程的逐步路线图。
Wave 和 Whale 最初开始是分开的组件，但目标是最终完全整合为一个独立的语言生态系统。

整个开发阶段遵循如下流程。

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

每个阶段以先前阶段的结果为基础进行，完成一个阶段后不会回到之前的结构，前提是单向开发。

---

## Pre-Beta阶段

Pre-Beta 阶段的目标是完成 Wave 语言前端，并基于 LLVM 后端实现语言的全部功能。
这一阶段不使用 Whale，编译和执行完全通过 LLVM 实现。

在这一阶段不进行语法本身的扩展工作。
核心目标是基于已定义的规范使所有语法元素实际运作。
重点关注错误信息质量、类型检查、变量作用域处理等前端结构的稳定化。

实现范围包括变量声明和输出、基本运算，以及函数定义和调用、条件语句（`if` / `else if` / `else`）、循环（`while` / `break` / `continue`）也将在这一阶段完成。
还包括格式化输出、显式类型指定、`ptr<T>` 形式的指针设计、`array<T, N>` 形式的数组设计。

在这一阶段，Wave 编译器将全部用 Rust 编写，并使用 inkwell 和 llvm-sys 生成 LLVM IR 和进行 AOT 执行。

---

## Alpha阶段

Alpha 阶段的目标是引入 Whale 后端，并确立同时使用 LLVM 和 Whale 的结构。
LLVM 仍然作为基础后端保持，而 Whale 被添加为可以选择使用的后端。

在执行Wave代码时，可以通过`--backend`选项选择使用LLVM还是Whale作为后端。

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

在这个阶段，设计和定义Whale自己的IR结构。
整理诸如Instruction, Value, Block这样的核心组成部分，并实现将Wave AST转换为Whale IR的IR Generator。

还实现了Whale的代码生成器，使其可以以汇编或二进制形式执行。
在LLVM中难以实现或效率低下的类型，例如`i1024`这样的超大型整数类型或高级指针结构，在这个阶段作为Whale的专用功能被引入。

检查点要求Whale后端能够输出Hello World，并且变量声明与赋值、指针处理、IR调试工具能正常工作。
这是Wave → Whale IR转换实际进行的阶段。

---

## Beta阶段

Beta阶段的目标是完全转向Whale，并去除对LLVM的依赖。
从这个阶段开始，Wave的编译和执行仅使用Whale。

所有与LLVM相关的依赖和模块都将被移除，代码生成和执行路径将基于Whale进行优化。
从IR生成到执行的流程简单化和加快，是核心任务。

设计Whale IR的优化路径，提升代码生成速度和执行效率。
在这个阶段，Wave的所有语法必须基于Whale后端得到完美支持。

在测试方面，执行单元测试和完整测试套件，同时验证WSON和标准库的兼容性，以及跨平台Whale构建的可能性。

---

## RC（Release Candidate）阶段

RC阶段的目标是开始Wave的引导。
从这个阶段开始，逐步移除Wave编译器的Rust实现，并用Wave语言本身重新编写Wave编译器。

基于Whale重新编写Wave IR生成器，用Wave代码替代编译器核心逻辑和std / core库。
通过这个过程，Whale进入self-hosting阶段。

引导成功则诞生首个Wave-native编译器。

---

## Release阶段（v0.0.1）

Release阶段意味着Wave的官方首次发布。
此时，Wave和Whale构成了一个完全整合的独立语言生态系统。

发布组件包括Wave语言及标准库、Whale编译器工具链、Vex包管理器及WSON数据格式。

这一阶段的Wave拥有完全用Wave代码编写的编译器，Whale的优化也应已完成。
通过Vex的构建和部署流程已确立，并应支持如`vex build --windows`这样的跨OS构建。

---

## 开发元战略

Wave + Whale的开发不是简单的阶段推进，而是基于明确的策略进行。
采用火车+铁轨策略，在开发Whale的同时构建Wave后端，伴随后端结构和语言设计的并行发展。

在Alpha阶段，通过`--backend`选项的后端分支策略发挥重要作用，并为直接比较和验证LLVM与Whale提供基础。

RC之后结构逆转，Wave代码通过Whale进行自我编译的结构逆转计划将全面推进。