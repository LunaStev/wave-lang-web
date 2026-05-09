---
sidebar_position: 5
---

# Error diagnosis

The Wave compiler displays errors along with the code (`E####`), source location/context, and resolution hints all at once.

## Output format

The basic format is as follows.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Output items:

- `--> file:line:column`: Error code and summary
- `^`: Location of the issue
- Source block + caret(`^`) highlight
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## Representative error codes

- `E1002` Unexpected character
- `E1003` Unclosed block comment
- `E1004` Unclosed string
- `E1005` Invalid string escape
- `E1006` Invalid character literal
- `E2001` Invalid numeric literal format
- `E3001` Parser syntax error
- `E3001` Semantic validation error
- `E3102` Assignment of `null` to non-pointer
- `E9001` Prohibition of implicit integer narrowing
- `E9001` Backend code generation internal error

## Backend errors also show source location

Even if an internal panic occurs during the code generation (LLVM) phase, the actual call/declaration location is inferred and displayed if possible.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

If location inference is not possible, a fallback location is used, and this fact is indicated in the `note`.
