---
sidebar_position: 3
---

# Chạy chương trình đầu tiên

Nếu bạn đã cài đặt Wave từ tài liệu trước đó, giờ là lúc trực tiếp thực hiện chương trình đầu tiên của Wave.
Trong phần này, sẽ xem xét toàn bộ quy trình viết và thực hiện một chương trình Wave thông qua các ví dụ đơn giản theo từng bước.

## Tạo tệp `hello.wave`

Trước tiên, tạo một tệp mới có tên là `hello.wave` trong thư mục làm việc.
Tên tệp và phần mở rộng có thể được chỉ định tùy ý, nhưng ở đây chúng ta sử dụng `hello.wave` như một ví dụ.

## Viết mã

Viết mã dưới đây vào tệp `hello.wave` đã tạo.

```wave
fun main() {
    println("Xin chào Wave");
}
```

Trong mã này, `fun main()` biểu thị điểm bắt đầu thực thi của chương trình Wave.
Chương trình Wave luôn bắt đầu thực thi từ hàm `main`.

Hàm `println` là hàm xuất chuỗi ra đầu ra tiêu chuẩn, được sử dụng cơ bản nhất khi cần hiển thị văn bản lên màn hình.

## Chạy chương trình

Sau khi hoàn tất việc viết mã, mở terminal và thực hiện lệnh sau từ thư mục chứa tệp.

```bash
wavec run hello.wave
```

Lệnh này chỉ định cho trình biên dịch Wave biên dịch và ngay lập tức thực thi tệp nguồn.

## Kiểm tra kết quả đầu ra

Nếu chương trình thực thi bình thường, đầu ra sau sẽ được hiển thị trong terminal.

```
Xin chào Wave
```

Nếu thấy đầu ra này, có nghĩa là Wave đã được cài đặt đúng cách và việc viết cũng như thực thi chương trình đã diễn ra chính xác.

Bây giờ bạn đã chạy thành công chương trình đầu tiên của Wave.
Từ bây giờ, bạn có thể xem xét từng ngữ pháp và chức năng của Wave, và viết các chương trình phức tạp hơn.

Các tùy chọn lệnh chi tiết (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`) có thể được tìm thấy trong tài liệu CLI `wavec`.
