---
sidebar_position: 1
---

# Ngữ pháp

Tài liệu này giải thích về toàn bộ cú pháp của ngôn ngữ lập trình Wave.
Vì Wave hiện là một ngôn ngữ đang phát triển, có thể một số cú pháp và tính năng chưa được hoàn thiện hoặc có khả năng thay đổi trong tương lai.
Tuy vậy, tài liệu này được soạn thảo nhằm mục đích giúp người đọc hiểu về cấu trúc cú pháp và khái niệm chính mà Wave muốn hướng tới vào thời điểm hiện tại.

Thông qua tài liệu này, người đọc có thể nắm rõ trạng thái hiện tại của Wave cũng như có cái nhìn tổng quát về hướng mà ngôn ngữ đang được thiết kế và phát triển.

Wave được thiết kế như một ngôn ngữ kết hợp giữa kiểm soát cấp thấp và trừu tượng hóa cấp cao.
Đặt mục tiêu thiết kế để có thể được sử dụng rộng rãi từ các lĩnh vực thấp cấp như lập trình hệ thống đến các ứng dụng cấp cao như phát triển web, trí tuệ nhân tạo và blockchain.
Để làm được điều này, Wave áp dụng cú pháp và cấu trúc không hy sinh năng suất, nhưng vẫn đảm bảo được hiệu suất và quyền kiểm soát.

Ngoài ra, Wave được thiết kế hướng đến một thư viện chuẩn mạnh mẽ, cùng với hệ thống xây dựng và công cụ tích hợp. Nhờ đó, các lập trình viên có thể tập trung nhiều hơn vào việc triển khai logic cốt lõi mà không mất thời gian vào việc cấu hình phức tạp.

Cú pháp của Wave có nhiều phần tương tự với C và Rust, nhưng nó không nhằm mục tiêu chỉ để sao chép.
Nó được tái cấu trúc dựa trên các yếu tố cú pháp quen thuộc, đặt mục tiêu giúp người dùng học ngôn ngữ nhanh chóng và sử dụng nó một cách hiệu quả trong phát triển thực tế.
Hệ thống loại rõ ràng, hoạt động có thể dự đoán và cú pháp thể hiện ý định của mã là những tiêu chí thiết kế quan trọng của nó.

Trong tài liệu này, chúng tôi giới thiệu các cú pháp cơ bản của Wave và các chức năng ngôn ngữ chủ chốt kèm theo ví dụ thực tế.
Phần câu lệnh điều khiển bao gồm câu lệnh `if`, `while`/`for` cùng với câu lệnh `match`.
Mỗi phần sẽ giải thích từng yếu tố ngữ pháp riêng biệt, và toàn bộ tài liệu được tổ chức để giúp người đọc hiểu cấu trúc và triết lý thiết kế của ngôn ngữ Wave.