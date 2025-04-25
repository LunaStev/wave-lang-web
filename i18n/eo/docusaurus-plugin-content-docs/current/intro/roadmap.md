---
sidebar_position: 4
---

# Wave + Whale 통합 개발 로드맵 v2

## 전체 단계

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

---

## Pre-Beta 단계

> 목표: Wave 언어의 프론트엔드 완성 + LLVM 백엔드를 이용한 전체 기능 구현

### 주요 특징
* LLVM만 사용 (Whale 없음)

* 문법 추가는 없음, 기존 사양만 구현

* 에러 메시지, 타입 검사, 변수 스코프 등 프론트 중심 구조 안정화

### 구현 범위
* 변수 선언, 출력, 연산

* 함수 정의 및 호출

* if / else if / else

* while / break / continue

* 포맷 출력, 타입 지정

* 포인터 설계 (`ptr<T>` 형태)

* 배열 설계 (`array<T, N>`)

* 타입 검사 및 구조적 AST

### 사용 기술
* Rust (Wave 컴파일러 전부)

* LLVM (IR 생성, AOT 실행)

* inkwell / llvm-sys

---

## Alpha 단계

> 목표: Wahle 도입 시작, LLVM과 병행 사용 / Whale 기반 백엔드 시작 구현

### 주요 특징
* LLVM은 디폴트 백엔드

* Whale은 선택적 백엔드

* Wave 코드 실행 시 `--backend` 옵션으로 분기 가능

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Whale 관련 작업
* Whale IR 구조 설계 및 정의 (Instruction, Value, Block 등)

* Whale용 IR Generator 구현

* Whale 코드 생성기 (어셈블리 or 바이너리)

* Whale로만 가능한 타입 구현 (i1024, 고급 포인터 등)

### 체크포인트
* Whale로 Hello World 출력

* Whale에서 변수 선언/할당

* Whale IR 디버깅 도구 구현

* Whale에서 포인터 타입 처리

* Wave → Whale IR 변환 진행

---

## Beta 단계

> 목표: Whale로 완전 전환, LLVM 제거. Whale + Wave 조합 최적화

### 주요 특징
* Whale만 사용

* LLVM 전체 제거 (디펜던시 및 모듈)

* 코드 최적화 중심

* IR → 실행까지 빠르고 효율적으로

### 최적화 범위
* Whale IR 최적화 Pass 설계

* Whale 코드 생성 속도 개선

* Wave의 모든 문법이 Whale에서 완벽 지원

### 테스트
* 단위 테스트 + 전체 테스트 스위트

* WSON, 표준 라이브러리 호환성 테스트

* 크로스 플랫폼 Whale 빌드 확인

---

## RC (Release Candidate) 단계

> 목표: Wave 부트스트랩 시작 — Rust 코드 전면 제거

### 주요 특징
* Wave로 Wave 컴파일러를 재작성 시작

* Whale 기반으로 Wave 코드 자체 실행

* Whale은 self-hosting 단계 진입

### 작업 범위
* Whale 기반으로 Wave IR 생성기 재작성

* Rust 제거 + Wave 코드로 대체

* std 및 core 라이브러리 Wave로 작성

* 부트스트랩 성공 시 첫 Wave-native 컴파일러 탄생

---

## Release 단계 (v0.0.1)

> 목표: 공식 출시 / 완전한 Whale 기반 독립 언어 생태계 제공

### 구성 요소
* Wave (언어 및 표준 라이브러리)

* Whale (컴파일러 툴체인)

* Vex (패키지 매니저)

* WSON (데이터 포맷)

### 특징
* 완전한 Wave-only 컴파일러 (부트스트랩 성공)

* Whale 최적화 완료

* Vex 빌드 및 배포 시스템 정착

* WSON 파서 + 직렬화 포함

* 크로스 OS 빌드 가능 (`vex build --windows` 등)

---

## 개발 메타 전략

| 전략           | 설명                                                                 |
|----------------|----------------------------------------------------------------------|
| 열차+레일 전략 | Whale을 개발하면서 동시에 Wave 백엔드를 구성해 나가는 병행 진행       |
| 백엔드 분기 전략 | `--backend` 옵션으로 LLVM/Whale 선택, alpha에서 중요한 구조            |
| 구조 역전 계획 | rc 이후부터 Wave 코드가 Whale을 통해 Wave 자신을 컴파일               |
