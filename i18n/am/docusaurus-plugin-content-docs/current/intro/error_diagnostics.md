---
sidebar_position: 5
---

# ምርመራ ስህተት

የWave ማጠናከሪያ የስህተት ኮድ (`E####`) ከምንጩ መገኛ/አውድ/መፍትሄ ፍንጮች ጋር በአንድ ጊዜ ያሳያል።

## የውጤት ቅርጸት

መሠረታዊው ቅርጸት የሚከተለው ነው-

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

የውጤት እቃዎች፡-
- `error[E....]`፡ የስህተት ኮድ እና ማጠቃለያ
- `--> file:line:column`፡ የችግር መገኛ
- የምንጭ አግድ + እንክብካቤ(`^`) ማድመቂያ
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## የውክልና ስህተት ኮድ

- `E1001` ያልተጠበቀ ቁምፊ
- `E1002` ያልተዘጋ የአግድ አስተያየት
- `E1003` ያልተዘጋ ሕብረቁምፊ
- `E1004` ልክ ያልሆነ የሕብረቁምፊ ማምለጫ
- `E1005` ሕገ-ወጥ ገጸ-ባህሪ ቀጥተኛ
- `E1006` ልክ ያልሆነ የቁጥር ቀጥተኛ ቅርጸት
- `E2001` የፓርሰር አገባብ ስህተት
- `E3001` የትርጉም ማረጋገጫ ስህተት
- `E3102` `null` ላልሆነ ጠቋሚ ይመድቡ
- `E3201` ስውር ኢንቲጀር መቀነስ የተከለከለ ነው።
- `E9001` የጀርባ ኮድ ማመንጨት ውስጣዊ ስህተት

## የጀርባ ስህተቶች እንዲሁ የምንጭ መገኛን ያሳያሉ

በኮድ ማመንጨት (LLVM) ምዕራፍ ውስጥ የውስጥ ድንጋጤ ቢከሰትም ትክክለኛው የጥሪ/መግለጫ ቦታ ተቆርጦ ከተቻለ ይታያል።

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

የመገኛ ቦታን መለየት የማይቻል ከሆነ፣ የመመለሻ ቦታ ጥቅም ላይ ይውላል እና ይህ እውነታ በ`note` ውስጥም ይታያል።
