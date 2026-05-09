---
sidebar_position: 1
---

# Pemasangan

## Cara Pemasangan

Wave boleh dipasang dengan mudah melalui skrip pemasangan yang disediakan.
Menjalankan arahan di bawah di terminal akan memasang pengkompil Wave (`wavec`) versi yang ditentukan secara automatik.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Skrip pemasangan akan mengesahkan persekitaran sistem dan secara automatik menyiapkan kebergantungan dan pengkompil yang diperlukan untuk menjalankan Wave.
Jika versi tidak dinyatakan, versi stabil terkini atau versi asas berdasarkan kriteria yang ditetapkan akan dipasang.

## Contoh Pemasangan

Untuk memasang versi terkini, jalankan seperti berikut.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Jika anda ingin memasang versi tertentu, gunakan pilihan `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Ia juga mungkin untuk menentukan versi yang lebih terperinci seperti binaan malam.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Tugasan yang dilakukan semasa pemasangan.

Skrip pemasangan secara automatik akan mengendalikan pelbagai langkah untuk memastikan Wave dapat berjalan dengan normal.
Pertama, pasang pakej yang diperlukan terkait dengan LLVM 14 melalui `apt-get`.
Kemudian, buat pautan simbolik kepada `/usr/lib/libllvm-14.so` agar sistem dapat merujuk kepada LLVM dengan stabil.

Tetapkan pembolehubah persekitaran `LLVM_SYS_140_PREFIX` agar Wave dapat mencari LLVM dengan betul, dan tetapan ini akan ditambah kepada `~/.bashrc` agar kekal dalam sesi terminal seterusnya.

Seterusnya, muat turun dan ekstrak pakej Wave (`.tar.gz`) versi yang ditetapkan oleh pengguna.
Selepas ekstrak, pasang fail eksekusi `wavec` ke dalam `/usr/local/bin` agar dapat menggunakan arahan `wavec` dari mana-mana dalam sistem.

Setelah pemasangan selesai, sahkan sama ada ia dipasang dengan betul menggunakan perintah `wavec --version`.

## Pengesahan Pemasangan

Selepas pemasangan selesai, anda boleh menjalankan arahan di bawah untuk memastikan pengkompil Wave telah dipasang dengan betul.

```bash
wavec --version
```

명령어 실행 시 설치된 Wave의 버전 정보가 출력되면 정상적으로 설치된 상태입니다.

---

## Wave 제거 가이드 (`uninstall.sh`)

Wave를 시스템에서 제거하고 싶을 경우, 제공되는 제거 스크립트를 사용할 수 있습니다.
이 스크립트는 설치 과정에서 추가된 파일과 설정을 정리하는 역할을 합니다.

### 제거 방법

터미널에서 다음 명령어를 실행합니다.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

제거가 완료되면 wavec 명령어는 더 이상 사용되지 않으며,
Wave와 관련된 실행 파일과 설정이 시스템에서 삭제됩니다.