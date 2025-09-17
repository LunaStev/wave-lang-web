---
sidebar_position: 2
---

# 语法

## 1. 基本结构

- 文件内容以用 `{}` 括起来的对象（`object`）开头和结尾。

- 对象由属性名（key）和值（value）对组成。

- 属性名和值由冒号（`:`）或等号（`=`）分隔。

## 2. 注释

- 注释以 `//` 或 `#` 开头，并以单行单位编写。

- 注释适用于该行的末尾。

- 不单独支持多行注释，如果要编写多行注释，需要在每一行添加 `//` 或 `#`。

## 3. 对象(Object)

- 对象用大括号 `{}` 括起来，并包含键-值对。

- 键和值之间可以使用 `:` 或 `=` 符号。 两种符号可以混用。

- 每个属性用逗号（`,`）分隔。

- 可以在对象中嵌套使用其他对象。

例子:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. 数组(Array)

- 数组用方括号 `[]` 括起来，元素用逗号（`,`）分隔。

- 数组的元素可以是对象、字符串、数字等各种数据类型。

- 在WSON中，数组可以包含在对象内，数组中可以嵌套其他数组或对象。

例子:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. 键-值对 (Key-Value Pair)

- 属性名称由字符串组成，值紧随 `:`, `=` 之后，不留空格。

- 值的类型包括字符串、数字、布尔值、对象和数组等。

- 字符串用双引号 `"` 括起来。

- 数字使用时不加引号，可以是整数或浮点数的形式。

例子:

```
name: "John Doe"
age = 25
```

## 6. 数据类型 (Data Types)

- 字符串(String): 用双引号 `"` 引起来的文本。

```
"hello world"
```

- 数字(Number): 整数或小数值。

```
42
3.14
```

- 布尔值(Boolean): 使用 `true` 或 `false`。

```
is_active = true
```

- 对象(Object): 大括号 `{}` 包含的键-值对。
- 数组(Array): 用方括号 `[]` 包裹的元素列表。

## 7. 示例说明

```ws
{
    // 状态代码和消息信息
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # 用户年龄
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```