---
sidebar_position: 3
---

# Wave 직렬화 객체 표기법
WSON(Wave Serialized Object Notation)은 Wave 프로그래밍 언어의 기본 데이터 직렬화 포맷으로, 기존 JSON의 한계를 극복하고 보다 강력한 기능과 효율성을 제공하기 위해 설계되었습니다. WSON은 사람이 읽고 쓰기 쉬운 구조를 유지하면서도 성능을 극대화하여, 다양한 환경에서 데이터를 더욱 안전하고 빠르게 교환할 수 있도록 지원합니다.

## 특징
### 1. **엄격한 타입 시스템**
WSON은 명확한 데이터 타입을 유지하여, JSON의 동적 타입으로 인한 예측 불가능성을 제거합니다. 이를 통해 데이터를 직렬화 및 역직렬화할 때 타입 안정성을 보장할 수 있습니다.

### 2. **높은 성능**
WSON은 최소한의 오버헤드를 가지도록 설계되어 빠른 데이터 처리 속도를 제공합니다. 이는 대량의 데이터를 직렬화할 때 특히 효과적입니다.

### 3. **Wave 친화적인 설계**
Wave 프로그래밍 언어와 완벽하게 연동되도록 설계되어 있으며, Wave의 표준 라이브러리에서 기본적으로 지원됩니다.

### 4. **가독성과 용이한 파싱**
JSON과 유사한 문법을 유지하면서도 더욱 간결한 표현이 가능하여, 사람이 직접 읽고 수정하기 용이합니다. 또한, 효율적인 파싱이 가능하도록 최적화되었습니다.

### 5. **다양한 데이터 구조 지원**
WSON은 단순한 키-값 쌍뿐만 아니라, 네이티브 배열, 구조체, 튜플 등의 복잡한 데이터 구조를 지원합니다. 이를 통해 더욱 유연한 데이터 표현이 가능합니다.

## 활용 분야
- Wave 기반 애플리케이션의 데이터 저장 및 전송

- 네트워크 통신 및 API 데이터 포맷

- 파일 저장 및 설정 파일 형식

- 대량 데이터의 직렬화 및 역직렬화

## 결론
WSON은 Wave 언어의 철학을 반영하여 보다 효율적이고 강력한 데이터 직렬화를 목표로 합니다. 기존 JSON의 단점을 보완하면서도 직관적인 문법을 유지하여, 개발자들이 더욱 쉽게 활용할 수 있도록 설계되었습니다. 앞으로 WSON은 Wave 생태계에서 표준 데이터 포맷으로 자리 잡을 것이며, 다양한 환경에서 강력한 성능을 제공할 것입니다.

