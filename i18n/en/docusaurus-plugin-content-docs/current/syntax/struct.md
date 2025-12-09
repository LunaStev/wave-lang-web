---
sidebar_position: 8
---

# Struct

In the Wave language, a struct is a syntactic element for declaring user-defined data types, designed to group values of different types into a single collection. A struct operates as a value type, and all fields must have explicitly defined types, with initial values provided for all fields at the time of struct creation.

---

## Struct Declaration Syntax

A struct is declared using the `struct` keyword. The name of a struct uses PascalCase, and within the struct body, one or more fields can be declared. Fields are written in the format `name: type;`. A semicolon is required after each field declaration.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

When declaring a struct, the order of fields is used identically to the memory layout order. Within a struct, only field declarations are allowed; functions or methods cannot be included.

---

## Struct Instantiation Syntax

A struct is instantiated using a literal format with the struct name. A struct literal uses the format `StructName { fieldName: value; ... }` format, and all defined fields must be initialized. During initialization, the order of fields does not have to match the declaration order.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

A compile error occurs if any fields are missing during initialization. The type of values provided during initialization must exactly match the types defined in the struct, and implicit conversion is not allowed.

---

## Struct Field Access Syntax

Fields of a struct are accessed using dot notation. Field access is used the same way for both read and write operations, and using a nonexistent field name will result in a compile error.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

Struct variables operate as value types, so when assigning the entire struct or passing it as a function argument, all the fields of the struct are copied.

---

## Struct Method Definition Syntax

The Wave language does not include methods within the struct itself; instead, methods are associated with a struct using the `proto` keyword. A proto block declares a set of functions belonging to a specific struct. Functions within a `proto` use `self` as the first parameter to refer to the struct instance. `self` receives the entire struct value, processed via value copying.

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

Proto blocks do not need to be in the same file as the struct declaration, and multiple proto blocks can be used to define additional methods for the same struct. Method calls are similar to regular function calls, using dot notation to call methods on a struct instance.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Using Struct as Function Argument

When a struct is passed as a function argument, it is handled by value copying. Modifying fields inside the struct does not affect the struct instance on the calling side.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

Returning a struct from a function also results in value copying.

---

## Nested Struct

In Wave, you can use another struct as a field type within a struct. As a complete type, a struct can be used nested by having one struct include another.

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

Nested structs are accessed using continuous dot notation to reach internal fields.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

Within a struct literal, you can nest another struct literal, with all field initialization rules still applicable.

---

## Struct Arrays

Structs can also be used as element types in arrays. Array syntax uses the `array<type, length>` format, and a struct type can be directly specified as an element in the array.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

When accessing elements of a struct array, first use the array index, then use dot notation to access the struct fields.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Basic Operability of Structs

In Wave, structs are user-defined types, so they cannot automatically participate in arithmetic or comparison operations. For operations like equality comparison, hashing, or sorting of structs, related functionality must be directly implemented using proto blocks. Operators for struct-to-struct operations are not automatically provided in the Wave language; if needed, they must be defined via functions or methods.