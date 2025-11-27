#!/bin/bash
set -e

VERSION=""
REPO="wavefnd/Wave"
LLVM_VERSION="14"

echo "[info] Detecting system..."

UNAME_OUT="$(uname -s)"
ARCH="$(uname -m)"

case "$ARCH" in
  x86_64) ARCH="x86_64" ;;
  arm64|aarch64) ARCH="arm64" ;;
  *) echo "[error] Unsupported architecture: $ARCH"; exit 1 ;;
esac

if [[ "$UNAME_OUT" == "Linux" ]]; then
  OS="linux"
  if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO="$ID"
  else
    echo "[error] Unable to detect Linux distribution."
    exit 1
  fi
elif [[ "$UNAME_OUT" == "Darwin" ]]; then
  OS="macos"
  DISTRO="darwin"
else
  echo "[error] This OS is not supported yet: $UNAME_OUT"
  exit 1
fi

usage() {
  echo "Wave Installer"
  echo "Usage:"
  echo "  bash install.sh --version <tag>"
  echo "  bash install.sh latest"
  exit 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --version)
      VERSION="$2"
      shift 2
      ;;
    latest)
      VERSION=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name":' | cut -d '"' -f4)
      echo "[info] Latest version: $VERSION"
      shift
      ;;
    *)
      usage
      ;;
  esac
done

if [[ -z "$VERSION" ]]; then
  echo "[error] Missing version. Use --version or 'latest'."
  exit 1
fi

echo "[1/4] Installing LLVM ${LLVM_VERSION}..."

if [[ "$OS" == "linux" ]]; then
  if [[ "$DISTRO" == "ubuntu" || "$DISTRO" == "debian" ]]; then
    sudo apt-get update
    sudo apt-get install -y llvm-${LLVM_VERSION} llvm-${LLVM_VERSION}-dev clang-${LLVM_VERSION} libclang-${LLVM_VERSION}-dev lld-${LLVM_VERSION} clang

    if [ ! -f /usr/lib/libllvm-${LLVM_VERSION}.so ]; then
      sudo ln -s /usr/lib/llvm-${LLVM_VERSION}/lib/libLLVM-${LLVM_VERSION}.so /usr/lib/libllvm-${LLVM_VERSION}.so
    fi

    export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}
    echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}" >> ~/.bashrc

  elif [[ "$DISTRO" == "fedora" ]]; then
    sudo dnf install -y llvm14 llvm14-devel clang clang-libs
    LLVM_LIB="/usr/lib64/llvm${LLVM_VERSION}/lib"

    export LLVM_SYS_${LLVM_VERSION}0_PREFIX="/usr/lib64/llvm${LLVM_VERSION}"
    echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib64/llvm${LLVM_VERSION}" >> ~/.bashrc

    if [ -d "$LLVM_LIB" ]; then
      export LD_LIBRARY_PATH="$LLVM_LIB:$LD_LIBRARY_PATH"
      echo "export LD_LIBRARY_PATH=$LLVM_LIB:\$LD_LIBRARY_PATH" >> ~/.bashrc

      if [ -f "$LLVM_LIB/libLLVM-${LLVM_VERSION}.so" ] && [ ! -f "$LLVM_LIB/libLLVM-${LLVM_VERSION}.so.1" ]; then
        sudo ln -s "$LLVM_LIB/libLLVM-${LLVM_VERSION}.so" "$LLVM_LIB/libLLVM-${LLVM_VERSION}.so.1"
      fi
    fi
  else
    echo "[error] Unsupported Linux distro: $DISTRO"
    exit 1
  fi
fi

if [[ "$OS" == "macos" ]]; then
  echo "[info] Installing LLVM via Homebrew..."
  if ! command -v brew &> /dev/null; then
    echo "[error] Homebrew is required on macOS."
    exit 1
  fi

  brew install llvm@14
  LLVM_PREFIX="$(brew --prefix llvm@14)"

  export LLVM_SYS_${LLVM_VERSION}0_PREFIX="$LLVM_PREFIX"
  echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=$LLVM_PREFIX" >> ~/.zshrc
fi

echo "[2/4] Downloading Wave binary..."

FILE_SUFFIX="${OS}-${ARCH}"
FILE_NAME="wave-${VERSION}-${FILE_SUFFIX}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${VERSION}/${FILE_NAME}"

echo "[info] Download: $URL"
curl -LO "$URL"

echo "[3/4] Extracting to /usr/local/bin"
sudo tar -xvzf "$FILE_NAME" -C /usr/local/bin

echo "[4/4] Verifying installation..."
if command -v wavec &> /dev/null; then
  wavec --version
  echo "Installation completed successfully."
else
  echo "[error] Installation failed. 'wavec' not found."
  exit 1
fi
