---
sidebar_position: 1
---

# Hello Wave 출력하기

이 문서는 Wave 언어로 가장 기본적인 출력 프로그램을 작성하는 방법을 설명합니다.

---

## 예제 코드

```wave
fun main() {
    println("Hello Wave");
}
```

---

## 설명

- `fun main()`

    Wave 프로그램의 진입점 함수입니다. 실행 시 가장 먼저 호출됩니다.

- `println()`

    임시 출력 함수로 문자열을 출력하며, 출력 후 줄바꿈(`\n`)을 추가합니다.

- `;` (세미콜론)

    Wave의 모든 문장은 세미콜론으로 종료됩니다.

---

## 실행 결과

```text
Hello Wave
```

---

## 추가 예제

Wave는 문자열 보간을 지원합니다.

```wave
fun main() {
    var name: str = "Wave";
    println("Hello, {}!", name);
}
```

출력:

```text
Hello, Wave!
```

---

> 이 예제는 Wave 표준 라이브러리의 기본 출력 함수 사용법을 보여줍니다.