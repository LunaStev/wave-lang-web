---
sidebar_position: 9
---

# FFI

Dokumen ini menerangkan spesifikasi FFI (Antara Muka Fungsi Luaran) untuk fungsi panggilan yang dilaksanakan secara luaran dalam bahasa Wave.
Melalui FFI, program Wave boleh terus antara muka dengan perpustakaan asli yang ditulis dalam bahasa lain.

---

## Gambaran keseluruhan

FFI daripada Wave beroperasi atas dasar pengisytiharan.
Fungsi luaran tidak dilaksanakan dalam kod Wave, dan hanya tentukan ABI (Antara Muka Binari Aplikasi) yang mana fungsi berikut.
Pelaksanaan sebenar diselesaikan daripada perpustakaan luaran semasa fasa pemautan.

FFI hanya mengisytiharkan kewujudan fungsi pada masa penyusunan, dan pemaut menghubungkan simbol sebenar apabila mencipta fail boleh laku.

---

## pengisytiharan luar

Fungsi luaran diisytiharkan menggunakan kata kunci luaran.
Pada masa ini, Wave memerlukan spesifikasi ABI dan hanya **`extern(c)` disokong**.

```wave
extern(c) fun function_name(args...) -> return_type;
```

---

## Nyatakan ABI

Perisytiharan `extern` mesti menyatakan ABI.
ABI yang disokong pada masa ini ialah `c`.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Walaupun pengisytiharan seperti `extern(rust)` boleh dihuraikan, ralat berlaku semasa langkah analisis semantik.

---

## Perisytiharan luar peringkat fungsi

Apabila mengisytiharkan fungsi luaran, tuliskannya seperti berikut:

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

Pengisytiharan ini bermakna bahawa simbol `InitWindow` berikutan C ABI wujud dalam pustaka luaran.

---

## Pengisytiharan luar peringkat blok

Jika terdapat berbilang fungsi luaran yang menggunakan ABI yang sama, ia boleh diisytiharkan dalam bentuk blok.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Pengisytiharan peringkat blok secara semantiknya sama sepenuhnya dengan pengisytiharan peringkat fungsi, dan hanyalah sintaks untuk kebolehbacaan dan penstrukturan.

---

## Penamaan simbol

Dalam sesetengah ABI, nama fungsi Wave dan nama simbol pemaut sebenar mungkin tidak sepadan.
Dalam kes ini, anda boleh menentukan nama simbol sebenar yang mana fungsi luaran akan disambungkan sebagai rentetan.

### Penetapan simbol peringkat fungsi

```wave
extern(c, "puts")
fun rust_func(i32);
```

Pengisytiharan ini menyatakan bahawa panggilan ke `rust_func` akan menggunakan `puts` sebagai simbol pautan sebenar.

---

### Penetapan simbol peringkat blok

Pengisytiharan peringkat blok membolehkan anda menentukan nama simbolik individu selepas setiap fungsi.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## jenis penunjuk

Penunjuk dinyatakan dalam bentuk `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>` sepadan terus dengan penunjuk dalam bahasa luaran, dan pemilikan memori atau kitaran hayat tidak diuruskan oleh Wave.

---

## Gunakan struct

Struktur boleh digunakan sebagai argumen atau mengembalikan nilai fungsi luaran.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Apabila menggunakan struktur dalam FFI, susunan medan mengekalkan susunan yang diisytiharkan dan mengikut susun atur memori yang diperlukan oleh ABI.

---

## Panggilan fungsi luaran

Fungsi yang diisytiharkan sebagai `extern` dipanggil dengan cara yang sama seperti fungsi biasa.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

Tiada perbezaan sintaksis semasa membuat panggilan, dan konvensyen panggilan dan pemautan simbol dikendalikan sepenuhnya oleh ABI dan pemaut.

---

## Memautkan

Pelaksanaan sebenar fungsi luaran disediakan daripada perpustakaan luaran semasa fasa pemautan.
Pengkompil Wave menjana fail objek yang mengandungi panggilan fungsi luaran, dan pemaut menyelesaikan simbol melalui perpustakaan yang ditentukan.

Spesifikasi perpustakaan adalah melalui alat binaan dan pilihan CLI.

---

## Sekatan

Wave tidak menyediakan ciri berikut:

- penunjuk fungsi
- fungsi panggil balik
- Pengurusan memori automatik
- Penyepaduan pengendalian pengecualian antara bahasa

Ciri-ciri ini mungkin ditangani secara berasingan dalam versi akan datang.
