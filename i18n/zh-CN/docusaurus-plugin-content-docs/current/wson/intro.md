---
sidebar_position: 2
---

# 语法

## 1. 基本结构
* 文件内容以一个被大括号 `{}` 包围的对象开始和结束。

* 一个对象由键值对组成，其中键是属性名称，值是该属性的值。

* 键和值通过冒号 (`:`) 或等号 (`=`) 分隔。

## 2. 注释
* 注释以 `//` 或 `#` 开始，并写在单独的一行中。

* 注释适用于该行的其余部分。

* 不支持多行注释。如果需要在多行中写注释，必须在每行的开头添加 `//` 或 `#`。

## 3. 对象 (Object)
* 对象由大括号 `{}` 包围，包含键值对。

* 可以使用 `:` 或 `=` 来分隔键和值。两者可以互换使用。

* 每个属性通过逗号（`,`）分隔。

* 可以在对象内部嵌套其他对象。

示例：

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. 数组 (Array)
* 数组由方括号 `[]` 包围，元素通过逗号（`,`）分隔。

* 数组的元素可以是对象、字符串、数字或其他数据类型。

* 在 WSON 中，数组可以包含在对象中，并且数组内可以嵌套其他数组或对象。

示例：

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. 键值对 (Key-Value Pair)
* 属性名称是字符串，直接跟在 `:` 或 `=` 后面，没有空格。

* 值的类型可以是字符串、数字、布尔值、对象或数组。

* 字符串用双引号（`"`）包围。

* 数字不使用引号，可以是整数或浮动小数。

示例：

```
name: "John Doe"
age = 25
```

## 6. 数据类型 (Data Types)
* 字符串 (String): 被双引号（`"`）包围的文本。

```
"hello world"
```

- 数字 (Number): 整数或浮动小数。

```
42
3.14
```

- 布尔值 (Boolean): 值为 `true` 或 `false`。

```
is_active = true
```

* 对象 (Object): 包含键值对的集合，包围在 `{}` 中。

* 数组 (Array): 一组元素，包围在 `[]` 中。

## 7. 示例说明

```ws
{
    // 状态码和消息信息
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