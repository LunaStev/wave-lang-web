---
sidebar_position: 4
---

# Ramani ya Maendeleo ya Ujumuishaji wa Wave + Whale v2

## Hatua Zote

```matlab
pre-alpha → pre-beta → alfa → beta → rc → kutolewa
```

---

## Hatua ya Pre-Beta

> Lengo: Kukamilisha frontend ya lugha ya Wave + utekelezaji wa kipengele kamili kwa kutumia backend ya LLVM

### Sifa Kuu

- Kutumia LLVM pekee (Hakuna Whale)

- Hakuna nyongeza ya sarufi, utekelezaji wa maelezo yaliyopo tu

- Uthabiti wa muundo wa mbele, kama vile ujumbe wa hitilafu, ukaguzi wa aina, na wigo wa tofauti

### Upeo wa Utekelezaji

- Tamko la kubadilika, pato, operesheni

- Ufafanuzi wa kazi na mwito

- ikiwa / vinginevyo ikiwa / vinginevyo

- wakati / pumzika / endelea

- Pato la umbizo, uteuzi wa aina

- Ubunifu wa kielekezi (`ptr<T>` muundo)

- Ubunifu wa safu (`array<T, N>`)

- Uhakiki wa aina na AST ya kimuundo

### Teknolojia iliyotumika

- Rust (Kompyuta yote ya Wave)

- LLVM (Uundaji wa IR, Utekelezaji wa AOT)

- inkwell / llvm-sys

---

## Hatua ya Alpha

> Lengo: Kuanza utangulizi wa Whale, kutumia LLVM sambamba / Kuanzisha utekelezaji wa Whale inayotegemea nyuma

### Sifa Kuu

- LLVM ni mkondo wa nyuma chaguo-msingi

- Whale ni mkondo wa nyuma wa hiari

- Wakati wa kutekeleza msimbo wa Wave, inawezekana kugawana kwa kutumia chaguo `--backend`

```bash
wavec run main.wave --backend=whale
wavec run main.wave --backend=llvm
```

### Kazi zinazohusiana na Whale

- Uundaji na ufafanuzi wa muundo wa Whale IR (Maagizo, Thamani, Kizuizi nk)

- Utekelezaji wa Kianzilishi cha IR kwa Whale

- Kianzilishi cha msimbo kwa Whale (Assembly au Binary)

- Utekelezaji wa aina zinazowezekana kwa Whale tu (`i1024`, pointer za hali ya juu nk.)

### Kipengele cha kuangalia

- Hello World yaonyesha kwa Whale

- Tamko/ugawaji wa mabadiliko katika Whale

- Utekelezaji wa chombo cha kuuondoa makosa katika Whale IR

- Ushughulikiaji wa aina za pointers katika Whale

- Mabadiliko ya Wave → Whale IR yanaendelea

---

## Hatua ya Beta

> Lengo: Kubadilisha kabisa kwa Whale, kuondoa LLVM. Uboreshaji wa mchanganyiko wa Whale + Wave

### Sifa Kuu

- Matumizi ya Whale pekee

- Kuondoa kabisa LLVM (utaratibu na moduli)

- Msingi wa uboreshaji wa msimbo

- Kutoka IR hadi utekelezaji kwa haraka na ufanisi

### Upeo wa Uboreshaji

- Uundaji wa Mchakato wa Uboreshaji wa Whale IR

- Uboreshaji wa kasi ya uundaji wa msimbo wa Whale

- Syntaksi yote ya Wave inasaidiwa kikamilifu katika Whale

### Jaribio

- Jaribio la kitengo + suite kamili ya majaribio

- Jaribio la utangamano la WSON, maktaba ya kiwango

- Uthibitishaji wa ujenzi wa Whale wa jukwaa kubwa

---

## Hatua ya RC (Mgombea wa Kutolewa)

> Lengo: Kuanza kubunifu upya Wave — Kuondoa kabisa msimbo wa Rust

### Sifa Kuu

- Kuanza kuandika upya kompyuta ya Wave kwa Wave

- Utekelezaji wa msimbo wa Wave yenyewe kwa msingi wa Whale

- Whale inaingia hatua ya kujihostisha

### Upeo wa kazi

- Kuandika upya Kianzilishi cha IR ya Wave kwa msingi wa Whale

- Kuondoa Rust + Kubadilisha na msimbo wa Wave

- Kuandika maktaba ya std na core kwa Wave

- 부트스트랩 성공 시 첫 Wave-native 컴파일러 탄생

---

## Release 단계 (v0.0.1)

> 목표: 공식 출시 / 완전한 Whale 기반 독립 언어 생태계 제공

### 구성 요소

- Wave (언어 및 표준 라이브러리)

- Whale (컴파일러 툴체인)

- Vex (패키지 매니저)

- WSON (데이터 포맷)

### 특징

- 완전한 Wave-only 컴파일러 (부트스트랩 성공)

- Whale 최적화 완료

- Vex 빌드 및 배포 시스템 정착

- WSON 파서 + 직렬화 포함

- 크로스 OS 빌드 가능 (`vex build --windows` 등)

---

## 개발 메타 전략

| 전략        | 설명                                             |
| --------- | ---------------------------------------------- |
| 열차+레일 전략  | Whale을 개발하면서 동시에 Wave 백엔드를 구성해 나가는 병행 진행       |
| 백엔드 분기 전략 | `--backend` 옵션으로 LLVM/Whale 선택, alpha에서 중요한 구조 |
| 구조 역전 계획  | rc 이후부터 Wave 코드가 Whale을 통해 Wave 자신을 컴파일        |
