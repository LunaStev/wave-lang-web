---
sidebar_position: 5
---

# Diagnosis ralat

Pengkompil Wave menunjukkan kod ralat (`E####`) bersama-sama dengan petunjuk lokasi/konteks/penyelesaian sumber sekaligus.

## format output

Format asas ialah:

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Item keluaran:
- `error[E....]`: Kod ralat dan ringkasan
- `--> file:line:column`: Lokasi Masalah
- Sorotan blok sumber + karet(`^`).
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Kod ralat perwakilan

- `E1001` watak yang tidak dijangka
- `E1002` ulasan blok tidak tertutup
- `E1003` rentetan tidak tertutup
- `E1004` Escape rentetan tidak sah
- `E1005` Aksara haram literal
- `E1006` Format literal angka tidak sah
- Ralat sintaks Penghurai `E2001`
- Ralat pengesahan semantik `E3001`
- Berikan `E3102` `null` kepada bukan penuding
- `E3201` Pengurangan integer tersirat dilarang
- Ralat dalaman penjanaan kod Belakang `E9001`

## Ralat belakang juga menunjukkan lokasi sumber

Walaupun panik dalaman berlaku semasa fasa penjanaan kod (LLVM), lokasi panggilan/pengisytiharan sebenar disimpulkan dan dipaparkan jika boleh.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Jika inferens lokasi tidak mungkin, lokasi sandaran digunakan dan fakta ini juga dipaparkan dalam `note`.
