---
sidebar_position: 1
---

# Installation

## Installation Method

Wave can be easily installed using the provided installation script.
Running the following command in the terminal will automatically install the specified version of the Wave compiler (`wavec`).

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

The installation script checks the system environment and automatically sets up the dependencies and compiler required to run Wave.
If no version is specified, the latest stable version or a default version based on specified criteria will be installed.

## Installation Example

To install the latest version, run the following command.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

To install a specific version, use the `--version` option.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

It is also possible to specify more detailed versions such as nightly builds.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Tasks performed during installation

The installation script automatically handles various steps to ensure Wave runs properly.
First, essential packages related to LLVM 14 are installed via `apt-get`.
Then, a symbolic link to `/usr/lib/libllvm-14.so` is created so that the system can stably reference LLVM.

The `LLVM_SYS_140_PREFIX` environment variable is set so the Wave compiler can correctly find LLVM, and this setting is added to `~/.bashrc` to retain it in future terminal sessions.

Next, the user-specified version of the Wave package (`.tar.gz`) is downloaded and extracted.
After extraction, the `wavec` executable is installed to `/usr/local/bin` so that the `wavec` command can be used from anywhere in the system.

Once installation is complete, verify it by using the `wavec --version` command to ensure it's installed correctly.

## Installation Verification

After installation, run the command below to check if the Wave compiler has been installed correctly.

```bash
wavec --version
```

If the version information of the installed Wave is displayed upon execution, it means it has been installed correctly.

---

## Wave Uninstallation Guide (`uninstall.sh`)

To remove Wave from the system, you can use the provided removal script.
This script cleans up files and settings added during the installation process.

### Uninstallation Method

Run the following command in the terminal.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Once removal is complete, the `wavec` command will no longer be available, and Wave-related executables and settings will be deleted from the system.