---
sidebar_position: 1
---

# kusakinisha

## mbinu za usakinishaji

Wave inaweza kusakinishwa kwa urahisi kupitia hati ya usanidi inayotolewa.
Endesha amri iliyo chini kwenye terminali na toleo lililotolewa la mkusanyaji wa Wave (`wavec`) litasakinishwa moja kwa moja.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Hati ya usanidi inathibitisha mazingira ya mfumo na kisha kuunda tegemezi zinazohitajika na mkusanyaji wa Wave kwa uendeshaji.
Ikiwa toleo halijatajwa, toleo la hivi karibuni la kudumu au toleo la msingi kulingana na vigezo vilivyotajwa litasakinishwa.

## Mfano wa usakinishaji

Ili kusakinisha toleo la hivi karibuni, endesha ifuatavyo.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Ikiwa unataka kusakinisha toleo maalum, tumia chaguo `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Inawezekana pia kubainisha toleo la kina zaidi kama vile la Nightly Build.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## shughuli zinazotekelezwa wakati wa usakinishaji

Hati ya usanidi inashughulikia hatua kadhaa kiotomatiki ili kuhakikisha uendeshaji mzuri wa Wave.
Kwanza, pakiti muhimu zinazohusiana na LLVM 14 husakinishwa kupitia `apt-get`.
Kisha, kiunga cha picha kwa `/usr/lib/libllvm-14.so` kilitengenezwa ili LLVM ihusishwe kwa uhakika kwenye mfumo.

Ili mkusanyaji wa Wave upate LLVM ipasavyo, kigezo cha mazingira `LLVM_SYS_140_PREFIX` kimewekwa na kinaongezwa kwenye `~/.bashrc` kuweza kudumu katika vipindi vijavyo vya terminali.

Kisha, pakiti ya Wave katika toleo lililobainishwa na mtumiaji (`.tar.gz`) inapakuliwa na inafunguliwa.
Baada ya kufungua kifurushi, faili ya utekelezaji ya `wavec` inasakinishwa kwenye `/usr/local/bin` ili amri ya `wavec` itumike popote kwenye mfumo.

Baada ya usakinishaji kukamilika, thibitisha kwa `wavec --version` kuona kama imesanikishwa vizuri.

## thibitisha usakinishaji

Baada ya usakinishaji, unaweza kuthibitisha ikiwa mkusanyaji wa Wave umesakinishwa vizuri kwa kuendesha amri ifuatayo.

```bash
wavec --version
```

Wakati amri inapoendeshwa na maelezo ya toleo la Wave lililosakinishwa yanaonyeshwa, basi usakinishaji umekamilika vizuri.

---

## muongozo wa kuondoa Wave (`uninstall.sh`)

Ikiwa unataka kuondoa Wave kutoka kwenye mfumo, unaweza kutumia hati ya kuondoa inayotolewa.
Hii hati inatumika kusafisha faili na mipangilio iliyoongezwa wakati wa usakinishaji.

### mbinu za kuondoa

Endesha amri ifuatayo kwenye terminali.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Baada ya kuondolewa, amri ya wavec haitatumiwa tena na faili za utekelezaji na mipangilio inayohusiana na Wave itafutwa kutoka kwenye mfumo.