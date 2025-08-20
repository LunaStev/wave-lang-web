---
sidebar_position: 2
---

# Vex quản lý gói

## Tổng quan

Vex là một trình quản lý gói và hệ thống build dành riêng cho ngôn ngữ lập trình Wave.
Vex hỗ trợ toàn bộ quản lý dự án như quản lý phụ thuộc của mã nguồn, cài đặt build, chỉ định nền tảng mục tiêu, cài đặt và phân phối mô-đun.
Không xem xét khả năng tương thích với ngôn ngữ hoặc hệ thống bên ngoài, được thiết kế chỉ để hoạt động trong hệ sinh thái Wave.

## Mục tiêu thiết kế

Vex được thiết kế dựa trên các mục tiêu sau:

Thiết kế dành riêng cho Wave: Chỉ nhắm đến các dự án Wave, tối ưu hóa cho cú pháp, cấu trúc mô-đun và môi trường thực thi của Wave.

- Hệ thống lệnh trực quan: Được cấu hình để có thể thực hiện các tác vụ chính với một lệnh duy nhất mà không cần các script build phức tạp.
- Hỗ trợ đa mục tiêu: Có thể dễ dàng chuyển đổi mục tiêu build tùy theo hệ điều hành và kiến trúc.
- Quản lý cấu hình dựa trên WSON: Tất cả thông tin cấu hình dự án được xác định theo định dạng WSON (Wave Serialization Object Notation).
- Build và phân phối tĩnh: Tệp thực thi được build tĩnh, có thể phân phối độc lập mà không phụ thuộc vào runtime bên ngoài.