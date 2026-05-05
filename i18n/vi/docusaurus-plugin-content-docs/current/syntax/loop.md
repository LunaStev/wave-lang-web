---
sidebar_position: 4
---

# Vòng lặp

## Giới thiệu

Ngôn ngữ Wave cung cấp vòng lặp để xử lý các tình huống cần thực thi cùng một đoạn mã nhiều lần.
Vòng lặp được sử dụng khi cần thực thi mã liên tục trong khi thỏa mãn một điều kiện cụ thể, hoặc lặp lại một số lần nhất định.

Điều này cho phép thể hiện công việc lặp lại bằng mã nguồn rõ ràng và ngắn gọn mà không cần phải viết lại cùng một logic.
Wave hỗ trợ cả vòng lặp dựa trên điều kiện và vòng lặp dựa trên số lần, đồng thời cung cấp các từ khóa để điều khiển luồng thực thi trong khi lặp lại.

Phần này giải thích cách sử dụng các câu lệnh `while` và `for` cùng với các từ khóa `break` và `continue` để điều khiển luồng lặp lại.

---

## Vòng lặp while

Câu lệnh `while` thực thi lặp đi lặp lại khối mã trong khi điều kiện cho trước được đánh giá là đúng (`true`).
Vòng lặp sẽ kết thúc ngay khi điều kiện trở thành sai (`false`).

Phương thức này phù hợp với những tình huống cần lặp lại đến khi một điều kiện cụ thể được thỏa mãn mà số lần lặp không rõ ràng.

### Cấu trúc cơ bản

Cấu trúc cơ bản của câu lệnh while trong Wave như sau.

```wave
while (điều kiện) {
    // mã lệnh cần lặp lại
}
```

Điều kiện phải được đánh giá thành kiểu `bool`, và trong khối mã bao quanh bởi dấu ngoặc `{}`, có thể viết một hoặc nhiều câu lệnh.

### Ví dụ: In ra từ 0 đến 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i là {}.", i);
    i = i + 1;
}
```

Trong ví dụ này, vòng lặp được thực hiện trong khi biến `i` nhỏ hơn 5.
Trong mỗi lần lặp, giá trị hiện tại được xuất ra và giá trị của `i` được tăng thêm 1 để cuối cùng điều kiện trở thành sai.

---

## Vòng lặp for

Câu lệnh `for` là vòng lặp thích hợp khi số lần lặp lại tương đối rõ ràng.
Có thể định nghĩa giá trị khởi đầu, điều kiện và biểu thức tăng/giảm trong một câu lệnh để thể hiện rõ ràng luồng lặp.

Vì các yếu tố cần thiết để điều khiển vòng lặp được tập hợp ở một nơi, nên có lợi thế là dễ dàng nắm bắt cấu trúc lặp chỉ trong nháy mắt.

### Cấu trúc cơ bản

```wave
for (khởi_tạo; điều_kiện; biểu_thức_tăng_giảm) {
    // mã lệnh lặp lại
}
```

Khởi tạo vòng lặp for trong Wave hỗ trợ nhiều hình thức khác nhau.

- Khởi tạo kiểu `var` ngầm định
- Khởi tạo khai báo `var` / `let mut` / `const`
- Khởi tạo bằng biểu thức thường (tái sử dụng biến có sẵn)

### Ví dụ 1: Khởi tạo kiểu ngầm định

```wave
for (i :i32 = 1; i <= 5; i += 1) {
    println("i = {}", i);
}
```

### Ví dụ 2: Khởi tạo `var` / `let mut`

```wave
for (var i: i32 = 0; i < 3; i += 1) {
    println("var i = {}", i);
}

for (let mut j: i32 = 0; j < 3; j += 1) {
    println("let mut j = {}", j);
}
```

### Ví dụ 3: Khởi tạo dựa trên biểu thức (tái sử dụng biến có sẵn)

```wave
var i: i32 = 99;

for (i = 3; i <= 5; i += 1) {
    println("i = {}", i);
}

println("after loop: {}", i); // 6
```

Khởi tạo khai báo (`var`, `let mut`, `i :i32 = ...`) hoạt động như biến phạm vi vòng lặp, còn khởi tạo dựa trên biểu thức (`i = ...`) cập nhật chính biến bên ngoài.

---

## Vòng lặp lồng nhau

Vòng lặp có thể được viết bên trong một vòng lặp khác, và điều này được gọi là vòng lặp lồng nhau.
Vòng lặp lồng nhau hữu ích khi duyệt qua cấu trúc dữ liệu hai chiều hoặc khi xử lý các tổ hợp của nhiều điều kiện.

### Ví dụ: Vòng lặp while kép

```wave
var i :i32 = 0;

while (i < 3) {
    var j :i32 = 0;

    while (j < 2) {
        println("i={}, j={}", i, j);
        j = j + 1;
    }

    i = i + 1;
}
```

Trong ví dụ này, mỗi lần câu lệnh `while` bên ngoài thực thi, câu lệnh `while` bên trong sẽ được thực thi hoàn toàn.
Thông qua đó, có thể xử lý tuần tự các tổ hợp dạng (`i`, `j`).

---

## Vòng lặp break

Câu lệnh `break` kết thúc ngay lập tức vòng lặp và chuyển hướng luồng ra khỏi vòng lặp đó.
Được sử dụng khi không cần tiếp tục thực hiện vòng lặp nữa.

### Ví dụ: Kết thúc vòng lặp tại một giá trị cụ thể

```wave
var i :i32 = 0;

while (true) {
    if (i == 5) {
        break;
    }

    println(i);
    i = i + 1;
}
```

Trong ví dụ này, khi `i` trở thành 5 trong vòng lặp vô hạn, `break` được thực thi và vòng lặp kết thúc.
Lệnh `break` rất hữu ích khi bạn muốn kiểm soát vòng lặp ngoài các điều kiện lặp.

---

## Vòng lặp continue

Lệnh `continue` bỏ qua phần còn lại của vòng lặp hiện tại và bắt đầu vòng lặp tiếp theo.
Nó được sử dụng khi bạn chỉ muốn bỏ qua một phần logic dưới một số điều kiện nhất định.

### Ví dụ: chỉ in số chẵn

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

Trong mã này, khi `i` là số lẻ, `continue` được thực thi, bỏ qua phần xuất dữ liệu.
Kết quả là chỉ các giá trị chẵn được xuất ra.

---

## Tóm tắt

Vòng lặp trong Wave được thiết kế để xử lý linh hoạt cả lặp dựa trên điều kiện và số lần.
Lệnh `while` phù hợp với vòng lặp dựa trên điều kiện, trong khi `for` hữu ích khi số lần và luồng lặp rõ ràng.

Khi sử dụng cùng `break` và `continue`, bạn có thể kiểm soát chi tiết luồng thực thi ngay cả trong quá trình lặp, cho phép cấu trúc logic lặp phức tạp và linh hoạt hơn.
