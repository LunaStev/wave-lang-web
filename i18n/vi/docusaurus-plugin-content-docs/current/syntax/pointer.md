---
sidebar_position: 6
---

# Con trỏ

## Mô hình kiểu bộ nhớ tường minh Wave

Thiết kế con trỏ của Wave dựa trên **Mô hình kiểu bộ nhớ tường minh Wave**.
Mô hình này nhằm mục tiêu định nghĩa con trỏ và mảng không phải là thủ thuật cú pháp hay trừu tượng hóa thư viện, mà là **kiểu bộ nhớ rõ ràng trên cấp độ ngôn ngữ**.

Theo thiết kế này, trong Wave, con trỏ được biểu diễn dưới dạng kiểu `ptr<T>`,
điều này làm rõ ràng là một kiểu chỉ ra địa chỉ bộ nhớ lưu trữ giá trị của kiểu `T` nhất định.
Cách tiếp cận này xử lý con trỏ như một phần của hệ thống kiểu chứ không phải là toán tử hay cú pháp khai báo,
cho phép biểu diễn cấu trúc bộ nhớ trực quan và nhất quán hơn.

---

Trong Wave, con trỏ là kiểu tường minh dưới dạng `ptr<T>`.
Lấy địa chỉ dùng `&`, và phép tham chiếu ngược dùng `deref`.

## Khai báo và khởi tạo

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;
```

Kiểu con trỏ có thể lồng được.

```wave
var p1: ptr<i32> = &x;
var p2: ptr<ptr<i32>> = &p1;
```

## Tham chiếu ngược

```wave
var x: i32 = 10;
var p: ptr<i32> = &x;

println("{}", deref p); // 10
deref p = 20;
println("{}", x);       // 20
```

## Quy tắc literal `null`

`null` là **literal tường minh**. Không phải là một định danh và không thể được dùng làm tên biến.

Quy tắc chính:

- `null` chỉ có thể được gán cho đối tượng `ptr<T>`.
- Không thể gán cho các kiểu không phải con trỏ như `i32`, `bool`, `array<...>`.
- Không thể khởi tạo con trỏ với hằng số nguyên (`0`, `123`, `-1`, v.v.). Sử dụng `null` một cách tường minh.

```wave
var p: ptr<i32> = null;
var arrp: ptr<array<i32, 3>> = null;

// var n: i32 = null;  // LỖI
// var b: bool = null; // LỖI
```

## Số học con trỏ

Wave hỗ trợ phép số học con trỏ sau.

- `ptr + int`: Tiến con trỏ dựa trên GEP
- `int + ptr`: Hành động tương tự
- `ptr - int`: Lùi con trỏ dựa trên GEP
- `ptr - ptr`: Tính toán chênh lệch byte `i64`

Ghi chú:

- `ptr<T> +/- n` di chuyển dựa trên kích thước của `T` (`sizeof(T)`).
- Tức là `ptr<i32> + 3` di chuyển `+12` theo byte.

```wave
var base: ptr<i32> = 0x1000 as ptr<i32>;

var p1: ptr<i32> = base + 3; // 0x1000 + 12
var p2: ptr<i32> = 2 + base; // 0x1000 + 8
var p3: ptr<i32> = base - 1; // 0x1000 - 4

var diff: i64 = p1 - base;   // 12 (chênh lệch byte)
```

## So sánh con trỏ

Con trỏ có thể được sử dụng để so sánh.

```wave
if (p == null) { ... }
if (p != null) { ... }
if (p1 == p2) { ... }
```

## Quan hệ với mảng

Mảng con trỏ:

```wave
var a: i32 = 10;
var b: i32 = 20;
var arr: array<ptr<i32>, 2> = [&a, &b];
println("{} {}", deref arr[0], deref arr[1]);
```

Con trỏ mảng:

```wave
var p: ptr<array<i32, 3>> = &[1, 2, 3];
if (p != null) {
    println("{}", deref p[1]);
}
```

## Ghi chú an toàn

Wave hiện không có mô hình an toàn con trỏ dựa trên quyền sở hữu/sự sống như Rust.
Do đó, không tự động ngăn chặn việc tham chiếu ngược `null`. Chúng tôi khuyên bạn nên thêm mẫu kiểm tra `null` một cách tường minh trước `deref`.
