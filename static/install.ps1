param(
    [string]$Version = "",
    [switch]$Latest
)

$ErrorActionPreference = "Stop"

$Repo = "wavefnd/Wave"
$LLVMVersion = "21"

[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Write-Info($Message) {
    Write-Host "[info] $Message"
}

function Write-Step($Message) {
    Write-Host $Message
}

function Fail($Message) {
    Write-Error "[error] $Message"
    exit 1
}

function Add-UserPath($Directory) {
    $fullPath = [System.IO.Path]::GetFullPath($Directory)
    $current = [Environment]::GetEnvironmentVariable("Path", "User")

    if ([string]::IsNullOrWhiteSpace($current)) {
        $next = $fullPath
    } else {
        $parts = $current -split ';' | Where-Object { -not [string]::IsNullOrWhiteSpace($_) }
        if ($parts -contains $fullPath) {
            return
        }
        $next = ($parts + $fullPath) -join ';'
    }

    [Environment]::SetEnvironmentVariable("Path", $next, "User")
}

function Find-ClangPath {
    $cmd = Get-Command clang.exe -ErrorAction SilentlyContinue
    if ($cmd) {
        return Split-Path -Parent $cmd.Source
    }

    $candidates = @(
        "$env:ProgramFiles\LLVM\bin",
        "${env:ProgramFiles(x86)}\LLVM\bin",
        "$env:LOCALAPPDATA\Programs\LLVM\bin",
        "$env:USERPROFILE\scoop\apps\llvm\current\bin",
        "C:\msys64\ucrt64\bin",
        "C:\msys64\mingw64\bin"
    )

    foreach ($candidate in $candidates) {
        if ($candidate -and (Test-Path (Join-Path $candidate "clang.exe"))) {
            return $candidate
        }
    }

    return $null
}

function Install-LLVM {
    Write-Info "Checking LLVM/Clang for Windows..."

    $clangPath = Find-ClangPath
    if ($clangPath) {
        Write-Info "LLVM bin: $clangPath"
        $env:Path = "$clangPath;$env:Path"
        Add-UserPath $clangPath
        return
    }

    if (Get-Command winget.exe -ErrorAction SilentlyContinue) {
        Write-Info "Installing LLVM via winget..."
        winget.exe install --id LLVM.LLVM -e --source winget --accept-package-agreements --accept-source-agreements
    } elseif (Get-Command choco.exe -ErrorAction SilentlyContinue) {
        Write-Info "Installing LLVM via Chocolatey..."
        choco.exe install llvm -y
    } elseif (Get-Command scoop -ErrorAction SilentlyContinue) {
        Write-Info "Installing LLVM via Scoop..."
        scoop install llvm
    } else {
        Fail "LLVM/Clang is required. Install LLVM manually or install winget, Chocolatey, or Scoop."
    }

    $clangPath = Find-ClangPath
    if (-not $clangPath) {
        Write-Warning "LLVM was installed, but clang.exe is not visible in this PowerShell session yet."
        Write-Warning "Restart PowerShell if wavec cannot find clang."
        return
    }

    Write-Info "LLVM bin: $clangPath"
    $env:Path = "$clangPath;$env:Path"
    Add-UserPath $clangPath
}

Write-Info "Detecting system..."

if ([System.Environment]::OSVersion.Platform -ne [System.PlatformID]::Win32NT) {
    Fail "install.ps1 is for Windows. Use install.sh on Linux/macOS."
}

$arch = $env:PROCESSOR_ARCHITECTURE
if (-not [Environment]::Is64BitOperatingSystem -or ($arch -ne "AMD64" -and $arch -ne "x86_64")) {
    Fail "Windows installer currently supports x86_64 only."
}

if ($Latest) {
    $release = Invoke-RestMethod "https://api.github.com/repos/$Repo/releases/latest"
    $Version = $release.tag_name
    Write-Info "Latest version: $Version"
}

if ([string]::IsNullOrWhiteSpace($Version)) {
    Write-Host "Wave Installer"
    Write-Host "Usage:"
    Write-Host "  powershell -ExecutionPolicy Bypass -File install.ps1 -Version <tag>"
    Write-Host "  powershell -ExecutionPolicy Bypass -File install.ps1 -Latest"
    exit 1
}

Write-Step "[1/4] Installing LLVM $LLVMVersion..."
Install-LLVM

Write-Step "[2/4] Downloading Wave binary..."

$fileSuffix = "x86_64-pc-windows-gnu"
$fileName = "wave-$Version-$fileSuffix.zip"
$url = "https://github.com/$Repo/releases/download/$Version/$fileName"
$downloadPath = Join-Path (Get-Location) $fileName

Write-Info "Download: $url"
Invoke-WebRequest -Uri $url -OutFile $downloadPath

Write-Step "[3/4] Installing Wave..."

$installDir = Join-Path $env:LOCALAPPDATA "Wave\bin"
New-Item -ItemType Directory -Force -Path $installDir | Out-Null
Expand-Archive -Force -Path $downloadPath -DestinationPath $installDir
Add-UserPath $installDir
$env:Path = "$installDir;$env:Path"

Write-Step "[4/4] Verifying installation..."

$wavec = Join-Path $installDir "wavec.exe"
if (-not (Test-Path $wavec)) {
    Fail "Installation failed. wavec.exe was not found in $installDir."
}

& $wavec --version
Write-Host "Installation completed successfully."
Write-Host "Restart PowerShell if 'wavec' is not available from PATH."
