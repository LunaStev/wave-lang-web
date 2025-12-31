---
sidebar_position: 8
---

# Struct

## 개요

Wave 언어의 구조체는 사용자 정의 데이터 타입을 선언하기 위한 핵심 문법 요소입니다.
구조체를 사용하면 서로 다른 타입의 값을 하나의 논리적인 단위로 묶어 표현할 수 있으며, 이를 통해 복잡한 데이터 구조를 명확하고 안전하게 모델링할 수 있습니다.

Wave의 구조체는 값 타입(value type) 으로 동작합니다.
모든 필드는 반드시 명시적인 타입을 가져야 하며, 구조체 인스턴스를 생성할 때 모든 필드는 초기화되어야 합니다.
이러한 규칙을 통해 구조체의 상태는 항상 완전하고 예측 가능한 형태를 유지합니다.
-------------------------------------------------------------

## Struct Declaration Syntax

A struct is declared using the `struct` keyword.
구조체의 이름은 파스칼 표기법(PascalCase)을 사용하며, 구조체 본문에는 하나 이상의 필드를 정의할 수 있습니다.

필드는 `이름: 타입;` 형식으로 선언되며, 각 필드 선언 뒤에는 반드시 세미콜론이 필요합니다.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

구조체 선언 시 필드가 작성된 순서는 메모리 배치 순서와 동일하게 사용됩니다.
Within a struct, only field declarations are allowed; functions or methods cannot be included.
동작 로직은 구조체 외부에서 별도로 정의됩니다.
------------------------------------------

## Struct Instantiation Syntax

구조체는 구조체 이름을 사용하는 리터럴 형식으로 생성합니다.
A struct literal uses the format `StructName { fieldName: value; ... }` 형태로 작성합니다.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

구조체를 생성할 때는 정의된 모든 필드를 반드시 초기화해야 하며,
하나라도 누락될 경우 컴파일 오류가 발생합니다.

초기화 시 필드의 작성 순서는 구조체 선언 순서와 일치할 필요는 없지만,
각 필드에 전달되는 값의 타입은 구조체에 정의된 타입과 정확히 일치해야 합니다.
Wave에서는 구조체 필드 초기화 과정에서 암묵적인 타입 변환을 허용하지 않습니다.

---

## Struct Field Access Syntax

Fields of a struct are accessed using dot notation.
필드 접근은 읽기와 쓰기 모두 동일한 문법을 사용합니다.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

존재하지 않는 필드 이름을 사용하려고 하면 컴파일 단계에서 오류가 발생합니다.
구조체는 값 타입이기 때문에, 구조체 전체를 대입하거나 함수 인자로 전달할 경우
구조체에 포함된 모든 필드가 함께 복사됩니다.

---

## Struct Method Definition Syntax

Wave 언어는 구조체 내부에 직접 메서드를 정의하지 않습니다.
대신 `proto` 키워드를 사용하여 구조체에 연결된 메서드 집합을 선언합니다.

`proto` 블록은 특정 구조체에 소속된 함수들의 영역이며,
이 블록 안에서 정의된 함수는 해당 구조체의 메서드처럼 사용됩니다.

메서드는 첫 번째 매개변수로 `self`를 사용하여 구조체 인스턴스를 전달받습니다.
`self`는 구조체 전체 값을 의미하며, 값 복사 방식으로 전달됩니다.

```wave
proto Box {
    fun print(self) {
        println("size={}, weight={}", self.size, self.weight);
    }

    fun added_size(self, x: i32) -> i32 {
        return self.size + x;
    }
}
```

`proto` 블록은 구조체 선언과 같은 파일에 위치할 필요는 없으며,
여러 개의 `proto` 블록을 통해 동일한 구조체에 대한 메서드를 분산 정의할 수 있습니다.

메서드 호출은 점 표기법을 사용하며, 일반적인 함수 호출과 동일한 방식으로 동작합니다.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Using Struct as Function Argument

구조체는 함수의 인자로 전달될 때 값 복사 방식으로 처리됩니다.
함수 내부에서 구조체의 필드를 수정하더라도, 호출한 쪽의 구조체 인스턴스에는 영향을 주지 않습니다.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

구조체를 함수의 반환값으로 사용하는 경우에도 동일하게 값 복사가 발생합니다.
이러한 동작은 구조체의 불변성과 예측 가능한 데이터 흐름을 보장합니다.

---

## 중첩 구조체 (Nested Struct)

Wave에서는 구조체의 필드 타입으로 다른 구조체를 사용할 수 있습니다.
구조체는 완전한 타입이기 때문에, 구조체 안에 또 다른 구조체를 포함하는 형태로 자유롭게 중첩할 수 있습니다.

```wave
struct Position {
    x: i32;
    y: i32;
}

struct Player {
    name: str;
    pos: Position;
}
```

중첩된 구조체의 필드는 점 표기법을 연속으로 사용하여 접근합니다.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

구조체 리터럴 내부에 또 다른 구조체 리터럴을 중첩하여 작성할 수 있으며,
이 경우에도 모든 필드 초기화 규칙은 동일하게 적용됩니다.

---

## Struct Arrays

구조체는 배열의 원소 타입으로 사용할 수 있습니다.
Wave의 배열 문법은 `array<타입, 길이>` 형식을 사용하며, 구조체 타입도 그대로 지정할 수 있습니다.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

구조체 배열의 원소에 접근할 때는 배열 인덱스를 먼저 사용한 뒤,
점 표기법을 통해 구조체 내부 필드에 접근합니다.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Basic Operability of Structs

Wave의 구조체는 사용자 정의 타입이기 때문에,
산술 연산이나 비교 연산에 자동으로 참여하지 않습니다.

구조체의 동등성 비교, 정렬, 해싱, 수치 연산 등이 필요하다면
반드시 `proto` 블록을 통해 해당 동작을 명시적으로 정의해야 합니다.
Wave는 구조체에 대해 암묵적인 연산자를 제공하지 않으며,
모든 동작은 명시적으로 정의되는 것을 원칙으로 합니다.