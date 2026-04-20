---
sidebar_position: 7
---

# Backend-Optionen (`--llvm`, `--whale`)​​

Dieses Dokument erklärt die CLI-Optionen im Zusammenhang mit dem Backend von `wavec`.​​

Wichtige Prinzipien:​​

- `wavec` ist kein Paketmanager.​
- Das Backend-Verhalten wird so weit wie möglich durch **explizite Argumente** gesteuert.​​
- Detaillierte Backend-Optionen werden nur nach `--llvm` interpretiert.​​

---

## 1. Backend-Auswahl​​

## 1.1 `--llvm`

`--llvm` selbst ist ein Startmarker für den Backend-Optionsblock.​​

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Wie oben werden nur die unterstützten Elemente unter den Argumenten nach `--llvm` als LLVM-Backend-Einstellungen behandelt.​​

## 1.2 `--whale` (derzeit TODO)​​

Derzeit ist `--whale` ein **reserviertes Dummy-Flag**.​​

- Der Parser erkennt es.​​
- Die tatsächliche Whale-Backend-Pipeline ist noch nicht verbunden.​​
- Bei Verwendung wird es mit einem TODO-Fehler beendet.​​

---

## 2. Optionen, die nach `--llvm` unterstützt werden​​

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
