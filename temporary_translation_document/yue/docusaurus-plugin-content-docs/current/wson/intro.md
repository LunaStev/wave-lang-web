---
sidebar_position: 2
---

# 語法

## 1. 基本結構
* 文件內容以一個被大括號 `{}` 包圍的對象開始和結束。

* 一個對象由鍵-值對組成，其中鍵是屬性名稱，值是該屬性的值。

* 鍵和值之間用冒號 (`:`) 或等號 (`=`) 分隔。

## 2. 註解
* 註解以 `//` 或 `#` 開始，並寫在單獨的一行中。

* 註解適用於該行的其餘部分。

* 不支持多行註解。如果需要在多行中寫註解，必須在每行的開頭添加 `//` 或 `#`。

## 3. 對象 (Object)
* 對象由大括號 `{}` 包圍，並包含鍵-值對。

* 你可以使用 `:` 或 `=` 來分隔鍵和值。兩個符號都可以互換使用。

* 每個屬性由逗號（`,`）分隔。

* 你可以將其他對象嵌套在對象中。

例子：

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. 數組 (Array)
* 數組由方括號 `[]` 包圍，並且元素由逗號（`,`）分隔。

* 數組的元素可以是對象、字符串、數字或其他數據類型。

* 在 WSON 中，數組可以包含在對象內，並且數組內可以嵌套其他數組或對象。

例子：

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. 鍵-值對 (Key-Value Pair)
* 屬性名稱是字符串，並且直接位於 `:` 或 `=` 之後，無空格。

* 值的類型可以是字符串、數字、布爾值、對象或數組。

* 字符串用雙引號（`"`）包圍。

* 數字不需要引號，可以是整數或浮動小數。

例子：

```
name: "John Doe"
age = 25
```

## 6. 數據類型 (Data Types)
字符串 (String): 用雙引號（`"`）包圍的文本。

```
"hello world"
```

- 數字 (Number): 整數或浮動小數值。

```
42
3.14
```

- 布爾值 (Boolean): 值為 `true` 或 `false`。

```
is_active = true
```

* 對象 (Object): 一組鍵-值對，並用 {} 包圍。

* 數組 (Array): 一個由元素組成的列表，用 [] 包圍。

## 7. 示例說明

```ws
{
    // 狀態碼和消息信息
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # 用戶年齡
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