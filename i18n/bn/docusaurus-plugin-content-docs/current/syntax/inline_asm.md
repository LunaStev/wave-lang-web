---
sidebar_position: 7
---

# ইনলাইন অ্যাসেম্বলি

Wave-এর inline assembly `asm { ... }` ব্লক দিয়ে লেখা হয়। এটি kernel, UEFI bootloader, system call, port I/O এবং CPU control-এর মতো low-level code-এর জন্য।

বর্তমান target হলো Linux `x86_64`/`aarch64`, Darwin `x86_64`/`aarch64`, Windows GNU `x86_64`, এবং freestanding `x86_64`/`aarch64`/`riscv64`। 32-bit target এখনও সমর্থিত নয়।

## মৌলিক রূপ

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

String line হলো assembly instruction। `in(...)` input, `out(...)` output, আর `clobber(...)` asm যে state পরিবর্তন করে তা ঘোষণা করে।

## statement asm

statement asm ব্যবহার হয় যখন expression value দরকার নেই। এতে একাধিক output থাকতে পারে।

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

## expression asm

expression asm একটি value তৈরি করে এবং বর্তমানে ঠিক একটি `out(...)` প্রয়োজন। expression asm-এ `clobber("noreturn")` নিষিদ্ধ।

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## Operands ও constraints

Operand concrete register অথবা constraint class ব্যবহার করতে পারে। x86_64 ব্যবহার করে `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`; AArch64 ব্যবহার করে `x0` ... `x30` ও `w0` ... `w30`; RISC-V ব্যবহার করে `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`। সাধারণ class হলো `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`। একই physical register operand ও clobber দুটোই হতে পারে না।

## clobber চুক্তি

`clobber("memory")` মানে asm memory পড়তে বা লিখতে পারে। `clobber("flags")` ও `clobber("cc")` flags পরিবর্তনের কথা জানায়। stack বা call/return instruction ব্যবহারে `clobber("stack")` দরকার। `clobber("nostack")` stack না ছোঁয়ার প্রতিশ্রুতি। `clobber("noreturn")` মানে control বর্তমান block-এ ফিরে আসে না। `stack` ও `nostack` একসাথে ব্যবহার করা যায় না।

## Stack discipline

সাধারণ asm stack পরিবর্তন করা উচিত নয়। `call`, `push`, `pop`, `ret`, `rsp`/`esp` বা `sp` সরাসরি ব্যবহার, এবং অনুরূপ instruction-এ `clobber("stack")` দরকার। তবুও return করার আগে stack pointer restore করতে হবে।

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## ফিরে না আসা asm

`jmp rax`, `jmp r11`, `br x0`, বা `jr ra`-এর মতো indirect jump-এ `clobber("noreturn")` দরকার। এই clobber থাকা statement asm IR block-কে `unreachable` দিয়ে শেষ করে।

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

## Local label

local label-এ jump একই asm/control-flow path-এর ভিতরে থাকে, তাই `noreturn` দরকার নেই।

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## Output target

স্থির output target হলো variable এবং pointer variable-এর `deref`। field বা array-এর জন্য আগে temporary variable-এ লিখুন।

```wave
out("rax") value
out("rax") deref ptr
```

## সীমাবদ্ধতা

inline asm সবসময় side effect আছে ধরে নেওয়া হয়। জটিল stack manipulation এখনও reject হতে পারে। Function pointer এবং explicit calling convention type এখনও stable নয়, তাই UEFI service call আপাতত asm wrapper ব্যবহার করতে পারে।
