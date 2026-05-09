---
sidebar_position: 7
---

# pemasangan sebaris

## pengenalan

Pemasangan sebaris Wave ditulis dengan blok `asm { ... }`.
Anda boleh mengawal terus daftar, memori dan laluan panggilan sistem dalam kod Wave anda.

Sasaran sokongan semasa:
- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- freestanding `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`

Sasaran Windows dan 32-bit belum lagi disokong.

---

## bentuk asas

`asm` boleh digunakan sebagai **penyata** atau **ungkapan**.

```wave
asm {
    "instruction"
    in("constraint_or_reg") value
    out("constraint_or_reg") target
    clobber("item")
}
```

Komponen:
- Talian rentetan: arahan pemasangan sebenar
- `in(...)`: operan input
- `out(...)`: Operan output
- `clobber(...)`: Daftar/nyatakan/petunjuk ingatan dimusnahkan

---

## Penyata `asm`

Jika tidak ada keperluan untuk nilai pulangan, gunakannya sebagai penyata biasa.

```wave
var ret: i64 = 0;
asm {
    "mov rax, 1"
    "syscall"
    in("rdi") 1
    in("rsi") msg_ptr
    in("rdx") 20
    out("rax") ret
}
```

Anda boleh mempunyai berbilang `out(...)`.

---

## Ekspresi `asm`

Anda boleh menggunakannya dengan mencipta nilai secara langsung.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Nota:
- Ungkapan `asm` membenarkan **tepat satu `out(...)`**.

---

## `in(...)` / `out(...)` farmaseutikal

Rentetan untuk `in("...")`, `out("...")` ialah salah satu daripada yang berikut:

1. daftar konkrit
- Contoh: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`,

2. kelas kekangan
- Contoh: `"r"`, `"m"`, `"rm"`

Contoh:

```wave
in("r") &buf
out("rax") ret
```

Untuk sasaran output (`out(...) target`), corak berikut disyorkan berdasarkan pelaksanaan semasa:
- Pembolehubah:
- Penyahrujukan penunjuk: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` boleh menerima berbilang item sekaligus dan boleh digunakan berbilang kali.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Item utama:
- Daftar: `"rax"`, `"x0"`, dsb.
- Istimewa: `"memory"`, `"cc"` (penormalan dalaman setiap sasaran)

Pengkompil secara automatik menambah clobber lalai dalam mod selamat konservatif.
(`memory`, siri bendera/cc, dsb.; terutamanya `memory` dalam RISC-V berdiri bebas)

---

## Pemegang tempat operan (`$0`, `$1`, ...)

Gunakan `$N` apabila merujuk kepada operan dalam rentetan arahan.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Nota:
- Walaupun anda menggunakan gaya `%0`, ia ditukar secara dalaman kepada gaya `$0`.

---

## Input Opera dan Julat Disokong Semasa

Nilai `in(...)` pada masa ini menyokong bentuk berikut:
- pengecam pembolehubah
- integer literal
- rentetan literal
- `&identifier`
- `deref identifier`
- Integer negatif/tersurat sebenar

Ungkapan biasa yang kompleks mungkin terhad, jadi kami mengesyorkan agar corak tersebut dihantar dalam pembolehubah sementara apabila perlu.

---

## Langkah berjaga-jaga

Pemasangan sebaris sebahagiannya memintas perlindungan sistem jenis.
Spesifikasi daftar yang salah, konflik kekangan, atau clobber yang hilang boleh menyebabkan penjanaan kod yang salah atau kerosakan masa jalan.

Cadangan:
- Sahkan sasaran ABI dan protokol panggilan dahulu
- Mengurus daftar input/output dan clobber secara eksplisit
- Jika ingatan disentuh terus, `clobber("memory")` juga diisytiharkan.
