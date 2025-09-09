---
sidebar_position: 3
---

# Cấu trúc điều kiện IF

## Giới thiệu

Phần này giới thiệu về cú pháp của cấu trúc điều kiện IF, một trong những câu lệnh điều khiển của Wave.
Cấu trúc điều kiện IF là câu lệnh điều khiển trong lập trình, đánh giá điều kiện và khi điều kiện đúng sẽ thực thi mã cụ thể.
Nó cho phép việc điều khiển luồng của chương trình tùy theo điều kiện, và viết mã linh hoạt và logic.

## Cấu trúc cơ bản

Cấu trúc điều kiện IF đánh giá một điều kiện cụ thể và chỉ thực thi khối mã được chỉ định khi điều kiện đó đúng (True).
Cấu trúc cơ bản của câu lệnh IF trong Wave như sau:

```wave
if (điều kiện) {
    // mã sẽ được thực thi khi điều kiện đúng
}
```

Điều kiện được viết bằng cách sử dụng các toán tử so sánh (`==`, `!=`, `<`, `>`, `<=`, `>=`) hoặc các toán tử logic (`&&`, `||`, `!`). Nếu điều kiện sai (False), khối mã sẽ không được thực thi.

## Ví dụ

Dưới đây là ví dụ đơn giản về cấu trúc điều kiện IF:

```wave
var nhiệt_độ :i32 = 30;

if (nhiệt_độ > 25) {
    println("Thời tiết nóng.");
}
```

Trong mã trên, khi giá trị nhiệt_độ lớn hơn 25, thông báo "Thời tiết nóng." sẽ được in ra.

## Cấu trúc điều kiện IF_ELSE

Khi điều kiện không đúng, sử dụng câu lệnh IF-ELSE để viết mã thực thi thay thế.
Cấu trúc như sau:

```wave
if (điều kiện) {
    // mã sẽ được thực thi khi điều kiện đúng
} else {
    // mã sẽ được thực thi khi điều kiện sai
}
```

### Ví dụ:

```wave
var điểm :i32 = 70;

if (điểm >= 60) {
    println("Bạn đã đậu!");
} else {
    println("Bạn đã trượt.");
}
```

Khi điểm số lớn hơn hoặc bằng 60, "Bạn đã đậu!" sẽ được in ra, ngược lại "Bạn đã trượt." sẽ được in ra.

## Cấu trúc IF lồng nhau

Cấu trúc điều kiện IF có thể được sử dụng bên trong cấu trúc IF khác. Điều này được gọi là cấu trúc IF lồng nhau và hữu ích khi xử lý các điều kiện phức tạp.

```wave
var điểm :i32 = 85;

if (điểm >= 60) {
    if (điểm >= 90) {
        println("Điểm số xuất sắc!");
    } else {
        println("Bạn đã đậu.");
    } 
} else {
    println("Bạn đã trượt.");
}
```

Trong ví dụ trên, tùy thuộc vào điểm số, thông báo "Điểm số xuất sắc!", "Bạn đã đậu.", hoặc "Bạn đã trượt." sẽ được in ra.

## Tóm tắt

- Cấu trúc điều kiện IF là lệnh điều khiển thực thi một khối mã cụ thể sau khi đánh giá điều kiện.
- Bằng cách thêm câu lệnh ELSE, có thể chỉ định mã thực thi khi điều kiện sai.
- Cấu trúc IF lồng nhau được sử dụng khi xử lý các điều kiện phức tạp.

IF 문을 활용하면 프로그램의 흐름을 더욱 논리적이고 동적으로 구성할 수 있습니다!