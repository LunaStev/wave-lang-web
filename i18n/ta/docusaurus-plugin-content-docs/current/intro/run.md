---
sidebar_position: 3
---

# உங்கள் முதல் நிரலை இயக்கவும்
முந்தைய நிறுவல் வழிகாட்டி படி நீங்கள் Wave ஐ ஏற்கனவே நிறுவினால், இப்போது உங்கள் முதல் நிரலை இயக்க நேரம் ஆகிவிட்டது!

## `hello.wave` கோப்பை உருவாக்குவது
முதலில், `hello.wave` என்ற பெயரில் ஒரு புதிய கோப்பை உருவாக்கவும்.

## கோடு எழுதுவது
`hello.wave` கோப்பில் கீழ்காணும் கோடைக் கொடுக்கவும்:

```wave
fun main() {
    println("Hello Wave");
}
```

இங்கே, `fun main()` என்பது நிரலின் ஆரம்ப புள்ளி (entry point) ஆகும், மற்றும் `println` செயற்கூறு (function) திரையில் உரை அச்சிட உதவுகிறது.

## நிரலை இயக்குவது
இப்போது, Wave நிரலை இயக்குவோம். உங்கள் டெர்மினலை திறந்து, கீழ்காணும் கட்டளையை உள்ளிடவும்:

```bash
wavec run hello.wave
```

## வெளியீட்டை சரிபார்க்கவும்
நிரலை இயக்கியவுடன், கீழ்காணும் வெளியீடு வெளிப்படும்:

```
Hello Wave
```

இப்போது Wave சரியாக நிறுவப்பட்டு இயங்குவதாக நீங்கள் உறுதிப்படுத்தலாம். வாழ்த்துக்கள்! நீங்கள் வெற்றிகரமாக உங்கள் முதல் நிரலை இயக்கியுள்ளீர்கள்.
