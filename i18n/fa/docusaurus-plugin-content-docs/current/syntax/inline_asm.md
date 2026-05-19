---
sidebar_position: 7
---

# اسمبلی درون‌خطی

اسمبلی درون‌خطی Wave با بلوک `asm { ... }` نوشته می‌شود. این قابلیت برای کد سطح پایین مانند کرنل، بوت‌لودر UEFI، فراخوانی سیستم، port I/O و کنترل CPU است.

هدف‌های فعلی شامل Linux `x86_64`/`aarch64`، Darwin `x86_64`/`aarch64`، Windows GNU `x86_64` و freestanding `x86_64`/`aarch64`/`riscv64` هستند. هدف‌های 32-bit هنوز پشتیبانی نمی‌شوند.

## شکل پایه

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

خط‌های رشته‌ای دستورهای assembly هستند. `in(...)` ورودی‌ها، `out(...)` خروجی‌ها، و `clobber(...)` وضعیتی را که asm تغییر می‌دهد اعلام می‌کند.

## asm به‌صورت دستور

asm به‌صورت دستور زمانی استفاده می‌شود که مقدار expression لازم نباشد. می‌تواند چند خروجی داشته باشد.

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

## asm به‌صورت expression

asm به‌صورت expression یک مقدار تولید می‌کند و فعلاً دقیقاً یک `out(...)` می‌خواهد. `clobber("noreturn")` در expression asm ممنوع است.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## عملوندها و قیدها

عملوندها می‌توانند رجیستر مشخص یا کلاس قید داشته باشند. x86_64 از `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15` استفاده می‌کند؛ AArch64 از `x0` ... `x30` و `w0` ... `w30`؛ و RISC-V از `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. کلاس‌های مشترک `r`, `m`, `rm`, `i`, `ri`, `im`, `irm` هستند. یک رجیستر فیزیکی نمی‌تواند هم‌زمان operand و clobber باشد.

## قرارداد clobber

`clobber("memory")` یعنی asm ممکن است حافظه را بخواند یا بنویسد. `clobber("flags")` و `clobber("cc")` یعنی پرچم‌ها تغییر می‌کنند. هنگام استفاده از stack یا دستورهای call/return باید `clobber("stack")` نوشت. `clobber("nostack")` تعهد می‌دهد stack لمس نشود. `clobber("noreturn")` یعنی کنترل به بلوک فعلی برنمی‌گردد. `stack` و `nostack` قابل ترکیب نیستند.

## انضباط stack

asm معمولی نباید stack را تغییر دهد. `call`, `push`, `pop`, `ret`، استفاده مستقیم از `rsp`/`esp` یا `sp` و دستورهای مشابه به `clobber("stack")` نیاز دارند. با این حال stack pointer باید پیش از بازگشت بازیابی شود.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm بدون بازگشت

پرش‌های غیرمستقیم مانند `jmp rax`, `jmp r11`, `br x0`, یا `jr ra` به `clobber("noreturn")` نیاز دارند. statement asm با این clobber بلوک IR را با `unreachable` تمام می‌کند.

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

## برچسب‌های محلی

پرش به برچسب محلی داخل همان مسیر asm/control-flow باقی می‌ماند و به `noreturn` نیاز ندارد.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## مقصدهای خروجی

مقصدهای خروجی پایدار متغیرها و `deref` متغیرهای اشاره‌گر هستند. برای field یا array ابتدا در متغیر موقت بنویسید.

```wave
out("rax") value
out("rax") deref ptr
```

## محدودیت‌ها

inline asm همیشه دارای side effect فرض می‌شود. دست‌کاری پیچیده stack هنوز ممکن است رد شود. function pointer و نوع‌های صریح calling convention هنوز پایدار نیستند، بنابراین فراخوانی سرویس‌های UEFI فعلاً می‌تواند از asm wrapper استفاده کند.
