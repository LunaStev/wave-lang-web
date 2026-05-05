---
sidebar_position: 7
---

# گزینه‌های Backend (`--llvm`, `--whale`)

این سند گزینه‌های CLI مربوط به Backend در `wavec` را شرح می‌دهد.

اصول مهم:

- `wavec` یک مدیر بسته نیست.
- عملکرد Backend تا حد ممکن با **آرگومان‌های صریح** کنترل می‌شود.
- تنها پس از `--llvm` گزینه‌های جزئی Backend مورد تفسیر قرار می‌گیرند.

---

## 1. انتخاب‌گر Backend

## 1.1 `--llvm`

`--llvm` به‌تنهایی نشان‌دهنده شروع یک بلوک از گزینه‌های Backend است.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

همان‌طور که در بالا ذکر شد، تنها آرگومان‌هایی که بعد از `--llvm` پشتیبانی می‌شوند به عنوان تنظیمات Backend LLVM پردازش می‌شوند.

## 1.2 `--whale` (در حال حاضر TODO)

در حال حاضر `--whale` به‌عنوان یک **پرچم ساختگی رزرو شده** تلقی می‌شود.

- تجزیه‌کننده آن را تشخیص می‌دهد.
- خط لوله Backend واقعی Whale هنوز متصل نشده است.
- در صورت استفاده به عنوان خطای TODO ختم می‌شود.

---

## 2. گزینه‌های پشتیبانی‌شده پس از `--llvm`

## 2.1 هدف/تولید کد

- `--target <سه‌گانه>` / `--target=<سه‌گانه>`
- `--cpu <نام>` / `--cpu=<نام>`
- `--features <CSV>` / `--features=<CSV>`
- `--abi <نام>` / `--abi=<نام>`

نقاط انعکاس:

- مرحله تولید IR (ماشین هدف): `target`,`cpu`,`features`
- مرحله شیء/لینک (در هنگام فراخوانی کلنگ): `target`,`abi`

در حال حاضر، یک سه‌گانه هدف اصلی برای مستندسازی به‌صورت پیش‌فرض:

- لینوکس: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- داروین: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- فری‌ستندینگ: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 ابزارک/لینک

- `--sysroot <مسیر>` / `--sysroot=<مسیر>`
- `-C لینک‌کننده=<مسیر>`
- `-C آرگومان-لینک=<arg>` (قابل تکرار)
- `-C بدون-کتابخانه پیش‌فرض`

نقاط انعکاس:

- `--sysroot` در زمان تولید شیء (از طریق کلنگ `-c`) نگاشت می‌شود.
- در مرحله لینک، لغو linker و وارد کردن آرگومان‌های خام پیوند انجام می‌شود.
- هنگام استفاده از `-C بدون-کتابخانه پیش‌فرض`، `-lc -lm` به‌طور خودکار غیرفعال می‌شود.

---

## 3. قوانین تجزیه (مهم)

بدون گنجاندن `--llvm`، گزینه‌های جزئی Backend به‌عنوان گزینه‌های عمومی تفسیر نمی‌شوند.

به‌عنوان مثال، مورد زیر خطا است.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

حتماً باید به این شکل نوشته شود.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. نمونه‌های استفاده

تولید شیء پایه:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

ایجاد شیء هسته فری‌ستندینگ:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

لینک سفارشی:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C لینک‌کننده=کلنگ \
  -C آرگومان-لینک=-Wl,--gc-sections \
  build app.wave
```

بدون فعالسازی پیوند libc/libm خودکار:

```bash
wavec --llvm -C بدون-کتابخانه پیش‌فرض build app.wave
```

هنگام استفاده از `--freestanding`، به‌صورت داخلی مشابه `-C no-default-libs` عمل می‌کند و برای ساخت‌هایی که فرض بر عدم استفاده از کتابخانه‌های پیش‌فرض در زمان اجرای کد هسته یا بوت است، تطبیق داده می‌شود.

---

## 5. خلاصه وضعیت

- Backend LLVM: در حال اجرا
- Backend Whale: رزرو شده (TODO)، غیر قابل اجرا
