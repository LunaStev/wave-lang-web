---
sidebar_position: 4
---

# Lộ trình phát triển tích hợp Wave + Whale v2

## Toàn bộ giai đoạn

```matlab
pre-alpha → pre-beta → alpha → beta → rc → phát hành
```

---

## Giai đoạn Pre-Beta

> Mục tiêu: Hoàn thành frontend ngôn ngữ Wave + Triển khai toàn bộ chức năng sử dụng backend LLVM

### Đặc điểm chính

- Chỉ sử dụng LLVM (không có Whale)

- Không thêm ngữ pháp, chỉ triển khai thông số kỹ thuật hiện tại

- Ổn định cấu trúc tập trung frontend như thông báo lỗi, kiểm tra kiểu, phạm vi biến

### Phạm vi thực hiện

- Khai báo biến, xuất, thực hiện

- Định nghĩa và gọi hàm

- if / else if / else

- while / break / continue

- Xuất định dạng, chỉ định kiểu

- Thiết kế con trỏ (dạng `ptr<T>`)

- Thiết kế mảng (`array<T, N>`)

- Kiểm tra kiểu và AST cấu trúc

### Công nghệ sử dụng

- Rust (toàn bộ trình biên dịch Wave)

- LLVM (Tạo IR, thực hiện AOT)

- inkwell / llvm-sys

---

## Giai đoạn Alpha

> Mục tiêu: Bắt đầu triển khai Whale, sử dụng song song với LLVM / Bắt đầu triển khai backend dựa trên Whale

### Đặc điểm chính

- LLVM là backend mặc định

- Whale là backend tùy chọn

- Có thể chia nhánh với tùy chọn `--backend` khi chạy mã Wave

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Công việc liên quan đến Whale

- Thiết kế và định nghĩa cấu trúc IR của Whale (Instruction, Value, Block, v.v.)

- Thực hiện IR Generator cho Whale

- Trình tạo mã Whale (assembly hoặc nhị phân)

- Thực hiện kiểu chỉ có thể với Whale (`i1024`, con trỏ nâng cao, v.v.)

### Điểm kiểm tra

- Xuất Hello World với Whale

- Khai báo/ gán biến trong Whale

- Thực hiện công cụ gỡ lỗi IR của Whale

- Xử lý kiểu con trỏ trong Whale

- Tiến hành chuyển đổi Wave → Whale IR

---

## Giai đoạn Beta

> Mục tiêu: Chuyển hoàn toàn sang Whale, loại bỏ LLVM. Tối ưu hóa kết hợp Whale + Wave

### Đặc điểm chính

- Chỉ sử dụng Whale

- Loại bỏ toàn bộ LLVM (cả phụ thuộc và mô-đun)

- Trung tâm tối ưu hóa mã

- Từ IR → thực thi nhanh chóng và hiệu quả

### Phạm vi tối ưu hóa

- Thiết kế vòng tối ưu hóa Whale IR

- Cải thiện tốc độ tạo mã Whale

- Tất cả cú pháp của Wave được hỗ trợ hoàn toàn trong Whale

### Kiểm tra

- Kiểm tra đơn vị + bộ kiểm tra toàn diện

- Kiểm tra khả năng tương thích WSON, thư viện tiêu chuẩn

- Xác minh xây dựng Whale đa nền tảng

---

## Giai đoạn RC (Ứng cử viên phát hành)

> Mục tiêu: Bắt đầu khởi động Wave — Loại bỏ hoàn toàn mã Rust

### Đặc điểm chính

- Bắt đầu viết lại trình biên dịch Wave bằng Wave

- Thực thi mã Wave tự bản thân dựa trên Whale

- Whale bước vào giai đoạn tự lưu trữ

### Phạm vi công việc

- Viết lại trình tạo IR của Wave dựa trên Whale

- Loại bỏ Rust + Thay thế bằng mã Wave

- Viết thư viện std và core bằng Wave

- Khi khởi động thành công, trình biên dịch Wave gốc đầu tiên ra đời

---

## Giai đoạn phát hành (v0.0.1)

> Mục tiêu: Ra mắt chính thức / Cung cấp hệ sinh thái ngôn ngữ độc lập hoàn toàn dựa trên Whale

### Các thành phần

- Wave (ngôn ngữ và thư viện tiêu chuẩn)

- Whale (bộ công cụ biên dịch)

- Vex (trình quản lý gói)

- WSON (định dạng dữ liệu)

### Đặc điểm

- Trình biên dịch chỉ dành cho Wave hoàn chỉnh (Khởi động thành công)

- Hoàn tất tối ưu hóa Whale

- Thiết lập hệ thống xây dựng và triển khai Vex

- Bao gồm trình phân tích và tuần tự hóa WSON

- Có khả năng xây dựng đa hệ điều hành (`vex build --windows` etc)

---

## Chiến lược phát triển meta

| Chiến lược                    | Mô tả                                                                     |
| ----------------------------- | ------------------------------------------------------------------------- |
| Chiến lược tàu + đường        | Phát triển Whale đồng thời xây dựng backend của Wave tiến hành song song  |
| Chiến lược phân nhánh backend | Chọn LLVM/Whale với tùy chọn `--backend`, cấu trúc quan trọng trong alpha |
| Kế hoạch đảo ngược cấu trúc   | Kể từ sau rc, mã Wave biên dịch chính nó qua Whale                        |
