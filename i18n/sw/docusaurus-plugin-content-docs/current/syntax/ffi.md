---
sidebar_position: 9
---

# FFI

이 문서는 Wave 언어에서 외부에 구현된 함수를 호출하기 위한 FFI(외부 함수 인터페이스) 규격을 설명합니다.
FFI를 통해 Wave 프로그램은 다른 언어로 작성된 네이티브 라이브러리와 직접 연동할 수 있습니다.

---

## 개요

Wave의 FFI는 선언 기반으로 동작합니다.
외부 함수는 Wave 코드에서 구현하지 않으며, 해당 함수가 어떤 ABI(Application Binary Interface)를 따르는지만 명시합니다.
실제 구현은 링크 단계에서 외부 라이브러리로부터 해결됩니다.

FFI는 컴파일 타임에 함수의 존재만을 선언하고, 실행 파일 생성 시 링커가 실제 심볼을 연결하는 방식으로 동작합니다.

---

## extern 선언

외부 함수는 extern 키워드를 사용하여 선언합니다.
현재 Wave에서는 ABI 지정이 반드시 필요하며, **`extern(c)`만 지원**합니다.

```wave
extern(c) fun 함수명(인자들...) -> 반환타입;
```

---

## ABI 지정

`extern` 선언에는 ABI를 명시해야 합니다.
현재 지원되는 ABI는 `c` 하나입니다.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

`extern(rust)` 같은 선언은 파싱될 수 있어도 의미 분석 단계에서 에러가 발생합니다.

---

## 함수 단위 extern 선언

외부 함수 하나를 선언할 경우 다음과 같이 작성합니다.

```wave
extern(c) fun InitWindow(width: i32, height: i32, title: ptr<u8>);
```

이 선언은 C ABI를 따르는 `InitWindow` 심볼이 외부 라이브러리에 존재함을 의미합니다.

---

## 블록 단위 extern 선언

동일한 ABI를 사용하는 외부 함수가 여러 개일 경우, 블록 형태로 묶어 선언할 수 있습니다.

```wave
extern(c) {
    fun InitWindow(width: i32, height: i32, title: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

블록 단위 선언은 함수 단위 선언과 의미적으로 완전히 동일하며, 단순히 가독성과 구조화를 위한 문법입니다.

---

## 심볼 이름 지정

일부 ABI에서는 Wave 함수 이름과 실제 링커 심볼 이름이 일치하지 않을 수 있습니다.
이 경우, 외부 함수가 연결될 실제 심볼 이름을 문자열로 명시할 수 있습니다.

### 함수 단위 심볼 지정

```wave
extern(c, "puts")
fun rust_func(i32);
```

이 선언은 `rust_func` 호출 시 실제 링크 심볼로 `puts`를 사용하도록 지정합니다.

---

### 블록 단위 심볼 지정

블록 단위 선언에서는 각 함수 뒤에 심볼 이름을 개별적으로 지정할 수 있습니다.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## 포인터 타입

포인터는 `ptr<T>` 형태로 표현합니다.

```wave
ptr<u8>
ptr<MyStruct>
```

`ptr<T>`는 외부 언어의 포인터와 직접 대응되며, 메모리 소유권이나 생명주기는 Wave에서 관리하지 않습니다.

---

## 구조체 사용

구조체는 외부 함수의 인자 또는 반환값으로 사용할 수 있습니다.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

FFI에서 구조체를 사용할 경우, 필드 순서는 선언된 순서를 유지하며 ABI에서 요구하는 메모리 레이아웃을 따릅니다.

---

## 외부 함수 호출

`extern`으로 선언된 함수는 일반 함수와 동일한 방식으로 호출합니다.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

호출 시 문법적 차이는 없으며, 호출 규약과 심볼 연결은 전적으로 ABI와 링커에 의해 처리됩니다.

---

## 링킹

외부 함수의 실제 구현은 링크 단계에서 외부 라이브러리로부터 제공됩니다.
Wave 컴파일러는 외부 함수 호출을 포함한 오브젝트 파일을 생성하며, 링커가 지정된 라이브러리를 통해 심볼을 해결합니다.

라이브러리 지정 방식은 빌드 도구 및 CLI 옵션을 통해 이루어집니다.

---

## 제한 사항

Wave에서는 다음 기능을 제공하지 않습니다.

- 함수 포인터
- 콜백 함수
- 자동 메모리 관리
- 언어 간 예외 처리 연동

이러한 기능은 이후 버전에서 별도로 다루어질 수 있습니다.
