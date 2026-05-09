---
sidebar_position: 5
---

# Chẩn đoán lỗi

Trình biên dịch Wave hiển thị lỗi cùng với mã lỗi (`E####`), vị trí/ngữ cảnh/đề xuất giải pháp cho mã nguồn cùng lúc.

## Dạng đầu ra

Dạng cơ bản như sau.

```text
error[E3001]: xác nhận ngữ nghĩa không thành công: sử dụng định danh chưa được khai báo `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ không tìm thấy trong phạm vi này
   = ngữ cảnh: xác nhận ngữ nghĩa
   = gợi ý: sửa đổi tính thay đổi, phạm vi và tính hợp lệ của biểu thức
```

Mục đầu ra:

- `error[E....]`: mã lỗi và tóm tắt
- `--> file:line:column`: vị trí vấn đề
- khối mã nguồn + caret(`^`) nổi bật
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Mã lỗi đại diện

- `E1001` ký tự không mong đợi
- `E1002` chú thích khối chưa được đóng kín
- `E1003` chuỗi chưa được đóng kín
- `E1004` escape chuỗi không hợp lệ
- `E1005` literal ký tự không hợp lệ
- `E1006` dạng literal số không hợp lệ
- `E2001` lỗi cú pháp trình phân tích cú pháp
- `E3001` lỗi xác nhận ngữ nghĩa
- `E3102` gán `null` cho không phải là con trỏ
- `E3201` không cho phép thu hẹp số nguyên ẩn
- `E9001` lỗi nội bộ khi tạo mã hậu kỳ

## Lỗi back-end cũng hiển thị vị trí nguồn

Ngay cả khi có sự cố panic nội bộ trong giai đoạn tạo mã (LLVM), vị trí gọi/thông báo thực tế sẽ được suy luận và hiển thị nếu có thể.

```text
error[E9001]: lỗi nội bộ của trình biên dịch trong quá trình tạo mã (llvm-ir-generation)
  --> test.wave:12:9
   = tìm thấy: Không tìm thấy hàm 'foo'
   = lưu ý: vị trí nguồn được suy ra từ tên hàm chưa được giải quyết trong tình trạng hoảng sợ của backend
```

Khi không thể suy luận về vị trí, vị trí dự phòng sẽ được sử dụng và thực tế này sẽ được ghi cùng với `note`.
