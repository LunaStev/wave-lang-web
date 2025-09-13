---
sidebar_position: 7
---

# Hợp ngữ nội tuyến

## Giới thiệu

Tài liệu này nói về hợp ngữ nội tuyến của ngôn ngữ Wave.
Inline assembly là một trong những tính năng do Wave cung cấp, cho phép tiếp cận trực tiếp đến điều khiển phần cứng cấp thấp, trong khi vẫn duy trì sự tiện lợi của ngôn ngữ cấp cao.

Nói cách khác, nó cho phép thao tác thanh ghi, truy cập bộ nhớ trực tiếp, thực hiện lệnh đặc biệt mà mã Wave thông thường khó xử lý, và được sử dụng khi cần tối ưu hóa hiệu năng hoặc thực hiện công việc phụ thuộc phần cứng.

---

## Cú pháp cơ bản

```wave
asm {
    "Lệnh Assembly"          // Mã lệnh Assembly thực tế (một lệnh trên một dòng)
    ...
    in("Thanh ghi") giá trị         // Ánh xạ thanh ghi đầu vào
    out("Thanh ghi") biến      // Ánh xạ thanh ghi đầu ra
}
```

### Thành phần cú pháp

1. Lệnh Assembly
   - Được viết dưới dạng chuỗi `"..."`, là lệnh Assembly cấp thấp thực thi trên CPU thực tế.
   - Có thể viết nhiều dòng, và mỗi dòng một lệnh.
   - Ví dụ:
        ```wave
        "mov rax, 1"
        "syscall"
        ```

2. `in("Thanh ghi") giá trị`
   - Nạp giá trị của biến (hoặc biểu thức) vào thanh ghi chỉ định.
   - Ví dụ:
        ```wave
        in("rdi") s
        ```
     -> Đặt giá trị của biến `s` vào thanh ghi đối số syscall đầu tiên `rdi` theo quy ước x86-64.

3. `out("Thanh ghi") biến`
   - Lấy giá trị từ thanh ghi chỉ định vào biến Wave.
   - Ví dụ:
        ```wave
        out("rax") ret
        ```
     -> Lưu giá trị của thanh ghi `rax`, nơi lưu trữ giá trị trả về của `syscall`, vào biến `ret`.

---

## Ví dụ đơn giản

```wave
fun main() {
    var msg_ptr: ptr<i8> = "Xin chào từ syscall!\n";
    var ret_val: i64;

    asm {
        "mov rax, 1"
        "syscall"
        in("rdi") 1
        in("rsi") msg_ptr
        in("rdx") 20
        out("rax") ret_val
    }
}
```

---

## Lưu ý.

- Inline assembly bỏ qua tính ổn định kiểu của Wave, do đó khi sử dụng ngôn ngữ lắp ráp sai, có thể dẫn đến việc chương trình bị dừng bất thường hoặc có hành vi không xác định.
- Ánh xạ `in`, `out` được kiểm tra tại thời gian biên dịch, nhưng không đảm bảo tính hợp lệ của bản thân lệnh.
