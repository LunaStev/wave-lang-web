---
sidebar_position: 4
---

# Wave + Whale integrierte Entwicklungs-Roadmap v2

## Alle Stufen

```matlab
pre-alpha → pre-beta → alpha → beta → rc → Veröffentlichung
```

---

## Pre-Beta Stufe

> Ziel: Vollständige Frontend-Entwicklung der Wave-Sprache + vollständige Implementierung der Funktionen mit LLVM Backend

### Hauptmerkmale

- Nur LLVM verwenden (kein Whale)

- Keine Hinzufügung von Syntax, nur Implementierung der bestehenden Spezifikationen

- Stabilisierung der frontend-zentrierten Struktur einschließlich Fehlermeldungen, Typenprüfung, Variablenscope

### Umfang der Implementierung

- Variable Deklaration, Ausgabe, Berechnung

- Funktionen definieren und aufrufen

- if / else if / else

- while / break / continue

- Formatierte Ausgabe, Typenangabe

- Zeigerdesign (`ptr<T>`-Format)

- Array-Design (`array<T, N>`)B

- Typenprüfung und strukturelles AST

### Verwendete Technologien

- Rust (gesamter Wave-Compiler)

- LLVM (IR-Erzeugung, AOT-Ausführung)

- inkwell / llvm-sys

---

## Alpha-Stufe

> Ziel: Einführung von Whale, parallel mit LLVM verwenden / Implementierung eines Whale-basierten Backends beginnen

### Hauptmerkmale

- LLVM ist das Standard-Backend

- Whale ist ein optionales Backend

- Beim Ausführen von Wave-Code mit der Option `--backend` steuerbar

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Arbeiten im Zusammenhang mit Whale

- Entwurf und Definition der Whale-IR-Struktur (Instruction, Value, Block usw.)

- Implementierung eines IR-Generators für Whale

- Whale-Code-Generator (Assembly oder Binary)

- Typenimplementierung, die nur mit Whale möglich ist (`i1024`, erweitere Zeiger usw.)

### Checkpoint

- Ausgabe von Hello World mit Whale

- Variablendeklaration/-zuweisung in Whale

- Implementierung eines IR-Debugging-Tools für Whale

- Zeigertypenbehandlung in Whale

- Umwandlung von Wave zu Whale IR

---

## Beta-Stufe

> Ziel: Vollständige Umstellung auf Whale, Entfernen von LLVM. Optimierung der Whale + Wave-Kombination

### Hauptmerkmale

- Nur Whale verwenden

- Vollständige Entfernung von LLVM (Abhängigkeiten und Module)

- Fokus auf Code-Optimierung

- Schnell und effizient von IR bis zur Ausführung

### 최적화 범위

- Whale IR 최적화 Pass 설계

- Whale 코드 생성 속도 개선

- Wave의 모든 문법이 Whale에서 완벽 지원

### 테스트

- 단위 테스트 + 전체 테스트 스위트

- WSON, 표준 라이브러리 호환성 테스트

- 크로스 플랫폼 Whale 빌드 확인

---

## RC (Release Candidate) 단계

> 목표: Wave 부트스트랩 시작 — Rust 코드 전면 제거

### 주요 특징

- Wave로 Wave 컴파일러를 재작성 시작

- Whale 기반으로 Wave 코드 자체 실행

- Whale은 self-hosting 단계 진입

### 작업 범위

- Whale 기반으로 Wave IR 생성기 재작성

- Rust 제거 + Wave 코드로 대체

- std 및 core 라이브러리 Wave로 작성

- 부트스트랩 성공 시 첫 Wave-native 컴파일러 탄생

---

## Release 단계 (v0.0.1)

> 목표: 공식 출시 / 완전한 Whale 기반 독립 언어 생태계 제공

### 구성 요소

- Wave (언어 및 표준 라이브러리)

- Whale (컴파일러 툴체인)

- Vex (패키지 매니저)

- WSON (데이터 포맷)

### 특징

- 완전한 Wave-only 컴파일러 (부트스트랩 성공)

- Whale 최적화 완료

- Vex 빌드 및 배포 시스템 정착

- WSON 파서 + 직렬화 포함

- 크로스 OS 빌드 가능 (`vex build --windows` 등)

---

## 개발 메타 전략

| 전략        | 설명                                             |
| --------- | ---------------------------------------------- |
| 열차+레일 전략  | Whale을 개발하면서 동시에 Wave 백엔드를 구성해 나가는 병행 진행       |
| 백엔드 분기 전략 | `--backend` 옵션으로 LLVM/Whale 선택, alpha에서 중요한 구조 |
| 구조 역전 계획  | rc 이후부터 Wave 코드가 Whale을 통해 Wave 자신을 컴파일        |
