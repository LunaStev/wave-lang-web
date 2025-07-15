---
sidebar_position: 1
---

# 설치

## 설치 방법

터미널에서 다음 명령어를 실행:

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

### 예시

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## 설치 중 수행되는 작업

- LLVM 14 및 관련 패키지 설치 (`apt-get`)

- `/usr/lib/libllvm-14.so` 심볼릭 링크 생성

- `LLVM_SYS_140_PREFIX` 환경변수 설정 (`~/.bashrc`)

- 지정한 버전의 Wave `.tar.gz` 다운로드

- 압축 해제 후 `wavec`를 `/usr/local/bin`에 설치

- `wavec --version` 으로 설치 확인

## 설치 확인

```bash
wavec --version
```

## Wave 제거 가이드 (`uninstall.sh`)

### 제거 방법

터미널에서 다음 명령어를 실행:

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```
