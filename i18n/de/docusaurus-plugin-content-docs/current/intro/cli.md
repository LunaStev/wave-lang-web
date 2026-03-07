---
sidebar_position: 6
---

# `wavec` CLI-Referenz

Dieses Dokument beschreibt detailliert das CLI-Verhalten auf Grundlage der **aktuellen Implementierung des Wave-Compilers (`wavec`)**.

Kernprinzipien:

- `wavec` ist ein Compiler.
- Die Installation/Auflösung von Paketen (Lockfile, Registry, Download) liegt nicht in der Verantwortung von `wavec`.
- Externe Abhängigkeiten werden beim Ausführen von `wavec` durch **explizite CLI-Argumente** übergeben.

---

## 1. Grundform

```bash
wavec [Globale-Optionen] <Befehl> [Befehlsoptionen]
```

Beispiel:

```bash
wavec -O2 run main.wave
wavec build app.wave --link ssl -L ./native/lib
wavec run app.wave --dep-root .vex/dep
```

---

## 2. Befehlsanalyse-Regeln (wichtig)

Zuerst scannt `wavec` die **globalen Optionen** in allen Argumenten und interpretiert dann den verbleibenden Teil als `<Befehl>`.

Das bedeutet, dass die Position der globalen Option flexibel ist.

```bash
wavec -O3 run main.wave
wavec run main.wave -O3
wavec run -O3 main.wave
```

Alle drei oben genannten Beispiele sind gültig.

Mit `--` werden die nachfolgenden globalen Optionen nicht mehr gescannt und in den Befehlsbereich übergeben.

```bash
wavec -- run main.wave
```

---

## 3. Befehle

## 3.1 `run <file>`

Kompiliert und führt die Wave-Datei aus.

```bash
wavec run hello.wave
```

Funktion:

1. Quelle parsen + import erweitern
2. Erstellung von LLVM IR
3. Native Binärlink (`target/<file_stem>`)
4. Ausführung

Merkmale:

- Der Exit-Code des ausgeführten Programms wird von `wavec` übergeben.

---

## 3.2 `build <file>`

Erstellt eine ausführbare Datei (exe).

```bash
wavec build app.wave
```

Ausgabebinärdatei:

- `target/<file_stem>`

## 3.3 `build` Optionen (`-o`, `-c`)

Der `build`-Befehl kann den Namen und das Format der Ausgabedatei über Optionen steuern.

```bash
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
```

- `-o <file>`: Gibt den Namen der Ausgabedatei an.
  - Standard (kein `-c`): Gibt den Ausgabepfad für die ausführbare Datei an
  - Mit `-c`: Gibt den Ausgabepfad für die Objektdatei an
- `-c`: Überspringt die Verlinkung und erzeugt nur Objektdateien.
- Bei Verwendung von `-c` wird der Objektpfad auf stdout ausgegeben.

Standardverhalten:

- `wavec build app.wave` -> `target/app`
- `wavec build app.wave -c` -> `target/app.o` (Pfadausgabe)

---

## 3.4 `install std`, `update std`

Befehl zur Installation/Aktualisierung der Standardbibliothek.

```bash
wavec install std
wavec update std
```

---

## 3.5 `--help`, `--version`

```bash
wavec --help
wavec --version
```

---

## 4. Globale Optionen

## 4.1 Optimierung

Zulässige Werte:

- `-O0`
- `-O1`
- `-O2`
- `-O3`
- `-Os`
- `-Oz`
- `-Ofast`

Beispiel:

```bash
wavec -O3 run main.wave
```

---

## 4.2 Debug-Ausgabe

```bash
wavec --debug-wave=tokens,ast,ir run main.wave
```

Zulässige Elemente:

- `tokens`
- `ast`
- `ir`
- `mc`
- `hex`
- `all`

---

## 4.3 Linkoptionen

```bash
wavec build app.wave --link ssl --link crypto -L ./native/lib
```

- `--link=<lib>` oder `--link <lib>`
- `-L<path>` oder `-L <path>`

`wavec` übergibt beim Linken intern in der Form von `-l<lib>`, `-L<path>`.

---

## 4.4 Optionen für externe Abhängigkeiten (wichtig)

Dies sind Optionen für die Interpretation externer Importe (`pkg::...`).

### `--dep-root <dir>`

Fügt Kandidaten für das Paket-Root-Verzeichnis hinzu.

```bash
wavec run app.wave --dep-root .vex/dep
```

