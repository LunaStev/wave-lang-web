#!/bin/bash
set -e

VERSION=""
ARCH="x86_64"
REPO="LunaStev/Wave"
LLVM_VERSION="14"

# Detect OS and Distro
UNAME_OUT="$(uname -s)"
if [[ "${UNAME_OUT}" == "Linux" ]]; then
  OS="linux"

  if [ -f /etc/os-release ]; then
    . /etc/os-release
    DISTRO=$ID
  else
    echo "Error: Cannot detect Linux distribution."
    exit 1
  fi
elif [[ "${UNAME_OUT}" == "Darwin" ]]; then
  echo "Error: macOS is not supported yet."
  exit 1
elif [[ "${UNAME_OUT}" =~ CYGWIN|MINGW|MSYS ]]; then
  echo "Error: Windows is not supported yet."
  exit 1
else
  echo "Error: Unsupported OS (${UNAME_OUT})."
  exit 1
fi

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

if [[ "$DISTRO" == "ubuntu" || "$DISTRO" == "debian" ]]; then
  sudo apt-get update
  sudo apt-get install -y llvm-${LLVM_VERSION} llvm-${LLVM_VERSION}-dev clang-${LLVM_VERSION} libclang-${LLVM_VERSION}-dev lld-${LLVM_VERSION} clang
  # Ensure symlink
  if [ ! -f /usr/lib/libllvm-${LLVM_VERSION}.so ]; then
    sudo ln -s /usr/lib/llvm-${LLVM_VERSION}/lib/libLLVM-${LLVM_VERSION}.so /usr/lib/libllvm-${LLVM_VERSION}.so
  fi
  export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}
  echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib/llvm-${LLVM_VERSION}" >> ~/.bashrc

elif [[ "$DISTRO" == "fedora" ]]; then
  echo "[info] Installing LLVM 14..."
  sudo dnf install -y llvm14 llvm14-libs llvm14-devel

  export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib64/llvm${LLVM_VERSION}
  echo "export LLVM_SYS_${LLVM_VERSION}0_PREFIX=/usr/lib64/llvm${LLVM_VERSION}" >> ~/.bashrc

  # Add LLVM lib path to LD_LIBRARY_PATH
  LLVM_LIB_PATH="/usr/lib64/llvm${LLVM_VERSION}/lib"
  if [ -d "$LLVM_LIB_PATH" ]; then
    export LD_LIBRARY_PATH="$LLVM_LIB_PATH:$LD_LIBRARY_PATH"
    if ! grep -q "LD_LIBRARY_PATH=.*llvm${LLVM_VERSION}/lib" ~/.bashrc; then
      echo "export LD_LIBRARY_PATH=$LLVM_LIB_PATH:\$LD_LIBRARY_PATH" >> ~/.bashrc
    fi

    # If .so.1 doesn't exist, create symlink
    LIBFILE="$LLVM_LIB_PATH/libLLVM-${LLVM_VERSION}.so"
    LINKNAME="$LLVM_LIB_PATH/libLLVM-${LLVM_VERSION}.so.1"
    if [ -f "$LIBFILE" ] && [ ! -f "$LINKNAME" ]; then
      echo "[info] Creating symlink: libLLVM-${LLVM_VERSION}.so.1 → libLLVM-${LLVM_VERSION}.so"
      sudo ln -s "libLLVM-${LLVM_VERSION}.so" "libLLVM-${LLVM_VERSION}.so.1"
    fi
  else
    echo "Warning: LLVM lib path not found at $LLVM_LIB_PATH"
  fi


# Step 2: Download wavec
FILENAME="wave-${VERSION}-${ARCH}-${OS}-gnu.tar.gz"
URL="https://github.com/${REPO}/releases/download/${VERSION}/${FILENAME}"

echo "[2/4] Downloading: $URL"
curl -LO "$URL"

# Step 3: Extract
echo "[3/4] Extracting to /usr/local/bin"
sudo tar -xvzf "$FILENAME" -C /usr/local/bin

# Step 4: Verify
echo "[4/4] Verifying installation"
if command -v wavec &> /dev/null; then
  wavec --version
  echo "Installation completed."
else
  echo "Error: wavec not found after installation."
  exit 1
fi
