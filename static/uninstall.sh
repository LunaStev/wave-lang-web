#!/bin/bash
set -e

echo "Uninstalling Wave..."

TARGET="/usr/local/bin/wavec"

# Detect shell config (Linux = bashrc, macOS = zshrc by default)
if [[ "$OSTYPE" == "darwin"* ]]; then
  SHELL_RC="$HOME/.zshrc"
  LLVM_EXPORT='export LLVM_SYS_140_PREFIX="/opt/homebrew/opt/llvm@14"'
else
  SHELL_RC="$HOME/.bashrc"
  LLVM_EXPORT='export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14'
fi

echo "Detected OS: $OSTYPE"
echo "Using shell config: $SHELL_RC"

# 1. Remove wavec binary
if [ -f "$TARGET" ]; then
  sudo rm "$TARGET"
  echo "[1/3] Removed: $TARGET"
else
  echo "[1/3] wavec not found at $TARGET (already removed or never installed)."
fi

# 2. Remove LLVM export
if [ -f "$SHELL_RC" ] && grep -q "$LLVM_EXPORT" "$SHELL_RC"; then
  sed -i '' "\#${LLVM_EXPORT}#d" "$SHELL_RC" 2>/dev/null || sed -i "\#${LLVM_EXPORT}#d" "$SHELL_RC"
  echo "[2/3] Removed LLVM export from $SHELL_RC"
else
  echo "[2/3] No LLVM export found in $SHELL_RC"
fi

# 3. Optional: Remove Homebrew LLVM (macOS only)
if [[ "$OSTYPE" == "darwin"* ]]; then
  if brew list llvm@14 &>/dev/null; then
    echo "[3/3] Removing Homebrew LLVM (llvm@14)..."
    brew uninstall llvm@14
  else
    echo "[3/3] Homebrew llvm@14 not installed."
  fi
else
  echo "[3/3] Linux system LLVM not removed (managed by system package manager)."
fi

echo "Uninstallation completed."
