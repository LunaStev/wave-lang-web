---
sidebar_position: 5
---

# 오류 진단

Wave 컴파일러는 오류를 코드(`E####`)와 함께, 소스 위치/맥락/해결 힌트까지 한 번에 보여줍니다.

## 출력 형식

기본 형식은 다음과 같습니다.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

출력 항목:
- `error[E....]`: 에러 코드와 요약
- `--> file:line:column`: 문제 위치
- 소스 블록 + caret(`^`) 하이라이트
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## 대표 에러 코드

- `E1001` 예상하지 못한 문자
- `E1002` 닫히지 않은 블록 주석
- `E1003` 닫히지 않은 문자열
- `E1004` 잘못된 문자열 escape
- `E1005` 잘못된 문자 리터럴
- `E1006` 잘못된 숫자 리터럴 형식
- `E2001` 파서 구문 오류
- `E3001` 의미 분석(semantic validation) 오류
- `E3102` `null`을 비포인터에 대입
- `E3201` 암시적 정수 축소 금지
- `E9001` 백엔드 코드생성 내부 오류

## 백엔드 오류도 소스 위치 표시

코드 생성(LLVM) 단계에서 내부 panic이 발생해도, 가능한 경우 실제 호출/선언 위치를 추론해 표시합니다.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

위치 추론이 불가능한 경우에는 fallback 위치가 사용되며, 해당 사실이 `note`에 함께 표시됩니다.
