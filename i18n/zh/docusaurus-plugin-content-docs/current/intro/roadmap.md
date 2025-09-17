---
sidebar_position: 4
---

# Wave + Whale 集成开发路线图 v2

## 全阶段

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta阶段

> 目标：完成Wave语言的前端 + 利用LLVM后端实现所有功能

### 主要特点

- 仅使用LLVM（无Whale）

- 不添加语法，仅实现现有规范

- 错误消息、类型检查、变量作用域等前端中心结构稳定

### 实现范围

- 变量声明、输出、运算

- 函数定义和调用

- if / else if / else

- while / break / continue

- 格式输出、类型指定

- 指针设计（`ptr<T>`形式）

- 数组设计（`array<T, N>`）

- 类型检查及结构性AST

### 使用技术

- Rust（全部为Wave编译器）

- LLVM（IR生成，AOT执行）

- inkwell / llvm-sys

---

## Alpha阶段

> 目标：开始引入Whale，LLVM与Whale并行使用/实现Whale基础后端

### 主要特点

- LLVM为默认后端

- Whale为可选后端

- 运行Wave代码时可用`--backend`选项进行分支

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale相关工作

- 设计并定义Whale IR结构（指令、值、块等）

- 实现Whale用IR生成器

- Whale代码生成器（汇编或二进制）

- 仅通过Whale实现的类型 (`i1024`, 高级指针等)

### 检查点

- 通过Whale输出Hello World

- 在Whale中进行变量声明/分配

- 实现Whale IR调试工具

- 在Whale中处理指针类型

- 进行Wave → Whale IR转换

---

## Beta阶段

> 目标：全面转向Whale，移除LLVM。 Whale + Wave组合优化

### 主要特点

- 仅使用Whale

- 全面移除LLVM（依赖和模块）

- 以代码优化为中心

- 从IR到执行快速且高效

### 优化范围

- 设计Whale IR优化Pass

- 改进Whale代码生成速度

- Wave的所有语法在Whale中完美支持

### 测试

- 单元测试 + 全测试套件

- WSON，标准库兼容性测试

- 跨平台Whale构建确认

---

## RC（Release Candidate）阶段

> 目标：启动Wave引导—全面移除Rust代码

### 主要特点

- 重新用Wave编写Wave编译器

- 基于Whale自身执行Wave代码

- Whale进入self-hosting阶段

### 工作范围

- 基于Whale重新编写Wave IR生成器

- 移除Rust并用Wave代码替代

- 用Wave编写std和core库

- 引导成功则诞生首个Wave-native编译器

---

## Release阶段（v0.0.1）

> 目标：正式发布/提供完整的基于Whale的独立语言生态系统

### 组成要素

- Wave（语言及标准库）

- Whale（编译器工具链）

- Vex（包管理器）

- WSON（数据格式）

### 特点

- 完整的Wave-only编译器（引导成功）

- Whale优化完成

- Vex构建及发布系统定型

- 包括WSON解析器和序列化

- 支持跨OS构建（例如`vex build --windows`等）

---

## 开发元战略

| 战略      | 说明                                       |
| ------- | ---------------------------------------- |
| 列车+轨道战略 | 一边开发Whale，一边构建Wave后端的并行推进                |
| 后端分支战略  | 通过`--backend`选项选择LLVM/Whale，alpha阶段的重要架构 |
| 结构逆转计划  | 从rc开始，Wave代码通过Whale自我编译                  |
