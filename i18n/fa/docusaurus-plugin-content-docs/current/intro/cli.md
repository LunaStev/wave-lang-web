---
sidebar_position: 6
---

# مرجع CLI `wavec`

این سند رفتار CLI را طبق **پیاده‌سازی فعلی کامپایلر ویو (`wavec`)** به‌طور دقیق توضیح می‌دهد.

اصول کلیدی:

- `wavec` یک کامپایلر است.
- نصب/حل مشکلات پکیج‌ها (lockfile، ثبت، دانلود) بر عهده `wavec` نیست.
- وابستگی‌های خارجی را هنگام اجرای `wavec` با **آرگومان‌های CLI صریح** انتقال دهید.

---

## 1. فرمت پایه

```bash
wavec [گزینه‌های-جهانی] <فرمان> [گزینه‌های-فرمان]
```

مثال:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. قوانین تجزیه فرمان (مهم)

`wavec` ابتدا **گزینه‌های جهانی** را از بین تمام آرگومان‌ها اسکن می‌کند، سپس بقیه را به‌عنوان `<فرمان>` تفسیر می‌کند.

یعنی گزینه‌های جهانی در مکان‌های مختلف قابل قرارگیری هستند.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

هر سه مورد فوق معتبر هستند.

وقتی از `--` استفاده شود، پس از آن اسکن گزینه‌های جهانی متوقف شده و به بخش فرمان منتقل می‌شود.

```bash
wavec -- run main.wave
```

---

## 3. دستورات

## 3.1 `اجرا <فایل>`

فایل ویو را کامپایل و اجرا می‌کند.

```bash
wavec run hello.wave
```

عملکرد:

1. تجزیه منبع + توسعه import
2. تولید LLVM IR
3. ایجاد لینک باینری بومی (`target/<فایل_نام>`)
4. اجرا

ویژگی‌ها:

- کد خروج برنامه اجرا شده توسط `wavec` منتقل می‌شود.

---

## 3.2 `ساخت <فایل>`

فایل اجرایی (exe) را تولید می‌کند.

```bash
wavec build app.wave
```

باینری خروجی:

- `target/<فایل_نام>`

## 3.3 گزینه‌های `ساخت` (`-o`, `-c`)

فرمان `ساخت` اجازه می‌دهد نام فایل خروجی و قالب خروجی از طریق گزینه‌ها کنترل شود.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <فایل>`: نام فایل خروجی را مشخص می‌کند.
  - پیش‌فرض (بدون `-c`): مسیر خروجی فایل اجرایی را مشخص می‌کند
  - همراه با `-c`: مسیر خروجی فایل شیء را مشخص می‌کند
- `-c`: از لینک صرف‌نظر کرده و تنها فایل شیء ایجاد می‌کند.
- هنگام استفاده از `-c`، مسیر شیء به stdout نوشته می‌شود.

عملکرد پیش‌فرض:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (مسیر خروجی)

مثال شیء هسته فری‌ستندینگ:

```bash
wavec --llvm \
  --target=x86_64-unknown-none-elf \
  build kernel.wave --emit=obj --freestanding -o kernel.o
```

`aarch64-unknown-none-elf` و `riscv64-unknown-none-elf` نیز به همین ترتیب قابل استفاده هستند.

---

## 3.4 `نصب std`، `به‌روزرسانی std`

دستورات نصب/به‌روزرسانی کتابخانه‌های استاندارد.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--راهنما`، `--نسخه`

```bash
wavec --راهنما
wavec --نسخه
```

---

## 4. گزینه‌های جهانی

## 4.1 بهینه‌سازی

مقادیر مجاز:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

مثال:

```bash
wavec -O3 run main.wave
```

---

## 4.2 خروجی اشکال‌زدایی

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

موارد مجاز:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 گزینه‌های لینک

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` یا `--link <lib>`
- `-L<مسیر>` یا `-L <مسیر>`

هنگام لینک، `wavec` به طور داخلی به شکل `-l<lib>`, `-L<path>` منتقل می‌کند.

---

## 4.4 گزینه‌های وابستگی‌های خارجی (مهم)

این گزینه‌ها برای تفسیر import‌های خارجی (`pkg::...`) استفاده می‌شوند.

### `--dep-root <پوشه>`

کاندیداهای پوشه ریشه پکیج را اضافه می‌کند.

```bash
wavec run app.wave --dep-root .vex/dep
```

هنگام جستجوی پکیج `math`:

- .vex/dep/math را بررسی کنید

امکان مشخص‌کردن چندباره:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <نام>=<مسیر>`

