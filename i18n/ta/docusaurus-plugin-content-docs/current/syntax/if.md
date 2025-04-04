---
sidebar_position: 3
---

# IF கட்டளை
## அறிமுகம்
இந்த பிரிவில், Wave-இல் உள்ள கட்டளைகளில் ஒன்றான IF கட்டளையின் தொகுதியைப் பற்றி அறிமுகப்படுத்துகிறோம்.
IF கட்டளை என்பது நிலையை மதிப்பீடு செய்து, அந்த நிலை உண்மையாக (True) இருந்தால் குறிப்பிட்ட குறியீட்டை இயக்கும் கட்டளை ஆகும்.
இதன் மூலம், நிலைகளின் அடிப்படையில் தொகுப்பு முறைத்தலை கட்டுப்படுத்தி, வளரும் மற்றும் தர்க்கமான குறியீட்டை எழுத முடியும்.

## அடிப்படை அமைப்பு
IF கட்டளை ஒரு குறிப்பிட்ட நிலையை மதிப்பீடு செய்யும் மற்றும் அந்த நிலை உண்மையாக (True) இருந்தால் மட்டுமே குறிப்பிட்ட குறியீட்டுக் கட்டத்தை செயல்படுத்தும்.
Wave-இல் IF கட்டளையின் அடிப்படை அமைப்பு கீழ்வருமாறு உள்ளது:

```wave
if (நிலை) {
    // நிலை உண்மையானபோது செயல்படுத்தப்படும் குறியீடு
}
```

நிலையை ஒப்பிடும் செயலிகள் (`==`, `!=`, `<`, `>`, `<=`, `>=`) அல்லது பொது செயலிகள் (`&&`, `||`, `!`) போன்றவற்றை பயன்படுத்தி எழுதலாம்.
நிலை பொய்யாக (False) இருந்தால், குறியீட்டுக் கட்டம் செயல்படுத்தப்படாது.

## எடுத்துக்காட்டு
இது ஒரு எளிய IF கட்டளையின் எடுத்துக்காட்டு:

```wave
var temperature :i32 = 30;

if (temperature > 25) {
    println("வானிலை சூடானது.");
}
```

மேலுள்ள குறியீட்டில், temperature மதிப்பு 25 ஐ விட அதிகமானால், "வானிலை சூடானது." என்ற செய்தி அச்சிடப்படும்.

## IF_ELSE கட்டளை
நிலை உண்மையாக இல்லையெனில், மற்றொரு குறியீட்டை செயல்படுத்த IF-ELSE கட்டளை பயன்படுத்தப்படுகிறது.
இதன் அமைப்பு கீழ்வருமாறு உள்ளது:

```wave
if (நிலை) {
    // நிலை உண்மையானபோது செயல்படுத்தப்படும் குறியீடு
} else {
    // நிலை பொய்யானபோது செயல்படுத்தப்படும் குறியீடு
}
```

### எடுத்துக்காட்டு:

```wave
var score :i32 = 70;

if (score >= 60) {
    println("நீங்கள் தேர்ச்சி பெற்றீர்கள்!");
} else {
    println("நீங்கள் தோல்வி அடைந்தீர்கள்.");
}
```

score 60 அல்லது அதற்கு மேல் என்றால் "நீங்கள் தேர்ச்சி பெற்றீர்கள்!" அச்சிடப்படும், இல்லையெனில் "நீங்கள் தோல்வி அடைந்தீர்கள்." அச்சிடப்படும்.

## முக்கோண IF கட்டளை
IF கட்டளை மற்ற IF கட்டளைகளுக்குள் பயன்படுத்தப்படலாம். இதை முக்கோண IF கட்டளை என்று அழைக்கிறோம், இது சிக்கலான நிலைகளை கையாள்பதற்குப் பயனுள்ளதாக இருக்கும்.

```wave
var score :i32 = 85;

if (score >= 60) {
    if (score >= 90) {
        println("சிறந்த மதிப்பெண்!");
    } else {
        println("தேர்ச்சி பெற்றீர்கள்.");
    } 
} else {
    println("தோல்வி.");
}
```

இந்த எடுத்துக்காட்டில், மதிப்பெண் அடிப்படையில் "சிறந்த மதிப்பெண்!", "தேர்ச்சி பெற்றீர்கள்." அல்லது "தோல்வி." என்ற செய்தி அச்சிடப்படும்.

## சுருக்கம்

* IF கட்டளை நிலையை மதிப்பீடு செய்து, குறிப்பிட்ட குறியீட்டுக் கட்டத்தை செயல்படுத்துகிறது.
* ELSE கட்டளை மூலம் நிலை பொய்யானால் செயல்படுத்தப்படும் குறியீட்டையும் குறிப்பிடலாம்.
* முக்கோண IF கட்டளைகள் சிக்கலான நிலைகளை கையாளுவதற்குப் பயன்படுத்தப்படுகின்றன.

IF கட்டளையை பயன்படுத்துவதன் மூலம், நாம் எங்கள் திட்டத்தின் செயல்பாட்டை அதிகம் தர்க்கமாகவும், செயல்படக்கூடியவையும் செய்ய முடியும்!