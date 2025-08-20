---
sidebar_position: 3
---

# Bộ công cụ biên dịch Whale

## Tổng quan

Whale là bộ công cụ biên dịch dành riêng cho ngôn ngữ lập trình Wave.
Whale chịu trách nhiệm toàn bộ quá trình phân tích, tối ưu hóa và chuyển đổi mã nguồn viết bằng Wave thành binary cho nền tảng mục tiêu.
Bộ công cụ này được thiết kế dành riêng cho ngôn ngữ Wave, không xem xét tích hợp với các công cụ biên dịch hoặc ngôn ngữ khác.

## Mục tiêu thiết kế

Các mục tiêu thiết kế chính của Whale là:

- Hỗ trợ riêng cho Wave: Whale chỉ hỗ trợ ngôn ngữ Wave, không xem xét tích hợp với ngôn ngữ khác.
- Cấu trúc mô-đun: Mỗi chức năng được cấu thành từ các mô-đun độc lập, có thể thêm hoặc loại bỏ theo nhu cầu.
- Sử dụng IR độc lập: Whale không sử dụng các IR bên ngoài như LLVM IR, mà định nghĩa IR trung gian riêng.
- Hỗ trợ đa nền tảng mục tiêu: Có thể build cho nhiều loại môi trường không phân biệt hệ điều hành và kiến trúc phần cứng.
- Kiểm soát chính xác: Được cấu hình để nhà phát triển có thể điều khiển chi tiết toàn bộ quá trình biên dịch.
- Loại bỏ phụ thuộc bên ngoài: Whale không phụ thuộc vào runtime hoặc công cụ biên dịch C/C++ bên ngoài.

## Hỗ trợ mục tiêu

Whale đặt mục tiêu hỗ trợ các môi trường mục tiêu như sau:

- Hệ điều hành:
    - Linux
    - Windows
    - macOS
    - UEFI (không bao gồm BIOS)
    - WaveOS (Hệ điều hành riêng)
- Kiến trúc:
    - x86_64 (AMD64)
    - ARM64
    - Khác có thể mở rộng thông qua việc thêm mô-đun

## Liên kết bên ngoài (FFI)

Whale được thiết kế để có thể hỗ trợ FFI (Giao diện chức năng nước ngoài) về mặt kỹ thuật,
nhưng không được khuyến nghị theo triết lý của Wave và không được cung cấp tiêu chuẩn.
Wave được thiết kế để có thể thực hiện mọi chức năng trong ngôn ngữ riêng của mình.

## Khả năng mở rộng

Whale có thể mở rộng theo các phương thức sau:

- 새로운 운영체제 또는 아키텍처에 대한 모듈 추가
- 사용자 정의 최적화 알고리즘 삽입
- 빌드 프로필 및 링커 설정의 커스터마이징
- 자체 실행 포맷 정의