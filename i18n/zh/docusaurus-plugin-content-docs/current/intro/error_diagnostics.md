---
sidebar_position: 5
---

# 错误诊断

Wave编译器显示代码错误(`E####`)及其来源位置/上下文/解决提示。

## 输出格式

基本格式如下。

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

输出项目:

- `--> file:line:column`: 错误代码及摘要
- `^`: 问题位置
- 源代码块 + 插入符(`^`)高亮
- `上下文`, `预期`, `找到`, `注释`, `帮助`, `建议`

## 代表错误代码

- `E1002` 未预期的字符
- `E1003` 未关闭的块注释
- `E1004` 未关闭的字符串
- `E1005` 错误的字符串转义
- `E1006` 错误的字符字面量
- `E2001` 错误的数字字面量格式
- `E3001` 解析器语法错误
- `E3001` 语义分析错误
- `E3102` 将`null`赋值为非指针
- `E9001` 禁止隐式整数缩减
- `E9001` 后端代码生成内部错误

## 后端错误也可指示源位置

即使代码生成（LLVM）阶段出现内部故障，如果可能的话，也会推断并显示具体调用/声明位置。

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

如果无法推断位置，将使用备用位置，并在`注释`中显示此情况。
