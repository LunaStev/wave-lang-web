---
sidebar_position: 11
---

# std::libc ব্যবহারের নীতি (যোগাযোগ স্তর)

`std::libc` C গ্রন্থাগারের সঙ্গে সরাসরি কাজ করতে ব্যবহৃত ঐচ্ছিক স্তর।

## কখন ব্যবহৃত হয়

- অত্যাধুনিক C লাইব্রেরি চিহ্নগুলো সরাসরি কল করতে হলে
- ধাপে মাইগ্রেশন চলাকালে ওয়েভ কোড ও C কোড একত্রে করতে হলে

সাধারণ Wave কোডে `std::sys`/`std::*` প্রথম ব্যবহার করুন।

## আমদানির উদাহরণ

```wave
import("std::libc::stdio");
import("std::libc::stdlib");
import("std::libc::string");
```

## ১) stdio কল করুন

```wave
fun main() {
    puts("hello from libc" as ptr<i8>);
}
```

## ২) malloc/fগree ব্যবহার

```wave
fun main() {
    var p: ptr<i8> = malloc(128);
    if (p == null) {
        return;
    }

    memset(p, 0, 128);
    free(p);
}
```

## ৩) সকেট C ABI

```wave
import("std::libc::socket");

fun main() {
    var fd: i32 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd >= 0) {
        shutdown(fd, SHUT_RDWR);
    }
}
```

## প্রদত্ত মডিউল

- `std::libc::errno`
- `std::libc::string`
- `std::libc::stdio`
- `std::libc::stdlib`
- `std::libc::unistd`
- `std::libc::time`
- `std::libc::socket`
- `std::libc::netinet`
- `std::libc::arpa`
- `std::libc::poll`
