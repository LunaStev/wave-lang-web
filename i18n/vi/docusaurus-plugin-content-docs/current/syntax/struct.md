---
sidebar_position: 8
---

# Cấu trúc

## Tóm tắt

Cấu trúc trong ngôn ngữ Wave là một yếu tố ngữ pháp cốt lõi để khai báo loại dữ liệu do người dùng định nghĩa.
Bằng cách sử dụng cấu trúc, bạn có thể kết hợp các giá trị của các loại khác nhau thành một đơn vị logic duy nhất, từ đó mô hình hóa các cấu trúc dữ liệu phức tạp một cách rõ ràng và an toàn.

Cấu trúc trong Wave hoạt động như kiểu giá trị (value type).
Tất cả các trường phải có một kiểu rõ ràng và tất cả các trường phải được khởi tạo khi một thể hiện cấu trúc được tạo ra.
Thông qua các quy tắc này, trạng thái của cấu trúc luôn được duy trì ở dạng đầy đủ và có thể dự đoán được.
--------------------------------------------------------------------------------------------------------------------------

## Cú pháp khai báo cấu trúc

Cấu trúc được khai báo bằng từ khóa `struct`.
Tên của cấu trúc sử dụng ký pháp Pascal (PascalCase), và nội dung cấu trúc có thể định nghĩa một hoặc nhiều trường.

Các trường được khai báo theo dạng `tên: loại;`, và mỗi khai báo trường phải được kết thúc bằng dấu chấm phẩy.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

Trong khai báo cấu trúc, thứ tự các trường được viết ra sẽ giống với thứ tự bố trí bộ nhớ.
Chỉ có thể khai báo trường bên trong cấu trúc, không thể bao gồm hàm hoặc phương thức.
Phần logic hoạt động được định nghĩa riêng bên ngoài cấu trúc.
------------------------------------------------------------------------------

## Cú pháp tạo cấu trúc

Cấu trúc được tạo ra dưới dạng literal sử dụng tên cấu trúc.
Literal cấu trúc là `StructName { TênTrường: Giá trị; ... Viết theo dạng `}.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

Khi tạo cấu trúc, tất cả các trường đã định nghĩa phải được khởi tạo đầy đủ, nếu thiếu dù chỉ một trường, trình biên dịch sẽ báo lỗi.

Trong quá trình khởi tạo, thứ tự của các trường không nhất thiết phải khớp với thứ tự khai báo của cấu trúc, nhưng kiểu của giá trị được truyền vào mỗi trường phải khớp chính xác với loại đã định rõ trong cấu trúc.
Trong Wave, quá trình khởi tạo trường cấu trúc không cho phép chuyển đổi kiểu ẩn.

---

## Cú pháp truy cập trường cấu trúc

Các trường của cấu trúc được truy cập thông qua ký pháp dấu chấm.
Cả hai loại truy cập trường, đọc và ghi, đều sử dụng cùng một cú pháp.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

Nếu bạn cố gắng sử dụng một tên trường không tồn tại, sẽ xảy ra lỗi trong giai đoạn biên dịch.
Vì cấu trúc là kiểu giá trị, nên khi gán toàn bộ cấu trúc hoặc truyền cấu trúc làm tham số hàm, tất cả các trường bên trong cấu trúc cũng sẽ bị sao chép theo.

---

## Cú pháp định nghĩa phương thức cấu trúc

Ngôn ngữ Wave không định nghĩa phương thức trực tiếp bên trong cấu trúc.
Thay vào đó, sử dụng từ khóa `proto` để khai báo một tập hợp các phương thức liên kết với cấu trúc.

Khối `proto` là vùng chứa các hàm thuộc về một cấu trúc cụ thể, và các hàm được định nghĩa trong khối này được sử dụng giống như các phương thức của cấu trúc đó.

Các phương thức nhận thể hiện cấu trúc qua tham số đầu tiên là `self`.
`self` tượng trưng cho toàn bộ giá trị của cấu trúc và được truyền đi theo phương thức sao chép giá trị.

```wave
proto Box {
    fun print(self) {
        println("size={}, weight={}", self.size, self.weight);
    }

    fun added_size(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

Khối `proto` không nhất thiết phải nằm cùng tệp với khai báo cấu trúc và bạn có thể phân bổ định nghĩa các phương thức cho cùng một cấu trúc qua nhiều khối `proto`.

Phương thức được gọi bằng ký pháp dấu chấm và hoạt động theo cách tương tự như gọi hàm thông thường.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Sử dụng cấu trúc như là tham số hàm

Cấu trúc khi được truyền vào hàm thì sẽ được xử lý theo phương thức sao chép giá trị.
Dù có chỉnh sửa các trường của cấu trúc trong nội bộ hàm, nó cũng không ảnh hưởng đến thể hiện của cấu trúc ở phía gọi.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

Ngay cả khi cấu trúc được sử dụng làm giá trị trả về của hàm, việc sao chép giá trị này vẫn xảy ra.
Cách hoạt động này đảm bảo cho tính bất biến của cấu trúc và luồng dữ liệu có thể dự đoán được.

---

## Cấu trúc lồng ghép (Nested Struct)

Trong Wave, có thể sử dụng cấu trúc khác làm loại trường của cấu trúc.
Vì cấu trúc là kiểu hoàn chỉnh, bạn có thể tự do lồng ghép bằng cách chứa một cấu trúc khác bên trong một cấu trúc.

```wave
struct Position {
    x: i32;
    y: i32;
}

struct Player {
    name: str;
    pos: Position;
}
```

Trường của cấu trúc lồng ghép được truy cập bằng cách dùng liên tiếp ký pháp dấu chấm.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

Có thể viết lồng ghép thêm một literal cấu trúc khác bên trong literal cấu trúc và trong trường hợp này, tất cả các quy tắc khởi tạo trường đều áp dụng như nhau.

---

## Mảng cấu trúc

Cấu trúc có thể được sử dụng làm loại phần tử của mảng.
Cú pháp mảng của Wave sử dụng dạng `array<kiểu, chiều dài>`, và kiểu cấu trúc cũng có thể được chỉ định như vậy.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

Khi truy cập phần tử của mảng cấu trúc, bạn sử dụng chỉ số mảng trước, sau đó truy cập trường trong nội bộ cấu trúc thông qua ký pháp dấu chấm.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Khả năng thực hiện các phép toán cơ bản trên cấu trúc

Do cấu trúc trong Wave là kiểu định nghĩa bởi người dùng, nên nó không tự động tham gia vào các phép toán số học hay so sánh.

Nếu cần so sánh đồng nhất, sắp xếp, hashing, tính toán số hoặc các toán tử khác với cấu trúc, bạn phải định nghĩa rõ ràng các thao tác đó thông qua khối `proto`.
Wave không cung cấp các toán tử ngầm định cho cấu trúc, và nguyên tắc là tất cả các thao tác phải được định nghĩa rõ ràng.