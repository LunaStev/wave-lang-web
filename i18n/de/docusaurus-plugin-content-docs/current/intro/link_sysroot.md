---
sidebar_position: 8
---

# Manuelle Steuerung von Link-Sysroot (`-C link-sysroot`)

Dieses Dokument erklärt, wie man das Sysroot im Verknüpfungsschritt bei `wavec` **explizit steuert**.

Kernprinzipien:

- `--sysroot=<path>`: Sysroot der Kompilierphase (clang `-c`)
- `-C link-sysroot=<path>`: Sysroot der Verknüpfungsphase (Linker)

Das heißt, Kompilierung und Verknüpfung werden getrennt behandelt.

---

## 1. Warum ist es notwendig?

Wenn Sie `-C linker=<path>` in einem Cross-Link verwenden, müssen Sie häufig den Laufzeitpfad (`crt1.o`, `libc`, `libm`) separat angeben, auf den der Link-Treiber verweist (z. B. `aarch64-linux-gnu-gcc`).

Daher wird das Link-Sysroot nicht automatisch erschlossen, sondern explizit über CLI übergeben.

---

## 2. Optionen Definition

## 2.1 `-C link-sysroot=<path>`

In der Verknüpfungsphase wird `--sysroot=<path>` eingefügt.

```bash
wavec -C link-sysroot=/path/to/sysroot ...
```

Intern entspricht dies `-C link-arg=--sysroot=<path>`.

## 2.2 `-C link-arg=--sysroot=<path>`

Die bestehende Methode mit Rohlinkargumenten wird weiterhin unterstützt.

```bash
wavec -C link-arg=--sysroot=/path/to/sysroot ...
```

---

## 3. Validierungsregeln

Bei einem Build, das eine Verknüpfungsphase erfordert, führt das gleichzeitige Zutreffen der folgenden Bedingungen zu einem Benutzungsfehler.

1. Verwendung von `-C linker=...`
2. Verwendung von `--sysroot=<path>`
3. Unbenannter Link-Sysroot (`-C link-sysroot` oder `-C link-arg=--sysroot=...`)

Beispiel für eine Fehlermeldung:

```text
when using -C linker=..., --sysroot=<path> is compile-stage only; pass linker sysroot explicitly with -C link-sysroot=<path> (or -C link-arg=--sysroot=<path>)
```

---

## 4. Beispiel für Verwendung

## 4.1 AArch64 Linux Cross-Link

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin \
  -o /tmp/test93-aarch64.bin
```

## 4.2 Rohlinkargument Methode

```bash
wavec \
  -C linker=aarch64-linux-gnu-gcc \
  --sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  -C link-arg=--sysroot=/usr/aarch64-redhat-linux/sys-root/fc43 \
  build test/test93.wave \
  --target aarch64-unknown-linux-gnu \
  --emit=bin
```

## 4.3 Build ohne Link (`--emit=obj`)

Ohne Verknüpfungsphase ist kein Link-Sysroot erforderlich.

```bash
wavec --sysroot=/path/to/sysroot build main.wave --emit=obj
```

---

## 5. Zusammenfassung

- `--sysroot` steuert die Kompilierungsphase.
- `-C link-sysroot` steuert die Verknüpfungsphase.
- Explizite Steuerung vor automatischer Herleitung.
