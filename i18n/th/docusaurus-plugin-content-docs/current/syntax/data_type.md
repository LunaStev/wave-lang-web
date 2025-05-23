---
sidebar_position: 2
---

# ประเภทข้อมูล (Data Types)

เอกสารนี้อธิบายเกี่ยวกับประเภทข้อมูลต่างๆ ที่มีอยู่ในภาษาโปรแกรม Wave
ภาษาโปรแกรม Wave รองรับการจัดเก็บและการประมวลผลค่าด้วยประเภทข้อมูลที่หลากหลาย
ประเภทข้อมูลหลักประกอบด้วย **จำนวนเต็ม (Integer)**, **จำนวนทศนิยมแบบลอยตัว (Floating-point)**, และ **ข้อความ (String)**
โดยแต่ละประเภทข้อมูลจะกำหนดคุณลักษณะและวิธีการจัดการหน่วยความจำเฉพาะตัว

## ประเภทจำนวนเต็ม (Integer Type)
ประเภทจำนวนเต็มใช้สำหรับจัดเก็บ **ค่าที่เป็นจำนวนเต็ม**
โดยทั่วไปจำนวนเต็มจะถูกกำหนดด้วย `i32` (จำนวนเต็มแบบ signed ขนาด 32 บิต) และ `u32` (จำนวนเต็มแบบ unsigned ขนาด 32 บิต)
ภาษาโปรแกรม Wave มีตัวเลือกที่ช่วยให้กำหนดช่วงของจำนวนเต็มได้อย่างละเอียด

* `i8` ถึง `i1024`: จำนวนเต็มแบบ signed (มีเครื่องหมาย) ตั้งแต่ 8 บิตถึง 1024 บิต
* `u8` ถึง `u1024`: จำนวนเต็มแบบ unsigned (ไม่มีเครื่องหมาย) ตั้งแต่ 8 บิตถึง 1024 บิต

ตัวอย่าง:
```wave
var a :i32 = 100;
var b :u32 = 200;
```

## ประเภทจำนวนทศนิยมแบบลอยตัว (Floating-point Type)
ประเภทนี้ใช้สำหรับจัดเก็บ ค่าที่เป็นตัวเลขทศนิยม
โดยทั่วไปค่าทศนิยมจะถูกกำหนดด้วย `f32` (จำนวนทศนิยมขนาด 32 บิต)
นอกจากนี้ยังสามารถกำหนดขนาดได้อย่างละเอียดตั้งแต่ 32 บิตถึง 1024 บิต

* `f32` ถึง `f1024`: รองรับค่าทศนิยมตั้งแต่ 32 บิตถึง 1024 บิต ช่วยเพิ่มความแม่นยำในการคำนวณ

ตัวอย่าง:
```wave
var pi :f32 = 3.14;
var e :f64 = 2.71828;
```

## ประเภทข้อความ (String Type)
ประเภทข้อความใช้สำหรับจัดเก็บ `ข้อมูลข้อความ`
โดยใช้คำสั่ง str เพื่อกำหนดข้อความ และล้อมรอบข้อความด้วยเครื่องหมายคำพูดคู่ (`"`)

ตัวอย่าง:
```wave
var text :str = "Hello Wave";
```

## ประเภทบูลีน (Boolean Type)
ประเภทบูลีนใช้สำหรับจัดเก็บ **ค่าจริง (True)** หรือ **ค่าเท็จ (False)**
เหมาะสำหรับการใช้งานในเงื่อนไขหรือการเปรียบเทียบ
ค่าที่ใช้งานได้คือ `true` หรือ `false`

ตัวอย่าง:
```wave
var isActive :bool = true;
var isAvailable :bool = true;
```

## ประเภทตัวอักษร (Character Type)
ประเภทตัวอักษรใช้สำหรับจัดเก็บ **อักขระเพียงหนึ่งตัว**
โดยใช้คำสั่ง `char` และล้อมรอบค่าด้วยเครื่องหมายคำพูดเดี่ยว (`'`)

ตัวอย่าง:
```wave
var letter :char = 'A';
```

## ประเภทไบต์ (Byte Type)
ประเภทไบต์ใช้สำหรับจัดเก็บ **ข้อมูลขนาด 1 ไบต์**
เหมาะสำหรับการจัดการข้อมูลแบบไบนารี โดยใช้คำสั่ง `byte`

ตัวอย่าง:
```wave
var byteData :byte = 0xFF;
```

## ประเภทตัวชี้ (Pointer Type)
ประเภทตัวชี้ใช้สำหรับจัดเก็บ **ที่อยู่หน่วยความจำ**
ใช้คำสั่ง `ptr` เพื่อกำหนดตัวชี้

ตัวอย่าง:
```wave
var ptr :ptr<T> = &someVariable;
```

## ประเภทอาเรย์ (Array Type)
ประเภทอาเรย์ใช้สำหรับจัดเก็บ **ชุดข้อมูลที่มีประเภทเดียวกัน**
ใช้คำสั่ง `array` เพื่อกำหนดประเภทและขนาดของอาเรย์

ตัวอย่าง:
```wave
var numbers: array<i32, 5> = [1, 2, 3, 4, 5];
```

ประเภทข้อมูลที่หลากหลายช่วยให้คุณสามารถเลือกใช้ได้ตามความเหมาะสม
ช่วยเพิ่มประสิทธิภาพในการจัดการหน่วยความจำและการคำนวณได้อย่างเต็มที่