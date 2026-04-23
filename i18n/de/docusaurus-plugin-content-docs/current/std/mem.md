---
sidebar_position: 5
---

# Verwendung von std::mem

Dies ist ein Dienstprogramm für Speicherzuweisung, -kopierung und -vergleich auf niedriger Ebene.

## Import

```wave
import("std::mem::alloc");
import("std::mem::ops");
import("std::mem::cstr");
```

## 1. Grundlegende Zuweisung/Deallokierung

```wave
fun main() {
    var p: ptr<u8> = mem_alloc_zeroed(256);
    if (p == null) {
        return;
    }

    mem_set(p, 65, 10); // 'A'
    mem_free(p, 256);
}
```

## 2. Realokation und verschiebesichere Kopie

```wave
fun main() {
    var p: ptr<u8> = mem_alloc(16);
    p = mem_realloc(p, 16, 64);

    // Sichere Verschiebung überlappender Speicherbereiche
    mem_move(p + 1, p, 10);

    mem_free(p, 64);
}
```

## 3. Generische Item-API

```wave
fun main() {
    var arr: ptr<i32> = mem_alloc_items_zeroed<i32>(8, 4);
    if (arr == null) {
        return;
    }

    mem_set_items<i32>(arr, 7, 8, 4);
    mem_swap<i32>(&arr[0], &arr[1]);

    mem_free_items<i32>(arr, 8, 4);
}
```

## 4. C-String-Dienstprogramm

```wave
fun main() {
    var dst: array<u8, 32>;
    mem_copy_cstr(&dst[0], "wave");

    var n: i64 = mem_len_cstr("hello");
    var eq: bool = mem_eq_cstr("abc", "abc");
}
```

## Hauptfunktionen

```wave
fun speicher_zuweisen(size: i64) -> ptr<u8>
fun speicher_zuweisen_genullt(size: i64) -> ptr<u8>
fun speicher_umzuweisen(old_ptr: ptr<u8>, old_size: i64, new_size: i64) -> ptr<u8>
fun speicher_freigeben(p: ptr<u8>, size: i64) -> i64

fun speicher_kopieren(dst: ptr<u8>, src: ptr<u8>, size: i64)
fun speicher_verschieben(dst: ptr<u8>, src: ptr<u8>, size: i64)
fun speicher_vergleichen(a: ptr<u8>, b: ptr<u8>, size: i64) -> i32
fun speicher_gleich(a: ptr<u8>, b: ptr<u8>, size: i64) -> bool
fun speicher_byte_finden(src: ptr<u8>, size: i64, value: u8) -> i64
```
