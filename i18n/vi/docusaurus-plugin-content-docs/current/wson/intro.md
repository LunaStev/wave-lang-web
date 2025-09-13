---
sidebar_position: 2
---

# Ngữ pháp

## 1. Cấu trúc cơ bản

- Nội dung của tập tin bắt đầu và kết thúc bằng một đối tượng (`object`) được bao quanh bởi dấu ngoặc nhọn `{}`.

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
    trạng thái: "thành công",
    mã = 200,
    người dùng = { id: 123, tên: "John Doe" }
}
```

## 4. Mảng (Array)

- Mảng được bao quanh bởi dấu ngoặc vuông `[]`, và các phần tử được phân tách bằng dấu phẩy (`,`).

- Các phần tử của mảng có thể là đối tượng, chuỗi ký tự, số và các loại dữ liệu khác.

- Trong WSON, mảng có thể nằm trong một đối tượng, và bên trong mảng có thể có những mảng khác hoặc đối tượng.

Ví dụ:

```
nhiệm vụ: [
    { mã_nhiệm_vụ: 1, tiêu đề: "Hoàn thành báo cáo dự án" },
    { mã_nhiệm_vụ: 2, tiêu đề: "Xem xét phản hồi của nhóm" }
]
```

## 5. Cặp Key-Value

- Tên thuộc tính được tạo thành từ chuỗi và đặt giá trị không có khoảng trống sau `:`, `=`.

- Các loại giá trị bao gồm chuỗi, số, boolean, đối tượng, mảng, v.v.

- Chuỗi ký tự được bao quanh bởi dấu ngoặc kép `“`.

- Số được sử dụng mà không có dấu ngoặc kép và có thể ở dạng số nguyên hoặc số thực.

Ví dụ:

```
tên: "John Doe"
tuổi = 25
```

## 6. Các loại dữ liệu

- Chuỗi (String): Văn bản được bao bọc bởi dấu ngoặc kép `"`.

```
"xin chào thế giới"
```

- Số (Number): Là giá trị số nguyên hoặc số thực.

```
42
3.14
```

- Boolean: Sử dụng giá trị `true` hoặc `false`.

```
is_active = đúng
```

- Đối tượng (Object): Là cặp khóa-giá trị được bao quanh bởi dấu ngoặc nhọn `{}`.
- Mảng (Array): Là danh sách các phần tử được bao quanh bởi dấu ngoặc vuông `[]`.

## 7. Giải thích ví dụ

```ws
{
    // mã trạng thái và thông điệp
    trạng thái: "thành công",
    mã: 200,
    thông điệp: "Dữ liệu được truy xuất thành công",

    người dùng = {
        id = 123,
        tên: "John Doe",
        email: "john@example.com",
        tuổi: 25  # tuổi người dùng
    },

    công việc: [
        {
            id_công_việc: 1,
            tiêu đề: "Hoàn thành báo cáo dự án",
            trạng thái: "đang thực hiện",
            hạn: "2024-10-15"
        },
        {
            id_công_việc: 2,
            tiêu đề: "Xem xét phản hồi của nhóm",
            trạng thái: "đang chờ",
            hạn: "2024-10-20"
        }
    ]
}
```