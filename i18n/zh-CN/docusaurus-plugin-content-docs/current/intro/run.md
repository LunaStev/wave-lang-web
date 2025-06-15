---
sidebar_position: 3
---

# 运行你的第一个程序
如果你已经按照之前的安装指南成功安装了 Wave，那么现在我们来运行你的第一个程序吧！

## 创建 `hello.wave` 文件
首先，创建一个名为 `hello.wave` 的新文件。

## 编写代码
在 `hello.wave` 文件中写入以下代码：

```wave
fun main() {
    println("Hello Wave");
}
```

这里的 `fun main()` 表示程序的入口点，而 `println` 函数用于在屏幕上输出文本。

## 运行程序
现在我们来运行这个 Wave 程序。打开终端，输入以下命令：

```bash
wavec run hello.wave
```

## 查看输出
运行程序后，你应该会看到如下输出：

```
Hello Wave
```

现在你可以确认 Wave 已成功安装并正常工作了。恭喜你！你已经成功运行了第一个程序。
