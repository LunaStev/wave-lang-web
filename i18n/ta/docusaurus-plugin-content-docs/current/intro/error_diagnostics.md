---
sidebar_position: 5
---

# பிழை கண்டறிதல்

Wave கம்பைலர் பிழைக் குறியீட்டை (`E####`) ஒரே நேரத்தில் மூல இடம்/சூழல்/தீர்வு குறிப்புகளுடன் காட்டுகிறது.

## வெளியீட்டு வடிவம்

அடிப்படை வடிவம்:

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

வெளியீடு பொருட்கள்:
- `error[E....]`: பிழைக் குறியீடு மற்றும் சுருக்கம்
- `--> file:line:column`: பிரச்சனை இடம்
- மூல தொகுதி + கேரட்(`^`) ஹைலைட்
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## பிரதிநிதி பிழை குறியீடு

- `E1001` எதிர்பாராத எழுத்து
- `E1002` மூடப்படாத பிளாக் கருத்து
- `E1003` மூடப்படாத சரம்
- `E1004` தவறான சரம் எஸ்கேப்
- `E1005` சட்டத்திற்குப் புறம்பான எழுத்து
- `E1006` தவறான எண் எழுத்து வடிவம்
- `E2001` பாகுபடுத்தி தொடரியல் பிழை
- `E3001` சொற்பொருள் சரிபார்ப்பு பிழை
- சுட்டிக்காட்டி அல்லாதவருக்கு `E3102` `null` ஐ ஒதுக்கவும்
- `E3201` மறைமுக முழு எண் குறைப்பு தடைசெய்யப்பட்டுள்ளது
- `E9001` பின்தள குறியீடு உருவாக்க உள் பிழை

## பின்தளப் பிழைகள் மூல இருப்பிடத்தையும் காட்டுகின்றன

குறியீடு உருவாக்கம் (LLVM) கட்டத்தில் ஒரு உள் பீதி ஏற்பட்டாலும், உண்மையான அழைப்பு/அறிவிப்பு இருப்பிடம் கழிக்கப்பட்டு முடிந்தால் காட்டப்படும்.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

இருப்பிட அனுமானம் சாத்தியமில்லையென்றால், ஃபால்பேக் இருப்பிடம் பயன்படுத்தப்படும் மற்றும் இந்த உண்மை `note` இல் காட்டப்படும்.
