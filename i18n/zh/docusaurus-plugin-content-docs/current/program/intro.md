---
sidebar_position: 1
---

# 输出Hello Wave

本文档介绍了如何用Wave语言编写最基本的输出程序。

---

## 示例代码

```wave
fun main() {
    println("Hello Wave");
}
```

---

## 说明

- `fun main()`

  这是Wave程序的入口函数。 这是执行时最先调用的函数。

- `println()`

  作为临时输出函数输出字符串，输出后添加换行符(`\n`)。

- `;` (分号)

  Wave 的所有语句都以分号结束。

---

## 执行结果

```text
Hello Wave
```

---

## 附加示例

Wave支持字符串插值。

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

输出:

```text
Hello, Wave!
```

---

> 该示例展示了Wave标准库中基本输出函数的用法。