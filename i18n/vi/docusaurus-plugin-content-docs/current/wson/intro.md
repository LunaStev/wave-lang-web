---
sidebar_position: 2
---

# Ngữ pháp

## 1. Cấu trúc cơ bản

- Nội dung của tập tin bắt đầu và kết thúc bằng một đối tượng (`{}`) được bao quanh bởi dấu ngoặc nhọn `object`.

- Đối tượng được cấu thành bởi cặp tên thuộc tính (key) và giá trị (value).

- Tên thuộc tính và giá trị được phân tách bằng dấu hai chấm (`:`) hoặc dấu bằng (`=`).

## 2. Chú thích

- Chú thích bắt đầu bằng `//` hoặc `#`, và được viết trên từng dòng.

- Chú thích áp dụng đến hết dòng.

- Không hỗ trợ chú thích nhiều dòng riêng biệt, khi viết chú thích trên nhiều dòng, phải thêm `//` hoặc `#` trên mỗi dòng.

## 3. Đối tượng (Object)

- Đối tượng được bao quanh bởi dấu ngoặc nhọn `{}` và bao gồm cặp khóa-giá trị.

- Giữa khóa và giá trị có thể sử dụng dấu `:` hoặc `=`. Hai dấu hiệu có thể được sử dụng cùng nhau.

- Mỗi thuộc tính được phân tách bằng dấu phẩy (`,`).

- Có thể lồng ghép các đối tượng khác bên trong một đối tượng.

Ví dụ:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Mảng (Array)

- Mảng được bao quanh bởi dấu ngoặc vuông `[]`, và các phần tử được phân tách bằng dấu phẩy (`,`).

- Các phần tử của mảng có thể là đối tượng, chuỗi ký tự, số và các loại dữ liệu khác.

- Trong WSON, mảng có thể nằm trong một đối tượng, và bên trong mảng có thể có những mảng khác hoặc đối tượng.

Ví dụ:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Cặp Key-Value

- Tên thuộc tính được tạo thành từ chuỗi và đặt giá trị không có khoảng trống sau `:`, `=`.

- Các loại giá trị bao gồm chuỗi, số, boolean, đối tượng, mảng, v.v.

- Chuỗi ký tự được bao quanh bởi dấu ngoặc kép `“`.

- Số được sử dụng mà không có dấu ngoặc kép và có thể ở dạng số nguyên hoặc số thực.

Ví dụ:

```
name: "John Doe"
age = 25
```

## 6. Các loại dữ liệu

- Chuỗi (String): Văn bản được bao bọc bởi dấu ngoặc kép `"`.

```
"hello world"
```

- Số (Number): Là giá trị số nguyên hoặc số thực.

```
42
3.14
```

- Boolean: Sử dụng giá trị `true` hoặc `false`.

```
is_active = true
```

- Đối tượng (Object): Là cặp khóa-giá trị được bao quanh bởi dấu ngoặc nhọn `{}`.
- Mảng (Array): Là danh sách các phần tử được bao quanh bởi dấu ngoặc vuông `[]`.

## 7. Giải thích ví dụ

```ws
{
    // Mã trạng thái và thông tin tin nhắn
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # tuổi người dùng
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
