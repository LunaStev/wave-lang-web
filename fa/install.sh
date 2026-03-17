#!/bin/bash
set -e

VERSION=""
REPO="wavefnd/Wave"
LLVM_VERSION="21"

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
  ID_LIKE="${ID_LIKE:-$DISTRO}"
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

# -----------------------------
# Linux
# -----------------------------
if [[ "$OS" == "linux" ]]; then

  if echo "$ID_LIKE" | grep -qi "debian"; then
    sudo apt-get update
    sudo apt-get install -y wget gnupg lsb-release

    wget https://apt.llvm.org/llvm.sh
    chmod +x llvm.sh
    sudo ./llvm.sh ${LLVM_VERSION}

    sudo apt-get install -y llvm-${LLVM_VERSION} llvm-${LLVM_VERSION}-dev clang-${LLVM_VERSION} lld-${LLVM_VERSION}

  elif echo "$ID_LIKE" | grep -qi "fedora"; then
    sudo dnf install -y llvm llvm-devel clang clang-libs lld

  elif echo "$ID_LIKE" | grep -qi "arch"; then
    sudo pacman -Sy --noconfirm llvm clang lld

  elif echo "$ID_LIKE" | grep -qi "suse"; then
    sudo zypper install -y llvm clang lld llvm-devel

  elif echo "$ID_LIKE" | grep -qi "gentoo"; then
    sudo emerge sys-devel/llvm sys-devel/clang sys-devel/lld

  elif [[ "$DISTRO" == "void" ]]; then
    sudo xbps-install -Sy llvm clang lld

  elif [[ "$DISTRO" == "clear-linux-os" ]]; then
    sudo swupd bundle-add llvm

  elif [[ "$DISTRO" == "nixos" ]]; then
    echo "[error] NixOS requires manual environment setup."
    echo "Use nix-shell or flakes with llvmPackages_${LLVM_VERSION}."
    exit 1

  elif [[ "$DISTRO" == "alpine" ]]; then
    echo "[error] Alpine Linux is not supported (musl + LLVM ${LLVM_VERSION})."
    exit 1

  else
    echo "[error] Unsupported Linux distribution: $DISTRO"
    exit 1
  fi

  if command -v llvm-config &> /dev/null; then
    LLVM_PREFIX=$(llvm-config --prefix)
    LLVM_LIB_PATH=$(llvm-config --libdir)

    export LLVM_SYS_${LLVM_VERSION}0_PREFIX="$LLVM_PREFIX"
    echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=$LLVM_PREFIX" >> ~/.bashrc

    export LD_LIBRARY_PATH="$LLVM_LIB_PATH:$LD_LIBRARY_PATH"
    echo "export LD_LIBRARY_PATH=$LLVM_LIB_PATH:\$LD_LIBRARY_PATH" >> ~/.bashrc

    echo "[info] LLVM prefix: $LLVM_PREFIX"
    echo "[info] LLVM libdir: $LLVM_LIB_PATH"
  else
    echo "[error] llvm-config not found after installation."
    exit 1
  fi
fi

# -----------------------------
# macOS
# -----------------------------
if [[ "$OS" == "macos" ]]; then
  echo "[info] Installing LLVM via Homebrew..."

  if ! command -v brew &> /dev/null; then
    echo "[error] Homebrew is required on macOS."
    exit 1
  fi

  brew install llvm

  LLVM_PREFIX="$(brew --prefix llvm)"
  LLVM_LIB_PATH="$LLVM_PREFIX/lib"

  export LLVM_SYS_${LLVM_VERSION}0_PREFIX="$LLVM_PREFIX"
  echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=$LLVM_PREFIX" >> ~/.zshrc

  export DYLD_LIBRARY_PATH="$LLVM_LIB_PATH:$DYLD_LIBRARY_PATH"
  echo "export DYLD_LIBRARY_PATH=$LLVM_LIB_PATH:\$DYLD_LIBRARY_PATH" >> ~/.zshrc
fi

echo "[2/4] Downloading Wave binary..."

# Architecture mapping
if [[ "$ARCH" == "x86_64" ]]; then
  ARCH_SUFFIX="x86_64"
elif [[ "$ARCH" == "arm64" ]]; then
  ARCH_SUFFIX="aarch64"
fi

# OS mapping
if [[ "$OS" == "linux" ]]; then
  OS_SUFFIX="linux-gnu"
elif [[ "$OS" == "macos" ]]; then
  OS_SUFFIX="apple-darwin"
fi

FILE_SUFFIX="${ARCH_SUFFIX}-${OS_SUFFIX}"
FILE_NAME="wave-${VERSION}-${FILE_SUFFIX}.tar.gz"
URL="https://github.com/${REPO}/releases/download/${VERSION}/${FILE_NAME}"

echo "[info] Download: $URL"
curl -LO "$URL"

echo "[3/4] Installing Wave..."

if [[ "$OS" == "linux" ]]; then
  INSTALL_DIR="/usr/local/bin"
elif [[ "$OS" == "macos" ]]; then
  HOMEBREW_PREFIX="$(brew --prefix)"
  INSTALL_DIR="${HOMEBREW_PREFIX}/bin"
fi

sudo mkdir -p "$INSTALL_DIR"
sudo tar -xzf "$FILE_NAME" -C "$INSTALL_DIR"
sudo chmod +x "$INSTALL_DIR/wavec"

echo "[4/4] Verifying installation..."

export PATH="$INSTALL_DIR:$PATH"
hash -r || true

if command -v wavec &> /dev/null; then
  wavec --version
  echo "Installation completed successfully."
else
  echo "[error] Installation failed. 'wavec' not found in PATH."
  echo "Try restarting your terminal."
  exit 1
fi
