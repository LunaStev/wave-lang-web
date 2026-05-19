---
sidebar_position: 6
---

# مرجع CLI لـ `wavec`

`wavec` هو مترجم منخفض المستوى مثل `rustc` أو `cc`. حل الحزم وملفات lockfile والـ registry والـ workspace هي مسؤولية أدوات أعلى مثل Vex.

## الشكل الأساسي

```bash
wavec [global-options] <command> [command-options] [input...]
```

## الأوامر الأساسية

ينفذ `build <input...>` الترجمة والفحص والربط والتشغيل الاختياري عبر flags. `check <file>` هو alias لـ `build <file> --emit=check`. `run <file>` هو alias لـ `build <file> --run`. يعرض `print <item>` قدرات compiler مثل targets وأنواع emit وأنواع input والـ linker الافتراضي.

## قواعد الإدخال

يقبل `build` مدخلاً واحداً أو أكثر. يتم استنتاج الامتدادات تلقائياً: `.wave` لمصدر Wave، و`.ll` لـ LLVM IR، و`.bc` لـ bitcode، و`.s` أو `.asm` لـ assembly، و`.o` أو `.obj` لـ object files. يفرض `--input-type=<kind>` نوعاً واحداً لكل المدخلات.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## قواعد emit

يدعم `--emit` القيم `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`. `check` وضع تحكم وليس artifact عادياً، لذلك يستخدم منفرداً. إذا أُنتج `bin` مع artifacts أخرى فإن `-o` يسمي binary النهائي، بينما تتبع artifacts الوسيطة `--out-dir` أو المسارات الافتراضية.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## تشغيل الناتج

يسمح بـ `--run` فقط عند إنتاج artifact `bin` قابل للتنفيذ واحد بالضبط. لا يصح مع `--shared` أو أوضاع emit غير القابلة للتنفيذ. الوسائط بعد `--` تمرر إلى الملف التنفيذي الناتج.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding و bare-metal

`--freestanding` مخصص للـ kernels والـ bootloaders والـ firmware وembedded targets. يعطل ربط `libc`/`libm` الافتراضي، ويعطل red zone في backend، وينتج كوداً مناسباً لبيئات بلا runtime.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## التحكم في backend

استخدم `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, و`-C no-default-libs` للتحكم الدقيق في compiler وlinker.

## استعلامات capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, و`default-linker` مخصصة لأدوات مثل Vex للتحقق من compiler المثبت دون تخمين.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
