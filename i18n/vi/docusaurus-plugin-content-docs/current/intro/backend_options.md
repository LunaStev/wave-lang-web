---
sidebar_position: 7
---

# Tùy chọn backend

Các tùy chọn này điều khiển LLVM backend và linker path mà `wavec` sử dụng.

## Tùy chọn quan trọng

`--target=<triple>` chọn LLVM target. `--cpu`, `--features`, `--abi` tinh chỉnh codegen. `--sysroot` ảnh hưởng đường tìm kiếm compile/link. Các `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...` điều khiển linker. `-C no-default-libs` tắt link tự động `libc`/`libm`.

## Chính sách freestanding

`--freestanding` giả định không có hosted C runtime. Nó tắt thư viện mặc định, tắt red zone, tạo IR kiểu no-unwind và ưu tiên static relocation cho freestanding target nếu không override.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Đường dẫn UEFI

UEFI dùng PE/COFF, không phải SysV ELF. Nên tạo COFF object bằng `--target x86_64-pc-windows-gnu --freestanding --emit=obj`, rồi link bằng `lld-link` với `/subsystem:efi_application`, `/entry:<symbol>`, `/machine:x64`, `/nodefaultlib`.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## Truy vấn capability

Công cụ cấp cao nên query `wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker` thay vì hard-code giả định.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
