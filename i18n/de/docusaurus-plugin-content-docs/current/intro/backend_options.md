---
sidebar_position: 7
---

# 백엔드 옵션 (`--llvm`, `--whale`)

이 문서는 `wavec`의 백엔드 관련 CLI 옵션을 설명합니다.

중요 원칙:

- `wavec`는 패키지 매니저가 아닙니다.
- 백엔드 동작은 가능한 한 **명시적 인자**로 제어합니다.
- 백엔드 세부 옵션은 `--llvm` 뒤에서만 해석됩니다.

---

## 1. 백엔드 선택자

## 1.1 `--llvm`

`--llvm` 자체는 백엔드 옵션 블록의 시작 마커입니다.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

위처럼 `--llvm` 뒤에 오는 인자들 중 지원되는 항목만 LLVM 백엔드 설정으로 처리됩니다.

## 1.2 `--whale` (현재 TODO)

현재 `--whale`은 **예약된 더미 플래그**입니다.

- 파서는 인식합니다.
- 실제 Whale 백엔드 파이프라인은 아직 연결되어 있지 않습니다.
- 사용 시 TODO 에러로 종료됩니다.

---

## 2. `--llvm` 뒤에서 지원되는 옵션

## 2.1 타겟/코드젠

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

반영 지점:

- IR 생성(TargetMachine) 단계: `target`, `cpu`, `features`
- 오브젝트/링크 단계(clang 호출): `target`, `abi`

현재 기본적으로 문서화할 주요 target triple:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 툴체인/링크

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (반복 가능)
- `-C no-default-libs`

반영 지점:

- 오브젝트 생성(clang `-c`)에 `--sysroot`
- 링크 단계에서 linker override, raw link arg 주입
- `-C no-default-libs` 사용 시 자동 `-lc -lm` 비활성화

---

## 3. 파싱 규칙 (중요)

`--llvm`를 쓰지 않으면 백엔드 세부 옵션은 global option으로 해석되지 않습니다.

예를 들어 아래는 에러입니다.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

반드시 아래처럼 작성해야 합니다.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. 사용 예시

기본 오브젝트 생성:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

freestanding 커널 오브젝트 생성:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

커스텀 링크:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

libc/libm 자동 링크 비활성화:

```bash
wavec --llvm -C no-default-libs build app.wave
```

`--freestanding`을 사용하면 내부적으로 `-C no-default-libs`와 같은 방향으로 동작하며, 커널/부트 코드처럼 런타임 기본 라이브러리를 가정하지 않는 빌드에 맞춰집니다.

---

## 5. 상태 요약

- LLVM 백엔드: 동작 중
- Whale 백엔드: 예약됨(TODO), 미구현
