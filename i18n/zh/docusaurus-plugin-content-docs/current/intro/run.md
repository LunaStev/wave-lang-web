---
sidebar_position: 3
---

# 第一次程序执行

如果您在之前的安装文档中已经安装了Wave，现在让我们运行第一个程序！

## 创建`hello.wave`文件。

首先，创建一个名为`hello.wave`的新文件。

## 编写代码

在`hello.wave`文件中编写以下代码：

```wave
fun main() {
    println("Hello Wave");
}
```

这里的`fun main()`表示程序的起始点，而`println`函数则负责将文本打印到屏幕上。

## 运行程序

现在让我们运行Wave程序。 打开终端，输入以下命令：

```bash
wavec run hello.wave
```

## 检查输出

运行程序后，会出现以下输出：

```
Hello Wave
```

现在您可以确认Wave是否已正确安装并运行。 恭喜！ 第一个程序已成功运行。
