---
sidebar_position: 11
---

# timah

Wave menyokong dua anotasi:

- Ulasan satu baris: `//`
- Sekat ulasan: `/* ... */`

## komen satu baris

Apa-apa sahaja selepas `//` diabaikan sehingga penghujung baris.

```wave
var x: i32 = 10; // line comment
x += 5;          // still works
```

## anotasi blok

Abaikan kandungan antara `/*` dan `*/`.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Sekat ulasan menyokong berbilang baris dan bersarang.

```wave
/* outer
   /* inner */
   outer end
*/
```

## Rentetan dan Tanda Komen

`/*`, `*/`, `//` di dalam rentetan tidak dianggap sebagai permulaan/akhir ulasan.

```wave
var marker: str = "/*//*/";
```

## Ralat anotasi

Jika ulasan blok tidak ditutup, ralat kompilasi (`E1002`) akan berlaku.

```wave
/* not closed
```

Pengkompil mengeluarkan petunjuk lokasi permulaan, punca dan pembetulan.
