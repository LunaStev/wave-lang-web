---
sidebar_position: 4
---

# Wave + Whale Integrated Development Roadmap v2

This document is a roadmap outlining the step-by-step integration development process of the Wave language and Whale compiler toolchain.
Wave and Whale initially start as separate components, but ultimately aim to be fully integrated into one independent language ecosystem.

The entire development stages follow the flow as below.

```matlab
pre-alpha → pre-beta → alpha → beta → rc → release
```

Each stage proceeds based on the results of the previous stage, assuming unidirectional development where you do not revert to a previous structure once a stage is completed.

---

## Pre-Beta Stage

The goal of the Pre-Beta stage is to complete the front end of the Wave language and implement the full functionality of the language based on the LLVM backend.
In this stage, Whale is not used; compilation and execution are entirely done through LLVM.

Extending the syntax itself is not addressed at this stage.
The key goal is to make every grammatical element work based on the defined specifications.
Focus on stabilizing frontend architecture like error message quality, type checking, variable scope handling, etc.

The scope of implementation includes variable declaration, output, and basic operations, as well as the completion of function definition and calls, conditions (`if` / `else if` / `else`), loops (`while` / `break` / `continue`).
It also includes format output, explicit type specification, `ptr<T>` type pointer design, `array<T, N>` type array design.

In this stage, the Wave compiler is entirely written in Rust and uses inkwell and llvm-sys for LLVM IR generation and AOT execution.

---

## Alpha Stage

The goal for the Alpha stage is to introduce the Whale backend and establish a structure where LLVM and Whale are used concurrently.
LLVM remains the primary backend, and Whale is added as an optionally usable backend.

Wave 코드를 실행할 때 `--backend` 옵션을 통해 LLVM과 Whale 중 어떤 백엔드를 사용할지 선택할 수 있습니다.

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

이 단계에서는 Whale 자체의 IR 구조를 설계하고 정의합니다.
Instruction, Value, Block과 같은 핵심 구성 요소를 정리하고,
Wave AST를 Whale IR로 변환하는 IR Generator를 구현합니다.

또한 Whale용 코드 생성기를 구현하여, 어셈블리 또는 바이너리 형태로 실행 가능하도록 만듭니다.
LLVM에서는 구현하기 어렵거나 비효율적인 타입들, 예를 들어 `i1024`와 같은 초대형 정수 타입이나
고급 포인터 구조는 Whale 전용 기능으로 이 단계에서 도입됩니다.

체크포인트로는 Whale 백엔드에서 Hello World 출력이 가능해야 하며,
변수 선언과 할당, 포인터 처리, IR 디버깅 도구가 정상적으로 동작해야 합니다.
Wave → Whale IR 변환이 실질적으로 진행되는 단계입니다.

---

## Beta Stage

Beta 단계의 목표는 Whale로 완전히 전환하고, LLVM 의존성을 제거하는 것입니다.
이 단계부터 Wave 컴파일과 실행은 Whale만을 사용합니다.

LLVM 관련 디펜던시와 모듈은 전부 제거되며,
코드 생성과 실행 경로는 Whale 기준으로 최적화됩니다.
IR 생성부터 실행까지의 흐름을 단순하고 빠르게 만드는 것이 핵심 과제입니다.

Whale IR에 대한 최적화 패스를 설계하고,
코드 생성 속도와 실행 효율을 개선합니다.
Wave의 모든 문법은 이 단계에서 Whale 백엔드 기준으로 완벽하게 지원되어야 합니다.

테스트 측면에서는 단위 테스트와 전체 테스트 스위트를 모두 수행하며,
WSON과 표준 라이브러리 호환성, 크로스 플랫폼 Whale 빌드 여부를 함께 검증합니다.

---

## RC (Release Candidate) Stage

RC 단계의 목표는 Wave의 부트스트랩을 시작하는 것입니다.
이 단계부터 Wave 컴파일러의 Rust 구현을 점진적으로 제거하고,
Wave 언어 자체로 Wave 컴파일러를 재작성하기 시작합니다.

Whale을 기반으로 Wave IR 생성기를 다시 작성하며,
컴파일러 핵심 로직과 std / core 라이브러리를 Wave 코드로 대체합니다.
이 과정을 통해 Whale은 self-hosting 단계에 진입하게 됩니다.

부트스트랩이 성공하면, 최초의 Wave-native 컴파일러가 탄생하게 됩니다.

---

## Release Stage (v0.0.1)

Release 단계는 Wave의 공식 첫 릴리스를 의미합니다.
이 시점에서 Wave와 Whale은 완전히 통합된 독립 언어 생태계를 구성합니다.

릴리스 구성 요소에는 Wave 언어와 표준 라이브러리,
Whale 컴파일러 툴체인, Vex 패키지 매니저,
그리고 WSON 데이터 포맷이 포함됩니다.

이 단계의 Wave는 완전히 Wave 코드로 작성된 컴파일러를 가지며,
Whale의 최적화는 완료된 상태여야 합니다.
Vex를 통한 빌드 및 배포 흐름이 정착되고,
`vex build --windows`와 같은 크로스 OS 빌드도 가능해야 합니다.

---

## Development Meta Strategy

Wave + Whale 개발은 단순한 단계 진행이 아니라, 명확한 전략을 기반으로 이루어집니다.
Whale을 개발하면서 동시에 Wave 백엔드를 구성해 나가는 열차+레일 전략을 채택하여,
백엔드 구조와 언어 설계를 병행해서 발전시킵니다.

Alpha 단계에서는 `--backend` 옵션을 통한 백엔드 분기 전략이 중요한 역할을 하며,
LLVM과 Whale을 직접 비교하고 검증할 수 있는 기반을 제공합니다.

RC 이후에는 구조가 역전되어,
Wave 코드가 Whale을 통해 Wave 자신을 컴파일하는 구조 역전 계획이 본격적으로 진행됩니다.