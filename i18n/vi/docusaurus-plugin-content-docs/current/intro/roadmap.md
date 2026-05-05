---
sidebar_position: 4
---

# Lộ trình phát triển tích hợp Wave + Whale v2

Tài liệu này là lộ trình được sắp xếp thành từng giai đoạn về quá trình phát triển tích hợp của ngôn ngữ Wave và bộ công cụ biên dịch Whale.
Wave và Whale bắt đầu là những thành phần riêng biệt nhưng cuối cùng mục tiêu là hoàn toàn được tích hợp thành một hệ sinh thái ngôn ngữ độc lập.

Các giai đoạn phát triển tổng thể theo các bước sau.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → phát hành
```

Mỗi giai đoạn được tiến hành dựa trên kết quả của giai đoạn trước đó và tiền đề là sự phát triển một chiều, nghĩa là khi một giai đoạn hoàn thành thì không quay lại cấu trúc trước đó.

---

## Giai đoạn Pre-Beta

Mục tiêu của giai đoạn Pre-Beta là hoàn thiện phần front-end của ngôn ngữ Wave và thực hiện đầy đủ các chức năng của ngôn ngữ dựa trên back-end LLVM.
Trong giai đoạn này, Whale không được sử dụng, việc biên dịch và thực thi hoàn toàn được thực hiện thông qua LLVM.

Việc mở rộng cú pháp không được thực hiện trong giai đoạn này.
Mục tiêu chính là làm cho mọi yếu tố cú pháp hoạt động thực tế theo các đặc tả đã được định nghĩa sẵn.
Tập trung vào việc ổn định cấu trúc phần front-end như chất lượng thông báo lỗi, kiểm tra kiểu, xử lý phạm vi biến.

Phạm vi hiện thực bao gồm khai báo và xuất biến, các phép toán cơ bản, định nghĩa và gọi hàm, câu lệnh điều kiện (`if` / `else if` / `else`), cũng như vòng lặp (`while` / `break` / `continue`) đều được hoàn thành trong giai đoạn này.
Ngoài ra, giai đoạn này còn bao gồm thiết kế kiểu pointer dạng `ptr<T>`, định dạng xuất, chỉ định kiểu rõ ràng và thiết kế mảng dạng `array<T, N>`.

Trong giai đoạn này, trình biên dịch Wave được viết hoàn toàn bằng Rust và sử dụng inkwell và llvm-sys để tạo ra LLVM IR và thực hiện AOT.

---

## Giai đoạn Alpha

Mục tiêu của giai đoạn Alpha là giới thiệu Whale backend và thiết lập cấu trúc sử dụng song song cả LLVM và Whale.
LLVM vẫn được giữ nguyên là backend cơ bản, và Whale được thêm vào như một backend có thể chọn lựa sử dụng.

Khi thực thi mã Wave, có thể chọn backend là LLVM hoặc Whale thông qua tùy chọn `--backend`.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

Trong giai đoạn này, thiết kế và định nghĩa cấu trúc IR của chính Whale.
Sắp xếp các thành phần chính như Instruction, Value, Block và triển khai IR Generator biến đổi Wave AST thành Whale IR.

Ngoài ra, triển khai trình tạo mã cho Whale để có thể thực thi dưới dạng assembly hoặc nhị phân.
Các kiểu khó hoặc không hiệu quả để triển khai trong LLVM, chẳng hạn như kiểu số nguyên lớn `i1024` hoặc cấu trúc con trỏ nâng cao, được giới thiệu như chức năng dành riêng cho Whale trong giai đoạn này.

Tại điểm kiểm tra, backend Whale phải có thể in ra Hello World, và các công cụ như khai báo và gán biến, xử lý con trỏ, công cụ gỡ lỗi IR phải hoạt động bình thường.
Đây là giai đoạn thực hiện chuyển đổi từ Wave sang Whale IR.

---

## Giai đoạn Beta

Mục tiêu của giai đoạn Beta là chuyển đổi hoàn toàn sang Whale và loại bỏ sự phụ thuộc vào LLVM.
Từ giai đoạn này, việc biên dịch và thực thi Wave chỉ sử dụng Whale.

Sẽ loại bỏ toàn bộ các phụ thuộc và mô-đun liên quan đến LLVM, tối ưu hóa quá trình tạo mã và đường dẫn thực thi theo chuẩn Whale.
Nhiệm vụ chính là làm cho luồng từ tạo IR đến thực thi trở nên đơn giản và nhanh chóng.

Thiết kế các giai đoạn tối ưu hóa cho Whale IR, cải thiện tốc độ tạo mã và hiệu quả thực thi.
Tất cả ngữ pháp của Wave phải được hỗ trợ hoàn chỉnh trên nền tảng backend của Whale trong giai đoạn này.

Về mặt kiểm thử, thực hiện cả kiểm thử đơn vị và toàn bộ bộ kiểm thử, đồng thời kiểm tra sự tương thích của WSON và thư viện chuẩn, cũng như việc xây dựng Whale đa nền tảng.

---

## Giai đoạn RC (Ứng cử viên phát hành)

Mục tiêu của giai đoạn RC là bắt đầu bootstrapping cho Wave.
Từ giai đoạn này bắt đầu dần dần loại bỏ việc triển khai Rust cho trình biên dịch Wave, và bắt đầu viết lại trình biên dịch Wave bằng chính ngôn ngữ Wave.

Viết lại trình tạo Wave IR dựa trên Whale, thay thế logic cơ bản của trình biên dịch và thư viện std / core bằng mã Wave.
Thông qua quá trình này, Whale sẽ bước vào giai đoạn tự lưu trữ.

Khi khởi động thành công, trình biên dịch Wave bản địa đầu tiên sẽ ra đời.

---

## Giai đoạn phát hành (v0.0.1)

Giai đoạn Release có nghĩa là phát hành chính thức lần đầu tiên của Wave.
Tại thời điểm này, Wave và Whale sẽ cấu thành một hệ sinh thái ngôn ngữ độc lập hoàn toàn tích hợp.

Các thành phần của bản phát hành sẽ bao gồm ngôn ngữ Wave và thư viện chuẩn, bộ công cụ biên dịch Whale, trình quản lý gói Vex, và định dạng dữ liệu WSON.

Wave trong giai đoạn này phải có trình biên dịch được viết hoàn toàn bằng mã Wave, và việc tối ưu hóa Whale phải đã được hoàn thành.
Quy trình xây dựng và phân phối thông qua Vex được thiết lập và có thể xây dựng qua các hệ điều hành khác nhau như `vex build --windows`.

---

## Chiến lược phát triển meta

Phát triển Wave + Whale không chỉ đơn giản là tiến hành theo giai đoạn mà còn dựa trên một chiến lược rõ ràng.
Áp dụng chiến lược tàu+ray, trong đó phát triển Whale và cấu hình backend Wave đồng thời, để phát triển song song cấu trúc backend và thiết kế ngôn ngữ.

Trong giai đoạn Alpha, chiến lược phân nhánh backend thông qua tùy chọn `--backend` đóng vai trò quan trọng, cung cấp cơ sở để so sánh và xác minh trực tiếp giữa LLVM và Whale.

Sau RC, cấu trúc sẽ được đảo ngược, theo đó mã Wave sẽ biên dịch chính nó thông qua Whale và kế hoạch đảo ngược cấu trúc này sẽ chính thức triển khai.