نام پکیج را به مسیر خاصی ثابت می‌کند.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

قوانین:

- فرمت `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` باید به صورت `name=path` باشد
- در صورت تکرار یک نام پکیج، خطا رخ می‌دهد

---

## 4.5 گزینه‌های Backend (`--llvm`, `--whale`)

گزینه‌های کنترل Backend فقط پس از `--llvm` تحلیل و تفسیر می‌شوند.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

موارد پشتیبانی‌شده (خلاصه):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C لینک‌کننده=<مسیر>`
- `-C آرگومان-لینک=<arg>` (قابل تکرار)
- `-C link-sysroot=<path>`
- `-C بدون-کتابخانه پیش‌فرض`

در حال حاضر، اهداف اصلی بر اساس `wavec print target-list`:

- `x86_64-unknown-linux-gnu`
- `aarch64-unknown-linux-gnu`
- `x86_64-apple-darwin`
- `aarch64-apple-darwin`
- `x86_64-unknown-none-elf`
- `aarch64-unknown-none-elf`
- `riscv64-unknown-none-elf`

`--whale` در حال حاضر به‌عنوان یک نشان ساختگی رزرو شده است و برچسب Backend واقعی هنوز ناموجود است (TODO).

---

## 5. قوانین تفسیر Import

Import‌های Wave به ۳ دسته زیر تقسیم می‌شود.

1. import محلی
2. import استاندارد
3. import پکیج خارجی

## 5.1 محلی

```wave
import("foo");
import("path/to/mod.wave");
```

از پوشه فایل مبنا، به دنبال `<path>.wave` بگردد.

## 5.2 استاندارد

```wave
import("std::io::format");
```

از مسیر `~/.wave/lib/wave/std/...` استفاده می‌کند.

## 5.3 پکیج خارجی

```wave
import("math::add");
import("json::parser::core");
```

فرمت:

- حداقل ۲ بخش `پکیج::ماژول` مورد نیاز است

ترتیب تعیین ریشه پکیج:

1. نگاشت مشخص‌شده با `--dep نام=مسیر`
2. در هر `--dep-root` به دنبال `<ریشه>/<پکیج>` جستجو کنید.

اگر یک پکیج در چند dep-root به طور همزمان پیدا شود:

- به طور خودکار انتخاب نمی‌کند و **خطای ابهام** رخ می‌دهد
- باید با `--dep نام=مسیر` ثابت شود

ترتیب جستجوی فایل ماژول:

1. `<ریشه_پکیج>/<مسیر_ماژول>.wave`
2. `<ریشه_پکیج>/src/<مسیر_ماژول>.wave`

مثال:

```wave
import("math::core::vec");
```

کاوش:

- `<ریشه_پکیج>/core/vec.wave`
- `<ریشه_پکیج>/src/core/vec.wave`

---

## 6. نمونه‌های عملی import خارجی

### 6.1 dep-root تکی

پوشه:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

کد:

```wave
import("math::add");
```

اجرا:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 رفع ابهام

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

اگر `math` در هر دو سمت باشد، خطا رخ می‌دهد. به صورت زیر آن را ثابت کنید.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. تفکیک نقش با Vex

ساختار پیشنهادی:

- `wavec`: کامپایل/لینک/اجرا + تفسیر وابستگی‌های مشخص‌شده
- `vex`: نصب/مدیریت وابستگی‌ها و سپس `wavec ... --dep-root ... --dep ...` فراخوانی

مثال:

```bash
# به‌طور داخلی توسط vex اجرا می‌شود
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

این مدل کامپایلر را ساده و قطعی نگه می‌دارد و مدیریت خودکار بسته‌ها را به یک مدیر بسته می‌سپارد.

---

## 8. مرجع سریع

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # یادداشت: رزرو شده، پیاده‌سازی نشده
```
