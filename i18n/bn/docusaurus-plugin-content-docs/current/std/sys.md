---
sidebar_position: 10
---

# std::sys ব্যবহার নির্দেশিকা

`std::sys` হল উচ্চ-স্তরের মডিউলের নিচে OS বিমূর্ততা স্তর।

```text
std(high-level)
  -> sys dispatcher
  -> sys/linux or sys/macos
  -> syscall
```

## প্রাথমিক প্রোটোকল

- বেশিরভাগ ফাংশন মূল syscall মান ফেরত দেয়।
- `>= 0` সফল, `< 0` ব্যর্থতা(`-errno`)।
- উচ্চ-স্তরের অ্যাপ কোডে সম্ভব হলে `std::sys` এর পরিবর্তে `std::net`, `std::time`, `std::env` প্রথমে ব্যবহার করুন।

## 1. ফাইল পড়ার উদাহরণ (`std::sys::fs`)।

```wave
import("std::sys::fs");

fun main() {
    var fd: i64 = open("/etc/hosts", 0, 0);
    if (fd < 0) {
        return;
    }

    var buf: array<u8, 256>;
    var n: i64 = read(fd, &buf[0], 256);
    close(fd);
}
```

## 2. সকেট উদাহরণ (`std::sys::socket`)।

```wave
import("std::sys::socket");

fun main() {
    var fd: i64 = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);
    if (fd < 0) {
        return;
    }

    shutdown(fd, SHUT_RDWR);
}
```

## 3. মেমরি উদাহরণ (`std::sys::memory`)।

```wave
import("std::sys::memory");

fun main() {
    var p: ptr<u8> = sys_alloc(4096);
    if (p == null) {
        return;
    }

    sys_free(p, 4096);
}
```

## ডিসপ্যাচার মডিউল

- `std::sys::socket`
- `std::sys::fs`
- `std::sys::env`
- `std::sys::memory`
- `std::sys::process`
- `std::sys::time`
- `std::sys::tty`

`#[target(os="linux")]`, `#[target(os="macos")]` শাখাগুলি ডিসপ্যাচারের অভ্যন্তরে ব্যবহৃত হয়।
