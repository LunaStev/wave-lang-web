---
sidebar_position: 5
---

# تشخيص الأخطاء

يعرض مترجم Wave الأخطاء مع الكود الخاص بها (`E####`)، بالإضافة إلى موضع المصدر/السياق/نصائح الحل دفعة واحدة.

## صيغة الإخراج

الصيغة الافتراضية هي كما يلي.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

عناصر الإخراج:

- `--> file:line:column`: كود الخطأ والملخص
- `^`: موضع المشكلة
- إبراز بلوك المصدر + المؤشر (`^`)
- `السياق`، `المتوقع`، `الموجود`، `ملاحظة`، `مساعدة`، `اقتراح`

## أكواد الأخطاء التمثيلية

- `E1002` حرف غير متوقع
- `E1003` تعليق كتلة غير مغلق
- `E1004` سلسلة غير مغلقة
- `E1005` تهرب سلسلة غير صحيح
- `E1006` حرف ليترالي غير صحيح
- `E2001` صيغة رقم ليترالي غير صحيحة
- `E3001` خطأ صياغة في المحلل اللغوي
- `E3001` خطأ التحقق الدلالي (تحليل دلالي)
- `E3102` تمرير `null` كمعامل مقارنة
- `E9001` منع تقليص الأعداد السالبة
- `E9001` خطأ داخلي في إنشاء كود الخلفية

## أيضًا تُظهر أخطاء الخلفية موضع المصدر

حتى إذا حدث هلع داخلي أثناء مرحلة إنشاء التعليمات البرمجية (LLVM)، فإنه يحاول استنتاج موضع الاستدعاء / الإعلان الفعلي إذا كان ذلك ممكناً.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

عندما يكون استنتاج الموضع غير ممكن، يتم استخدام موضع الاسترجاع، ويتم ذكر هذه الحقيقة مع 'note'.
