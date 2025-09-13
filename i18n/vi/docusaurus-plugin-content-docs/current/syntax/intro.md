---
sidebar_position: 1
---

# Hàm số và biến số

## Giới thiệu

Triết lý thiết kế cốt lõi của ngôn ngữ lập trình Wave là cung cấp một môi trường phát triển phần mềm hiệu quả và linh hoạt bằng cách cân bằng giữa hiệu suất cấp thấp và trừu tượng hóa cấp cao.
Ở phần này, chúng tôi giới thiệu các thành phần cơ bản của chương trình Wave, đó là hàm số và biến số. Các thành phần này là thiết yếu để cấu trúc logic và quản lý dữ liệu trong chương trình.
Hiểu cách định nghĩa và xử lý hàm số và biến số sẽ cho phép bạn khai thác tối đa tiềm năng của Wave.

---

## Hàm số

Trong Wave, hàm số đóng vai trò như một khối mã có thể tái sử dụng được thực thi độc lập.
Hàm số giúp đóng gói một hành động cụ thể và có thể được gọi khi cần thiết trong toàn bộ chương trình.
Điều này cho phép thực hiện các phép toán, quản lý tác vụ I/O hoặc tách mã thành các đơn vị dễ quản lý.

Trong Wave, chữ ký của một hàm bắt đầu với từ khóa `fun`, bao gồm tên hàm, các tham số (nếu có) và thân hàm được bao quanh bởi dấu ngoặc `{}`.

### Định nghĩa hàm số

Một hàm cơ bản trong Wave được định nghĩa như sau:

```wave
fun main() {
    // Viết mã vào đây
}
```

- Hàm `main` luôn cần thiết như một điểm khởi đầu để thực thi chương trình.
- Hàm có thể nhận tham số và trả về giá trị. Kiểu trả về được khai báo sau tên hàm.

### Ví dụ: hàm đơn giản

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // gọi hàm add
    println(result);            // xuất: 12
}
```

Trong ví dụ trên:

- Hàm `add` nhận hai số nguyên `a` và `b`, trả về tổng của chúng.
- Hàm `main` gọi `add` để xuất kết quả.

## Biến số

Biến được dùng để lưu trữ và thao tác dữ liệu trong chương trình.
Wave hỗ trợ cả **biến mutable** và **biến immutable** trong khai báo, cung cấp sự kiểm soát cho lập trình viên trong quản lý dữ liệu.

### Biến mutable

Trong Wave, mặc định biến là **mutable**. Điều đó có nghĩa là giá trị có thể thay đổi trong khi chương trình chạy.

Biến mutable được khai báo bằng từ khóa var.

```wave
var x :i32 = 10; // biến mutable
x = 20;
```

Trong ví dụ trên:

- `x` là một biến mutable, có giá trị khởi tạo là `10`, và có thể thay đổi thành `20` sau đó.

### Biến immutable

Khi biến được khai báo là **immutable**, giá trị sau khi gán một lần không thể thay đổi.

Biến immutable được khai báo bằng từ khóa `let`.

```wave
let y :i32 = 5;         // biến immutable
// y = 10;              // lỗi: biến immutable không thể thay đổi giá trị.
```

Ở đây:

- `y` là một biến immutable, và khi cố gắng thay đổi giá trị sẽ dẫn đến lỗi biên dịch.

Tuy nhiên, nếu muốn sử dụng từ khóa `let` cho một biến mutable tạm thời thì có thể dùng `mut`.

```wave
let mut y :i32 = 5;
y = 10;
```

### Ví dụ khai báo biến

Ví dụ về khai báo các biến mutable và immutable khác nhau như sau:

```wave
var x :i32 = 10;                    // biến số nguyên mutable
let y :f64 = 3.14159;               // biến số thực immutable
var name :str = "Wave";             // biến chuỗi mutable
let is_active :bool = true;         // biến logic immutable
```

- `x` là một số nguyên mutable.
- `y` là một số thực immutable.
- `name` là một chuỗi mutable.
- `is_active` là một giá trị logic immutable.

Trong Wave, `var` được sử dụng để khai báo biến mutable, trong khi `let` được sử dụng để khai báo biến immutable không thể thay đổi sau khi gán ban đầu.

가변 변수와 불변 변수를 구분함으로써, Wave는 데이터 일관성과 프로그램 상태를 더욱 효과적으로 제어할 수 있게 합니다.
이로써 더욱 견고하고 예측 가능한 코드를 작성할 수 있습니다.