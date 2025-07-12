#!/bin/bash
set -e

echo "Uninstalling Wave..."

TARGET="/usr/local/bin/wavec"
BASHRC="$HOME/.bashrc"
LLVM_EXPORT="export LLVM_SYS_140_PREFIX=/usr/lib/llvm-14"

if [ -f "$TARGET" ]; then
  sudo rm "$TARGET"
  echo "[1/2] Removed: $TARGET"
else
  echo "[1/2] wavec not found at $TARGET (already removed or never installed)."
fi

if grep -q "$LLVM_EXPORT" "$BASHRC"; then
  sed -i "/$LLVM_EXPORT/d" "$BASHRC"
  echo "[2/2] Removed LLVM export from ~/.bashrc"
else
  echo "[2/2] No LLVM export found in ~/.bashrc"
fi

echo "Uninstallation completed."
