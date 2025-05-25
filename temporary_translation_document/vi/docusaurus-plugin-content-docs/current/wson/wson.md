---
sidebar_position: 3
---

# Notation Đối Tượng Chuỗi Wave (WSON)
WSON (Wave Serialized Object Notation) là định dạng chuỗi dữ liệu mặc định cho ngôn ngữ lập trình Wave, được thiết kế để vượt qua các hạn chế của JSON truyền thống và cung cấp tính năng và hiệu suất vượt trội. WSON tối đa hóa hiệu suất trong khi vẫn duy trì cấu trúc dễ đọc và dễ viết cho con người, cho phép trao đổi dữ liệu nhanh chóng và an toàn trong các môi trường khác nhau.

## Đặc điểm
### 1. Hệ thống kiểu chặt chẽ
WSON duy trì các kiểu dữ liệu rõ ràng, loại bỏ sự không chắc chắn do kiểu động của JSON. Điều này đảm bảo an toàn kiểu khi chuỗi hóa và giải chuỗi dữ liệu.

### 2. Hiệu suất cao
WSON được thiết kế với chi phí tối thiểu, mang lại tốc độ xử lý dữ liệu nhanh. Điều này đặc biệt hiệu quả khi chuỗi hóa một lượng lớn dữ liệu.

### 3. Thiết kế thân thiện với Wave
WSON được thiết kế để tích hợp hoàn hảo với ngôn ngữ lập trình Wave và được hỗ trợ natively bởi thư viện chuẩn của Wave.

### 4. Dễ đọc và dễ phân tích
Mặc dù vẫn giữ lại cú pháp giống như JSON, WSON cho phép các biểu thức ngắn gọn hơn, giúp người dùng dễ đọc và sửa đổi. Ngoài ra, nó được tối ưu hóa cho phân tích dữ liệu hiệu quả.

### 5. Hỗ trợ nhiều cấu trúc dữ liệu
WSON không chỉ hỗ trợ các cặp khóa-giá trị đơn giản mà còn hỗ trợ các cấu trúc dữ liệu phức tạp như mảng bản địa, cấu trúc và tuple, giúp thể hiện dữ liệu một cách linh hoạt hơn.

## Các trường hợp sử dụng
* Lưu trữ và truyền tải dữ liệu cho các ứng dụng dựa trên Wave

* Định dạng dữ liệu cho giao tiếp mạng và API

* Lưu trữ tệp và định dạng tệp cấu hình

* Chuỗi hóa và giải chuỗi dữ liệu lớn

## Kết luận
WSON phản ánh triết lý của ngôn ngữ Wave với mục tiêu cung cấp chuỗi dữ liệu hiệu quả và mạnh mẽ hơn. Nó khắc phục các hạn chế của JSON truyền thống trong khi vẫn duy trì cú pháp trực quan, giúp các nhà phát triển dễ dàng áp dụng. Trong tương lai, WSON sẽ trở thành định dạng dữ liệu chuẩn trong hệ sinh thái Wave và cung cấp hiệu suất mạnh mẽ trong nhiều môi trường khác nhau.