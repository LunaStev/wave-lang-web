---
sidebar_position: 2
---

# అర్థం

## 1. ప్రాథమిక నిర్మాణం

- ఫైల్ యొక్క సమాచారాన్ని `{}` కొరికి చుట్టబడిన వస్తువు (`object`) తో ప్రారంభించి ముగుస్తుంది.

- వస్తువులు గుణం పేర్లు (key) మరియు విలువలు (value) జతగా నిర్మితమవుతాయి.

- గుణం పేర్లు మరియు విలువలు కొలాన్ (`:`) లేదా సమాన బొమ్మ (`=`) ద్వారా విభజించబడతాయి.

## 2. కామెంట్

- కామెంట్స్ `//` లేదా `#`తో ఆధారపడింది మరియు ఒక్కో జట్టుకు எழுதబడింది.

- కామెంట్స్ అనువచిన చోపు వరకూ వర్తించబడతాయి.

- ఓ వ్రాత చర్చలు విడిగా వినియోగాన్ని మద్దతు ఇవ్వదు మరియు బహుళ ప్యానెల్ పూల్ లక్ష్యాన్ని చేర్చగానే ప్రతి పొడిగింపులో `//` లేదా `#` జంటను చేర్చాలి.

## 3. వస్తువు(Object)

- వస్తువు `{}` లో చుట్టబడిఉంది, కీ-విలువ జట్లను కలిగి ఉంది.

- కీ మరియు విలువ మధ్యకు `:` లేదా `=` సింబల్ ఉపయోగించవచ్చు. ఇవి కలిపించి ఉండవచ్చు.

- ప్రతి గుణాన్ని వానికిచముచాలరే వాటిని వేరు చేస్తారు.

- వస్తువు లో మరొక వస్తువులను అల్లే పద్ధతిలో ఉపయోగించవచ్చు.

ఉదాహరణ:

```
{
    status: "సాఫల్యం",
    code = 200,
    user = { id: 123, name: "జాన్ డో" }
}
```

## 4. అర్రే(Array)

- అర్రే `[]` మధ్య చుట్టబడిఉంది, అంశాలు కామా(`,`) తో వేరుచేస్తాయి.

- Array elements can be various data types such as objects, strings, and numbers.

- In WSON, arrays can be included within objects, and arrays can contain other arrays or objects nested within them.

Example:

```
tasks: [
    { task_id: 1, title: "ప్రాజెక్ట్ నివేదికను పూర్తుచేయండి" },
    { task_id: 2, title: "టీం అభిప్రాయాన్ని సమీక్షించండి" }
]
```

## 5. Key-Value Pair

- Attribute names consist of strings, and values are placed after `:` or `=` without spaces.

- Value types can include strings, numbers, booleans, objects, and arrays.

- Strings are enclosed in double quotes `"`.

- Numbers are used without quotes and can be in integer or floating-point form.

Example:

```
name: "జాన్ డో"
age = 25
```

## 6. Data Types

- String: Text enclosed in double quotes `"`.

```
"హలో వరల్డ్"
```

- Number: An integer or floating-point value.

```
42
3.14
```

- Boolean: Uses values `true` or `false`.

```
is_active = true
```

- Object: A key-value pair enclosed in curly braces `{}`.
- Array: A list of elements enclosed in square brackets `[]`.

## 7. Example Description

```ws
{
    // Status code and message information
    status: "కొత్తదనం",
    code: 200,
    message: "డేటాను విజయవంతంగా పొందింది",

    user = {
        id = 123,
        name: "జాన్ డో",
        email: "john@example.com",
        age: 25  # వాడుకరి వయస్సు
    },

    tasks: [
        {
            task_id: 1,
            title: "ప్రాజెక్ట్ నివేదికను పూర్తిచేయండి",
            status: "ప్రోసెస్中",
            due_date: "2024-10-15"
        },
        {
            task_id: 2,
            title: "టీం అభిప్రాయం సమీక్షించండి",
            status: "పెండింగ్",
            due_date: "2024-10-20"
        }
    ]
}
```