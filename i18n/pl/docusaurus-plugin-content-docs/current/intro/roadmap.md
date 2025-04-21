---
sidebar_position: 4
---

# Roadmap integracji Wave + Whale v2

## Etapy ogólne

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Etap Pre-Beta

> Cel: ukończenie frontend'u języka Wave + implementacja pełnej funkcjonalności z użyciem backendu LLVM

### Główne cechy
* Użycie tylko LLVM (brak Whale)

* Brak nowych elementów składniowych, tylko implementacja istniejącej specyfikacji

* Stabilizacja struktury związanej z komunikatami o błędach, sprawdzaniem typów, zakresem zmiennych itp.

### Zakres implementacji
* Deklaracja zmiennych, wyjście, operacje

* Definicja i wywoływanie funkcji

* if / else if / else

* while / break / continue

* Formatowane wyjście, przypisanie typów

* Projektowanie wskaźników (`ptr<i32>`)

* Projektowanie tablic (`array<i32, N>`)

* Sprawdzanie typów i strukturalny AST

### Technologie używane
* Rust (cały kompilator Wave)

* LLVM (generowanie IR, wykonanie AOT)

* inkwell / llvm-sys

---

## Etap Alpha

> Cel: rozpoczęcie integracji Whale, równoczesne używanie LLVM / rozpoczęcie implementacji backendu Whale

### Główne cechy
* LLVM jest domyślnym backendem

* Whale jest opcjonalnym backendem

* Wykonanie kodu Wave z możliwością wyboru backendu za pomocą opcji `--backend`

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Zadania związane z Whale
* Projektowanie i definiowanie struktury IR dla Whale (Instruction, Value, Block itp.)

* Implementacja generatora IR dla Whale

* Generator kodu Whale (Assembly lub Binary)

* Implementacja typów dostępnych tylko dla Whale (i1024, zaawansowane wskaźniki itp.)

### Kamienie milowe
* Wyświetlenie "Hello World" za pomocą Whale

* Deklaracja/ przypisanie zmiennych w Whale

* Implementacja narzędzi do debugowania IR Whale

* Obsługa typów wskaźników w Whale

* Przekształcenie Wave → Whale IR

---

## Etap Beta

> Cel: pełne przejście na Whale, usunięcie LLVM. Optymalizacja kombinacji Whale + Wave

### Główne cechy
* Użycie tylko Whale

* Całkowite usunięcie LLVM (zależności i moduły)

* Skupienie na optymalizacji kodu

* Szybkie i efektywne przejście od IR do wykonania

### Zakres optymalizacji
* Projektowanie passów optymalizacji IR dla Whale

* Poprawa szybkości generowania kodu Whale

* Pełne wsparcie wszystkich elementów składniowych Wave w Whale

### Testy
* Testy jednostkowe i pełne zestawy testów

* Testy zgodności z WSON i standardową biblioteką

* Sprawdzenie kompilacji Whale w różnych systemach operacyjnych

---

## Etap RC (Release Candidate)

> Cel: rozpoczęcie bootstrapowania Wave — całkowite usunięcie kodu w Rust

### Główne cechy
* Przepisanie kompilatora Wave z użyciem Wave

* Użycie Whale do wykonywania kodu Wave

* Whale przechodzi do etapu self-hosting

### Zakres prac
* Przepisanie generatora IR Wave na Whale

* Usunięcie Rust i zastąpienie go kodem Wave

* Pisanie bibliotek std i core w Wave

* Pierwszy kompilator Wave oparty na Wave po udanym bootstrapie

---

## Etap Release (v0.0.1)

> Cel: oficjalne wydanie / pełna ekosystema oparta na Whale

### Składniki
* Wave (język i standardowa biblioteka)

* Whale (kompilator toolchain)

* Vex (menedżer pakietów)

* WSON (format danych)

### Główne cechy
* Kompilator Wave w pełni działający (po udanym bootstrapie)

* Optymalizacja Whale zakończona

* Stabilizacja systemu budowania i wdrażania Vex

* Parer i serializacja WSON

* Możliwość kompilacji na różne systemy operacyjne (`vex build --windows` itp.)

---

## Strategia rozwoju

| Strategia                        | Opis                                                              |
|----------------------------------|-------------------------------------------------------------------|
| Strategia pociągu+torów          | Równoczesne rozwijanie Whale i backendu Wave                      |
| Strategia rozgałęzienia backendu | Wybór między LLVM i Whale za pomocą opcji --backend, ważne w alpha |
| Plan odwrócenia struktury        | Po etapie RC Wave będzie kompilować siebie za pomocą Whale        |
