---
sidebar_position: 6
---

# مرجع CLI برای `wavec`

`wavec` یک compiler سطح پایین مانند `rustc` یا `cc` است. حل package، lockfile، registry و workspace مسئولیت ابزارهای بالاتر مانند Vex است.

## شکل پایه

```bash
wavec [global-options] <command> [command-options] [input...]
```

## دستورهای اصلی

`build <input...>` با flags کار compile، check، link و اجرای اختیاری را انجام می‌دهد. `check <file>` نام مستعار `build <file> --emit=check` است. `run <file>` نام مستعار `build <file> --run` است. `print <item>` capabilityهای compiler مانند targetها، emit kindها، input typeها و linker پیش‌فرض را چاپ می‌کند.

## قواعد ورودی

`build` یک یا چند ورودی می‌پذیرد. پسوندها خودکار تشخیص داده می‌شوند: `.wave` برای Wave source، `.ll` برای LLVM IR، `.bc` برای bitcode، `.s` یا `.asm` برای assembly، و `.o` یا `.obj` برای object files. `--input-type=<kind>` یک نوع را برای همه ورودی‌ها اجبار می‌کند.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

## قواعد emit

`--emit` از `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin` پشتیبانی می‌کند. `check` یک mode کنترلی است، نه artifact عادی، پس باید تنها استفاده شود. اگر `bin` همراه artifactهای دیگر ساخته شود، `-o` نام binary نهایی را تعیین می‌کند و artifactهای میانی از `--out-dir` یا مسیرهای پیش‌فرض پیروی می‌کنند.

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

## اجرای خروجی

`--run` فقط وقتی مجاز است که دقیقاً یک artifact `bin` قابل اجرا تولید شود. با `--shared` یا emit modeهای غیرقابل اجرا معتبر نیست. آرگومان‌های بعد از `--` به executable تولیدشده پاس داده می‌شوند.

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

## Freestanding و bare-metal

`--freestanding` برای kernel، bootloader، firmware و embedded target است. link پیش‌فرض `libc`/`libm` را غیرفعال می‌کند، red zone backend را خاموش می‌کند و code مناسب محیط بدون runtime می‌سازد.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

## کنترل backend

برای کنترل دقیق compiler و linker از `--target`, `--cpu`, `--features`, `--abi`, `--sysroot`, `-C linker=...`, `-C link-arg=...`, `-C link-sysroot=...`, `-C relocation-model=...`, `-C code-model=...`, و `-C no-default-libs` استفاده کنید.

## پرس‌وجوی capability

`wavec print target-list`, `supported-emit-kinds`, `supported-input-types`, و `default-linker` برای ابزارهایی مانند Vex است تا compiler نصب‌شده را بدون حدس زدن اعتبارسنجی کنند.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
