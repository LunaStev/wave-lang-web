---
sidebar_position: 7
---

# Pemasangan Dalam Talian

## Pengenalan

Pemasangan dalam talian Wave ditulis sebagai `asm { ... ` ditulis dalam blok.
Anda boleh mengawal register, memori, dan laluan panggilan sistem secara langsung dalam kod Wave.

Sasaran sokongan semasa:

- Linux `x86_64`
- Linux `aarch64`
- macOS (Darwin) `arm64`
- freestanding `x86_64`
- freestanding `aarch64`
- freestanding `riscv64`

Windows dan sasaran 32-bit masih belum disokong.

---

## Bentuk Asas

`asm` boleh digunakan sebagai **pernyataan (statement)** atau **ekspresi (expression)**.

```wave
asm {
    "arahan"
    in("constraint_or_reg") nilai
    out("constraint_or_reg") sasaran
    clobber("item")
}
```

Komponen:

- Barisan rentetan: arahan pemasangan sebenar
- `in(...)`: Operan Input
- `out(...)`: Operan Output
- `clobber(...)`: Petunjuk pendaftaran/status/memory yang dihapus.

---

## `asm` Pernyataan (Statement)

Digunakan sebagai pernyataan umum jika tidak memerlukan nilai kembalian.

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

`out(...)` boleh mempunyai beberapa.

---

## `asm` Ekspresi (Expression)

Boleh digunakan sebagai ekspresi yang menjana nilai secara langsung.

```wave
var result: i64 = asm {
    "mov rax, 123"
    out("rax") result
};
```

Perhatian:

- `asm` ekspresi hanya membenarkan **exactly 1 `out(...)`**.

---

## `in(...)` / `out(...)` Pembatasan

String untuk `in("...")`, `out("...")` adalah salah satu daripada dua berikut.

1. Pendaftaran Spesifik

- Contoh: `"rax"`, `"rdi"`, `"x0"`, `"w1"`, `"a0"`, `"t0"`, `"x10"`

2. Kelas Pembatas (Constraint Class)

- Contoh: `"r"`, `"m"`, `"rm"`

Contoh:

```wave
in("r") &buf
out("rax") ret
```

Sasaran Output (`out(...)` target\` disarankan untuk mengikuti pola berikut berdasarkan pelaksanaan saat ini.

- Variabel: `out("rax") ret`
- Pengindeksan Pembendahan: `out("rax") deref p`

---

## `clobber(...)`

`clobber(...)` boleh mempunyai beberapa item pada satu masa dan boleh digunakan berulang kali.

```wave
asm {
    "xor rax, rax"
    clobber("rax")
    clobber("rcx", "rdx")
    clobber("memory")
}
```

Item Utama:

- Pendaftaran: `"rax"`, `"x0"` dan lain-lain
- Istimewa: `"memory"`, `"cc"` (normalisasi dalaman berdasarkan sasaran)

Penterjemah secara automatik akan menambah clobber default dalam mod keselamatan konservatif.
(`memory`, bender/cc; di RISC-V freestanding, kebanyakannya `memory`)

---

## Penanda Operan (`$0`, `$1`, ...)

Gunakan `$N` untuk merujuk kepada operan dalam rentetan perintah.

```wave
asm {
    "mov QWORD PTR [$0], 777"
    in("r") &buf
    clobber("memory")
}
```

Rujukan:

- Walaupun menggunakan gaya `%0`, ia akan ditukar secara dalaman kepada gaya `$0`.

---

## Rentang sokongan semasa untuk operan input.

`in(...)` nilai sokongan bentuk berikut.

- Pengantara Pembolehubah
- Literal Integer
- Literal Rentetan
- `&identifier`
- `deref identifier`
- 음수 정수/실수 리터럴

복잡한 일반 표현식은 제한될 수 있으므로, 필요 시 임시 변수에 담아 전달하는 패턴을 권장합니다.

---

## Dokumen Subjek

인라인 어셈블리는 타입 시스템의 보호를 부분적으로 우회합니다.
잘못된 레지스터 지정, 제약식 충돌, clobber 누락은 잘못된 코드 생성이나 런타임 오동작을 유발할 수 있습니다.

권장 사항:

- 타깃 ABI와 호출 규약을 먼저 확정
- 입력/출력 레지스터와 clobber를 명시적으로 관리
- 메모리를 직접 건드리면 `clobber("memory")`를 함께 선언
