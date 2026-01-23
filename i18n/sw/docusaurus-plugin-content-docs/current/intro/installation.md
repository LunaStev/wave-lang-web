---
sidebar_position: 1
---

# kusakinisha

## mbinu za usakinishaji

Wave는 제공되는 설치 스크립트를 통해 간단하게 설치할 수 있습니다.
터미널에서 아래 명령어를 실행하면 지정한 버전의 Wave 컴파일러(`wavec`)가 자동으로 설치됩니다.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

설치 스크립트는 시스템 환경을 확인한 뒤, Wave 실행에 필요한 의존성과 컴파일러를 자동으로 설정합니다.
버전을 명시하지 않을 경우에는 최신 안정 버전 또는 지정한 기준에 따른 기본 버전이 설치됩니다.

## 설치 예시

최신 버전을 설치하려면 다음과 같이 실행합니다.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

특정 버전을 설치하고 싶은 경우에는 `--version` 옵션을 사용합니다.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

나이틀리 빌드와 같이 더 세부적인 버전을 지정하는 것도 가능합니다.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## shughuli zinazotekelezwa wakati wa usakinishaji

설치 스크립트는 Wave를 정상적으로 실행할 수 있도록 여러 단계를 자동으로 처리합니다.
먼저 LLVM 14와 관련된 필수 패키지를 `apt-get`을 통해 설치합니다.
이후 시스템에서 LLVM을 안정적으로 참조할 수 있도록 `/usr/lib/libllvm-14.so`에 대한 심볼릭 링크를 생성합니다.

Wave 컴파일러가 LLVM을 올바르게 찾을 수 있도록 `LLVM_SYS_140_PREFIX` 환경 변수를 설정하며,
이 설정은 `~/.bashrc`에 추가되어 이후 터미널 세션에서도 유지됩니다.

그 다음 사용자가 지정한 버전의 Wave 패키지(`.tar.gz`)를 다운로드하고 압축을 해제합니다.
압축 해제 후에는 `wavec` 실행 파일을 `/usr/local/bin`에 설치하여,
시스템 어디에서든 `wavec` 명령어를 사용할 수 있도록 구성합니다.

설치가 완료되면 `wavec --version` 명령어를 통해 정상적으로 설치되었는지 확인합니다.

## thibitisha usakinishaji

설치가 끝난 후, 아래 명령어를 실행하여 Wave 컴파일러가 정상적으로 설치되었는지 확인할 수 있습니다.

```bash
wavec --version
```

명령어 실행 시 설치된 Wave의 버전 정보가 출력되면 정상적으로 설치된 상태입니다.

---

## muongozo wa kuondoa Wave (`uninstall.sh`)

Wave를 시스템에서 제거하고 싶을 경우, 제공되는 제거 스크립트를 사용할 수 있습니다.
이 스크립트는 설치 과정에서 추가된 파일과 설정을 정리하는 역할을 합니다.

### mbinu za kuondoa

터미널에서 다음 명령어를 실행합니다.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

제거가 완료되면 wavec 명령어는 더 이상 사용되지 않으며,
Wave와 관련된 실행 파일과 설정이 시스템에서 삭제됩니다.