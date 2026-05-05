---
sidebar_position: 1
---

# Hàm số và biến số

## Giới thiệu

Triết lý thiết kế cốt lõi của ngôn ngữ lập trình Wave là duy trì cân bằng giữa hiệu suất cấp thấp và sự trừu tượng cấp cao, đồng thời cung cấp một môi trường phát triển phần mềm hiệu quả và linh hoạt.
Phần này giới thiệu các yếu tố cơ bản nhất cấu thành chương trình Wave là hàm số và biến số.

Hàm số là đơn vị cốt lõi cấu thành hành động và logic của chương trình, còn biến số đóng vai trò lưu trữ và quản lý dữ liệu cần thiết trong quá trình đó.
Hiểu rõ cách khai báo và sử dụng hàm số cùng biến số sẽ cho phép bạn khai thác sâu hơn cấu trúc và ý tưởng thiết kế của ngôn ngữ Wave.

---

## Hàm số

Trong Wave, hàm số là một khối mã có thể tái sử dụng và được thực thi độc lập.
Bạn có thể nhóm lại và biểu diễn một hành động hoặc tính toán cụ thể thành một đơn vị, và gọi nó bất cứ khi nào cần trong toàn bộ chương trình.

Sử dụng hàm số có thể giúp giảm thiểu mã lặp lại, đồng thời chia chương trình thành các phần logic để cải thiện khả năng đọc và bảo trì.
Nó cũng được sử dụng cho nhiều mục đích khác nhau như xử lý tính toán, quản lý nhập/xuất, và tách biệt logic.

Trong Wave, các hàm được định nghĩa với từ khóa `fun`, bao gồm tên hàm, danh sách các tham số, và thân hàm được bao quanh bởi dấu ngoặc `{}`.

### Định nghĩa hàm số

Cấu trúc định nghĩa hàm cơ bản nhất trong Wave như sau.

```wave
fun main() {
    // Viết mã vào đây
}
```

Hàm `main` là điểm đầu vào thực thi của chương trình, và phải có một hàm `main` trong mỗi chương trình Wave.
Chương trình bắt đầu thực thi từ hàm này.

Hàm số có thể có các tham số khi cần thiết, và có thể trả về kết quả tính toán hoặc giá trị cho nơi gọi hàm.
Nếu có giá trị trả về, kiểu trả về phải được chỉ định trong phần khai báo hàm.

### Ví dụ: hàm đơn giản

Ví dụ sau đây là một hàm đơn giản, nhận hai số nguyên và trả về tổng của chúng.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // gọi hàm add
    println(result);            // xuất: 12
}
```

Trong ví dụ này, hàm `add` nhận hai tham số số nguyên `a` và `b`, sau đó cộng lại và trả về kết quả.
Trong hàm `main`, hàm `add` được gọi, giá trị trả về được lưu vào biến và sau đó được in ra.

Hàm số giúp đóng gói một hành động cụ thể và có thể được gọi khi cần thiết trong toàn bộ chương trình.

## Biến số

Biến được dùng để lưu trữ và thao tác dữ liệu trong chương trình.
Wave được thiết kế để phân biệt rõ ràng giữa biến biến đổi và biến không đổi khi khai báo biến, để ý định thay đổi dữ liệu có thể được thể hiện ngay từ cấp độ mã.

Điều này giúp làm rõ sự thay đổi trạng thái của chương trình, và giảm thiểu lỗi phát sinh từ việc thay đổi giá trị không mong muốn.

### Biến mutable

Trong Wave, biến mặc định là biến đổi (mutable).
Điều đó có nghĩa là sau khi được khai báo, giá trị của biến có thể thay đổi trong khi chương trình chạy.

Biến biến đổi được khai báo bằng từ khóa var.

```wave
var x :i32 = 10;
x = 20;
```

Trong đoạn mã trên, `x` có giá trị ban đầu là `10` và sau đó có thể thay đổi giá trị thành `20`.
Đối với dữ liệu phải thay đổi trạng thái như vậy, sử dụng biến mutable.

### Biến immutable

Nếu khai báo biến là bất biến (immutable), sau khi giá trị ban đầu được gán, giá trị đó không thể thay đổi.
Biến bất biến được khai báo bằng cách sử dụng từ khóa let.

```wave
let y :i32 = 5;
// y = 10;   // lỗi: biến bất biến không thể thay đổi giá trị.
```

Vì biến bất biến đảm bảo giá trị không thay đổi, nó giúp cải thiện độ ổn định và khả năng dự đoán của chương trình.
Khuyến khích sử dụng biến bất biến cho dữ liệu mà không cần thay đổi giá trị.

Trong Wave, có thể cho phép tính biến đổi bằng cách sử dụng `let` kết hợp với `mut`.

```wave
let mut y :i32 = 5;
y = 10;
```

Mặc dù biến được khai báo bằng `let`, việc thay đổi giá trị được cho phép thông qua từ khóa `mut`.

### Ví dụ khai báo biến

Dưới đây là ví dụ về việc khai báo các biến có thể thay đổi và bất biến với các kiểu khác nhau.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

Trong ví dụ này, `x` và `name` là các biến có thể thay đổi, còn `y` và `is_active` là các biến bất biến.
Trong Wave, việc phân biệt rõ ràng giữa `var` và `let` thể hiện khả năng thay đổi dữ liệu ở cấp độ mã.

Bằng cách sử dụng thích hợp các biến có thể thay đổi và bất biến, bạn có thể duy trì tính nhất quán của dữ liệu, đồng thời xây dựng chương trình vững chắc và dễ dự đoán hơn.