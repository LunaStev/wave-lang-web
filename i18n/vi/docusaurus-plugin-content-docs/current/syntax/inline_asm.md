---
sidebar_position: 7
---

# Hợp ngữ nội tuyến

## Giới thiệu

Tập hợp nội tuyến của Wave được viết bằng các khối `asm { ... }`.
Có thể điều khiển trực tiếp thanh ghi, bộ nhớ và đường dẫn gọi hệ thống từ trong mã Wave.

Các nền tảng hỗ trợ hiện tại:

- Linux `aarch64`
- Linux `arm64`
- macOS (Darwin) `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`
- freestanding `riscv64`

Chưa hỗ trợ Windows và nền tảng 32-bit.

---

## Hình thức cơ bản

`asm` có thể được sử dụng như **câu lệnh (statement)** hoặc **biểu thức (expression)**.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Các thành phần:

- Dòng chuỗi: lệnh hợp ngữ thực tế
- `clobber(...)`: toán hạng đầu vào
- `out(...)`: toán hạng đầu ra
- `clobber(...)`: gợi ý thanh ghi/trạng thái/bộ nhớ bị thay đổi

---

## Câu lệnh `asm` (Statement)

Sử dụng như câu lệnh thông thường nếu không cần giá trị trả về.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

Có thể đặt nhiều `out(...)`.

---

## Biểu thức `asm` (Expression)

Có thể được sử dụng như một biểu thức tạo giá trị trực tiếp.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Lưu ý:

- Biểu thức `asm` chỉ cho phép **duy nhất 1 `out(...)`**.

---

## Ràng buộc `in(...)` / `out(...)`

Chuỗi trong `in("...")`, `out("...")` có thể là một trong hai dạng sau.

1. Thanh ghi cụ thể

- Ví dụ: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Lớp ràng buộc (constraint class)

- Ví dụ: `"r"`, `"m"`, `"rm"`

Ví dụ:

```wave
in("r") &buf
out("rax") ret
```

Đối tượng đầu ra (`out(...) target`) hiện tại được khuyến khích theo mẫu sau.

- Biến số: `out("rax") ret`
- Tham chiếu ngược con trỏ: `clobber(...)`

---

## `clobber(...)`

`clobber(...)` có thể nhận nhiều mục cùng lúc và có thể được sử dụng nhiều lần.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Các mục chính:

- Thanh ghi: `"rax"`, `"x0"`, v.v.
- Đặc biệt: `$0`, `$1` (chuẩn hóa nội bộ theo mục tiêu)

Trình biên dịch sẽ tự động thêm clobber cơ bản trong chế độ an toàn bảo thủ.
(`memory`, các chuỗi flags/cc, v.v.; Chủ yếu là `memory` trên nền RISC-V không phụ thuộc)

---

## Placeholder cho toán hạng (`$0`, `$1`, ...)

Sử dụng `$N` để tham chiếu toán hạng trong chuỗi lệnh.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Tham khảo:

- Dù sử dụng kiểu `%0`, nội bộ sẽ chuyển thành kiểu `$0`.

---

## Phạm vi hỗ trợ hiện tại cho toán hạng đầu vào

Giá trị `in(...)` hiện tại hỗ trợ các dạng sau.

- Biến số định danh
- Số nguyên kiểu literal
- Chuỗi kiểu literal
- `&identifier`
- `deref identifier`
- Số nguyên âm/ số thực kiểu literal

Các biểu thức phức hợp thường bị hạn chế, do đó khuyến khích truyền qua biến tạm thời khi cần.

---

## Lưu ý.

Inline assembly có thể phần nào vượt qua được sự bảo vệ của hệ thống kiểu.
Chỉ định thanh ghi sai, xung đột ràng buộc, hoặc thiếu clobber có thể dẫn đến tạo mã sai hoặc hành vi sai khi chạy.

Khuyến nghị:

- Xác định ABI và quy ước gọi hàm của mục tiêu trước tiên
- Quản lý nhập/xuất và clobber một cách rõ ràng
- Nếu truy cập trực tiếp vào bộ nhớ thì cùng khai báo `clobber("memory")`.
