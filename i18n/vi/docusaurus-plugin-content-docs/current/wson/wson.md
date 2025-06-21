---
sidebar_position: 3
---

# Định Dạng Đối Tượng Tuần Tự Hóa của Wave (WSON)
WSON (Wave Serialized Object Notation) là định dạng tuần tự hóa dữ liệu mặc định của ngôn ngữ lập trình Wave. Nó được thiết kế để vượt qua các hạn chế của JSON, mang lại hiệu suất cao hơn và nhiều tính năng mạnh mẽ hơn. WSON giữ cấu trúc dễ đọc và dễ viết cho con người, đồng thời tối ưu hiệu năng để hỗ trợ trao đổi dữ liệu một cách an toàn và nhanh chóng trong nhiều môi trường khác nhau.

## Đặc điểm
### 1. Hệ thống kiểu dữ liệu nghiêm ngặt
WSON duy trì kiểu dữ liệu rõ ràng, loại bỏ sự không thể đoán trước do kiểu dữ liệu động của JSON gây ra. Điều này đảm bảo tính an toàn về kiểu trong quá trình tuần tự hóa và giải tuần tự hóa.

### 2. Hiệu suất cao
WSON được thiết kế với chi phí xử lý tối thiểu, giúp tăng tốc độ xử lý dữ liệu, đặc biệt hiệu quả khi làm việc với lượng dữ liệu lớn.

### 3. Thiết kế thân thiện với Wave
WSON được tích hợp chặt chẽ với ngôn ngữ Wave và được hỗ trợ trực tiếp bởi thư viện chuẩn của Wave.

### 4. Dễ đọc và dễ phân tích cú pháp (parsing)
WSON giữ cú pháp tương tự JSON nhưng cho phép cách biểu đạt ngắn gọn hơn, giúp dễ đọc, dễ chỉnh sửa và dễ phân tích cú pháp một cách hiệu quả.

### 5. Hỗ trợ cấu trúc dữ liệu phức tạp
WSON không chỉ hỗ trợ cặp khóa-giá trị đơn giản mà còn hỗ trợ mảng gốc, cấu trúc (struct), tuple và nhiều kiểu dữ liệu phức tạp khác, cho phép biểu diễn dữ liệu linh hoạt hơn.

## Ứng dụng
- Lưu trữ và truyền dữ liệu trong ứng dụng sử dụng Wave

- Giao tiếp mạng và định dạng dữ liệu cho API

- Lưu tệp cấu hình và dữ liệu

- Tuần tự hóa và giải tuần tự hóa dữ liệu số lượng lớn

## Kết luận
WSON phản ánh triết lý của ngôn ngữ Wave, hướng tới một giải pháp tuần tự hóa dữ liệu hiệu quả và mạnh mẽ. Nó khắc phục các điểm yếu của JSON trong khi vẫn giữ cú pháp trực quan, dễ sử dụng cho lập trình viên. Trong tương lai, WSON sẽ trở thành định dạng dữ liệu tiêu chuẩn trong hệ sinh thái Wave và mang lại hiệu suất vượt trội trong nhiều môi trường khác nhau.
