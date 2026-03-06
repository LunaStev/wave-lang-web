---
sidebar_position: 1
---

# Installation

## Installationsmethode

Wave kann einfach über das bereitgestellte Installationsskript installiert werden.
Wenn Sie den folgenden Befehl im Terminal ausführen, wird die angegebene Version des Wave-Compilers (`wavec`) automatisch installiert.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

Das Installationsskript überprüft die Systemumgebung und richtet die für die Ausführung von Wave erforderlichen Abhängigkeiten und Compiler automatisch ein.
Wenn keine Version angegeben wird, wird die neueste stabile Version oder die Standardversion entsprechend den festgelegten Kriterien installiert.

## Installationsbeispiel

Um die neueste Version zu installieren, führen Sie Folgendes aus.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Um eine bestimmte Version zu installieren, verwenden Sie die Option `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

Es ist auch möglich, spezifischere Versionen wie Nightly-Builds anzugeben.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Aufgaben während der Installation

Das Installationsskript verarbeitet automatisch mehrere Schritte, um sicherzustellen, dass Wave ordnungsgemäß ausgeführt werden kann.
Zunächst werden die erforderlichen Pakete für LLVM 14 über `apt-get` installiert.
Anschließend wird ein symbolischer Link zu `/usr/lib/libllvm-14.so` erstellt, damit LLVM vom System stabil referenziert werden kann.

Die Umgebungsvariable `LLVM_SYS_140_PREFIX` wird gesetzt, damit der Wave-Compiler LLVM korrekt finden kann, und diese Einstellung wird `~/.bashrc` hinzugefügt, um auch in zukünftigen Terminal-Sitzungen beibehalten zu werden.

Dann wird das Wave-Paket (`.tar.gz`) der angegebenen Version heruntergeladen und entpackt.
Nach dem Entpacken wird die ausführbare Datei `wavec` in `/usr/local/bin` installiert, sodass der Befehl `wavec` von überall im System verwendet werden kann.

Nach Abschluss der Installation überprüfen Sie mit dem Befehl `wavec --version`, ob alles ordnungsgemäß installiert wurde.

## Installation überprüfen

Nach der Installation können Sie den folgenden Befehl ausführen, um zu überprüfen, ob der Wave-Compiler ordnungsgemäß installiert wurde.

```bash
wavec --version
```

Wenn beim Ausführen des Befehls die Versionsinformationen der installierten Wave angezeigt werden, ist die Installation erfolgreich.

---

## Wave-Deinstallationsanleitung (`uninstall.sh`)

Wenn Sie Wave vom System entfernen möchten, können Sie das bereitgestellte Entfernen-Skript verwenden.
Dieses Skript entfernt die während des Installationsprozesses hinzugefügten Dateien und Einstellungen.

### Entfernungsmethode

Führen Sie im Terminal den folgenden Befehl aus.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Nach der Entfernung ist der Befehl `wavec` nicht mehr verfügbar und die mit Wave verbundenen ausführbaren Dateien und Einstellungen werden vom System entfernt.