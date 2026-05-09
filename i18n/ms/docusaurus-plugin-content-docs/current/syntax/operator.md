---
sidebar_position: 5
---

# pengendali

Dokumen ini menyusun operator sebenar yang tersedia berdasarkan pengkompil semasa.

## aritmetik

| pengendali | Penerangan |
| --- | --- |
| `+` | tambahan |
| `-` | Tolak |
| `*` | Pendaraban |
| `/` | Bahagian |
| `%` | berehat |

## Bandingkan

| pengendali | Penerangan |
| --- | --- |
| `==` | sama |
| `!=` | berbeza |
| `<` | Kecil |
| `<=` | kurang daripada atau sama dengan |
| `>` | Besar |
| `>=` | lebih besar daripada atau sama dengan |

## logik

| pengendali | Penerangan |
| --- | --- |
| `&&` | logik DAN |
| `\|\|` | logik ATAU |
| `!` | Logik BUKAN |

## sedikit

| pengendali | Penerangan |
| --- | --- |
| `&` | bitwise DAN |
| `\|` | sedikit ATAU |
| `^` | bitwise XOR |
| `~` | sedikit BUKAN |
| `<<` | beralih ke kiri |
| `>>` | anjakan kanan |

## kemasukan kolej

| pengendali | Penerangan |
| --- | --- |
| `=` | Tugasan asas |
| `+=` | Tugasan selepas penambahan |
| `-=` | Tugasan selepas penolakan |
| `*=` | Tugasan selepas pendaraban |
| `/=` | Penggantian selepas bahagian |
| `%=` | Tugasan selepas baki |

## unary/pointer/cast

| Operator/Kata Kunci | Penerangan |
| --- | --- |
| `++`, `--` | Depan/belakang meningkat/mengurang |
| `&x` | Dapatkan alamat |
| `deref p` | dereference penunjuk |
| `expr as T` | pelakon eksplisit |

## aritmetik penunjuk

| ungkapan | Keputusan |
| --- | --- |
| `ptr<T> + int` | `ptr<T>` (pergerakan GEP) |
| `int + ptr<T>` | `ptr<T>` (pergerakan GEP) |
| `ptr<T> - int` | `ptr<T>` (pergerakan GEP) |
| `ptr<T> - ptr<T>` | `i64` (perbezaan bait) |
| `ptr == ptr`, `ptr != ptr` | perbandingan penunjuk |

## Barangan terpelihara atau tidak dilaksanakan

Token tatabahasa wujud, tetapi sesetengahnya tidak disokong oleh operasi ungkapan pada masa ini.
Contoh: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
