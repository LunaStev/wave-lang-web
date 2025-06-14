---
sidebar_position: 1
---

# 설치

## Linux 설치 방법

### 다운로드 및 압축 해제
공식 GitHub 릴리즈 페이지에서 최신 버전의 Wave를 다운로드합니다.

```bash
wget https://github.com/LunaStev/Wave/releases/latest/download/wave-vx.x.x-linux.tar.gz
sudo tar -xvzf wave-linux.tar.gz -C /usr/local/bin
```

#### LLVM 설정 (Pre Beta 기준)

Wave의 Pre Beta 버전에는 임시로 LLVM을 사용하므로 다음 명령어로 LLVM을 설치합니다..

```bash
sudo apt-get update
sudo apt-get install llvm-14 llvm-14-dev clang-14 libclang-14-dev lld-14 clang
sudo ln -s /usr/lib/llvm-14/lib/libLLVM-14.so /usr/lib/libllvm-14.so
export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14
source ~/.bashrc
```

### 설치 확인

설치가 완료되었는지 확인하려면 터미널에 다음 명령어를 입력하세요.

```bash
wavec --version
```

버전 정보가 출력되면 설치가 성공적으로 완료된 것입니다.