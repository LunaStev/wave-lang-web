---
sidebar_position: 3
---

# Cấu trúc điều kiện IF

## Giới thiệu

Phần này giải thích về cú pháp và cách sử dụng của câu lệnh IF trong số các cấu trúc điều khiển mà ngôn ngữ Wave cung cấp.
Câu lệnh IF về cơ bản là một cấu trúc điều khiển chỉ thực hiện một khối mã cụ thể nếu điều kiện được đánh giá là đúng.

Điều này cho phép chương trình không chỉ chạy tuần tự từ trên xuống dưới mà còn có thể thực hiện các hành động khác nhau tùy thuộc vào điều kiện và tình huống.
Câu lệnh IF là một yếu tố cốt lõi của hầu hết các chương trình, cần thiết cho việc triển khai các nhánh logic và kiểm soát luồng.

## Cấu trúc cơ bản

Câu lệnh IF trước hết đánh giá một điều kiện, và nếu kết quả là đúng (True), nó thực hiện khối mã được viết trong dấu ngoặc nhọn `{}`.
Nếu điều kiện là sai (False), khối tương ứng sẽ bị bỏ qua và chuyển sang đoạn mã tiếp theo.

Cấu trúc cơ bản của câu lệnh IF trong Wave như sau.

```wave
if (điều kiện) {
    // mã sẽ được thực thi khi điều kiện đúng
}
```

Bạn có thể sử dụng tùy ý các toán tử so sánh hoặc toán tử logic trong một biểu thức điều kiện.
Ví dụ, bạn có thể so sánh mối quan hệ giữa các giá trị bằng cách sử dụng các toán tử so sánh như `==`, `!=`, `<`, `>`, `<=`, `>=`,
và kết hợp nhiều điều kiện bằng cách sử dụng các toán tử logic như `&&`, `||`, `!`.

Kết quả của một biểu thức điều kiện phải được đánh giá là đúng hoặc sai và nếu điều kiện là sai, mã bên trong khối IF sẽ không được thực thi.

## Ví dụ

Dưới đây là một ví dụ đơn giản nhất về câu lệnh IF.

```wave
var nhiệt_độ :i32 = 30;

if (nhiệt_độ > 25) {
    println("Thời tiết nóng.");
}
```

Trong mã trên, nó đánh giá điều kiện là giá trị của biến `temperature` có lớn hơn 25 hay không.
Nếu điều kiện là đúng, thông điệp `"Trời nóng."` sẽ được xuất ra, còn nếu điều kiện là sai thì không có hành động nào được thực hiện.

Câu lệnh IF được sử dụng khi bạn muốn chỉ thực hiện mã khi một điều kiện cụ thể được thỏa mãn.

## Câu lệnh IF-ELSE

Nếu có mã cần được thực thi ngay cả khi điều kiện không đúng, bạn có thể thêm một mệnh đề ELSE vào câu lệnh IF.
Câu lệnh IF-ELSE là cấu trúc thực thi tùy chọn một trong hai khối mã tùy thuộc vào kết quả của điều kiện.

Cấu trúc cơ bản như sau.

```wave
if (điều kiện) {
    // mã sẽ được thực thi khi điều kiện đúng
} else {
    // mã sẽ được thực thi khi điều kiện sai
}
```

Nếu điều kiện là đúng, khối IF được thực thi; nếu điều kiện là sai, khối ELSE được thực thi.
Chỉ một trong hai khối được thực thi, không bao giờ có trường hợp cả hai khối được thực thi cùng lúc.

Dưới đây là một ví dụ về sử dụng câu lệnh IF-ELSE.

```wave
var điểm :i32 = 70;

if (điểm >= 60) {
    println("Bạn đã đậu!");
} else {
    println("Bạn đã trượt.");
}
```

Trong mã này, các thông báo khác nhau được xuất ra tùy thuộc vào việc `score` có lớn hơn hoặc bằng 60 hay không.
Nếu điều kiện là đúng, `"Bạn đã đậu!"` sẽ được xuất ra; nếu không, `"Bạn đã trượt."` sẽ được xuất ra.

## Cấu trúc IF lồng nhau

Câu lệnh IF có thể được sử dụng bên trong một câu lệnh IF khác, gọi đó là câu lệnh IF lồng nhau.
Các câu lệnh IF lồng nhau hữu ích khi cần đánh giá điều kiện theo nhiều bước tuần tự.

Ví dụ dưới đây là một ví dụ về câu lệnh IF lồng nhau mà kết quả khác nhau được xuất ra tùy thuộc vào điểm số.

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

Mã này trước tiên kiểm tra xem điểm số có lớn hơn hoặc bằng 60 hay không.
Nếu nhỏ hơn 60, `"Bạn đã trượt."` được xuất ra ngay lập tức.
Nếu lớn hơn hoặc bằng 60, nó sẽ đánh giá điều kiện một lần nữa; nếu điểm số lớn hơn hoặc bằng 90 thì `"Thành tích xuất sắc!"` được xuất ra, nếu không thì `"Bạn đã đậu."` được xuất ra.

Sử dụng câu lệnh IF lồng nhau, bạn có thể diễn đạt các nhánh điều kiện phức tạp theo từng giai đoạn.

## Tóm tắt

Câu lệnh IF là một câu lệnh điều khiển cơ bản để kiểm soát luồng thực thi của chương trình bằng cách đánh giá một điều kiện.
Sử dụng mệnh đề ELSE cùng với câu lệnh IF, bạn có thể xác định rõ ràng hành vi khi điều kiện là sai, và các câu lệnh IF lồng nhau cho phép xử lý nhánh điều kiện phức tạp bằng cách kết hợp nhiều điều kiện khác nhau.

Khi được sử dụng đúng cách, câu lệnh IF có thể giúp cấu trúc luồng chương trình một cách logic và rõ ràng hơn.