---
sidebar_position: 2
---

# Cú pháp

## 1. Cấu trúc cơ bản
* Nội dung của tệp bắt đầu và kết thúc bằng một đối tượng được bao quanh bởi dấu ngoặc nhọn `{}`.

* Một đối tượng bao gồm các cặp khóa-giá trị, trong đó khóa là tên thuộc tính và giá trị là giá trị của thuộc tính đó.

* Khóa và giá trị được tách ra bởi dấu hai chấm (`:`) hoặc dấu bằng (`=`).

## 2. Chú thích
* Chú thích bắt đầu bằng `//` hoặc `#` và được viết trên một dòng đơn.

* Chú thích áp dụng đến cuối dòng.

* Chú thích nhiều dòng không được hỗ trợ. Nếu bạn cần viết chú thích trên nhiều dòng, bạn phải thêm `//` hoặc `#` vào đầu mỗi dòng.

## 3. Đối tượng (Object)
* Đối tượng được bao quanh bởi dấu ngoặc nhọn `{}` và chứa các cặp khóa-giá trị.

* Bạn có thể sử dụng : hoặc = giữa khóa và giá trị. Cả hai ký hiệu đều có thể thay thế cho nhau.

* Mỗi thuộc tính được tách ra bởi dấu phẩy (`,`).

* Bạn có thể lồng các đối tượng khác vào bên trong một đối tượng.

Ví dụ:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Mảng (Array)
* Mảng được bao quanh bởi dấu ngoặc vuông `[]`, và các phần tử được phân cách bằng dấu phẩy (`,`).

* Các phần tử trong mảng có thể là đối tượng, chuỗi, số hoặc các kiểu dữ liệu khác.

* Trong WSON, mảng có thể được bao gồm trong đối tượng, và mảng có thể chứa các mảng hoặc đối tượng khác.

Ví dụ:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Cặp khóa-giá trị (Key-Value Pair)
* Tên thuộc tính là chuỗi và được đặt ngay sau `:` hoặc `=`, không có khoảng trắng.

* Giá trị có thể là chuỗi, số, boolean, đối tượng hoặc mảng.

* Chuỗi được bao quanh bởi dấu ngoặc kép (`"`).

* Số được viết mà không có dấu ngoặc kép và có thể là số nguyên hoặc số thập phân.

Ví dụ:

```
name: "John Doe"
age = 25
```

## 6. Các kiểu dữ liệu (Data Types)
* Chuỗi (String): Văn bản được bao quanh bởi dấu ngoặc kép (`"`).

```
"hello world"
```

- Số (Number): Giá trị số nguyên hoặc số thập phân.

```
42
3.14
```

- Boolean (Boolean): Giá trị là `true` hoặc `false`.

```
is_active = true
```

* Đối tượng (Object): Tập hợp các cặp khóa-giá trị được bao quanh bởi `{}`.

* Mảng (Array): Danh sách các phần tử được bao quanh bởi `[]`.

## 7. Giải thích ví dụ

```ws
{
    // Thông tin về mã trạng thái và thông điệp
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Tuổi người dùng
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