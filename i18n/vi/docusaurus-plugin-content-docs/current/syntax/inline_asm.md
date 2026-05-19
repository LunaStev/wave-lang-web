---
sidebar_position: 7
---

# Hợp ngữ nội tuyến

Hợp ngữ nội tuyến của Wave được viết bằng khối `asm { ... }`. Nó dành cho mã mức thấp như kernel, bootloader UEFI, syscall, port I/O và điều khiển CPU.

Các target hiện tại gồm Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64` và freestanding `x86_64`/`aarch64`/`riscv64`. Target 32-bit chưa được hỗ trợ.

## Dạng cơ bản

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Các dòng chuỗi là lệnh hợp ngữ. `in(...)` khai báo đầu vào, `out(...)` khai báo đầu ra, và `clobber(...)` khai báo trạng thái mà asm sửa đổi.

## asm dạng câu lệnh

asm dạng câu lệnh dùng khi không cần giá trị biểu thức. Nó có thể có nhiều đầu ra.

```wave
let mut ret: i64 = 0;
asm {
    "mov rax, 39"
    "syscall"
    out("rax") ret
    clobber("memory")
    clobber("flags")
}
```

## asm dạng biểu thức

asm dạng biểu thức tạo ra một giá trị và hiện yêu cầu đúng một `out(...)`. `clobber("noreturn")` bị cấm trong asm dạng biểu thức.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Toán hạng và ràng buộc

Toán hạng có thể dùng thanh ghi cụ thể hoặc lớp ràng buộc. x86_64 dùng `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 dùng `x0` ... `x30` và `w0` ... `w30`; RISC-V dùng `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. Các lớp chung là `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Một thanh ghi vật lý không thể vừa là toán hạng vừa là clobber.

## Hợp đồng clobber

`clobber("memory")` nghĩa là asm có thể đọc hoặc ghi bộ nhớ. `clobber("flags")` và `clobber("cc")` nghĩa là cờ điều kiện bị thay đổi. `clobber("stack")` cần thiết khi dùng stack hoặc lệnh call/return. `clobber("nostack")` cam kết không dùng stack. `clobber("noreturn")` nghĩa là điều khiển không quay lại block hiện tại. Không thể kết hợp `stack` và `nostack`.

## Kỷ luật stack

asm thông thường không được sửa stack. `call`, `push`, `pop`, `ret`, dùng trực tiếp `rsp`/`esp` hoặc `sp`, và các lệnh tương tự cần `clobber("stack")`. Dù vậy, stack pointer vẫn phải được khôi phục trước khi trả về.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm không quay lại

Các nhảy gián tiếp như `jmp rax`, `jmp r11`, `br x0`, hoặc `jr ra` cần `clobber("noreturn")`. asm dạng câu lệnh có clobber này kết thúc block IR bằng `unreachable`.

```wave
fun jump_to_kernel(entry: u64, boot_info: ptr<u8>, stack_top: u64) {
    asm {
        "mov rsp, rdx"
        "and rsp, -16"
        "mov rdi, rcx"
        "jmp rbx"
        in("rbx") entry
        in("rcx") boot_info
        in("rdx") stack_top
        clobber("stack")
        clobber("noreturn")
    }
}
```

## Nhãn cục bộ

Nhảy tới nhãn cục bộ vẫn nằm trong cùng đường asm/control-flow nên không cần `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Đích đầu ra

Đích đầu ra ổn định là biến và `deref` của biến con trỏ. Với field hoặc array, hãy ghi vào biến tạm trước.

```wave
out("rax") value
out("rax") deref ptr
```

## Giới hạn

inline asm luôn được xem là có side effect. Thao tác stack phức tạp vẫn có thể bị từ chối. Function pointer và kiểu calling convention tường minh chưa ổn định, vì vậy lời gọi dịch vụ UEFI hiện vẫn có thể dùng asm wrapper.
