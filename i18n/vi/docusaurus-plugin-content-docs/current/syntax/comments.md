---
sidebar_position: 11
---

# Chú thích

Wave hỗ trợ hai loại chú thích.

- Chú thích một dòng: `//`
- Chú thích khối: `/* ... */`

## Chú thích một dòng

Nội dung sau `//` sẽ bị bỏ qua cho đến khi hết dòng.

```wave
var x: i32 = 10; // line comment
x += 5;          // still works
```

## Chú thích khối

Bỏ qua nội dung giữa `/*` và `*/`.

```wave
var y: i32 = 1 /* inline block */ + 2;
```

Chú thích khối hỗ trợ nhiều dòng và lồng ghép.

```wave
/* outer
   /* inner */
   outer end
*/
```

## Ký hiệu chuỗi và chú thích

`/*`, `*/`, `//` trong chuỗi không được xử lý như là mở/đóng chú thích.

```wave
var marker: str = "/*//*/";
```

## Lỗi chú thích

Nếu chú thích khối chưa đóng, lỗi biên dịch (`E1002`) sẽ xảy ra.

```wave
/* not closed
```

Trình biên dịch xuất ra vị trí bắt đầu, nguyên nhân và gợi ý sửa đổi.
