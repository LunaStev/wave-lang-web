---
sidebar_position: 3
---

# نحوه استفاده از std::env

بررسی متغیرهای محیطی و کنترل دایرکتوری کاری را فراهم می‌کند.

## واردات

```wave
واردات("std::env::environ");
واردات("std::env::cwd");
واردات("std::env::consts");
```

## 1. خواندن متغیر محیطی به‌صورت رشته

```wave
عملکرد اصلی () {
    تغییر buf: آرایه<u8, 256>;
    تغییر n: i64 = env_get("HOME", &buf[0], 256);

    اگر (n >= 0) { 
        // buf یک رشته تمام شده با NUL است
    } وگرنه اگر (n == ENV_ERR_NOT_FOUND) { 
        // کلید موجود نیست
    } وگرنه اگر (n == ENV_ERR_NO_SPACE)  {
        // بافر به اندازه کافی نیست
    }
}
```

## 2. خواندن متغیر محیطی عدد صحیح (نوع نتیجه جنریک)

```wave
عملکرد اصلی () {
    تغییر port_res: EnvResult<i32> = env_get_i32("PORT");
    تغییر port: i32 = env_unwrap_or<i32>(port_res, 8080);

    تغییر workers: i64 = env_get_i64_default("WORKERS", 4);
}
```

## 3. دایرکتوری فعلی/حرکت

```wave
عملکرد اصلی () {
    تغییر cwd: آرایه<u8, 512>;
    تغییر n: i64 = env_getcwd(&cwd[0], 512);

    اگر (n >= 0) { 
        env_chdir("/tmp");
    }
}
```

## توابع اصلی

```wave
عملکرد env_get (name: رشته, dst: ptr<u8>, ظرفیت_مقصد: i64) -> i64
عملکرد env_exists (name: رشته) -> منطق
عملکرد env_get_i32 (name: رشته) -> EnvResult<i32>
عملکرد env_get_i64 (name: رشته) -> EnvResult<i64>
عملکرد env_get_i32_default (name: رشته, مقدار_پیش‌فرض: i32) -> i32
عملکرد env_get_i64_default (name: رشته, مقدار_پیش‌فرض: i64) -> i64
عملکرد env_getcwd (مقصد: ptr<u8>, ظرفیت: i64) -> i64
عملکرد env_chdir (مسیر: رشته) -> i64
عملکرد env_access (مسیر: رشته, حالت: i32) -> i64
```
