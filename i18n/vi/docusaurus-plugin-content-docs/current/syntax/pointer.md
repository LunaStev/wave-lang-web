---
sidebar_position: 6
---

# Con trỏ

## Giới thiệu

Tài liệu này giải thích cách sử dụng con trỏ trong Wave.
Wave là một ngôn ngữ hỗ trợ lập trình hệ thống cấp thấp, cung cấp tính năng con trỏ để thao tác địa chỉ bộ nhớ rõ ràng.
Con trỏ là biến chỉ đến địa chỉ bộ nhớ của một kiểu cụ thể, cho phép truy cập và chỉnh sửa giá trị trực tiếp.

---

## Khai báo con trỏ

Trong Wave, con trỏ được khai báo với định dạng `ptr<kiểu>`. Ví dụ, con trỏ kiểu số nguyên có thể được khai báo như sau:

```wave
var p: ptr<i32>;
```

Lệnh này tạo ra một con trỏ `p` chỉ đến giá trị kiểu `i32`.

---

## Khởi tạo con trỏ

Con trỏ có thể được khởi tạo bằng cách sử dụng toán tử `&` để chỉ định địa chỉ của biến:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;
```

Ở đây, `&a` nghĩa là địa chỉ bộ nhớ của biến `a`, và `p` là con trỏ trỏ đến địa chỉ đó.

---

## Tham chiếu ngược con trỏ

Sử dụng từ khóa `deref` để đọc hoặc thay đổi giá trị mà con trỏ trỏ tới. Đó là quá trình tham chiếu ngược:

```wave
var a: i32 = 10;
var p: ptr<i32> = &a;

println("{}", deref p); // In ra 10

deref p = 20;
println("{}", a); // In ra 20
```

---

## Con trỏ NULL

Trong Wave, con trỏ null được biểu diễn bằng từ khóa `null`.
Biến con trỏ có thể được khởi tạo là `null`, và trong trường hợp này nó không trỏ đến bất kỳ vùng nhớ hợp lệ nào:

```wave
var p: ptr<i32> = null;
```

Khi tham chiếu ngược một con trỏ null, trình biên dịch sẽ tạo ra lỗi.

---

## Con trỏ đa cấp

Wave hỗ trợ con trỏ đa cấp. Con trỏ có thể được khai báo và sử dụng trong nhiều cấp lồng nhau:

```wave
var x: i32 = 1;
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
var p3: ptr<ptr<ptr<i32>>> = &p2;

println("{}", deref p1);               // 1
println("{}", deref deref p2);         // 1
println("{}", deref deref deref p3);   // 1
```

---

## Mảng và con trỏ

Con trỏ có thể trỏ đến một phần tử mảng hoặc chính bản thân mảng.

### Con trỏ chỉ đến phần tử mảng

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];

println("deref arr[0] = {}, deref arr[1] = {}", deref arr[0], deref arr[1]); // 10, 20
```

### Con trỏ chỉ đến toàn bộ mảng

```wave
var arr: ptr<array<i32, 3>> = &[1, 2, 3];
println("{}", arr); // Xuất địa chỉ bộ nhớ
```

---

## An toàn và quyền sở hữu

Wave áp dụng hệ thống quyền sở hữu và thời gian sống tương tự như Rust để đảm bảo tính ổn định bộ nhớ khi sử dụng con trỏ.
Do đó, hệ thống kiểm tra kỹ lưỡng để tránh việc sử dụng con trỏ không hợp lệ, giải phóng bộ nhớ hai lần, hay con trỏ trôi.

```wave
fun main() {
    let x: i32 = 42;
    let p: ptr<i32> = &x;
    
    println("x = {}", deref p);
    
    deref p = 99;
    println("x = {}", x);
}
```

Xuất:

```text
x = 42
x = 99
```

---

## Kết luận

Con trỏ là một trong những tính năng cốt lõi cho phép lập trình cấp thấp hiệu năng cao trên Wave.
Nó rất hữu ích trong phát triển hệ thống cần điều khiển bộ nhớ trực tiếp, thư viện gốc, điều khiển phần cứng, và nhờ cấu trúc trình biên dịch an toàn của Wave, có thể phòng tránh hiệu quả các yếu tố nguy hiểm khi sử dụng con trỏ.