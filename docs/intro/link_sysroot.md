---
sidebar_position: 8
---

# 링크 sysroot 수동 제어 (`-C link-sysroot`)

이 문서는 `wavec`에서 링크 단계 sysroot를 **명시적으로 제어**하는 방법을 설명합니다.

핵심 원칙:

- `--sysroot=<path>`: 컴파일 단계(clang `-c`) sysroot
- `-C link-sysroot=<path>`: 링크 단계(linker) sysroot

즉, 컴파일과 링크의 sysroot를 분리해서 다룹니다.

---

## 1. 왜 필요한가

크로스 링크에서 `-C linker=<path>`를 쓰면, 링크 드라이버(예: `aarch64-linux-gnu-gcc`)가 참조하는 런타임 경로(`crt1.o`, `libc`, `libm`)를 별도로 지정해야 하는 경우가 많습니다.

이때 링크 sysroot를 자동 추론하지 않고, CLI에서 명시적으로 전달하도록 설계합니다.

---

## 2. 옵션 정의

## 2.1 `-C link-sysroot=<path>`

링크 단계에 `--sysroot=<path>`를 주입합니다.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

내부적으로는 `-C link-arg=--sysroot=<path>`와 같은 의미입니다.

## 2.2 `-C link-arg=--sysroot=<path>`

기존 raw 링크 인자 방식도 계속 지원합니다.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. 검증 규칙

링크 단계가 필요한 빌드에서 다음 조건이 동시에 성립하면 usage error로 종료합니다.

1. `-C linker=...` 사용
2. `--sysroot=<path>` 사용
3. 링크 sysroot(`-C link-sysroot` 또는 `-C link-arg=--sysroot=...`) 미지정

오류 메시지 예:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. 사용 예시

## 4.1 AArch64 Linux 크로스 링크

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 raw 링크 인자 방식

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 링크가 없는 빌드 (`--emit=obj`)

링크 단계가 없으면 링크 sysroot는 필요하지 않습니다.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. 정리

- `--sysroot`는 컴파일 단계 제어
- `-C link-sysroot`는 링크 단계 제어
- 자동 추론보다 명시적 제어를 우선