Beim Suchen nach dem Paket `math`:

- Prüfen Sie `.vex/dep/math`

Kann mehrfach angegeben werden:

```bash
wavec run app.wave --dep-root .vex/dep --dep-root ./vendor/dep
```

### `--dep <name>=<path>`

Fixiert den Paketnamen auf einen bestimmten Pfad.

```bash
wavec run app.wave --dep math=.vex/dep/math
```

Regeln:

- Format von `name`: `[A-Za-z_][A-Za-z0-9_]*`
- `--dep` muss im Format `name=path` sein.
- Fehler bei mehrfacher Angabe desselben Paketnamens.

---

## 4.5 백엔드 옵션 (`--llvm`, `--whale`)

백엔드 제어 옵션은 `--llvm` 뒤에서만 해석됩니다.

```bash
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
```

지원 항목(요약):

- `--target`, `--cpu`, `--features`, `--abi`
- `--sysroot`
- `-C linker=<path>`
- `-C link-arg=<arg>` (반복 가능)
- `-C no-default-libs`

`--whale`은 현재 예약된 더미 플래그이며, 실제 백엔드 파이프라인은 아직 미구현(TODO)입니다.

---

## 5. Regeln für die Interpretation von Importen

Wave-Importe werden in folgende 3 Typen unterteilt.

1. Lokaler Import
2. std-Import
3. Externer Paketimport

## 5.1 Lokal

```wave
import("foo");
import("path/to/mod.wave");
```

Suche nach `<path>.wave` im Verzeichnis der Basisdatei.

## 5.2 std

```wave
import("std::io::format");
```

Verwendet den Pfad `~/.wave/lib/wave/std/...`.

## 5.3 Externe Pakete

```wave
import("math::add");
import("json::parser::core");
```

Format:

- Mindestens zwei Segmente `package::module` erforderlich

Reihenfolge zur Bestimmung des Paket-Roots:

1. Explizite Zuordnung durch `--dep name=path`
2. Suche in jedem `--dep-root` nach `<root>/<package>`

Wenn dasselbe Paket in mehreren dep-root gleichzeitig gefunden wird:

- Keine automatische Auswahl und es wird ein **Mehrdeutigkeitsfehler** generiert.
- Muss mit `--dep name=path` festgelegt werden.

Moduldatei-Suchreihenfolge:

1. `<package_root>/<module_path>.wave`
2. `<package_root>/src/<module_path>.wave`

Beispiel:

```wave
import("math::core::vec");
```

Durchsuchen:

- `<package_root>/core/vec.wave`
- `<package_root>/src/core/vec.wave`

---

## 6. Praxisbeispiele für externe Importe

### 6.1 Einzelner dep-root

Verzeichnis:

```text
.vex/dep/
  math/
    src/
      add.wave
main.wave
```

Code:

```wave
import("math::add");
```

Ausführung:

```bash
wavec run main.wave --dep-root .vex/dep
```

### 6.2 Auflösung von Mehrdeutigkeiten

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep
```

Wenn auf beiden Seiten `math` vorhanden ist, tritt ein Fehler auf. Es wird wie unten korrigiert.

```bash
wavec run main.wave \
  --dep-root .vex/dep \
  --dep-root ./vendor/dep \
  --dep math=./vendor/dep/math
```

---

## 7. Trennung der Rollen von Vex

Empfohlene Struktur:

- `wavec`: Kompilation/Verknüpfung/Ausführen + Interpretation der angegebenen Abhängigkeiten
- `vex`: Installation/Verwaltung der Abhängigkeiten vor `wavec ... --dep-root ... --dep ...` Aufruf

Beispiel:

```bash
# intern wird von vex ausgeführt
wavec run main.wave --dep-root .vex/dep --dep math=.vex/dep/math
```

Dieses Modell hält den Compiler einfach und entschlossen, während der Paketmanager sich um die Automatisierung kümmert.

---

## 8. Schnellreferenz

```bash
wavec run main.wave
wavec build app.wave
wavec build app.wave -o ./bin/app
wavec build app.wave -c
wavec build app.wave -c -o ./build/app.o
wavec run main.wave --debug-wave=tokens,ast
wavec build app.wave --link ssl -L ./native/lib
wavec run main.wave --dep-root .vex/dep
wavec run main.wave --dep math=.vex/dep/math
wavec --llvm --target=x86_64-unknown-linux-gnu build app.wave -c
wavec --whale build app.wave -c # TODO: reserved, not implemented
```
