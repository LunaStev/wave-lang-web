---
sidebar_position: 2
---

# Kiểu dữ liệu

Tài liệu này giải thích về các kiểu dữ liệu khác nhau được cung cấp trong ngôn ngữ lập trình Wave.
Trong Wave, có thể lưu trữ và tính toán giá trị thông qua nhiều kiểu dữ liệu khác nhau, mỗi kiểu dữ liệu rõ ràng định nghĩa cách mà dữ liệu đó được biểu diễn và xử lý bộ nhớ.

Xác định rõ kiểu dữ liệu là một trong những triết lý thiết kế cốt lõi của Wave.
Wave là một hệ thống **cực kỳ chặt chẽ về kiểu**. Mọi khai báo `var`/`fun` và khởi tạo biến đều cần kiểu dữ liệu rõ ràng, không hỗ trợ suy luận kiểu dựa trên ngữ cảnh. Do đó, nếu không có kiểu như `var x = 1;` thì quá trình biên dịch sẽ thất bại.
Thông qua đó có thể bày tỏ rõ ràng ý định của mã, phát hiện sớm lỗi trong thời gian biên dịch, và đảm bảo sử dụng bộ nhớ hiệu quả và thực thi ổn định.

---

## Kiểu số nguyên

Kiểu số nguyên được dùng để lưu trữ giá trị số nguyên.
Trong Wave, `i32` (số nguyên có dấu 32 bit) và `u32` (số nguyên không dấu 32 bit) thường được sử dụng, nhưng có thể chỉ định kích thước bit của số nguyên rất chi tiết khi cần thiết.

Kiểu số nguyên có dấu được cung cấp từ `i8` đến `i1024`, và kiểu số nguyên không dấu có thể sử dụng từ `u8` đến `u1024`.
Điều này cho phép đáp ứng các nhu cầu khác nhau từ các phép tính đơn giản đến tính toán số nguyên dung lượng lớn, xử lý mã hóa và lập trình hệ thống cấp thấp.

Dưới đây là một ví dụ đơn giản sử dụng kiểu số nguyên.

```wave
var a: i32 = 100;
var b: u32 = 200;
```

---

## Kiểu số thực dấu phẩy động

Kiểu số thực dấu phẩy động được dùng để lưu trữ giá trị số thực.
Trong Wave, kiểu số dấu phẩy động sử dụng mặc định là `f32`, và có thể chọn loại kích thước lớn hơn khi cần độ chính xác cao hơn.

Wave cung cấp các kiểu số dấu phẩy động từ `f32` đến `f128`, cho phép người dùng tự chọn giữa độ chính xác và hiệu suất của phép tính.
Điều này cho phép xử lý các phép toán thực đa dạng, từ tính toán số học thông thường đến các tính toán khoa học chính xác.

Dưới đây là một ví dụ sử dụng kiểu số dấu phẩy động.

```wave
var pi: f32 = 3.14;
var e: f64 = 2.71828;
```

---

## Kiểu chuỗi ký tự

Kiểu chuỗi ký tự được sử dụng để xử lý dữ liệu văn bản.
Trong Wave, kiểu chuỗi được khai báo với từ khóa `str`, và các chuỗi ký tự được biểu thị bằng cách bao quanh chúng bằng dấu ngoặc kép (`"`).

Chuỗi ký tự được sử dụng rộng rãi trong các chương trình để xuất thông điệp, xử lý đầu vào người dùng và xử lý dữ liệu dựa trên văn bản.

Dưới đây là một ví dụ sử dụng cơ bản của kiểu chuỗi ký tự.

```wave
var text: str = "Xin chào Wave";
```

---

## Kiểu boolean

Kiểu boolean là kiểu dữ liệu biểu diễn giá trị đúng (True) hoặc sai (False).
Trong Wave, kiểu `bool` được sử dụng với các giá trị được chỉ định là `true` hoặc `false`.

Kiểu boolean đóng vai trò chính trong câu lệnh điều kiện và vòng lặp, sử dụng để kiểm soát dòng chảy của chương trình.

```wave
var isActive: bool = true;
var isAvailable: bool = true;
```

---

## Kiểu ký tự

Kiểu ký tự được sử dụng để lưu trữ một ký tự đơn.
Khai báo với từ khóa `char` và chỉ chứa được một giá trị ký tự.

Ký tự được biểu thị bằng cách bao quanh bằng dấu nháy đơn (`'`).

```wave
var chữ cái: char = 'A';
```

## Kiểu byte

Kiểu byte được sử dụng để lưu trữ dữ liệu kích thước 1 byte.
Loại này hữu ích khi cần xử lý dữ liệu nhị phân, vào ra tệp hoặc lập trình mạng liên quan đến xử lý dữ liệu cấp thấp.

Trong Wave, kiểu byte được khai báo bằng từ khóa `byte`.

```wave
var dữ liệuByte: byte = 0xFF;
```

## Kiểu con trỏ

Kiểu con trỏ được sử dụng để tham chiếu trực tiếp đến địa chỉ bộ nhớ.
Trong Wave, kiểu con trỏ được khai báo theo định dạng `ptr<T>`.

Con trỏ được sử dụng khi cần truy cập bộ nhớ cấp thấp, thường là trong lập trình hệ thống hoặc mã yêu cầu hiệu suất cao.

```wave
var conTrỏ: ptr<T> = &mộtBiến;
```

## `null` hằng số

Trong Wave, `null` là một hằng số chính thức.

- `null` không phải là định danh. (dạng `var null = ...` không khả dụng)
- `null` chỉ có thể được gán cho kiểu `ptr<T>`.

```wave
var p: ptr<i32> = null;  // OK

// var n: i32 = null;    // ERROR
// var b: bool = null;   // ERROR
```

## Kiểu mảng

Kiểu mảng được sử dụng để lưu trữ nhiều giá trị của cùng một loại dữ liệu theo thứ tự.
Trong Wave, mảng được khai báo theo định dạng `array<type, size>`, với kích thước mảng được xác định rõ tại thời điểm biên dịch.

Điều này giúp cấu trúc bộ nhớ rõ ràng hơn và cho phép truy cập ổn định.

```wave
var cácSố: array<i32, 5> = [1, 2, 3, 4, 5];
```

Mỗi kiểu dữ liệu được thiết kế để có khả năng chọn độ lớn và phạm vi phù hợp với mục đích và đặc tính.
Việc chọn kiểu dữ liệu phù hợp có thể quản lý bộ nhớ hiệu quả hơn và nâng cao đáng kể độ ổn định và tính dễ đọc của mã.
