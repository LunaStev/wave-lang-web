---
sidebar_position: 2
---

# Kiểu Dữ Liệu

Tài liệu này mô tả các kiểu dữ liệu khác nhau mà ngôn ngữ lập trình Wave cung cấp.
Wave hỗ trợ nhiều kiểu dữ liệu để lưu trữ và xử lý giá trị trong chương trình.
Các kiểu dữ liệu chính bao gồm số nguyên, số thực dấu chấm động, chuỗi và nhiều loại khác.
Mỗi kiểu dữ liệu xác định đặc điểm của dữ liệu và cách xử lý bộ nhớ của nó.

## Kiểu Số Nguyên
Kiểu số nguyên được sử dụng để lưu trữ các giá trị số nguyên.
Mặc định, số nguyên có thể được khai báo bằng `i32` (số nguyên có dấu 32-bit) và `u32` (số nguyên không dấu 32-bit).
Wave cũng cung cấp nhiều tùy chọn kích thước để kiểm soát phạm vi số nguyên một cách chi tiết.

* `i8` ~ `i1024`: Số nguyên có dấu, từ 8-bit đến 1024-bit.
* `u8` ~ `u1024`: Số nguyên không dấu, từ 8-bit đến 1024-bit.

Ví dụ:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Kiểu Số Thực Dấu Chấm Động
Kiểu số thực dấu chấm động được sử dụng để lưu trữ các giá trị số thực.
Mặc định, số thực được khai báo bằng `f32`.
Ngoài ra, Wave cung cấp nhiều tùy chọn kích thước để kiểm soát độ chính xác trong các phép tính số thực.

* `f32` ~ `f1024`: Kiểu số thực từ 32-bit đến 1024-bit, cho phép tính toán số thực với độ chính xác cao hơn.

Ví dụ:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Kiểu Chuỗi
Kiểu chuỗi được sử dụng để xử lý dữ liệu văn bản.
Chuỗi được khai báo bằng từ khóa str và thường được đặt trong dấu ngoặc kép (`" "`).

Ví dụ:
```wave
var text :str = "Hello Wave";
```

## Kiểu Boolean
Kiểu Boolean biểu diễn hai giá trị logic: Đúng (True) hoặc Sai (False).
Thường được sử dụng trong các câu lệnh điều kiện, giá trị của nó có thể là `true` hoặc `false`.

Ví dụ:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Kiểu Ký Tự
Kiểu ký tự lưu trữ một ký tự duy nhất.
Được khai báo bằng từ khóa `char` và chứa duy nhất một ký tự.

Ví dụ:
```wave
var letter :char = 'A';
```

## Kiểu Byte
Kiểu byte lưu trữ dữ liệu có kích thước 1 byte,
thường được sử dụng để xử lý dữ liệu nhị phân (binary data).

Ví dụ:
```wave
var byteData :byte = 0xFF;
```

## Kiểu Con Trỏ (Pointer)
Kiểu con trỏ (pointer) được sử dụng để tham chiếu đến địa chỉ bộ nhớ.
Khai báo bằng từ khóa `ptr`.

Ví dụ:
```wave
var ptr :ptr<T> = &someVariable;
```

## Kiểu Mảng
Kiểu mảng được sử dụng để lưu trữ nhiều giá trị cùng loại theo thứ tự.
Khai báo bằng từ khóa `array`.

Ví dụ:
```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

Mỗi kiểu dữ liệu có nhiều tùy chọn về phạm vi và kích thước, giúp lập trình viên lựa chọn kiểu phù hợp
để quản lý bộ nhớ hiệu quả và tối ưu hóa tính toán.
