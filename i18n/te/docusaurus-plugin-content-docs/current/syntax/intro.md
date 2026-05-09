---
sidebar_position: 1
---

# Fungsi dan Pembolehubah

## Pengenalan

Falsafah reka bentuk utama bahasa pemrograman Wave adalah untuk mengekalkan keseimbangan antara prestasi rendah dan pengabstrakan tinggi, serta menyediakan persekitaran pembangunan perisian yang cekap dan fleksibel.
Dalam seksyen ini, kami akan memperkenalkan fungsi dan pembolehubah, elemen paling asas yang membentuk program Wave.

Fungsi adalah unit utama yang membentuk operasi dan logik program, manakala pembolehubah bertugas menyimpan dan menguruskan data diperlukan dalam proses tersebut.
Menggunakan fungsi dapat mengurangkan kod berulang dan membolehkan program dipisahkan secara logik, sehingga meningkatkan kebolehbaca dan kebolehlaksanaan.

---

## Fungsi

Dalam Wave, fungsi adalah blok kod yang boleh digunakan semula dan boleh dilaksanakan secara bebas.
Ia membolehkan pengekstrakan tindakan atau pengiraan tertentu sebagai satu unit dan boleh dipanggil bila perlu di seluruh program.

Fungsi dalam Wave ditakrifkan dengan kata kunci `fun`, dan terdiri daripada nama fungsi, senarai parameter, dan badan fungsi yang dibungkus dalam kurungan { }.
అలాగే గణన నిర్వహణ, ఇన్ మరియు ఆౌట్ మేనేజ్ మెంట్, లాజిక్ వేరీకరణ వంటి అనేక కారణాలకు ఉపయోగిస్తారు.

Waveలో ఫంక్షన్ `fun` కీవర్డ్‌తో నిర్వచించబడుతుంది, ఫంక్షన్ పేరు మరియు పారామీటర్ జాబితా మరియు కొవ్వుల `{}` లో కప్పబడిన ఫంక్షన్ శరీరం.

### Mendefinisikan Fungsi

Berikut adalah bentuk asas definisi fungsi paling ringkas dalam Wave.

```wave
fun main() {
    // Tulis kod di sini
}
```

Fungsi `main` adalah titik masuk untuk menjalankan program, dan setiap program Wave mesti mempunyai satu fungsi `main`.
Program akan mula menjalankan dari fungsi ini.

Fungsi boleh mempunyai parameter mengikut keperluan dan boleh mengembalikan hasil atau nilai ke tempat yang memanggilnya.
Jika ada nilai yang dikembalikan, jenis pengembalian dinyatakan dalam pernyataan fungsi.

### Contoh: Fungsi Ringkas

Contoh berikut adalah fungsi ringkas yang menerima dua nombor bulat dan mengembalikan jumlahnya.

```wave
fun add(a :i32, b :i32) -> i32 {
    return a + b;
}

fun main() {
    var result = add(5, 7);     // Memanggil fungsi add
    println(result);            // Output: 12
}
```

Dalam contoh ini, fungsi `add` mengambil dua parameter integer `a` dan `b`, menjumlahkan keduanya, dan mengembalikan hasilnya.
Dalam fungsi `main`, kami memanggil fungsi `add`, menyimpan nilai yang dikembalikan dalam sebuah pembolehubah, dan kemudian mencetaknya.

Oleh itu, fungsi mengabstrakkan tindakan tertentu dan membolehkannya digunakan semula di berbagai bahagian program.

## Pembolehubah

Pembolehubah digunakan untuk menyimpan dan memanipulasi data dalam program.
Wave jelas membezakan antara pembolehubah boleh ubah dan tidak boleh ubah semasa pengisytiharan, membolehkan maksud perubahan data ditunjukkan dalam kod.

Ini menjadikan perubahan status program lebih jelas dan mengurangkan kesilapan akibat pengubahsuaian nilai yang tidak diingini.

### Pembolehubah Boleh Ubah

Dalam Wave, pembolehubah adalah secara asasnya boleh ubah.
Ianya bermaksud bahawa selepas diisytiharkan, nilai boleh diubah semasa pelaksanaan program.

Pembolehubah boleh ubah diisytiharkan menggunakan kata kunci var.

```wave
var x :i32 = 10;
x = 20;
```

మీరు కోడ్లో `x` ప్రారంభ విలువ `10`గా ఉంటుంది, తరువాత `20` కు మారవచ్చు.
అయితే, స్థితి మారాలిసిన డేటాలో మారద్రవ్యం వాడాలి.

### Pembolehubah Tidak Boleh Ubah

మీరు సమర్థంగా మూల్యాన్ని అస్థిరంగా(immutable)గా చెల్లిస్తే, ఆ తర్వాత మీరు ఆ విలువను మార్చలేరు.
అస్థిర ప్రతిబంధకాన్ని  let కీవర్డ్ తో సమర్ధం చేయండి.

```wave
let y :i32 = 5;
// y = 10;   // లోపం: అస్థిర కాంతి విలువ మార్చలేరు.
```

అస్ధిర ప్రతిబంధకాలు విలువలు మారవని నడుస్తున్నందున ప్రోగ్రాంకు స్థిరత్వం మరియు అంచనా వేయడం అందిస్తుంది.
విలువలను మార్చాల్సిన అవసరం లేకుండా, అస్థిర ప్రతిబింబాలను ఉపయోగించడం సిఫారసు చేయబడింది.

Waveలో, `let` కీవర్డ్ తో పాటు `mut`ను ఉపయోగించి, మీరు స్పష్టంగా లోచి నిలుస్తారు.

```wave
let mut y :i32 = 5;
y = 10;
```

ఈ ఫంక్షన్ `let` తో  ప్రకటించబడిన దాతలను ఫలితంగా, `mut` కీవర్డ్ ద్వారా విలువను మార్చవచ్చు.

### నమోదార్ధం ఉదాహరణ

అతिरिक्त ఇంటర్ మాధ్యమం, స్క్రిప్టుల తరగతుల కోసం వివిధ రకాల వేరియబుల్స్ ని ఉంటుంది.

```wave
var x :i32 = 10;
let y :f64 = 3.14159;
var name :str = "Wave";
let is_active :bool = true;
```

ఈ ఉదాహరణలో `x` మరియు `name` వేరియబుల్స్, `y` మరియు `is_active` తగినంత స్పష్టంగా ఉంటాయి.
Waveగా `var` మరియు `let` ను కచ్చితంగా అర్థం చేసుకోవడంవల్ల అనువదించడం కొరకు అది అంకితం ఉంది.

మార్పు వేరియబుల్స్ మరియు అప్రామాణిక వేరియబుల్స్ ని సరిగ్గా మారుస్తే, డేటా సమాచారాన్ని కాస్త వరకు బలోపేతం చేయడానికి మరింత మార్పు పొందవచ్చు.