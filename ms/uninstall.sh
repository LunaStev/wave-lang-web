#!/bin/bash
set -e

echo "Uninstalling Wave..."

TARGET="/usr/local/bin/wavec"

if [[ "$OSTYPE" == "darwin"* ]]; then
  SHELL_RC="$HOME/.zshrc"
  IS_MAC=true
else
  SHELL_RC="$HOME/.bashrc"
  IS_MAC=false
fi

echo "Detected OS: $OSTYPE"
echo "Using shell config: $SHELL_RC"

if [ -f "$TARGET" ]; then
  sudo rm "$TARGET"
  echo "[1/4] Removed: $TARGET"
else
  echo "[1/4] wavec not found (already removed or never installed)."
fi

if [ -f "$SHELL_RC" ]; then
  if [[ "$IS_MAC" == true ]]; then
    sed -i '' '/LLVM_SYS_[0-9]\+_PREFIX/d' "$SHELL_RC"
    sed -i '' '/DYLD_LIBRARY_PATH/d' "$SHELL_RC"
  else
    sed -i '/LLVM_SYS_[0-9]\+_PREFIX/d' "$SHELL_RC"
    sed -i '/LD_LIBRARY_PATH/d' "$SHELL_RC"
  fi

  echo "[2/4] Removed LLVM environment variables from $SHELL_RC"
else
  echo "[2/4] Shell config not found"
fi

if [[ "$IS_MAC" == true ]]; then
  if brew list llvm &>/dev/null; then
    echo "[3/4] Removing Homebrew LLVM..."
    brew uninstall llvm
  else
    echo "[3/4] LLVM not installed via Homebrew."
  fi
else
  echo "[3/4] Linux LLVM not removed (managed by package manager)."
fi

rm -f wave-*.tar.gz 2>/dev/null || true

echo "[4/4] Cleanup completed."

echo "Uninstallation completed."
