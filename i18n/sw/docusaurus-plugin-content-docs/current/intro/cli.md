---
sidebar_position: 6
---

# Marejeleo ya CLI ya `wavec`

이 문서는 현재 Wave 컴파일러(`wavec`) 구현 기준의 CLI 동작을 설명합니다. `wavec`는 Rust의 `rustc`나 C의 `cc`처럼 낮은 수준의 컴파일러이며, 패키지 해결과 워크스페이스 관리는 Vex 같은 상위 도구의 책임입니다.

## Umbizo la msingi

```bash
wavec [global-options] <command> [command-options] [input...]
```

주요 명령은 다음과 같습니다.

- `build <input...>`: 컴파일, 검사, 링크, 실행을 플래그 중심으로 제어합니다.
- `check <file>`: `build <file> --emit=check` 별칭입니다.
- `run <file>`: `build <file> --run` 별칭입니다.
- `print <item>`: 지원 target, emit kind, input type 같은 capability를 출력합니다.
- `install std`, `update std`: 표준 라이브러리 설치/업데이트 명령입니다.

## build 입력 규칙

`build`는 하나 이상의 입력을 받습니다.

```bash
wavec build main.wave
wavec build main.wave util.wave --emit=bin
wavec build start.o runtime.o --link-only --emit=bin
```

입력 타입은 확장자로 자동 추론됩니다.

- `.wave` -> Wave source
- `.ll` -> LLVM IR
- `.bc` -> LLVM bitcode
- `.s`, `.asm` -> assembly
- `.o`, `.obj` -> object

`--input-type=<kind>`를 지정하면 모든 입력에 같은 타입을 강제로 적용합니다.

## emit 규칙

```bash
wavec build main.wave --emit=check
wavec build main.wave --emit=ir,obj
wavec build main.wave --emit=bin -o app
```

지원 kind는 `check`, `ast`, `ir`, `bc`, `asm`, `obj`, `bin`입니다. `check`는 산출물이 아니라 front-end 검사용 제어 모드이므로 단독으로만 사용할 수 있습니다.

`-o <file>`은 `bin`이 포함되면 최종 링크 산출물에 적용됩니다. `obj`, `ir`, `asm`, `bc` 같은 중간 산출물은 `--out-dir` 또는 기본 규칙을 따릅니다.

## run과 실행 인자

```bash
wavec run main.wave -- arg1 arg2
wavec build main.wave --run -- arg1 arg2
```

`--run`은 최종 실행 가능한 `bin` 산출물이 정확히 하나일 때만 허용됩니다. `--shared` 또는 실행 불가능한 emit 조합과 함께 사용할 수 없습니다.

## freestanding / bare-metal

운영체제, 커널, UEFI 부트로더 같은 환경에서는 `--freestanding`을 사용합니다.

```bash
wavec build kernel.wave   --target x86_64-unknown-none-elf   --freestanding   --emit=obj   -o kernel.o
```

`--freestanding`은 기본 libc/libm 링크를 끄고, backend에서 red zone을 비활성화하며, 함수에 `noredzone`/`nounwind` 성격의 코드를 생성합니다. bare-metal target(`*-none-*`, ELF freestanding target)도 같은 방향으로 처리됩니다.

UEFI 애플리케이션은 현재 COFF object를 만든 뒤 `lld-link`로 PE32+ EFI를 만드는 경로를 권장합니다.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

## backend 옵션

주요 backend 옵션은 다음과 같습니다.

- `--target=<triple>`
- `--cpu=<name>`
- `--features=<csv>`
- `--abi=<name>`
- `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>`
- `-C link-sysroot=<njia>`
- `-C relocation-model=<model>`
- `-C code-model=<model>`
- `-C no-default-libs`

## print

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```

`print`는 Vex 같은 상위 도구가 현재 `wavec`의 capability를 자동 검증할 때 사용하기 위한 명령입니다.
