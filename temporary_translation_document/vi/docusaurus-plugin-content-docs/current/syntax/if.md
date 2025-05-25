---
sidebar_position: 3
---

# Câu Lệnh IF
## Giới Thiệu
Trong phần này, chúng ta sẽ tìm hiểu về câu lệnh điều kiện IF trong ngôn ngữ lập trình Wave.
Câu lệnh IF được sử dụng để kiểm tra điều kiện và thực thi một đoạn mã nếu điều kiện đó đúng (True).
Điều này giúp kiểm soát luồng chương trình một cách linh hoạt và logic.

## Cấu Trúc Cơ Bản
Câu lệnh IF sẽ kiểm tra một điều kiện và nếu điều kiện đúng, nó sẽ thực thi đoạn mã bên trong.
Cấu trúc cơ bản của IF trong Wave như sau:

```wave
if (điều_kiện) {
    // Đoạn mã sẽ chạy nếu điều kiện đúng
}
```

Điều kiện có thể được tạo bằng các toán tử so sánh (`==`, `!=`, `<`, `>`, `<=`, `>=`)
hoặc toán tử logic (`&&`, `||`, `!`).
Nếu điều kiện sai (False), đoạn mã bên trong sẽ không được thực thi.

## Ví Dụ
Ví dụ đơn giản về câu lệnh IF:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("Thời tiết nóng.");
}
```

Nếu temperature lớn hơn 25, chương trình sẽ in ra "Thời tiết nóng."

## Câu Lệnh IF_ELSE
Nếu điều kiện không đúng, chúng ta có thể sử dụng ELSE để thực thi một đoạn mã khác.
Cấu trúc của IF-ELSE:

```wave
if (điều_kiện) {
    // Chạy nếu điều kiện đúng
} else {
    // Chạy nếu điều kiện sai
}
```

### Ví dụ:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("Đậu!");
} else {
    println("Rớt.");
}
```

Nếu score lớn hơn hoặc bằng 60, chương trình in ra "Đậu!",
ngược lại, nó sẽ in ra "Rớt."

## Câu Lệnh IF Lồng Nhau
Bạn có thể lồng một câu lệnh IF bên trong một câu lệnh IF khác để kiểm tra nhiều điều kiện phức tạp.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("Xuất sắc!");
    } else {
        println("Đậu.");
    } 
} else {
    println("Rớt.");
}
```

Trong ví dụ trên, tùy thuộc vào điểm số, thông báo “Tốt!”, “Đạt” hoặc “Không đạt” sẽ được hiển thị.

## Tổng Kết

* IF kiểm tra điều kiện và chỉ chạy đoạn mã nếu điều kiện đúng.
* ELSE giúp xử lý trường hợp khi điều kiện không đúng.
* IF lồng nhau cho phép kiểm tra nhiều điều kiện phức tạp.

Sử dụng IF giúp chương trình trở nên linh hoạt và thông minh hơn!