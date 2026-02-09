#!/bin/bash
set -e

echo "Uninstalling Wave..."

TARGET="/usr/local/bin/wavec"

if [[ "$OSTYPE" == "darwin"* ]]; then
  SHELL_RC="$HOME/.zshrc"
  LLVM_EXPORT_PATTERN='LLVM_SYS_14'
  LLVM_PREFIX_LINE='export LLVM_SYS_140_PREFIX="/opt/homebrew/opt/llvm@14"'
else
  SHELL_RC="$HOME/.bashrc"
  LLVM_EXPORT_PATTERN='LLVM_SYS_14'
  LLVM_PREFIX_LINE='export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14'
fi

echo "Detected OS: $OSTYPE"
echo "Using shell config: $SHELL_RC"

if [ -f "$TARGET" ]; then
  sudo rm "$TARGET"
  echo "[1/3] Removed: $TARGET"
else
  echo "[1/3] wavec not found at $TARGET (already removed or never installed)."
fi

if [ -f "$SHELL_RC" ] && grep -q "$LLVM_PREFIX_LINE" "$SHELL_RC"; then
  if [[ "$OSTYPE" == "darwin"* ]]; then
    sed -i '' "/${LLVM_PREFIX_LINE//\//\\/}/d" "$SHELL_RC"
  else
    sed -i "/${LLVM_PREFIX_LINE//\//\\/}/d" "$SHELL_RC"
  fi
  echo "[2/3] Removed LLVM export from $SHELL_RC"
else
  echo "[2/3] No matching LLVM export found in $SHELL_RC"
fi

if [[ "$OSTYPE" == "darwin"* ]]; then
  if brew list llvm@14 &>/dev/null; then
    echo "[3/3] Removing Homebrew LLVM (llvm@14)..."
    brew uninstall llvm@14
  else
    echo "[3/3] Homebrew llvm@14 not installed."
  fi
else
  echo "[3/3] Linux system LLVM not removed (managed by package manager)."
fi

echo "Uninstallation completed."
