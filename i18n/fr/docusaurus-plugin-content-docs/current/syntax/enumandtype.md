---
sidebar_position: 10
---

# Enumeration (enum) et alias de type

Wave supporte les alias de type et les énumérations basées sur les entiers pour maintenir un système de types explicite similaire à C, tout en assurant la lisibilité et la stabilité de l'ABI.

---

## Alias de type (Type Alias)

### Vue d'ensemble

Le mot-clé type attribue un nouveau nom à un type existant.
Cela ne crée pas un nouveau type mais une équivalence complète (alias).

```wave
type MyInt = i32;
```

Dans la déclaration ci-dessus, MyInt est un type totalement identique à i32.

---

### Caractéristiques

- Aucune surcharge à l'exécution
- Totalement identique au niveau de l'ABI
- Existe uniquement à la compilation
- Peut être utilisé comme type de représentation pour les enums

---

### Exemple d'utilisation

```wave
type Size = i64;
type Index = u32;

fun add(a: Size, b: Size) -> Size {
    return a + b;
}
```

---

### Équivalence de type

```wave
type A = i32;
type B = A;

fun f(x: i32) -> i32 { return x; }

fun main() {
    var v: B = 10;
    f(v); // OK
}
```

type est juste un nouveau nom, pas un nouveau type.

---

## Enumération (enum)

### Vue d'ensemble

Les enums de Wave sont basés sur des entiers.
Toutes les énumérations doivent avoir un type de représentation.

```wave
enum ShaderUniformType -> i32 {
    A = 0,
    B,
    C = 10,
    D
}
```

---

### Type de représentation

-> i32 indique de quel type entier est représentée cette enum.

Types de représentation autorisés :

- `i8`, `i16`, `i32`, `i64`
- `u8`, `u16`, `u32`, `u64`
- 해당 타입의 `type alias`

```wave
type MyInt = i32;

enum Example -> MyInt {
    X,
    Y
}
```

---

### 값 할당 규칙

- 명시적 값이 있으면 해당 값 사용
- 없으면 이전 값 + 1
- 첫 값이 없으면 0부터 시작

```wave
enum E -> i32 {
    A,        // 0
    B,        // 1
    C = 10,   // 10
    D         // 11
}
```

---

### enum은 값 타입이다

enum은 정수 값이며, 함수 인자·리턴값으로 자유롭게 사용 가능하다.

```wave
fun f(t: ShaderUniformType) -> i32 {
    return t;
}
```

---

### 상수로 사용

enum variant는 컴파일 타임 상수다.

```wave
const X: i32 = B;
const Y: ShaderUniformType = D;
```

---

## 실제 예제

```wave
type MyInt = i32;

enum ShaderUniformType -> MyInt {
    A = 0,
    B,
    C = 10,
    D
}

const X: MyInt = 123;
const Y: MyInt = B;
const Z: ShaderUniformType = D;

fun f(t: ShaderUniformType) -> MyInt {
    return t;
}

fun g(v: MyInt) -> MyInt {
    return v;
}

fun main() {
    println("{}", f(A)); // 0
    println("{}", f(B)); // 1
    println("{}", f(C)); // 10
    println("{}", f(D)); // 11

    println("{}", g(X)); // 123
    println("{}", g(Y)); // 1
    println("{}", f(Z)); // 11
}
```