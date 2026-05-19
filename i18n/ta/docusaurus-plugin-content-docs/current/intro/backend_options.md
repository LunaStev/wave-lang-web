---
sidebar_position: 7
---

# 백엔드 옵션

이 문서는 현재 `wavec`의 LLVM backend 제어 옵션을 설명합니다. Wave는 네이티브 코드를 직접 생성하는 언어이므로, target triple, linker, sysroot, relocation model 같은 낮은 수준의 제어가 중요합니다.

## 주요 옵션

- `--target=<triple>`: LLVM target triple입니다.
- `--cpu=<name>`: target CPU입니다.
- `--features=<csv>`: target feature 목록입니다.
- `--abi=<name>`: target ABI입니다.
- `--sysroot=<path>`: compile/link 단계에서 사용할 sysroot입니다.
- `-C linker=<path>`: linker 실행 파일을 지정합니다.
- `-C link-arg=<arg>`: linker에 raw argument를 추가합니다. 반복 가능합니다.
- `-C link-sysroot=<path>`: link 단계에 `--sysroot=<path>`를 전달합니다.
- `-C no-default-libs`: 자동 `libc`/`libm` 링크를 끕니다.
- `-C relocation-model=<model>`: `default`, `static`, `pic`, `pie`, `dynamic-no-pic` 중 하나입니다.
- `-C code-model=<model>`: `default`, `small`, `kernel`, `medium`, `large` 등을 사용합니다.

## freestanding 정책

`--freestanding`은 커널, 부트로더, firmware, embedded 환경을 위한 빌드 모드입니다.

```bash
wavec build kernel.wave --target x86_64-unknown-none-elf --freestanding --emit=obj -o kernel.o
```

이 모드에서는 다음 정책이 적용됩니다.

- 기본 `libc`/`libm` 링크를 하지 않습니다.
- red zone을 사용하지 않도록 함수에 `noredzone` 속성을 붙입니다.
- 예외 unwind를 가정하지 않도록 `nounwind` 성격의 IR을 생성합니다.
- 명시적인 relocation model이 없으면 freestanding target에서 static relocation을 기본으로 사용합니다.
- x86_64 freestanding 기본 code model은 kernel에 맞춥니다.

## UEFI 경로

UEFI는 SysV ELF가 아니라 PE/COFF ABI를 사용합니다. WaveOS에서 검증한 현재 권장 경로는 다음과 같습니다.

```bash
wavec build boot.wave --target x86_64-pc-windows-gnu --freestanding --emit=obj -o boot.obj
lld-link /subsystem:efi_application /entry:efi_entry /machine:x64 /nodefaultlib /out:BOOTX64.EFI boot.obj
```

UEFI image에는 relocation directory가 필요할 수 있으므로, 빌드 시스템에서 `.reloc` 섹션을 포함한 COFF object를 함께 링크하는 방식을 권장합니다.

## capability 조회

상위 빌드 도구는 다음 명령으로 현재 compiler capability를 확인할 수 있습니다.

```bash
wavec print target-list
wavec print supported-emit-kinds
wavec print supported-input-types
wavec print default-linker
```
