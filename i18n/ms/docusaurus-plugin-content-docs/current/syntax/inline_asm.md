---
sidebar_position: 7
---

# Himpunan sebaris

Himpunan sebaris Wave ditulis dengan blok `asm { ... }`. Ia digunakan untuk kod aras rendah seperti kernel, pemuat but UEFI, panggilan sistem, port I/O dan kawalan CPU.

Sasaran semasa ialah Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, dan freestanding `x86_64`/`aarch64`/`riscv64`. Sasaran 32-bit belum disokong.

## Bentuk asas

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Baris rentetan ialah arahan assembly. `in(...)` mengisytiharkan input, `out(...)` output, dan `clobber(...)` keadaan yang diubah oleh asm.

## asm sebagai pernyataan

asm sebagai pernyataan digunakan apabila nilai ekspresi tidak diperlukan. Ia boleh mempunyai beberapa output.

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

## asm sebagai ekspresi

asm sebagai ekspresi menghasilkan nilai dan buat masa ini memerlukan tepat satu `out(...)`. `clobber("noreturn")` dilarang dalam asm ekspresi.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operand dan kekangan

Operand boleh menggunakan daftar khusus atau kelas kekangan. x86_64 menggunakan `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 menggunakan `x0` ... `x30` dan `w0` ... `w30`; RISC-V menggunakan `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. Kelas umum ialah `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. Satu daftar fizikal tidak boleh menjadi operand dan clobber serentak.

## Kontrak clobber

`clobber("memory")` bermaksud asm boleh membaca atau menulis memori. `clobber("flags")` dan `clobber("cc")` bermaksud flag keadaan diubah. `clobber("stack")` diperlukan apabila stack atau arahan call/return digunakan. `clobber("nostack")` menjanjikan stack tidak disentuh. `clobber("noreturn")` bermaksud kawalan tidak kembali ke blok semasa. `stack` dan `nostack` tidak boleh digabungkan.

## Disiplin stack

asm biasa tidak patut mengubah stack. `call`, `push`, `pop`, `ret`, penggunaan terus `rsp`/`esp` atau `sp`, dan arahan seumpamanya memerlukan `clobber("stack")`. Walaupun begitu, stack pointer mesti dipulihkan sebelum kembali.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm tanpa kembali

Lompatan tidak langsung seperti `jmp rax`, `jmp r11`, `br x0`, atau `jr ra` memerlukan `clobber("noreturn")`. asm pernyataan dengan clobber ini menamatkan blok IR dengan `unreachable`.

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

## Label tempatan

Lompatan ke label tempatan kekal dalam laluan asm/control-flow yang sama dan tidak memerlukan `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Sasaran output

Sasaran output stabil ialah pemboleh ubah dan `deref` pemboleh ubah penunjuk. Untuk field atau array, tulis ke pemboleh ubah sementara dahulu.

```wave
out("rax") value
out("rax") deref ptr
```

## Had

inline asm sentiasa dianggap mempunyai side effect. Manipulasi stack yang kompleks masih boleh ditolak. Function pointer dan jenis calling convention eksplisit belum stabil, jadi panggilan perkhidmatan UEFI masih boleh menggunakan asm wrapper buat masa ini.
