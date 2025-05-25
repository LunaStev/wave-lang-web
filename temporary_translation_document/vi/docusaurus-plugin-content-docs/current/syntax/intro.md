---
sidebar_position: 1
---

# Hàm và Biến

## Giới thiệu

Triết lý thiết kế cốt lõi của ngôn ngữ lập trình Wave là đạt được sự cân bằng giữa hiệu suất cấp thấp và trừu tượng hóa cấp cao, cung cấp một môi trường phát triển linh hoạt và hiệu quả.
Phần này sẽ giới thiệu về hàm và biến, những thành phần cơ bản của một chương trình Wave. Các thành phần này đóng vai trò quan trọng trong việc xây dựng logic và quản lý dữ liệu trong chương trình.
Việc hiểu cách định nghĩa và sử dụng hàm cũng như biến sẽ giúp bạn tận dụng tối đa tiềm năng của Wave.

---

## Hàm
Trong Wave, hàm là các khối mã có thể tái sử dụng, có thể được thực thi một cách độc lập.
Hàm giúp đóng gói một tập hợp các thao tác và có thể được gọi lại khi cần thiết trong toàn bộ chương trình.
Điều này giúp thực hiện các phép tính, quản lý I/O, hoặc chia nhỏ mã thành các phần dễ quản lý hơn.

Cú pháp định nghĩa hàm trong Wave bắt đầu với từ khóa `fun`, theo sau là tên hàm, tham số (nếu có) và khối lệnh được đặt trong dấu `{}`.

### Định nghĩa hàm
Một hàm cơ bản trong Wave được định nghĩa như sau:

```wave
fun main() {
    // Viết mã của bạn ở đây
}
```

* Hàm `main` là điểm khởi chạy của chương trình và luôn cần thiết.
* Một hàm có thể có tham số và trả về giá trị. Kiểu trả về được khai báo sau tên hàm.

### Ví dụ: Hàm đơn giản

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Gọi hàm add
    println(result);            // Kết quả: 12
}
```

Trong ví dụ trên:

* `add` là một hàm nhận hai số nguyên `a` và `b`, sau đó trả về tổng của chúng.
* Hàm `main` gọi `add` và in kết quả ra màn hình.

## Biến
Biến được sử dụng để lưu trữ và thao tác dữ liệu trong chương trình.
Wave hỗ trợ cả biến có thể thay đổi (mutable) và biến bất biến (immutable), giúp lập trình viên kiểm soát dữ liệu hiệu quả hơn.

### Biến có thể thay đổi (Mutable)
Trong Wave, các biến mặc định là có thể thay đổi (mutable), có nghĩa là giá trị của chúng có thể được cập nhật trong quá trình chạy chương trình.

Biến có thể thay đổi được khai báo bằng từ khóa `var`:
```wave
var x :i32 = 10; // Biến có thể thay đổi
x = 20;
```

Trong ví dụ trên:
* `x` là một biến có thể thay đổi, ban đầu có giá trị `10` và sau đó được cập nhật thành `20`.

### Biến bất biến (Immutable)
Biến bất biến (immutable) là biến mà giá trị của nó không thể thay đổi sau khi được gán lần đầu tiên.

Biến bất biến được khai báo bằng từ khóa var imm:
```wave
var imm y :i32 = 5;     // Biến bất biến
// y = 10;              // Lỗi: Không thể thay đổi giá trị của biến bất biến
```

Trong trường hợp này:
* `y` là một biến bất biến, nếu cố gắng thay đổi giá trị của nó, chương trình sẽ báo lỗi biên dịch.

### Ví dụ về khai báo biến
Dưới đây là một số ví dụ khai báo các biến có thể thay đổi và bất biến với các kiểu dữ liệu khác nhau:

```wave
var x :i32 = 10;                    // Biến số nguyên có thể thay đổi
var imm y :f64 = 3.14159;           // Biến số thực bất biến
var name :str = "Wave";             // Biến chuỗi có thể thay đổi
var imm is_active :bool = true;     // Biến boolean bất biến
```

* `x` là một biến số nguyên có thể thay đổi.
* `y` là một biến số thực bất biến.
* `name` là một biến chuỗi có thể thay đổi.
* `is_active` là một biến boolean bất biến.

Trong Wave, từ khóa `var` được sử dụng để khai báo biến có thể thay đổi, trong khi `var imm` được sử dụng để khai báo biến bất biến (không thể thay đổi sau khi khởi tạo).

Việc phân biệt giữa biến có thể thay đổi và bất biến giúp Wave kiểm soát trạng thái của chương trình hiệu quả hơn, từ đó tạo ra mã nguồn ổn định và dễ đoán hơn.