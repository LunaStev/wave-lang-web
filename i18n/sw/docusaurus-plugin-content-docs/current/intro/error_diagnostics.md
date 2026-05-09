---
sidebar_position: 5
---

# Utambuzi wa Hitilafu

Kompaili ya Wave inaonyesha makosa kwa kanuni (`E####`), pamoja na mahali/muktadha/matokeo kwa wakati mmoja.

## Muundo wa Pato

Umbizo msingi ni kama ifuatayo.

```text
hitilafu[E3001]: uthibitisho wa kitafsiri umeshindwa: matumizi ya kitambulisho kisichotangazwa `x`
  --> faili.wave:2:18
 1 | fanya kuu() {
 2 |     chapisha("{}", x);
   |                  ^ haijapatikana katika upeo huu
   = muktadha: uthibitisho wa kitafsiri
   = msaada: rekebisha masuala ya kubadilika, upeo, na uhalali wa usemi
```

Vitu vya Pato:

- `hitilafu[E....]`: kificho cha hitilafu na muhtasari
- `--> faili:mstari:safu`: eneo la tatizo
- Kizuizi ya chanzo + caret(`^`) inayoangaziwa
- `muktadha`, `iliyotarajiwa`, `iliyopatikana`, `kumbuka`, `msaada`, `pendekezo`

## Nambari ya kosa la mwakilishi

- `E1001` herufi isiyotarajiwa
- `E1002` maelezo ya mwana kizuizi yasiyofungwa
- `E1003` mfuatano wa herufi usiofungwa
- `E1004` kuepuka kwa mfuatano wa herufi usio sahihi
- `E1005` herufi isiyo sahihi ya maandishi
- `E1006` umbizo lisilo sahihi la nambari ya maandishi
- `E2001` Hitilafu ya Msomaji wa Hati
- `E3001` Hitilafu ya Uthibitishaji wa Kisemantiki
- `E3102` kuambatanisha `null` kwenye kipokezi kisicho
- `E3201` Kupunguzwa kwa nambari hasi hakuruhusiwi
- `E9001` Hitilafu ya ndani ya uundaji wa msimbo wa nyuma

## Hitilafu za nyuma pia zinaonyesha nafasi ya chanzo

Hata kama panic ya ndani inatokea katika hatua ya uundaji wa msimbo (LLVM), itajaribu kuonyesha au kutoa hitilafu kwenye nafasi halisi ya wito/kujificha inapowezekana.

```text
hitilafu[E9001]: hitilafu ya ndani ya mkusanyiko wakati wa uundaji wa msimbo (llvm-ir-generation)
  --> test.wave:12:9
   = Iligunduliwa: Kazi 'foo' haijapatikana
   = kumbuka: Nafasi ya chanzo ilidhaniwa kutoka kwa jina la kazi lililo wazi kwenye panic ya nyuma
```

Ikiwa huwezi kuhukumu nafasi, eneo la fallback litatumika, na ukweli huo utaonyeshwa kwenye `note`.
