---
sidebar_position: 6
---

# Tham khảo CLI `wavec`

Tài liệu này giải thích chi tiết hoạt động của CLI **theo tiêu chuẩn triển khai hiện tại của trình biên dịch Wave (`wavec`)**.

Nguyên tắc cơ bản:

- `wavec` là trình biên dịch.
- Cài đặt/giải quyết gói (lockfile, registry, tải xuống) không phải là trách nhiệm của `wavec`.
- Phụ thuộc bên ngoài được truyền dưới dạng **tham số CLI tường minh** khi chạy `wavec`.

---

## 1. Dạng cơ bản

```bash
wavec [global-options] <command> [command-options]
```

Ví dụ:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Quy tắc phân tích cú pháp lệnh (quan trọng)

`wavec` quét **global option** từ toàn bộ các tham số trước, sau đó giải thích `<command>` từ các tham số còn lại.

Có nghĩa là, vị trí của global option là linh hoạt.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Cả 3 đều có hiệu lực.

Sử dụng `--` để dừng quét global option sau dấu và chuyển sang vùng lệnh.

```bash
wavec -- run main.wave
```

---

## 3. Lệnh

## 3.1 `run <file>`

Biên dịch và thực thi tập tin Wave.

```bash
wavec run hello.wave
```

Hoạt động:

1. Phân tích cú pháp và mở rộng import
2. Tạo LLVM IR
3. Liên kết nhị phân bản địa (`target/<file_stem>`)
4. Thực thi

Đặc điểm:

- `wavec` truyền mã thoát của chương trình thực thi.

---

## 3.2 `build <file>`

Tạo các tệp thực thi (exe).

```bash
wavec build app.wave
```

Nhị phân đầu ra:

- `target/<file_stem>`

## 3.3 Tùy chọn `build` (`-o`, `-c`)

Lệnh `build` có thể kiểm soát tên và định dạng của tệp đầu ra như một tùy chọn.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: chỉ định tên tệp đầu ra.
  - Mặc định (không có `-c`): chỉ định đường dẫn đầu ra của tệp thực thi
  - Kèm với `-c`: chỉ định đường dẫn đầu ra của tệp đối tượng
- `-c`: bỏ qua liên kết và chỉ tạo tệp đối tượng.
- Khi sử dụng `-c`, sẽ xuất đường dẫn tệp đối tượng ra stdout.

Hành động mặc định:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (xuất đường dẫn)

Ví dụ đối tượng kernel không phụ thuộc:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf`, `riscv64-unknown-none-elf` cũng có thể được sử dụng theo cách như vậy.

---

## 3.4 `cài đặt std`, `cập nhật std`

Lệnh cài đặt/cập nhật thư viện tiêu chuẩn.

```bash
wavec cài đặt std
wavec cập nhật std
```

---

## 3.5 `--trợ giúp`, `--phiên bản`

```bash
wavec --trợ giúp
wavec --phiên bản
```

---

## 4. Tùy chọn toàn cầu

## 4.1 Tối ưu hóa

Giá trị cho phép:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Ví dụ:

```bash
wavec -O3 chạy main.wave
```

---

## 4.2 Xuất gỡ lỗi

```bash
wavec --gỡ lỗi-wave=tokens,ast,ir chạy main.wave
```

Các mục cho phép:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Tùy chọn liên kết

```bash
wavec dựng app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` hoặc `--link <lib>`
- `-L<path>` hoặc `-L <path>`

`wavec` sẽ truyền nội bộ dưới dạng `-l<lib>`, `-L<path>` khi liên kết.

---

## 4.4 Tùy chọn phụ thuộc bên ngoài (quan trọng)

Tùy chọn để phân tích import bên ngoài (`pkg::...`).

### `--dep-root <dir>`

Thêm ứng cử viên cho thư mục gốc của gói.

```bash
wavec chạy app.wave --dep-root .vex/dep
```

Khi tìm gói `math`:

- Kiểm tra `.vex/dep/math`

Có thể chỉ định nhiều lần:

```bash
wavec chạy app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Gắn tên gói vào một đường dẫn cụ thể.

```bash
wavec chạy app.wave --dep math=.vex/dep/math
```

Quy tắc:

- Định dạng `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` phải có dạng `name=path`
- Lỗi nếu chỉ định trùng tên gói

---

## 4.5 Tùy chọn backend (`--llvm`, `--whale`)

Các tùy chọn điều khiển backend chỉ được diễn giải sau `--llvm`.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Các mục hô trợ (tóm tắt):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (có thể lặp lại)
- `-C link-sysroot=<path>`
- `-C no-default-libs`

Các mục tiêu chính hiện tại theo tiêu chuẩn `wavec print target-list`:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` hiện là cờ dummy đã được đặt trước, pipeline backend thực tế chưa được triển khai (TODO).

---

## 5. Quy tắc diễn giải nhập khẩu

Nhập khẩu Wave được phân chia thành 3 loại sau.

1. nhập khẩu cục bộ
2. nhập khẩu std
3. nhập khẩu gói ngoại vi

## 5.1 Cục bộ

```wave
import("foo");
import("path/to/mod.wave");
```

Tìm kiếm `<path>.wave` trong thư mục tiêu chuẩn.

## 5.2 std

```wave
import("std::io::format");
```

Sử dụng đường dẫn `~/.wave/lib/wave/std/...`.

## 5.3 Gói ngoại vi

```wave
import("math::add");
import("json::parser::core");
```

Hình thức:

- Cần ít nhất 2 đoạn `package::module`

Thứ tự xác định gốc gói:

1. Ánh xạ rõ ràng bằng `--dep name=path`
2. Tìm kiếm `<root>/<package>` trong mỗi `--dep-root`

Nếu cùng một gói được tìm thấy đồng thời trong nhiều dep-root:

- Không tự động lựa chọn, dan phát sinh lỗi mơ hồ
- Cần cố định bằng `--dep name=path`

Thứ tự khám phá tệp mô-đun:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Ví dụ:

```wave
import("math::core::vec");
```

Khám phá:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Ví dụ thực tế về nhập khẩu ngoại vi

### 6.1 dep-root đơn nhất

Thư mục:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Mã:

```wave
import("math::add");
```

Thực thi:

```bash
wavec chạy main.wave --dep-root .vex/dep
```

### 6.2 Giải quyết mơ hồ

```bash
wavec chạy main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

Nếu có `math` ở cả hai bên, sẽ xảy ra lỗi. Sửa như dưới đây.

```bash
wavec chạy main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Tách biệt vai trò với Vex

Cấu trúc khuyến nghị:

- `wavec`: biên dịch/liên kết/thực thi + phân giải phụ thuộc rõ ràng
- `vex`: cài đặt/quản lý phụ thuộc sau đó `wavec ... --dep-root ... --dep ...` gọi

Ví dụ:

```bash
# Thực thi vex nội bộ
wavec chạy main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Mô hình này giữ cho trình biên dịch đơn giản và quyết định, trong khi trình quản lý gói đảm nhiệm tự động hóa.

---

## 8. Tham khảo nhanh

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
