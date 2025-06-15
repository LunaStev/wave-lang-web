---
sidebar_position: 4
---

# Lộ Trình Phát Triển Tích Hợp Wave + Whale v2

## Các Giai Đoạn Tổng Quan

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Giai Đoạn Pre-Beta

> Mục tiêu: Hoàn thiện frontend của ngôn ngữ Wave + triển khai đầy đủ chức năng sử dụng backend LLVM

### Đặc điểm chính
* Chỉ sử dụng LLVM (chưa có Whale)

* Không thêm cú pháp mới, chỉ triển khai theo đặc tả đã có

* Ổn định cấu trúc tập trung vào frontend: thông báo lỗi, kiểm tra kiểu, phạm vi biến, v.v.

### Phạm vi triển khai
* Khai báo biến, xuất giá trị, toán tử

* Định nghĩa và gọi hàm

* if / else if / else

* while / break / continue

* In có định dạng, khai báo kiểu rõ ràng

* Thiết kế con trỏ (`ptr<T>`)

* Thiết kế mảng (`array<T, N>`)

* Kiểm tra kiểu và cấu trúc AST

### Công nghệ sử dụng
* Rust (toàn bộ trình biên dịch Wave)

* LLVM (tạo IR, thực thi AOT)

* inkwell / llvm-sys

---

## Giai Đoạn Alpha

> Mục tiêu: Bắt đầu tích hợp Whale, sử dụng song song với LLVM / Bắt đầu triển khai backend Whale

### Đặc điểm chính
* LLVM là backend mặc định

* Whale là backend tùy chọn

* Có thể chọn backend bằng tuỳ chọn `--backend` khi chạy mã Wave

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Công việc liên quan đến Whale
* Thiết kế và định nghĩa cấu trúc IR của Whale (Instruction, Value, Block, v.v.)

* Triển khai trình tạo IR cho Whale

* Tạo trình tạo mã Whale (assembly hoặc nhị phân)

* Hỗ trợ các kiểu dữ liệu riêng cho Whale (như `i1024`, con trỏ nâng cao)

### Cột mốc
* In "Hello World" bằng Whale

* Khai báo/gán biến trong Whale

* Xây dựng công cụ gỡ lỗi IR Whale

* Xử lý kiểu con trỏ trong Whale

* Bắt đầu chuyển đổi Wave → Whale IR

---

## Giai Đoạn Beta

> Mục tiêu: Chuyển hoàn toàn sang Whale, loại bỏ LLVM. Tối ưu hóa sự kết hợp giữa Whale và Wave

### Đặc điểm chính
* Chỉ sử dụng Whale

* Loại bỏ hoàn toàn LLVM (bao gồm cả phụ thuộc và mô-đun)

* Tập trung vào tối ưu hóa mã

* Chuyển từ IR sang thực thi nhanh chóng và hiệu quả

### Phạm vi tối ưu hóa
* Thiết kế các pass tối ưu hóa cho Whale IR

* Cải thiện tốc độ tạo mã Whale

* Hỗ trợ đầy đủ cú pháp Wave trên Whale

### Kiểm thử
* Kiểm thử đơn vị + toàn bộ bộ kiểm thử

* Kiểm tra tương thích với WSON và thư viện chuẩn

* Xác nhận khả năng build đa nền tảng bằng Whale

---

## Giai Đoạn RC (Release Candidate)

> Mục tiêu: Bắt đầu bootstrapping Wave — loại bỏ hoàn toàn mã Rust

### Đặc điểm chính
* Bắt đầu viết lại trình biên dịch Wave bằng chính ngôn ngữ Wave

* Thực thi mã Wave dựa trên Whale

* Whale bước vào giai đoạn tự biên dịch (self-hosting)

### Phạm vi công việc
* Viết lại trình tạo IR Wave sử dụng Whale

* Xóa bỏ Rust và thay thế bằng mã Wave

* Viết thư viện std và core bằng Wave

* Khi bootstrapping thành công, trình biên dịch gốc Wave đầu tiên sẽ ra đời

---

## Giai Đoạn Phát Hành (v0.0.1)

> Mục tiêu: Phát hành chính thức / Cung cấp hệ sinh thái ngôn ngữ độc lập hoàn toàn dựa trên Whale

### Thành phần
* Wave (ngôn ngữ và thư viện chuẩn)

* Whale (toolchain trình biên dịch)

* Vex (trình quản lý gói)

* WSON (định dạng dữ liệu)

### Đặc điểm
* Trình biên dịch hoàn toàn bằng Wave (bootstrapping thành công)

* Whale được tối ưu hóa hoàn toàn

* Hệ thống build và triển khai bằng Vex hoàn chỉnh

* Bao gồm parser và serializer cho WSON

* Hỗ trợ build đa hệ điều hành (`vex build --windows` v.v.)

---

## Chiến Lược Meta Phát Triển

| Chiến lược                    | Mô tả                                                                 |
| ----------------------------- | --------------------------------------------------------------------- |
| Chiến lược "tàu + đường ray"  | Phát triển Whale song song với việc xây dựng backend cho Wave         |
| Chiến lược phân nhánh backend | Lựa chọn LLVM/Whale bằng tuỳ chọn `--backend`, quan trọng trong alpha |
| Kế hoạch đảo ngược cấu trúc   | Từ giai đoạn RC, Wave sẽ tự biên dịch chính nó thông qua Whale        |
