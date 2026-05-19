---
sidebar_position: 6
---

# Tham chiếu CLI `wavec`

`wavec` là compiler mức thấp, tương tự vai trò của `rustc` hoặc `cc`. Package resolution, lockfile, registry và workspace thuộc về công cụ cấp cao như Vex.

## Dạng cơ bản

```bash
wavec [global-options] <command> [command-options] [input...]
```

## Lệnh chính

`build <input...>` điều khiển compile, check, link và chạy tùy chọn bằng flags. `check <file>` là alias của `build <file> --emit=check`. `run <file>` là alias của `build <file> --run`. `print <item>` in capability của compiler như target, emit kind, input type và linker mặc định.

## Quy tắc input

`build` nhận một hoặc nhiều input. Phần mở rộng được suy luận tự động: `.wave` là Wave source, `.ll` là LLVM IR, `.bc` là bitcode, `.s` hoặc `.asm` là assembly, `.o` hoặc `.obj` là object file. `--input-type=<kind>` ép cùng một kiểu cho mọi input.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## Quy tắc emit

`--emit` hỗ trợ `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`. `check` là control mode, không phải artifact thường, nên chỉ được dùng một mình. Nếu emit `bin` cùng artifact khác, `-o` đặt tên binary cuối cùng; artifact trung gian theo `--out-dir` hoặc đường dẫn mặc định.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## Chạy output

`--run` chỉ hợp lệ khi tạo đúng một artifact `bin` có thể chạy. Không hợp lệ với `--shared` hoặc emit mode không chạy được. Tham số sau `--` được truyền cho executable tạo ra.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding và bare-metal

`--freestanding` dành cho kernel, bootloader, firmware và embedded target. Nó tắt link mặc định `libc`/`libm`, tắt red zone của backend và tạo code phù hợp môi trường không có runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## Điều khiển backend

Dùng `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, `-C no-default-libs` để kiểm soát compiler và linker.

## Truy vấn capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, `default-linker` giúp Vex kiểm tra compiler đã cài mà không cần đoán.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
