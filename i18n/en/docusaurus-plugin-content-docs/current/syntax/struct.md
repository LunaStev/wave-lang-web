---
sidebar_position: 8
---

# Struct

## Introduction

The struct in the Wave language is a key syntax element for declaring user-defined data types.
Using structures allows for different types of values to be grouped and represented as a single logical unit, which enables modeling of complex data structures clearly and safely.

Wave structures operate as value types.
All fields must have explicit types and must be initialized when a struct instance is created.
Through these rules, the state of the structure always maintains a complete and predictable form.
-----------------------------------------------------------------------------------------------------------------

## Struct Declaration Syntax

A struct is declared using the `struct` keyword.
The name of a structure uses PascalCase, and one or more fields can be defined in the structure body.

Fields are declared in the form `name: type;`, and a semicolon is required after each field declaration.

```wave
struct Box {
    size: i32;
    weight: f32;
}
```

The order in which fields are written when declaring a struct is used as the memory layout order.
Within a struct, only field declarations are allowed; functions or methods cannot be included.
The operational logic is defined separately outside the struct.
-------------------------------------------------------------------------------

## Struct Instantiation Syntax

A struct is created using a literal format with the struct name.
A struct literal uses the format `StructName { fieldName: value; ... It is written in the form of `}.

```wave
var b: Box = Box {
    size: 42;
    weight: 10.5;
};
```

When creating a struct, all defined fields must be initialized, and a compile error will occur if even one is omitted.

When initializing, the order of fields does not need to match the struct declaration order, but the type of values passed to each field must exactly match the type defined in the struct.
Wave does not allow implicit type conversion during the initialization of struct fields.

---

## Struct Field Access Syntax

Fields of a struct are accessed using dot notation.
Field access uses the same syntax for both reading and writing.

```wave
println("Size: {}", b.size);
println("Weight: {}", b.weight);
```

An error will occur at compile time if you attempt to use a field name that does not exist.
Since a struct is a value type, when assigning the entire struct or passing it as a function argument, all fields contained in the struct are copied together.

---

## Struct Method Definition Syntax

The Wave language does not define methods directly within structs.
Instead, the `proto` keyword is used to declare a set of methods associated with the struct.

A `proto` block is an area for functions belonging to a specific struct, and functions defined in this block are used like methods of that struct.

Methods use `self` as the first parameter to receive the struct instance.
`self` signifies the entire struct value and is passed by value copying.

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

`Proto` blocks do not need to be located in the same file as the struct declaration, and multiple `proto` blocks can distribute method definitions for the same struct.

Method calls use dot notation and operate in the same manner as regular function calls.

```wave
b.print();
var n: i32 = b.added_size(5);
```

---

## Using Struct as Function Argument

When structs are passed as function arguments, they are handled by value copying.
Even if you modify the fields of a struct within a function, it does not affect the struct instance on the calling side.

```wave
fun calc(box: Box) -> i32 {
    return box.size * 2;
}
```

The same value copying occurs when using structs as return values from functions.
This behavior ensures the immutability of structs and predictable data flow.

---

## Nested Struct

In Wave, another struct can be used as a field type within a struct.
As structs are complete types, you can freely nest them by including one struct within another.

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

Fields of nested structs are accessed using continuous dot notation.

```wave
var p: Player = Player {
    name: "Alice";
    pos: Position { x: 10; y: 20; };
};

println("Player X: {}", p.pos.x);
println("Player Y: {}", p.pos.y);
```

You can nest another struct literal within a struct literal, and all field initialization rules apply in this case as well.

---

## Struct Arrays

Structs can be used as element types in arrays.
Wave's array syntax uses the `array<type, length>` format, and struct types can also be specified as is.

```wave
var players: array<Player, 3> = [
    Player { name: "A"; pos: Position { x: 1; y: 2; }; },
    Player { name: "B"; pos: Position { x: 3; y: 4; }; },
    Player { name: "C"; pos: Position { x: 5; y: 6; }; }
];
```

When accessing elements of a struct array, use the array index first, then access internal struct fields via dot notation.

```wave
println("Second Player X: {}", players[1].pos.x);
```

---

## Basic Operability of Structs

Wave's structs are user-defined types and do not automatically participate in arithmetic or comparison operations.

If equality comparison, sorting, hashing, numeric operations, etc., for structs are needed, they must be explicitly defined through a `proto` block.
Wave does not provide implicit operators for structs, and all operations are required to be explicitly defined as a principle.