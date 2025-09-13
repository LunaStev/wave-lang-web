---
sidebar_position: 4
---

# Vòng lặp

## Giới thiệu

Ngôn ngữ Wave cung cấp cấu trúc vòng lặp để thực thi mã lệnh lặp lại.
Vòng lặp được sử dụng để thực thi mã lệnh tuần hoàn trong khi thỏa mãn một điều kiện cụ thể, hoặc lặp lại một số lần nhất định.

Các vòng lặp được hỗ trợ trong Wave gồm:

- Vòng lặp while: Lặp lại dựa trên điều kiện

- Vòng lặp for: Lặp lại dựa trên số lần

Ngoài ra, cũng cung cấp các từ khóa break, continue để điều khiển luồng trong quá trình lặp.
Phần này sẽ giải thích cách sử dụng vòng lặp và các từ khóa điều khiển luồng.

---

## Vòng lặp while

Vòng lặp `while` thực thi mã lệnh trong khối lặp trong khi điều kiện cho trước được đánh giá là `true`.
Vòng lặp sẽ kết thúc khi điều kiện trở thành `false`.

### Cấu trúc cơ bản

Dưới đây là cú pháp cơ bản của vòng lặp `while`:

```wave
while (điều kiện) {
    // mã lệnh cần lặp lại
}
```

- Điều kiện phải có kiểu `bool`.

- Khối mã được bao bọc bởi `{}` và có thể chứa một hoặc nhiều câu lệnh.

### Ví dụ: In ra từ 0 đến 4

```wave
var i :i32 = 0;

while (i < 5) {
    println("i là {}.", i);
    i = i + 1;
}
```

Ví dụ này lặp lại cho đến khi `i` nhỏ hơn 5, mỗi lần lặp lại in ra giá trị và tăng thêm 1.

---

## Vòng lặp for

Vòng lặp `for` rất hữu ích khi số lần lặp lại được xác định.
Cấu thành vòng lặp bằng cách xác định giá trị khởi đầu, điều kiện kết thúc, và biểu thức tăng giảm.

### Cấu trúc cơ bản

```wave
for (var tên_biến: kiểu = giá_trị_khởi_đầu; điều_kiện; biểu_thức_tăng_giảm) {
    // mã lệnh cần lặp lại
}
```

- Tên biến: Biến được sử dụng để điều khiển vòng lặp

- Điều kiện: Vòng lặp thực thi trong khi điều kiện là `true`

- Biểu thức tăng giảm: Thay đổi giá trị của biến lặp lại

### Ví dụ: In ra từ 1 đến 5

```wave
for (var i: i32 = 1; i <= 5; i = i + 1) {
    println("i = {}", i);
}
```

---

## Vòng lặp lồng nhau

Có thể viết một vòng lặp khác bên trong một vòng lặp, và đó gọi là vòng lặp lồng nhau.
Ví dụ khi duyệt qua mảng hai chiều hoặc tổ hợp.

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

---

## Vòng lặp break

Lệnh `break` chấm dứt ngay lập tức vòng lặp và thoát ra ngoài.
Rất hữu ích khi muốn dừng vòng lặp khi một điều kiện được thoả mãn.

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

---

## Vòng lặp continue

Lệnh `continue` bỏ qua phần còn lại của vòng lặp hiện tại và bắt đầu vòng lặp tiếp theo.
Sử dụng khi chỉ muốn thực hiện một phần của khối lặp khi thoả mãn một điều kiện cụ thể.

### Ví dụ: chỉ in số chẵn

```wave
for (var i: i32 = 0; i <= 10; i = i + 1) {
    if (i % 2 == 1) {
        continue;
    }

    println(i);
}
```

---

## Tóm tắt

| Ngữ pháp  | Mô tả                                                               |
| --------- | ------------------------------------------------------------------- |
| trong khi | Lặp lại trong khi điều kiện đúng                                    |
| đối với   | Thực hiện lặp với giá trị ban đầu, điều kiện, và biểu thức thay đổi |
| thoát     | Kết thúc vòng lặp ngay lập tức                                      |
| tiếp tục  | Bỏ qua và tiếp tục vòng lặp tiếp theo                               |

Vòng lặp trong Wave được thiết kế để xử lý linh hoạt cả lặp dựa trên điều kiện và số lần.

Sử dụng cả câu lệnh `break`, `continue` có thể cho phép kiểm soát luồng lặp tinh vi hơn.