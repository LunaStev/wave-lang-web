---
sidebar_position: 4
---

# Wave + Whale Integrita Disvolva Vojo v2

## Tuta Etapo

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta Etapo

> Celo: Kompletigi la front-end de la lingvo Wave + efektivigi ĉiujn funkciojn per LLVM-backend

### Ĉefaj Trajtoj
* Uzi nur LLVM (Whale ne estas uzata)

* Neniu nova gramatiko, nur efektivigo de ekzistantaj specifoj

* Stabiligo de front-end strukturo: erarmesaĝoj, tipkontrolo, variabla amplekso, ktp.

### Efektiviga Amplekso
* Deklaro de variabloj, eligo, kaj operacioj

* Difino kaj alvoko de funkcioj

* if / else if / else strukturoj

* while / break / continue bukloj

* Formatita eligo, tipo-specifo

* Pointer-dizajno (`ptr<T>` formo)

* Tabelo-dizajno (`array<T, N>`)

* Tipkontrolo kaj struktura AST

### Uzataj Teknologioj
* Rust (por tuta Wave-kompililo)

* LLVM (IR-generado kaj AOT-rulado)

* inkwell / llvm-sys

---

## Alpha Etapo

> Celo: Komenci enkondukon de Whale, efektivigi Whale-bazitan backend kune kun LLVM



### Ĉefaj Trajtoj
* LLVM estas la defaŭlta backend

* Whale estas laŭvola backend

* Eblas elekti backend per opcio --backend dum rulado

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Taskoj Rilataj al Whale
* Dezajno kaj difino de Whale IR-strukturo (Instrukcioj, Valoroj, Blokoj, ktp.)

* IR-generatoro por Whale

* Kodo-generado de Whale (asemblea aŭ binara)

* Specialaj tipoj uzeblaj nur en Whale (ekz. `i1024`, altnivelaj pointeroj)

### Kontrolpunktoj
* Eligo de "Hello World" per Whale

* Deklaro kaj atribuo de variabloj en Whale

* Whale IR sencimigaj iloj

* Prilaborado de pointer-tipoj en Whale

* Progreso de Wave → Whale IR konvertado

---

## Beta Etapo

> Celo: Plene transiri al Whale, forigi LLVM. Plibonigo de la kombino Whale + Wave

### Ĉefaj Trajtoj
* Uzi nur Whale

* Kompleta forigo de LLVM (inkluzive de dependecoj kaj moduloj)

* Fokuso pri koda optimumigo

* IR ĝis ruligo – rapida kaj efika

### Ĝi estis proksimume tradukita ĉi tie.

### Optimumiga Amplekso
* Dezajno de Whale IR-optimumigaj paŝoj

* Plibonigo de Whale-koda generrapideco

* Ĉiuj gramatikaj elementoj de Wave estas plene subtenataj de Whale

### Testado
* Unuocaj testoj + plena testa kadro

* Testado de kongrueco por WSON kaj la norma biblioteko

* Kontrolo de transplatformaj konstruoj per Whale

---

## RC (Release Candidate) Etapo

> Celo: Komenci Wave-bootstrap – plene forigi Rust-kodon

### Ĉefaj Trajtoj
* Rekomenci skribon de Wave-kompililo per Wave mem

* Rulado de Wave-kodo rekte surbaze de Whale

* Whale atingas memgastigan fazon

### Tasko-Amplekso
* Reeskribi Wave IR-generatoron baziĝante sur Whale

* Forigo de Rust + anstataŭigo per Wave-kodo

* Skribi std kaj core bibliotekojn en Wave

* Unua denaska Wave-kompililo naskiĝas per bootstrap-sukceso

---

## Eldona Etapo (v0.0.1)

> Celo: Oficiale lanĉi plenan, Whale-bazitan, sendependan lingvan ekosistemon

### Komponantoj
* Wave (lingvo kaj norma biblioteko)

* Whale (kompilila ilaro)

* Vex (paka administrilo)

* WSON (datumformato)

### Trajtoj
* Plene sendependa Wave-kompililo (bootstrap sukcesis)

* Whale-optimumigo kompletigita

* Vex-bazita konstruado kaj distribua sistemo stabiligita

* WSON-parsero + serialigilo inkluzivitaj

* Trans-OS konstruado ebla (`vex build --windows` ktp.)

---

## Evolua Metastrategio

| Strategio                  | Priskribo                                                           |
|----------------------------|---------------------------------------------------------------------|
| Trajno + Relo Strategio    | Disvolvi Whale dum samtempe formi Wave-backendon                    |
| Backend-Dividado Strategio | Elekto de LLVM/Whale per --backend, ŝlosila strukturo en alpha-fazo |
| Inversa Rekonkerplano      | Ekde RC, Wave-kodo estas kompilata per Whale mem                    |