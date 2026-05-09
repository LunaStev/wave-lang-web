---
sidebar_position: 2
---

# Tatabahasa

## 1. Struktur Asas

- Kandungan fail bermula dan berakhir dengan objek yang dikelilingi oleh kurungan `{}`.

- Objek terdiri daripada pasangan nama atribut (key) dan nilai (value).

- Nama atribut dan nilai dipisahkan dengan titik dua (`:`) atau tanda sama dengan (`=`).

## 2. Ulasan

- Ulasan bermula dengan `//` atau `#`, dan ditulis dalam satu baris.

- Ulasan dikenakan sehingga akhir baris.

- Ulasan pelbagai baris tidak disokong secara berasingan, dan jika ulasan ditulis merentasi beberapa baris, `//` atau `#` perlu ditambah pada setiap baris.

## 3. Objek (Object)

- Objek dikelilingi oleh kurungan `{}` dan mengandungi pasangan kunci-nilai.

- Tanda `:` atau `=` boleh digunakan di antara kunci dan nilai. Kedua-dua tanda boleh digunakan.

- Setiap atribut dipisahkan dengan koma (`,`).

- Objek boleh mengandungi objek lain secara bersarang.

Contoh:

```
{
    status: "berjaya",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Tatasusunan (Array)

- Tatasusunan dikelilingi oleh kurungan siku `[]`, dan elemen-elemen dipisahkan dengan koma (`,`).

- Elemen dalam tatasusunan boleh terdiri daripada pelbagai jenis data seperti objek, rentetan, dan nombor.

- Dalam WSON, tatasusunan boleh terkandung dalam objek, dan dalam tatasusunan yang lain, objek ataupun tatasusunan lain boleh bersarang.

Contoh:

```
tasks: [
    { task_id: 1, title: "Lengkapkan laporan projek" },
    { task_id: 2, title: "Semak maklum balas pasukan" }
]
```

## 5. Pasangan Kunci-Nilai (Key-Value Pair)

- Nama atribut terdiri daripada rentetan dan nilai diletakkan di belakang tanda `:` atau `=` tanpa ruang.

- Jenis nilai termasuk rentetan, nombor, boolean, objek, tatasusunan, dll.

- Rentetan dikelilingi oleh tanda petik besar `“`.

- Nombor digunakan tanpa tanda petik, dan boleh berbentuk integer atau floating point.

Contoh:

```
name: "John Doe"
age = 25
```

## 6. Jenis Data (Data Types)

- Rentetan (String): Teks yang dikelilingi oleh tanda petik besar `"`.

```
"hello world"
```

- Nombor (Number): Nilai integer atau floating point.

```
42
3.14
```

- Boolean (Boolean): Menggunakan nilai `true` atau `false`.

```
is_active = true
```

- Objek(Object): Pasangan kunci dan nilai yang dikelompokkan dalam kurung kurawal `{}`.
- Array: Senarai elemen yang dikelompokkan dalam kurung siku `[]`.

## 7. Penerangan contoh

```ws
{
    // Maklumat kod dan mesej status
    status: "berjaya",
    code: 200,
    message: "Data berjaya diperoleh",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # Umur pengguna
    },

    tasks: [
        {
            task_id: 1,
            title: "Selesaikan laporan projek",
            status: "dalam proses",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Semak maklum balas pasukan",
            status: "tertunda",
            due_date: "2024-10-20"
        }
    ]
}
```