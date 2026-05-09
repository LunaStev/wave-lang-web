---
sidebar_position: 1
---

# Cetak Hello Wave

Dokumen ini menerangkan cara menulis program keluaran paling asas dalam bahasa Wave.

---

## contoh kod

```wave
fun main() {
    println("Hello Wave");
}
```

---

## Penerangan
- `fun main()`

    Wave Ini ialah fungsi titik masuk program. Ia dipanggil pertama apabila dijalankan.

- `println()`

    Mengeluarkan rentetan dengan fungsi output sementara dan menambah pemisah baris (`\n`) selepas output.

- `;` (titik bertitik)

    Semua pernyataan dalam Wave ditamatkan dengan koma bertitik.

---

## hasil pelaksanaan

```text
Hello Wave
```

---

## Contoh tambahan
Wave menyokong interpolasi rentetan.

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

Output:

```text
Hello, Wave!
```

---

> Contoh ini menunjukkan penggunaan fungsi output asas perpustakaan standard Wave.
