---
sidebar_position: 7
---

# التجميع المضمّن

يُكتب التجميع المضمّن في Wave باستخدام الكتلة `asm { ... }`. وهو مخصص للكود منخفض المستوى مثل الأنوية، ومحملات UEFI، واستدعاءات النظام، وعمليات port I/O، والتحكم بالمعالج.

الأهداف الحالية هي Linux `x86_64`/`aarch64` وDarwin `x86_64`/`aarch64` وWindows GNU `x86_64` وfreestanding `x86_64`/`aarch64`/`riscv64`. أهداف 32-bit غير مدعومة بعد.

## الشكل الأساسي

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

أسطر السلاسل النصية هي تعليمات assembly. يعلن `in(...)` المدخلات، ويعلن `out(...)` المخرجات، ويعلن `clobber(...)` الحالة التي يعدلها asm.

## asm كتعليمة

يُستخدم asm كتعليمة عندما لا تكون هناك حاجة إلى قيمة تعبير. ويمكن أن يحتوي على عدة مخرجات.

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

## asm كتعبير

ينتج asm كتعبير قيمة، ويتطلب حالياً `out(...)` واحداً بالضبط. يُحظر `clobber("noreturn")` في asm التعبيري.

```wave
let mut value: i64 = 0;
value = asm {
    "mov rax, 123"
    out("rax") value
};
```

## المعاملات والقيود

يمكن للمعاملات استخدام سجلات محددة أو فئات قيود. يستخدم x86_64 السجلات `rax`, `rbx`, `rcx`, `rdx`, `r8` ... `r15`؛ ويستخدم AArch64 `x0` ... `x30` و`w0` ... `w30`؛ ويستخدم RISC-V `a0`, `a1`, `t0`, `s0`, `ra`, `sp`, `xN`. الفئات المشتركة هي `r`, `m`, `rm`, `i`, `ri`, `im`, `irm`. لا يجوز أن يكون السجل الفيزيائي نفسه معاملاً وclobber في الوقت نفسه.

## عقد clobber

يعني `clobber("memory")` أن asm قد يقرأ الذاكرة أو يكتبها. ويعني `clobber("flags")` و`clobber("cc")` أن أعلام الشرط تتغير. يلزم `clobber("stack")` عند استخدام المكدس أو تعليمات call/return. ويعد `clobber("nostack")` وعداً بعدم لمس المكدس. ويعني `clobber("noreturn")` أن التحكم لا يعود إلى الكتلة الحالية. لا يمكن الجمع بين `stack` و`nostack`.

## انضباط المكدس

يجب ألا يغير asm العادي المكدس. تتطلب `call`, `push`, `pop`, `ret`، والاستخدام المباشر لـ `rsp`/`esp` أو `sp`، والتعليمات المشابهة `clobber("stack")`. ومع ذلك يجب استعادة مؤشر المكدس قبل العودة.

```wave
asm {
    "sub rsp, 8"
    "add rsp, 8"
    clobber("stack")
}
```

## asm غير عائد

تحتاج القفزات غير المباشرة مثل `jmp rax`, `jmp r11`, `br x0`, أو `jr ra` إلى `clobber("noreturn")`. وينهي asm كتعليمة مع هذا clobber كتلة IR بـ `unreachable`.

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

## التسميات المحلية

القفز إلى تسمية محلية يبقى داخل مسار asm/control-flow نفسه ولا يحتاج إلى `noreturn`.

```wave
asm {
    "jmp 1f"
    "1:"
}
```

## أهداف الإخراج

أهداف الإخراج المستقرة هي المتغيرات و`deref` لمتغيرات المؤشرات. بالنسبة إلى الحقول أو المصفوفات، اكتب أولاً في متغير مؤقت.

```wave
out("rax") value
out("rax") deref ptr
```

## القيود

يُعامل inline asm دائماً على أنه ذو side effect. وقد تظل تعديلات المكدس المعقدة مرفوضة. مؤشرات الدوال وأنواع calling convention الصريحة لم تستقر بعد، لذلك يمكن لاستدعاءات خدمات UEFI استخدام wrappers asm مؤقتاً.
