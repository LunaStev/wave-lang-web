---
sidebar_position: 4
---

#Wave + Balena Integrita Disvolva Vojo V2

## Plena Stadio

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## antaŭ-beta stadio

> Celo: Plena funkcia efektivigo uzante la antaŭan finon de la ondolingvo + LLVM -backend

### Ĉefa ĉefaĵo
* Uzu nur llvm (neniu baleno(Whale))

* Ne ekzistas gramatiko, nur la ekzistantaj specifaĵoj estas efektivigitaj

* Eraraj mesaĝoj, tajpaj provoj, ŝanĝiĝemaj celoj kiel antaŭ -centrita strukturo stabiligo

### efektiviga gamo
* Varia deklaro, eligo, operacio

* Funkcia difino kaj alvoko

* if / else if / else

* while / break / continue

* Formata eligo, tipo -nomado

* Pointer Design (`PTR <T>` formo)

* Array Design (`Array <T, N>`)

* Tipo inspektadon kaj strukturan AST

### uzteknologio
* Rust (Wave Compiler ĉiuj)

* LLVM (IR -Kreado, AOT -Ekzekuto)

* inkwell / llvm-sys

---

## Alpha Stage

> Celo: Whale Enkonduko komenciĝas, kombinita kun LLVM / balen -bazita backend -efektivigo

### Ĉefa ĉefaĵo
* Llvm estas defaŭlta backend

* Whale estas laŭvola backend

* Wave 코드 실행 시 `--backend` 옵션으로 분기 가능

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale rilata laboro
* Whale IR -strukturo -projektado kaj difino (instrukcio, valoro, bloko, ktp.)

* Efektivigo de IR -generatoro por Whale

* Kreado de Whale -Kodo (Asembleo aŭ Binara)

* Tipo -efektivigo uzebla nur kun Whale (i1024, luksa montrilo, ktp.)

### kontrolpunkto
* Saluton monda eligo al Whale

* Deklaro de variabloj de Whale

* Efektivigo de Balenaj IR -Elpurigaj Iloj

* Procesado de montriloj en Whale

* Ondo(Wave) → Whale IR -Konverta Progreso

---

## beta -stadio

> Celo: tute ŝanĝita al Whale, forigante LLVM. Whale + Wave -kombina optimumigo

### Ĉefa ĉefaĵo
* Uzu nur Whale

* La tuta forigo de LLVM (Akuzito kaj Modulo)

* Centro pri Optimigo de Kodoj

* IR → kuras rapide kaj efike

### Ĝi estis proksimume tradukita ĉi tie.

### Optimuma gamo
* Dezajno de Balena IR -Optimumiga Enirpermesilo

* Balen -koda generacia rapideca plibonigo

* Ĉiu gramatiko de ondo estas plene subtenata de baleno

### testo
* Unueco -testo + plena test -suite

* WSON, Norma Biblioteko -Kongrua Testo

* Krucplatforma Balenkonstrua Kontrolo

---

## RC (Liberigu Kandidatan) Stadion

> Celo: Ondo -ekkuro ekkuro - Rust -kodo plena forigi

### Ĉefa ĉefaĵo
* Komencu reeldonadon de ondo -kompililo kun ondo

* Kuru ondkodo mem surbaze de baleno

* Baleno eniras la mem-gastigan paŝon

### labora gamo
* Renovigebla ondo IR -generatoro bazita sur baleno

* Rust -forigo + ondkodo

* Skribita de std kaj kernaj bibliotekaj ondoj

* La unua ond-denaska kompililo naskiĝis pro bootstrap-sukceso

---

## Eldona Paŝo (v0.0.1)

> Celo: Oficiala lanĉo / provizita de plena balen -bazita sendependa lingva ekosistemo

### komponanto
* Ondo (Lingvo kaj Norma Biblioteko)

* Baleno (kompililo -ilaro)

* VEX (Paka Administranto)

* WSON (datumformato)

### Karakterizaĵo
* Kompleta ondo-nur kompililo (sukceso de ekkuro)

* Balena optimumiga kompletigo

* Vex Build and Distribution System Settlement

* Inkluzive de WSON -analizilo + serialigo

* Kruca OS -Konstruaĵo (`Vex Build -Windows ', ktp.)

---

## disvolva meta -strategio

| Strategio | Priskribo |
| -------------------------------------------------------------------------
| Trajno+Fervoja Strategio | Disvolvi balenon kaj samtempe formi ondon malantaŭa |
| Back End Branch Strategy | Opcio '-Backend' por elekti llvm/balenon, gravan strukturon en alfa |
| Reversa Plano de Rescue | Ekde RC, ondkodo estas kompilita per baleno |