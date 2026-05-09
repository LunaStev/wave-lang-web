---
sidebar_position: 8
---

# struct

## Gambaran keseluruhan

Struktur dalam bahasa Wave ialah elemen sintaksis utama untuk mengisytiharkan jenis data yang ditentukan pengguna.
Struktur membolehkan anda menyatakan nilai pelbagai jenis dengan mengumpulkannya ke dalam satu unit logik, membolehkan anda memodelkan struktur data kompleks dengan jelas dan selamat.

Struktur Wave beroperasi sebagai jenis nilai.
Semua medan mesti mempunyai jenis eksplisit dan semua medan mesti dimulakan apabila membuat contoh struktur.
Peraturan ini memastikan bahawa keadaan struktur sentiasa lengkap dan boleh diramal.
---

## Sintaks pengisytiharan struktur

Struktur diisytiharkan menggunakan kata kunci `struct`.
Nama struktur menggunakan PascalCase, dan satu atau lebih medan boleh ditakrifkan dalam badan struktur.

Medan diisytiharkan dalam format `name: type;` dan koma bertitik diperlukan selepas setiap pengisytiharan medan.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

Apabila mengisytiharkan struktur, susunan medan dicipta digunakan dalam susunan yang sama seperti susunan peletakan memori.
Hanya pengisytiharan medan dibenarkan di dalam struktur; fungsi atau kaedah tidak boleh disertakan.
Logik tindakan ditakrifkan secara berasingan di luar struktur.
---

## Sintaks penciptaan struktur

Struktur dicipta dalam bentuk literal menggunakan nama struktur.
Literal struktur ditulis dalam bentuk `StructName { field_name: value; ... }`.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

Apabila mencipta struktur, semua medan yang ditentukan mesti dimulakan.
Jika ada yang hilang, ralat penyusunan akan berlaku.

Susunan penciptaan medan semasa pemulaan tidak perlu sepadan dengan susunan pengisytiharan struktur, tetapi
Jenis nilai yang dihantar kepada setiap medan mesti sepadan dengan jenis yang ditakrifkan dalam struktur.
Wave tidak membenarkan penukaran jenis tersirat semasa permulaan medan struktur.

---

## Sintaks akses medan struktur

Medan struktur diakses menggunakan tatatanda titik.
Akses medan menggunakan sintaks yang sama untuk membaca dan menulis.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

Jika anda cuba menggunakan nama medan yang tidak wujud, ralat akan berlaku semasa langkah penyusunan.
Oleh kerana struktur ialah jenis nilai, apabila menetapkan keseluruhan struktur atau menghantarnya sebagai hujah fungsi,
Semua medan yang terkandung dalam struktur disalin bersama.

---

## Sintaks definisi kaedah struktur

Bahasa Wave tidak mentakrifkan kaedah langsung dalam struktur.
Sebaliknya, gunakan kata kunci `proto` untuk mengisytiharkan satu set kaedah yang dilampirkan pada struktur.

Blok `proto` ialah kawasan fungsi yang dimiliki oleh struktur tertentu,
Fungsi yang ditakrifkan dalam blok ini digunakan seperti kaedah struktur yang sepadan.

Kaedah ini diluluskan contoh struktur dengan `self` sebagai parameter pertama.
`self` merujuk kepada keseluruhan nilai struktur dan diluluskan dengan menyalin nilai.

```wave
proto Box {
    fun print(self) {
        println("size={}, weight={}", self.size, self.weight);
    }

    fun added_size(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

Blok `proto` tidak perlu diletakkan dalam fail yang sama dengan perisytiharan struktur.
Berbilang blok `proto` membenarkan takrifan kaedah yang diedarkan untuk struktur yang sama.

Panggilan kaedah menggunakan notasi titik dan berkelakuan dengan cara yang sama seperti panggilan fungsi biasa.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Menggunakan struktur sebagai hujah fungsi

Apabila struktur diluluskan sebagai hujah kepada fungsi, ia dianggap sebagai kaedah salin demi nilai.
Walaupun anda mengubah suai medan struktur di dalam fungsi, ia tidak menjejaskan contoh struktur pada pemanggil.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

Penyalinan nilai yang sama berlaku apabila struktur digunakan sebagai nilai pulangan fungsi.
Tingkah laku ini memastikan ketidakbolehubah struktur dan aliran data yang boleh diramal.

---

## Struktur Bersarang

Dalam Wave, anda boleh menggunakan struktur lain sebagai jenis medan struktur.
Oleh kerana struktur adalah jenis yang lengkap, ia boleh bersarang secara bebas dalam struktur lain.

```wave
struct Position {
    x: i32;
    y: i32;
}

struct Player {
    name: str;
    pos: Position;
}
```

Medan struktur bersarang diakses menggunakan tatatanda titik berjujukan.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

Anda boleh menulis struktur lain secara literal dengan meletakkannya di dalam literal struktur.
Dalam kes ini, semua peraturan permulaan medan digunakan secara sama rata.

---

## susunan struktur

Struktur boleh digunakan sebagai jenis elemen dalam tatasusunan.
Sintaks tatasusunan Wave menggunakan format `array<type, length>`, dan jenis struktur juga boleh ditentukan seperti sedia ada.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

Apabila mengakses elemen tatasusunan struktur, gunakan indeks tatasusunan dahulu, kemudian
Anda mengakses medan di dalam struktur menggunakan notasi titik.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Sama ada operasi asas pada struktur boleh dilakukan

Kerana struktur Wave ialah jenis yang ditentukan pengguna,
Ia tidak mengambil bahagian secara automatik dalam operasi aritmetik atau perbandingan.

Jika anda memerlukan perbandingan kesamaan struktur, pengisihan, pencincangan, operasi berangka, dsb.
Anda mesti mentakrifkan tingkah laku secara eksplisit melalui blok `proto`.
Wave tidak menyediakan pengendali tersirat untuk struktur,
Pada dasarnya, semua tindakan ditakrifkan secara eksplisit.
