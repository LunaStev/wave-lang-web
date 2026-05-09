---
sidebar_position: 2
---

# tatabahasa

## 1. Struktur asas

- Kandungan fail bermula dan berakhir dengan objek (`{}`) yang dikelilingi oleh pendakap `object`.

- Objek terdiri daripada pasangan nama atribut (kunci) dan nilai (nilai).

- Nama dan nilai hartanah dipisahkan oleh titik bertindih (`:`) atau tanda sama (`=`).

## 2. Komen

- Komen bermula dengan `//` atau `#` dan ditulis dalam satu baris.

- Komen dikenakan sehingga tamat baris.

- Komen berbilang baris tidak disokong secara berasingan dan apabila menulis ulasan pada berbilang baris, `//` atau `#` mesti ditambahkan pada setiap baris.

## 3. Objek

- Objek dikelilingi oleh pendakap kerinting `{}` dan mengandungi pasangan nilai kunci.

- Simbol `:` atau `=` boleh digunakan antara kunci dan nilai. Kedua-dua simbol boleh digunakan secara bergantian.

- Setiap sifat dipisahkan dengan koma (`,`).

- Anda boleh menggunakan objek dengan meletakkan objek lain di dalamnya.

Contoh:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. Susunan

- Tatasusunan dikelilingi oleh kurungan segi empat sama `[]`, dan elemen dipisahkan dengan koma (`,`).

- Unsur tatasusunan boleh terdiri daripada pelbagai jenis data, seperti objek, rentetan dan nombor.

- Dalam WSON, tatasusunan boleh terkandung dalam objek, dan tatasusunan atau objek lain boleh bersarang dalam tatasusunan.

Contoh:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. Pasangan Nilai-Kekunci

- Nama sifat terdiri daripada rentetan dan nilai diletakkan selepas `:` dan `=` tanpa ruang.

- Jenis nilai termasuk rentetan, nombor, boolean, objek dan tatasusunan.

- Rentetan itu dikelilingi oleh petikan berganda `“`.

- Nombor digunakan tanpa petikan berganda dan boleh dalam bentuk integer atau nombor nyata.

Contoh:

```
name: "John Doe"
age = 25
```

## 6. Jenis Data

- Rentetan: Teks yang disertakan dalam tanda petikan berganda `"`.

```
"hello world"
```

- Nombor: Integer atau nombor nyata.

```
42
3.14
```

- Boolean: Gunakan nilai `true` atau `false`.

```
is_active = true
```

- Objek: Sepasang kunci-ㄱbat yang disertakan dalam pendakap kerinting `{}`.
- Tatasusunan: Senarai elemen yang disertakan dalam kurungan segi empat sama `[]`.

## 7. Contoh penerangan

```ws
{
    // Kod status dan maklumat mesej
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # umur pengguna
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```
