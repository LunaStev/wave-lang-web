---
sidebar_position: 5
---

# లోపం నిర్ధారణ

Wave కంపైలర్ మూలాధార స్థానం/సందర్భం/పరిష్కార సూచనలతో పాటు ఎర్రర్ కోడ్ (`E####`)ని ఒకేసారి చూపుతుంది.

## అవుట్పుట్ ఫార్మాట్

ప్రాథమిక ఆకృతి:

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

అవుట్‌పుట్ అంశాలు:
- `error[E....]`: ఎర్రర్ కోడ్ మరియు సారాంశం
- `--> file:line:column`: సమస్య స్థానం
- సోర్స్ బ్లాక్ + కేరెట్(`^`) హైలైట్
- `context`, `expected`, `found`, `note`, `help`, `suggestion`

## ప్రతినిధి లోపం కోడ్

- `E1001` ఊహించని అక్షరం
- `E1002` అన్‌క్లోజ్డ్ బ్లాక్ కామెంట్
- `E1003` అన్‌క్లోజ్డ్ స్ట్రింగ్
- `E1004` చెల్లని స్ట్రింగ్ ఎస్కేప్
- `E1005` చట్టవిరుద్ధమైన అక్షరం అక్షరార్థం
- `E1006` చెల్లని సంఖ్యా సాహిత్య ఆకృతి
- `E2001` పార్సర్ సింటాక్స్ లోపం
- `E3001` సెమాంటిక్ ధ్రువీకరణ లోపం
- నాన్-పాయింటర్‌కి `E3102` `null`ని కేటాయించండి
- `E3201` అవ్యక్త పూర్ణాంకం తగ్గింపు నిషేధించబడింది
- `E9001` బ్యాకెండ్ కోడ్ ఉత్పత్తి అంతర్గత లోపం

## బ్యాకెండ్ ఎర్రర్‌లు సోర్స్ లొకేషన్‌ను కూడా చూపుతాయి

కోడ్ జనరేషన్ (LLVM) దశలో అంతర్గత భయాందోళనలు సంభవించినప్పటికీ, అసలు కాల్/డిక్లరేషన్ స్థానం తీసివేయబడుతుంది మరియు వీలైతే ప్రదర్శించబడుతుంది.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

స్థాన అనుమితి సాధ్యం కాకపోతే, ఫాల్‌బ్యాక్ స్థానం ఉపయోగించబడుతుంది మరియు ఈ వాస్తవం `note`లో కూడా ప్రదర్శించబడుతుంది.
