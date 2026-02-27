---
sidebar_position: 9
---

# FFI

本文档解释在Wave语言中调用外部实现函数的FFI（外部函数接口）规范。
通过FFI，Wave程序可以直接与其他语言编写的本机库集成。

---

## 概述

Wave的FFI基于声明运行。
外部函数不在Wave代码中实现，只需指明该函数遵循的ABI（应用程序二进制接口）。
实际实现是在链接阶段通过外部库解决的。

FFI在编译时只声明函数的存在，生成可执行文件时由链接器连接实际的符号。

---

## extern声明

外部函数是使用extern关键字声明的。
현재 Wave에서는 ABI 지정이 반드시 필요하며, **`extern(c)`만 지원**합니다.

```wave
extern(c) fun 함수명(인자들...) -> 반환타입;
```

---

## ABI指定

`extern` 선언에는 ABI를 명시해야 합니다.
현재 지원되는 ABI는 `c` 하나입니다.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

`extern(rust)` 같은 선언은 파싱될 수 있어도 의미 분석 단계에서 에러가 발생합니다.

---

## 函数级extern声明

声明单个外部函数时，可以按如下方式编写。

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

此声明意味着遵循C ABI的`InitWindow`符号存在于外部库中。

---

## 块级extern声明

若有多个使用相同ABI的外部函数，可以以块的形式组合声明。

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

块级声明在语义上与函数级声明完全相同，只是为了可读性和结构化的语法。

---

## 符号名称指定

在某些ABI中，Wave函数名称可能与实际的链接器符号名称不一致。
在这种情况下，可以将外部函数要链接的实际符号名称详细为字符串形式。

### 函数级符号指定

```wave
extern(c, "puts")
fun rust_func(i32);
```

이 선언은 `rust_func` 호출 시 실제 링크 심볼로 `puts`를 사용하도록 지정합니다.

---

### 块级符号指定

在块级声明中，可以为每个函数之后单独指定符号名称。

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## 指针类型

指针表示为 `ptr<T>` 形式。

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` 直接对应于外部语言的指针，且内存所有权或生命周期不由 Wave 管理。

---

## 结构体使用

结构体可以用作外部函数的参数或返回值。

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

在 FFI 中使用结构体时，字段顺序保持定义顺序并遵循 ABI 要求的内存布局。

---

## 外部函数调用

用 `extern` 声明的函数与普通函数以相同方式调用。

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

调用时没有语法差异，调用约定和符号绑定完全由 ABI 和链接器处理。

---

## 链接

外部函数的实际实现由链接阶段的外部库提供。
Wave 编译器生成包括外部函数调用的目标文件，通过指定位于库的链接器解析符号。

库的指定方式通过构建工具和 CLI 选项完成。

---

## 限制条件

Wave 不提供以下功能。

- 函数指针
- 回调函数
- 自动内存管理
- 跨语言异常处理集成

这些功能可能在以后的版本中单独处理。
