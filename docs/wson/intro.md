---
sidebar_position: 2
---

# 문법

## 1. 기본 구조

- 파일의 내용은 `{}` 중괄호로 둘러싸여 있는 객체(`object`)로 시작하고 끝난다.

- 객체는 속성 이름(key)과 값(value) 쌍으로 구성된다.

- 속성 이름과 값은 콜론(`:`) 또는 등호(`=`)로 구분한다.

## 2. 주석

- 주석은 `//` 또는  `#` 으로 시작하며, 한줄 단위로 작성된다.

- 주석은 해당 줄의 끝까지 적용된다.

- 여러 줄 주석을 따로 지원하지 않으며, 여러 줄에 걸쳐 주석을 작성할 경우 각줄마다 `//` 또는 `#` 을 추가해야 한다.

## 3. 객체(Object)

- 객체는 중괄호 `{}` 로 둘러싸여 있으며, 키-값 쌍을 포합한다.

- 키와 값 사이에는 `:` 또는 `=` 기호를 사용할 수 있다. 두기호는 혼용 가능하다.

- 각 속성은 쉼표(`,`)로 구분된다.

- 객체 안에 다른 객체를 중첩하여 사용할 수 있다.

예시:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. 배열(Array)

- 배열은 대괄호 `[]` 로 둘러싸여 있으며, 요소들은 쉼표(`,`)로 구분된다.

- 배열의 요소는 객체, 문자열, 숫자 등 다양한 자료형이 될 수 있다.

- WSON에서 배열은 객체 내에 포함될 수 있으며, 배열 안에는 다른 배열이나 객체가 중첩될 수 있다.

예시:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. 키-값 쌍 (Key-Value Pair)

- 속성 이름은 문자열로 구성되며, 공백 없이 `:`, `=` 뒤에 값을 배치한다.

- 값의 유형에는 문자열, 숫자, 불리언, 객체, 배열 등이 있다.

- 문자열은 큰따옴표 `“` 로 둘러싸인다.

- 숫자는 큰 따옴표 없이 사용하며, 정수 또는 실수 형태로 가능하다.

예시:

```
name: "John Doe"
age = 25
```

## 6. 데이터 유형 (Data Types)

- 문자열(String): 큰따옴표 `"` 로 묶인 텍스트다.

```
"hello world"
```

- 숫자(Number): 정수 또는 실수 값이다.

```
42
3.14
```

- 불리언(Boolean): `true` 또는 `false` 값을 사용한다.

```
is_active = true
```

- 객체(Object): 중괄호 `{}` 로 묶인 키-ㄱ밧 쌍이다.
- 배열(Array): 대괄호 `[]` 로 묶인 요소 목록이다.

## 7. 예제 설명

```ws
{
    // 상태 코드와 메시지 정보
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # 사용자 나이
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```