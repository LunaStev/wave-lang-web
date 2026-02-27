---
sidebar_position: 6
---

# `wavec` CLI 레퍼런스

이 문서는 **현재 Wave 컴파일러(`wavec`) 구현 기준**의 CLI 동작을 정밀하게 설명합니다.

핵심 원칙:

- `wavec`는 컴파일러입니다.
- 패키지 설치/해결(lockfile, registry, 다운로드)은 `wavec`의 책임이 아닙니다.
- 외부 의존성은 `wavec` 실행 시 **명시적 CLI 인자**로 전달합니다.

---

## 1. 기본 형식

```bash
wavec [global-options] <command> [command-options]
```

예:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. 명령 파싱 규칙 (중요)

`wavec`는 먼저 전체 인자에서 **global option**을 스캔한 뒤, 남은 인자로 `<command>`를 해석합니다.

즉 global option은 위치가 유연합니다.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

위 3개는 모두 유효합니다.

`--`를 사용하면 그 뒤는 global option 스캔을 멈추고 command 영역으로 넘깁니다.

```bash
wavec -- run main.wave
```

---

## 3. Commands

## 3.1 `run <file>`

Wave 파일을 컴파일하고 실행합니다.

```bash
wavec run hello.wave
```

동작:

1. 소스 파싱 + import 확장
2. LLVM IR 생성
3. 네이티브 바이너리 링크 (`target/<file_stem>`)
4. 실행

특징:

- 실행된 프로그램의 종료 코드를 `wavec`가 전달합니다.
- `run` 명령에서는 legacy 옵션으로 `--img`만 허용됩니다.

```bash
wavec run --img boot.wave
```

---

## 3.2 `img <file>`

부트 이미지 빌드 + QEMU 실행 경로입니다.

```bash
wavec img boot.wave
```

---

## 3.3 `build <file>`

실행 파일(exe)을 생성합니다.

```bash
wavec build app.wave
```

출력 바이너리:

- `target/<file_stem>`

---

## 3.4 `build -o <file>` / `build --obj <file>`

오브젝트 파일만 생성합니다.

```bash
wavec build -o app.wave
wavec build --obj app.wave
```

출력:

- `target/<file_stem>.o`
- 경로를 stdout으로 출력

---

## 3.5 `install std`, `update std`

표준 라이브러리 설치/업데이트 명령입니다.

```bash
wavec install std
wavec update std
```

---

## 3.6 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Global Options

## 4.1 최적화

허용 값:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

예:

```bash
wavec -O3 run main.wave
```

---

## 4.2 디버그 출력

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

허용 항목:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 링크 옵션

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` 또는 `--link <lib>`
- `-L<path>` 또는 `-L <path>`

`wavec`는 링크 시 내부적으로 `-l<lib>`, `-L<path>` 형태로 전달합니다.

---

## 4.4 외부 의존성 옵션 (중요)

외부 import(`pkg::...`) 해석용 옵션입니다.

### `--dep-root <dir>`

패키지 루트 디렉터리 후보를 추가합니다.

```bash
wavec run app.wave --dep-root .vex/dep
```

패키지 `math`를 찾을 때:

- `.vex/dep/math` 를 검사

여러 번 지정 가능:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

패키지 이름을 특정 경로에 고정합니다.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

규칙:

- `name` 형식: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep`는 반드시 `name=path` 형식
- 같은 패키지명을 중복 지정하면 에러

---

## 5. Import 해석 규칙

Wave import는 다음 3가지로 분기됩니다.

1. 로컬 import
2. std import
3. 외부 패키지 import

## 5.1 로컬

```wave
import("foo");
import("path/to/mod.wave");
```

기준 파일 디렉터리에서 `<path>.wave`를 찾습니다.

## 5.2 std

```wave
import("std::io::format");
```

`~/.wave/lib/wave/std/...` 경로를 사용합니다.

## 5.3 외부 패키지

```wave
import("math::add");
import("json::parser::core");
```

형식:

- 최소 `package::module` 2세그먼트 필요

패키지 루트 결정 순서:

1. `--dep name=path` 명시 매핑
2. 각 `--dep-root`에서 `<root>/<package>` 검색

동일 패키지가 여러 dep-root에서 동시에 발견되면:

- 자동 선택하지 않고 **모호성 에러**
- `--dep name=path`로 고정해야 함

모듈 파일 탐색 순서:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

예:

```wave
import("math::core::vec");
```

탐색:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. 외부 import 실전 예시

### 6.1 단일 dep-root

디렉터리:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

코드:

```wave
import("math::add");
```

실행:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 모호성 해소

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

양쪽에 `math`가 있으면 에러가 납니다. 아래처럼 고정합니다.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Vex와의 역할 분리

권장 구조:

- `wavec`: 컴파일/링크/실행 + 명시된 의존성 해석
- `vex`: 의존성 설치/관리 후 `wavec ... --dep-root ... --dep ...` 호출

예:

```bash
# 내부적으로 vex가 수행
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

이 모델은 컴파일러를 단순하고 결정적으로 유지하면서, 패키지 매니저가 자동화를 담당하게 합니다.

---

## 8. 빠른 참조

```bash
wavec run main.wave
wavec build app.wave
wavec build -o app.wave
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
```

