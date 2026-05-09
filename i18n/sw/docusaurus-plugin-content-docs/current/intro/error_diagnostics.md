---
sidebar_position: 5
---

# Utambuzi wa Hitilafu

Kompaili ya Wave inaonyesha makosa kwa kanuni (`E####`), pamoja na mahali/muktadha/matokeo kwa wakati mmoja.

## Muundo wa Pato

Umbizo msingi ni kama ifuatayo.

```text
error[E3001]: semantic validation failed: use of undeclared identifier `x`
  --> file.wave:2:18
 1 | fun main() {
 2 |     println("{}", x);
   |                  ^ not found in this scope
   = context: semantic validation
   = help: fix mutability, scope, and expression validity issues
```

Vitu vya Pato:

- `--> file:line:column`: kificho cha hitilafu na muhtasari
- `^`: eneo la tatizo
- Kizuizi ya chanzo + caret(`^`) inayoangaziwa
- `muktadha`, `iliyotarajiwa`, `iliyopatikana`, `kumbuka`, `msaada`, `pendekezo`

## Nambari ya kosa la mwakilishi

- `E1002` herufi isiyotarajiwa
- `E1003` maelezo ya mwana kizuizi yasiyofungwa
- `E1004` mfuatano wa herufi usiofungwa
- `E1005` kuepuka kwa mfuatano wa herufi usio sahihi
- `E1006` herufi isiyo sahihi ya maandishi
- `E2001` umbizo lisilo sahihi la nambari ya maandishi
- `E3001` Hitilafu ya Msomaji wa Hati
- `E3001` Hitilafu ya Uthibitishaji wa Kisemantiki
- `E3102` kuambatanisha `null` kwenye kipokezi kisicho
- `E9001` Kupunguzwa kwa nambari hasi hakuruhusiwi
- `E9001` Hitilafu ya ndani ya uundaji wa msimbo wa nyuma

## Hitilafu za nyuma pia zinaonyesha nafasi ya chanzo

Hata kama panic ya ndani inatokea katika hatua ya uundaji wa msimbo (LLVM), itajaribu kuonyesha au kutoa hitilafu kwenye nafasi halisi ya wito/kujificha inapowezekana.

```text
error[E9001]: compiler internal error during code generation (llvm-ir-generation)
  --> test.wave:12:9
   = found: Function 'foo' not found
   = note: source position inferred from unresolved function name in backend panic
```

Ikiwa huwezi kuhukumu nafasi, eneo la fallback litatumika, na ukweli huo utaonyeshwa kwenye `note`.
