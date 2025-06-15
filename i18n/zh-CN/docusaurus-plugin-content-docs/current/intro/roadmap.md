---
sidebar_position: 4
---

# Wave + Whale 集成开发路线图 v2

## 总体阶段

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta 阶段

> 目标：完成 Wave 语言的前端 + 利用 LLVM 后端实现全部功能

### 主要特点
* 仅使用 LLVM（不引入 Whale）

* 不新增语法，仅实现已有规范

* 稳定以前端为中心的结构：错误信息、类型检查、变量作用域等

### 实现范围
* 变量声明、输出、运算

* 函数定义与调用

* if / else if / else 条件语句

* while / break / continue 循环控制

* 格式化输出、明确类型声明

* 指针设计（如 `ptr<T>`）

* 数组设计（如 `array<T, N>`）

* 类型检查与结构化 AST 构建

### 使用技术
* Rust（实现完整 Wave 编译器）

* LLVM（生成 IR，中间代码，进行 AOT 执行）

* inkwell / llvm-sys

---

## Alpha 阶段

> 目标：开始引入 Whale，与 LLVM 并行使用 / 开始实现基于 Whale 的后端

### 主要特点
* LLVM 是默认后端

* Whale 为可选后端

* 使用 `--backend` 参数选择后端执行 Wave 代码

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale 相关任务
* 设计并定义 Whale 的 IR 结构（Instruction、Value、Block 等）

* 实现 Whale 的 IR 生成器

* Whale 的代码生成器（汇编或二进制）

* 支持 Whale 专属类型（如 `i1024`、高级指针类型）

### 关键节点
* 使用 Whale 输出 “Hello World”

* 在 Whale 中实现变量声明和赋值

* 实现 Whale IR 调试工具

* 实现指针类型的支持

* 启动 Wave → Whale IR 的转换

---

## Beta 阶段

> 目标：全面转向 Whale，彻底移除 LLVM。优化 Whale 与 Wave 的组合性能

### 主要特点
* 仅使用 Whale

* 完全移除 LLVM（包括依赖和模块）

* 聚焦代码优化

* IR 到执行的过程更快、更高效

### 优化范围
* 设计 Whale IR 的优化 Pass

* 提高 Whale 代码生成速度

* 在 Whale 上完整支持 Wave 所有语法

### 测试内容
* 单元测试 + 全套测试集

* WSON 和标准库兼容性测试

* 验证 Whale 在多平台上的构建能力

---

## RC 阶段（Release Candidate）

> 目标：开始对 Wave 进行自举（bootstrap）— 完全去除 Rust 代码

### 主要特点
* 使用 Wave 本身重写 Wave 编译器

* 基于 Whale 后端执行 Wave 代码

* Whale 进入自托管（self-hosting）阶段

### 实施内容
* 用 Whale 重新实现 Wave 的 IR 生成器

* 删除 Rust，用 Wave 语言替代

* 使用 Wave 编写 std 和 core 标准库

* 自举成功后，诞生首个原生 Wave 编译器

---

## Release 阶段（v0.0.1）

> 目标：正式发布 / 提供完全基于 Whale 的独立语言生态系统

### 组件
* Wave（语言及标准库）

* Whale（编译器工具链）

* Vex（包管理器）

* WSON（数据格式）

### 特点
* 完全用 Wave 实现的编译器（自举成功）

* Whale 完成优化

* 建立完整的 Vex 构建与发布系统

* 包含 WSON 解析与序列化功能

* 支持跨操作系统构建（如：`vex build --windows`）

---

## 开发元策略

| 策略      | 说明                                           |
| ------- | -------------------------------------------- |
| 列车+轨道策略 | 一边开发 Whale，一边构建 Wave 的后端                     |
| 后端分支策略  | 使用 `--backend` 切换 LLVM / Whale，Alpha 阶段的关键结构 |
| 结构反转计划  | 从 RC 阶段开始，Wave 通过 Whale 实现自我编译               |
