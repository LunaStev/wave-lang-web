---
sidebar_position: 5
---

# Operator

Dokumen ini menyusun operator yang boleh digunakan berdasarkan kompilator semasa.

## Aritmetik

| Operator | Keterangan  |
| -------- | ----------- |
| `+`      | Penjumlahan |
| `-`      | Pengurangan |
| `*`      | darab       |
| `/`      | pembahagian |
| `%`      | remainder   |

## perbandingan

| pengendali | keterangan            |
| ---------- | --------------------- |
| `==`       | sama                  |
| `!=`       | tidak sama            |
| `<`        | kurang                |
| `<=`       | kurang atau sama      |
| `>`        | lebih besar           |
| `>=`       | lebih besar atau sama |

## logik

| pengendali | keterangan  |
| ---------- | ----------- |
| `&&`       | logik DAN   |
| `\|\|`     | logik ATAU  |
| `!`        | logik TIDAK |

## bit

| pengendali | keterangan    |
| ---------- | ------------- |
| `&`        | bit DAN       |
| `\|`       | bit ATAU      |
| `^`        | bit XOR       |
| `~`        | bit NOT       |
| `<<`       | geseran kiri  |
| `>>`       | geseran kanan |

## penugasan

| pengendali | keterangan                    |
| ---------- | ----------------------------- |
| `=`        | penugasan asas                |
| `+=`       | Penugasan selepas penjumlahan |
| `-=`       | Penugasan selepas pengurangan |
| `*=`       | Penugasan selepas pendaraban  |
| `/=`       | Penugasan selepas pembahagian |
| `%=`       | Penugasan selepas modulus     |

## Unari / Pointer / Cast

| Operator/Kata Kunci | Keterangan               |
| ------------------- | ------------------------ |
| `++`, `--`          | Inkrement Pre/Post       |
| `&x`                | Kendali Alamat           |
| `deref p`           | Referensi Balik Penunjuk |
| `expr as T`         | Cast Eksplisit           |

## Operasi Penunjuk

| Ekspresi                   | Hasil                                        |
| -------------------------- | -------------------------------------------- |
| `ptr<T> + int`             | `ptr<T>` (Pergerakan GEP) |
| `int + ptr<T>`             | Mana-mana                                    |
| `ptr<T> - int`             | `ptr<T>` (Pergerakan GEP) |
| `ptr<T> - ptr<T>`          | Apapun yang diinginkan                       |
| `ptr == ptr`, `ptr != ptr` | Perbandingan Penunjuk                        |

## Item yang dipesan atau belum dilaksanakan

Ada item yang merupakan token sintaks yang ada tetapi saat ini tidak didukung oleh operasi ekspresi.
Contoh: `??`, `?:`, `in`, `is`, `!&`, `!|`, `~^`.
