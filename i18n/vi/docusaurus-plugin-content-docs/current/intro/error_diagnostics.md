---
sidebar_position: 5
---

# Chẩn đoán lỗi

Trình biên dịch Wave hiển thị lỗi cùng với mã lỗi (`E####`), vị trí/ngữ cảnh/đề xuất giải pháp cho mã nguồn cùng lúc.

## Dạng đầu ra

Dạng cơ bản như sau.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Mục đầu ra:

- `--> file:line:column`: mã lỗi và tóm tắt
- `^`: vị trí vấn đề
- khối mã nguồn + caret(`^`) nổi bật
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Mã lỗi đại diện

- `E1002` ký tự không mong đợi
- `E1003` chú thích khối chưa được đóng kín
- `E1004` chuỗi chưa được đóng kín
- `E1005` escape chuỗi không hợp lệ
- `E1006` literal ký tự không hợp lệ
- `E2001` dạng literal số không hợp lệ
- `E3001` lỗi cú pháp trình phân tích cú pháp
- `E3001` lỗi xác nhận ngữ nghĩa
- `E3102` gán `null` cho không phải là con trỏ
- `E9001` không cho phép thu hẹp số nguyên ẩn
- `E9001` lỗi nội bộ khi tạo mã hậu kỳ

## Lỗi back-end cũng hiển thị vị trí nguồn

Ngay cả khi có sự cố panic nội bộ trong giai đoạn tạo mã (LLVM), vị trí gọi/thông báo thực tế sẽ được suy luận và hiển thị nếu có thể.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Khi không thể suy luận về vị trí, vị trí dự phòng sẽ được sử dụng và thực tế này sẽ được ghi cùng với `note`.
