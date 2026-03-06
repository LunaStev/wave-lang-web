---
sidebar_position: 11
---

# Comments

Wave supports two types of comments.

- Single-line comment: `//`
- Block comment: `/* ... */`

## Single-line comment

The content following `//` is ignored until the end of the line.

```wave
var x: i32 = 10; // line comment
x += 5; // still works
```

## Block comment

The content between `/*` and `*/` is ignored.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Block comments support multiple lines and nesting.

```wave
/* outer
   /* inner */
   outer end
*/
```

## Strings and Comment Symbols

`/*`, `*/`, and `//` within strings are not treated as comment delimiters.

```wave
var marker: str = "/*//*/";
```

## Comment Error

If a block comment is not closed, a compile error (`E1002`) occurs.

```wave
/* not closed
```

The compiler outputs the start location, cause, and fix hints.
