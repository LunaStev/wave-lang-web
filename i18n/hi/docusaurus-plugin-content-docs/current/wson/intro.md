---
sidebar_position: 2
---

# सिंटैक्स

## 1. मूल संरचना
* फ़ाइल की सामग्री `{}` कर्ली ब्रेसेस के बीच एक ऑब्जेक्ट से शुरू होती है और समाप्त होती है।

* एक ऑब्जेक्ट में कुंजी-मूल्य जोड़ होते हैं, जहाँ कुंजी एट्रिब्यूट का नाम है और मूल्य एट्रिब्यूट का मान है।

* कुंजी और मूल्य को कोलन (`:`) या समानता चिह्न (`=`) से अलग किया जाता है।

## 2. टिप्पणियाँ
* टिप्पणियाँ `//` या `#` से शुरू होती हैं और एक ही पंक्ति में लिखी जाती हैं।

* टिप्पणियाँ उस पंक्ति के अंत तक लागू होती हैं।

* बहु-पंक्ति टिप्पणियाँ समर्थित नहीं हैं। यदि आपको कई पंक्तियों में टिप्पणी करनी है, तो आपको प्रत्येक पंक्ति के आरंभ में `//` या `#` जोड़ना होगा।

## 3. ऑब्जेक्ट
* एक ऑब्जेक्ट `{}` कर्ली ब्रेसेस के बीच बंद होता है और इसमें कुंजी-मूल्य जोड़ होते हैं।

* कुंजी और मूल्य के बीच `:` या `=` का उपयोग किया जा सकता है। दोनों प्रतीक आपस में बदल सकते हैं।

* प्रत्येक गुण को कोमा (`,`) से अलग किया जाता है।

* आप ऑब्जेक्ट के भीतर अन्य ऑब्जेक्ट को नेस्ट कर सकते हैं।

उदाहरण:

```
{
    status: "success",
    code = 200,
    user = { id: 123, name: "John Doe" }
}
```

## 4. एरे (Array)
* एरे `[]` ब्रेकेट्स के बीच बंद होता है, और तत्वों को कोमा (`,`) से अलग किया जाता है।

* एरे के तत्व ऑब्जेक्ट्स, स्ट्रिंग्स, नंबर या अन्य डेटा प्रकार हो सकते हैं।

* WSON में, एरे ऑब्जेक्ट्स के भीतर समाहित हो सकते हैं, और एरे में अन्य एरे या ऑब्जेक्ट्स को नेस्ट किया जा सकता है।

उदाहरण:

```
tasks: [
    { task_id: 1, title: "Complete project report" },
    { task_id: 2, title: "Review team feedback" }
]
```

## 5. कुंजी-मूल्य जोड़ (Key-Value Pair)
* एट्रिब्यूट नाम स्ट्रिंग होते हैं और `:` या `=` के बाद सीधे रखे जाते हैं, बिना किसी स्पेस के।

* मूल्य के प्रकार में स्ट्रिंग्स, नंबर, बूलियन, ऑब्जेक्ट्स या एरे शामिल हो सकते हैं।

* स्ट्रिंग्स को डबल कोट्स (`"`) में बंद किया जाता है।

* नंबर को बिना कोट्स के लिखा जाता है और यह पूर्णांक या दशमलव हो सकता है।

उदाहरण:

```
name: "John Doe"
age = 25
```

## 6. डेटा प्रकार (Data Types)
* स्ट्रिंग (String): टेक्स्ट जो डबल कोट्स (`"`) में बंद होता है।

```
"hello world"
```

- नंबर (Number): पूर्णांक या दशमलव मान।

```
42
3.14
```

- बूलियन (Boolean): मूल्य `true` या `false` होता है।

```
is_active = true
```

- ऑब्जेक्ट (Object): `{}` के बीच कुंजी-मूल्य जोड़।

- एरे (Array): `[]` के बीच तत्वों की सूची।

## 7. उदाहरण की व्याख्या

```ws
{
    // स्थिति कोड और संदेश जानकारी
    status: "success",
    code: 200,
    message: "Data retrieved successfully",

    user = {
        id = 123,
        name: "John Doe",
        email: "john@example.com",
        age: 25  # उपयोगकर्ता की आयु
    },

    tasks: [
        {
            task_id: 1,
            title: "Complete project report",
            status: "in-progress",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "Review team feedback",
            status: "pending",
            due_date: "2024-10-20"
        }
    ]
}
```