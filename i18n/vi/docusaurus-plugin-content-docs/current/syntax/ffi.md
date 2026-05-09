---
sidebar_position: 9
---

# FFI

Tài liệu này mô tả các quy tắc FFI (Giao diện hàm ngoại lai) để gọi các hàm được triển khai bên ngoài từ ngôn ngữ Wave.
Thông qua FFI, các chương trình Wave có thể tương tác trực tiếp với các thư viện bản địa (native library) được viết bằng các ngôn ngữ khác.

---

## Tóm tắt

FFI của Wave hoạt động dựa trên khai báo.
Các hàm bên ngoài không được triển khai trong mã Wave và chỉ cần chỉ định ABI (Giao diện nhị phân ứng dụng) mà hàm đó tuân theo.
Việc triển khai thực tế được giải quyết từ các thư viện bên ngoài trong giai đoạn liên kết.

FFI hoạt động bằng cách chỉ khai báo sự tồn tại của hàm trong thời gian biên dịch, và trong quá trình tạo tệp thực thi, linker sẽ kết nối thực tế với symbol đó.

---

## Khai báo extern

Các hàm bên ngoài được khai báo sử dụng từ khóa extern.
Trong Wave hiện tại, yêu cầu phải chỉ định ABI và **chỉ hỗ trợ `extern(c)`**.

```wave
extern(c) fun tên_hàm(các_tham_số...) -> kiểu_trả_về;
```

---

## Chỉ định ABI

Trong khai báo `extern`, cần chỉ rõ ABI.
ABI hiện tại được hỗ trợ là `c`.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Khai báo như `extern(rust)` có thể được phân tích cú pháp nhưng lỗi sẽ xảy ra ở giai đoạn phân tích ngữ nghĩa.

---

## Khai báo extern theo đơn vị hàm

Khi khai báo một hàm bên ngoài, bạn viết như sau.

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

Khai báo này ngụ ý rằng symbol `InitWindow` tuân theo C ABI tồn tại trong thư viện bên ngoài.

---

## Khai báo extern theo đơn vị khối

Khi có nhiều hàm bên ngoài sử dụng chung ABI, bạn có thể gom lại và khai báo dưới dạng khối.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Khai báo theo đơn vị khối hoàn toàn tương tự về mặt ý nghĩa với khai báo theo đơn vị hàm, và chỉ đơn giản là cú pháp để cải thiện khả năng đọc và cấu trúc.

---

## Chỉ định tên symbol

Trong một số ABI, tên hàm Wave và tên symbol liên kết thực tế có thể không trùng khớp.
Trong trường hợp này, bạn có thể nêu tên symbol thực tế mà hàm bên ngoài sẽ được liên kết bằng cách dùng chuỗi ký tự.

### Chỉ định symbol theo đơn vị hàm

```wave
extern(c, "puts")
fun rust_func(i32);
```

Khai báo này chỉ định việc sử dụng `puts` làm symbol liên kết thực tế khi gọi `rust_func`.

---

### Chỉ định symbol theo đơn vị khối

Trong khai báo theo đơn vị khối, tên symbol có thể được chỉ định riêng cho từng hàm theo sau chúng.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## Kiểu con trỏ

Con trỏ được biểu thị dưới dạng `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` tương ứng trực tiếp với con trỏ của ngôn ngữ bên ngoài, và quyền sở hữu cũng như vòng đời bộ nhớ không được quản lý trong Wave.

---

## Sử dụng cấu trúc

Cấu trúc có thể được sử dụng như là tham số hoặc giá trị trả về của hàm ngoại lai.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Khi sử dụng cấu trúc trong FFI, thứ tự trường được giữ nguyên như đã khai báo và tuân theo layout bộ nhớ cần thiết theo yêu cầu của ABI.

---

## Gọi hàm ngoại lai

Các hàm khai báo với `extern` được gọi theo cách thức tương tự như các hàm thông thường.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

Không có sự khác biệt cú pháp khi gọi; quy ước gọi và kết nối symbol được xử lý hoàn toàn bởi ABI và liên kết.

---

## Liên kết

Việc triển khai thực tế của hàm ngoại lai được cung cấp từ thư viện ngoại lai trong giai đoạn nối kết.
Trình biên dịch Wave tạo ra tệp đối tượng chứa lệnh gọi hàm đã khai báo ngoài, và linker giải quyết các symbol thông qua thư viện được chỉ định.

Cách chỉ định thư viện được thực hiện thông qua công cụ xây dựng và các tùy chọn CLI.

---

## Hạn chế

Wave không cung cấp các tính năng sau.

- Con trỏ hàm
- Hàm callback
- Quản lý bộ nhớ tự động
- Tích hợp xử lý ngoại lệ giữa các ngôn ngữ

Các tính năng này có thể được xử lý riêng biệt ở các phiên bản sau.
