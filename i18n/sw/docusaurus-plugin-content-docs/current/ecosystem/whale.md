---
sidebar_position: 3
---

# Zana ya muundo ya Whale

## Muhtasari

Whale ni zana ya muundo ya kipekee kwa lugha ya programu ya Wave.
Whale inasimamia mchakato mzima wa kuchanganua, kuboresha, na kubadili msimbo chanzo ulioandikwa kwa Wave kuwa binari kwa jukwaa lengwa.
Zana hii ya muundo imeundwa mahsusi kwa lugha ya Wave na haizingatii msaada wa lugha zingine au ushirikiano wa zana za nje.

## Malengo ya muundo

Malengo makuu ya muundo wa Whale ni kama yafuatayo:

- Msaada wa kipekee wa Wave: Whale inasaidia lugha ya Wave pekee na haizingatii ushirikiano na lugha zingine.
- Muundo wa kidhibiti: Kila kipengele kinaundwa kama moduli huru, inaweza kuongezwa au kuondolewa inapohitajika.
- Matumizi ya IR huru: Whale haitumii IR ya nje kama LLVM IR lakini inalenga kufafanua maonyesho ya kati huru.
- Msaada wa jukwaa lengwa nyingi: Inaruhusu kujenga kwa majukwaa tofauti bila kujali mfumo na usanifu wa vifaa.
- Udhibiti wa kina: Mchakato mzima wa muundo unapangiliwa ili mtengenezaji aweze kuudhibiti kwa undani.
- Kuondolewa kwa utegemezi wa nje: Whale hailali kwa wakati wa utekelezaji wa nje wa C/C++ au kiunga.

## Msaada wa lengwa

Whale inalenga kutoa msaada wa mazingira yafuatayo ya lengwa:

- Mfumo wa uendeshaji:
    - Linux
    - Windows
    - macOS
    - UEFI (isipokuwa BIOS)
    - WaveOS (mfumo wa uendeshaji wa pekee)
- 아키텍처:
    - x86_64 (AMD64)
    - ARM64
    - 기타는 모듈 추가를 통해 확장 가능

## 외부 연동(FFI)

Whale은 기술적으로 FFI(Foreign Function Interface)를 지원할 수 있도록 설계되지만,
Wave의 철학상 외부 언어와의 연동은 권장되지 않으며 표준적으로 제공되지 않습니다.
Wave는 자체 언어 내에서 모든 기능을 구현할 수 있도록 설계됩니다.

## 확장성

Whale은 다음과 같은 방식으로 확장이 가능합니다:

- 새로운 운영체제 또는 아키텍처에 대한 모듈 추가
- 사용자 정의 최적화 알고리즘 삽입
- 빌드 프로필 및 링커 설정의 커스터마이징
- 자체 실행 포맷 정의