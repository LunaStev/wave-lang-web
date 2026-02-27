---
sidebar_position: 3
---

# 第一次程序执行

如果在之前的安装文档中已经安装了Wave，现在让我们运行第一个Wave程序。
本节将通过简单实例逐步查看编写和执行Wave程序的整个过程。

## 创建`hello.wave`文件

首先，在工作目录中创建一个名为`hello.wave`的新文件。
文件名和扩展名可以自由指定，但这里以`hello.wave`为例。

## 编写代码

在创建的`hello.wave`文件中编写以下代码。

```wave
fun main() {
    println("Hello Wave");
}
```

代码中的`fun main()`表示Wave程序的执行起点。
Wave程序始终从`main`函数开始执行。

`println`函数是将字符串输出到标准输出的函数，是在屏幕上显示文本时最基本的使用方法。

## 运行程序

完成代码编写后，打开终端并在文件所在目录中执行以下命令。

```bash
wavec run hello.wave
```

该命令指示Wave编译器在编译源文件后立即执行。

## 检查输出

如果程序正常执行，终端将显示如下输出。

```
Hello Wave
```

看到此输出表示Wave安装正常，程序编写和执行正确进行。

第一个Wave程序已成功执行。
现在可以逐一了解Wave的语法和功能，尝试编写更复杂的程序。

정밀한 명령어 옵션(`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`)은
`wavec` CLI 문서에서 확인할 수 있습니다.
