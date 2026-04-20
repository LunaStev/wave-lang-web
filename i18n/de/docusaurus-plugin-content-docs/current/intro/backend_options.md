---
sidebar_position: 7
---

# Backend-Optionen (`--llvm`, `--whale`)​​

Dieses Dokument erklärt die CLI-Optionen im Zusammenhang mit dem Backend von `wavec`.​​

Wichtige Prinzipien:​​

- `wavec` ist kein Paketmanager.​
- Das Backend-Verhalten wird so weit wie möglich durch **explizite Argumente** gesteuert.​​
- Detaillierte Backend-Optionen werden nur nach `--llvm` interpretiert.​​

---

## 1. Backend-Auswahl​​

## 1.1 `--llvm`

`--llvm` selbst ist ein Startmarker für den Backend-Optionsblock.​​

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

Wie oben werden nur die unterstützten Elemente unter den Argumenten nach `--llvm` als LLVM-Backend-Einstellungen behandelt.​​

## 1.2 `--whale` (derzeit TODO)​​

Derzeit ist `--whale` ein **reserviertes Dummy-Flag**.​​

- Der Parser erkennt es.​​
- Die tatsächliche Whale-Backend-Pipeline ist noch nicht verbunden.​​
- Bei Verwendung wird es mit einem TODO-Fehler beendet.​​

---

## 2. Optionen, die nach `--llvm` unterstützt werden​​

## 2.1 Ziel/Codegen

- `--target <triple>` / `--target=<triple>`
- `--cpu <name>` / `--cpu=<name>`
- `--features <csv>` / `--features=<csv>`
- `--abi <name>` / `--abi=<name>`

Implementierungsstelle:

- IR-Erstellungsphase (TargetMachine): `target`, `cpu`, `features`
- Objekt/Link-Stufe (clang Aufruf): `target`, `abi`

Derzeit primäre Ziel-Triple, die standardmäßig dokumentiert werden sollen:

- Linux: `x86_64-unknown-linux-gnu`, `aarch64-unknown-linux-gnu`
- Darwin: `x86_64-apple-darwin`, `aarch64-apple-darwin`
- Freestanding: `x86_64-unknown-none-elf`, `aarch64-unknown-none-elf`, `riscv64-unknown-none-elf`

## 2.2 Toolchain/Link

- `--sysroot <path>` / `--sysroot=<path>`
- `-C linker=<path>`
- `-C link-arg=<arg>` (wiederholbar)​​
- `-C no-default-libs`

Implementierungsstelle:

- `--sysroot` für die Objekterstellung (clang `-c`)
- Linker-Override und Raw-Link-Argument im Link-Stage einfügen
- Automatisches Deaktivieren von `-lc -lm` bei Verwendung von `-C no-default-libs`

---

## 3. Parsing-Regeln (wichtig)

Ohne die Verwendung von `--llvm` werden Backend-Detailoptionen nicht als globale Optionen interpretiert.

Zum Beispiel ist das Folgende ein Fehler.

```bash
wavec --target=x86_64-unknown-linux-gnu build app.wave -c
```

Es sollte unbedingt wie unten geschrieben werden.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

---

## 4. Beispielverwendung

Erstellung des Standardobjekts:

```bash
wavec --llvm --target=aarch64-unknown-linux-gnu build app.wave -c
```

Erstellung eines freistehenden Kernel-Objekts:

```bash
wavec --llvm --target=riscv64-unknown-none-elf build kernel.wave --emit=obj --freestanding -o kernel.o
```

Benutzerdefinierter Link:

```bash
wavec --llvm \
  --target=x86_64-unknown-linux-gnu \
  --sysroot=/opt/sysroot \
  -C linker=clang \
  -C link-arg=-Wl,--gc-sections \
  build app.wave
```

Automatisches Deaktivieren der libc/libm-Verknüpfung:

```bash
wavec --llvm -C no-default-libs build app.wave
```

Die Verwendung von `--freestanding` funktioniert intern ähnlich wie `-C no-default-libs` und ist für Builds geeignet, die keine Runtime-Standardbibliotheken wie Kernel/Boot-Code annehmen.

---

## 5. Statusübersicht

- LLVM-Backend: Wird ausgeführt
- Whale-Backend: Geplant (TODO), nicht implementiert
