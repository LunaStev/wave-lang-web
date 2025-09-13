---
sidebar_position: 2
---

# Kiểu dữ liệu

Tài liệu này giải thích về các kiểu dữ liệu khác nhau được cung cấp trong ngôn ngữ lập trình Wave.
Ngôn ngữ lập trình Wave sử dụng nhiều kiểu dữ liệu khác nhau để lưu trữ và xử lý giá trị.
Các kiểu dữ liệu chính bao gồm số nguyên, số thực dấu phẩy động, chuỗi ký tự, v.v. Mỗi kiểu dữ liệu định nghĩa đặc điểm của dữ liệu và cách xử lý bộ nhớ liên quan.

## Kiểu số nguyên

Kiểu số nguyên được dùng để lưu trữ **giá trị số nguyên**.
Theo mặc định, số nguyên được khai báo là `i32` (số nguyên có dấu 32 bit) và `u32` (số nguyên không dấu 32 bit).
Ngôn ngữ lập trình Wave cung cấp nhiều tùy chọn kích thước để thiết lập chi tiết phạm vi của số nguyên.

- `i8` ~ `i1024`: Kiểu số nguyên có dấu cho phép thiết lập kích thước từ 8 bit đến 1024 bit.
- `u8` ~ `u1024`: Kiểu số nguyên không dấu cho phép thiết lập kích thước từ 8 bit đến 1024 bit.

Ví dụ:

```wave
var a :i32 = 100;
var b :u32 = 200;
```

## Kiểu số thực dấu phẩy động

Kiểu số thực dấu phẩy động được dùng để lưu trữ giá trị số thực.
Theo mặc định, số thực dấu phẩy động được khai báo là `f32`.
Ngoài ra, có nhiều tùy chọn kích thước để xác định chi tiết kích thước của số thực dấu phẩy động.

- `f32` ~ `f1024`: Kiểu số thực dấu phẩy động cho phép thiết lập kích thước từ 32 bit đến 1024 bit. Điều này cho phép thực hiện các phép tính số thực có độ chính xác cao hơn.

Ví dụ:

```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## Kiểu chuỗi ký tự

Kiểu chuỗi ký tự được dùng để xử lý dữ liệu văn bản. Dùng từ khóa `str` để khai báo chuỗi ký tự.
Chuỗi ký tự thường được định nghĩa dùng dấu ngoặc kép (`"`) và có thể gán giá trị chuỗi cho biến.

Ví dụ:

```wave
var text :str = "Xin chào Wave";
```

## Kiểu boolean

Kiểu boolean là kiểu dữ liệu biểu diễn giá trị **đúng (True)** hoặc **sai (False)**.
Chủ yếu được sử dụng trong câu lệnh điều kiện, giá trị được thiết lập là `true` hoặc `false`.

Ví dụ:

```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## Kiểu ký tự

Kiểu ký tự được sử dụng để lưu trữ một ký tự đơn.
Khai báo với từ khóa `char` và chỉ chứa được một giá trị ký tự.

Ví dụ:

```wave
var chữ cái :char = 'A';
```

## Kiểu byte

Kiểu byte được dùng để lưu trữ dữ liệu có kích thước **1 byte**.
Thường hữu ích khi xử lý dữ liệu nhị phân. Dùng từ khóa `byte` để khai báo.

Ví dụ:

```wave
var dữ liệuByte :byte = 0xFF;
```

## Kiểu con trỏ

Kiểu con trỏ được dùng để tham chiếu **địa chỉ bộ nhớ**.
Dùng từ khóa `ptr` để khai báo con trỏ và lưu trữ địa chỉ bộ nhớ.

Ví dụ:

```wave
var conTrỏ :ptr<T> = &mộtBiến;
```

## Kiểu mảng

Kiểu mảng được dùng để lưu trữ **nhiều kiểu dữ liệu giống nhau** theo thứ tự.
Dùng từ khóa `array` và có thể xác định kích thước hoặc kiểu của mảng.

Ví dụ:

```wave
var cácSố: array<i32, 5> = [1, 2, 3, 4, 5];
```

Mỗi kiểu dữ liệu có thể thiết lập phạm vi và kích thước khác nhau, do đó có thể chọn kiểu phù hợp với nhu cầu của người dùng để quản lý bộ nhớ và tính toán hiệu quả.
