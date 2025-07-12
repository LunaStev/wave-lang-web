#!/bin/bash
set -e

VERSION=""
ARCH="x86_64"
REPO="LunaStev/Wave"
LLVM_VERSION="14"

# Detect OS
UNAME_OUT="$(uname -s)"
case "${UNAME_OUT}" in
    Linux*)     OS="linux";;
    Darwin*)    echo "Error: macOS is not supported yet."; exit 1;;
    CYGWIN*|MINGW*|MSYS*) echo "Error: Windows is not supported yet."; exit 1;;
    *)          echo "Error: Unsupported OS (${UNAME_OUT})."; exit 1;;
esac

usage() {
  echo "Wave Installer"
  echo "Usage:"
  echo "  bash install.sh --version <tag>"
  echo "  bash install.sh latest"
  echo "Examples:"
  echo "  --version v0.1.3-pre-beta"
  echo "  latest"
  exit 1
}

# Parse arguments
while [[ $# -gt 0 ]]; do
  case "$1" in
    --version)
      VERSION="$2"
      shift 2
      ;;
    latest)
      VERSION=$(curl -fsSL "https://api.github.com/repos/${REPO}/releases/latest" | grep '"tag_name":' | cut -d '"' -f4)
      echo "[info] latest version is: $VERSION"
      shift
      ;;
    *)
      usage
      ;;
  esac
done

if [[ -z "$VERSION" ]]; then
  echo "Error: --version is required or use 'latest'."
  usage
fi

# Step 1: Install LLVM
echo "[1/4] Installing LLVM $LLVM_VERSION..."
sudo apt-get update
sudo apt-get install -y llvm-${LLVM_VERSION} llvm-${LLVM_VERSION}-dev clang-${LLVM_VERSION} libclang-${LLVM_VERSION}-dev lld-${LLVM_VERSION} clang

# Step 2: Ensure symlink
if [ ! -f /usr/lib/libllvm-${LLVM_VERSION}.so ]; then
  sudo ln -s /usr/lib/llvm-${LLVM_VERSION}/lib/libLLVM-${LLVM_VERSION}.so /usr/lib/libllvm-${LLVM_VERSION}.so
fi

# Set environment variable
export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}
echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}" >> ~/.bashrc

# Step 3: Download wavec
FILENAME="wave-${VERSION}-${ARCH}-${OS}-gnu.tar.gz"
URL="https://github.com/${REPO}/releases/download/${VERSION}/${FILENAME}"

echo "[2/4] Downloading: $URL"
curl -LO "$URL"

# Step 4: Extract
echo "[3/4] Extracting to /usr/local/bin"
sudo tar -xvzf "$FILENAME" -C /usr/local/bin

# Step 5: Verify
echo "[4/4] Verifying installation"
if command -v wavec &> /dev/null; then
  wavec --version
  echo "Installation completed."
else
  echo "Error: wavec not found after installation."
  exit 1
fi