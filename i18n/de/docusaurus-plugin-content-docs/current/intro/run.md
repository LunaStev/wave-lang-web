---
sidebar_position: 3
---

# Erstes Programm ausführen

Falls Wave bereits gemäß den vorherigen Installationsdokumenten installiert wurde, ist es nun an der Zeit, das erste Wave-Programm direkt auszuführen.
In diesem Abschnitt wird der gesamte Prozess des Schreibens und Ausführens eines Wave-Programms Schritt für Schritt anhand eines einfachen Beispiels erläutert.

## Erstellen der Datei `hello.wave`

Zuerst erstellen Sie eine neue Datei mit dem Namen `hello.wave` im Verzeichnis, in dem Sie arbeiten möchten.
Dateiname und -erweiterung können frei gewählt werden, aber in diesem Beispiel wird `hello.wave` verwendet.

## Code schreiben

Schreiben Sie den folgenden Code in die erstellte Datei `hello.wave`.

```wave
fun main() {
    println("Hello Wave");
}
```

In diesem Code bedeutet `fun main()`, dass der Ausgangspunkt der Ausführung des Wave-Programms dort liegt.
Wave-Programme werden immer von der `main`-Funktion aus gestartet.

Die Funktion `println` gibt einen String auf die Standardausgabe aus und wird am häufigsten für die Anzeige von Text auf dem Bildschirm verwendet.

## Erstes Programm ausführen

Nachdem Sie den Code geschrieben haben, öffnen Sie das Terminal und führen Sie den folgenden Befehl im Verzeichnis aus, in dem sich die Datei befindet.

```bash
wavec run hello.wave
```

Dieser Befehl veranlasst den Wave-Compiler, die Quelldatei zu kompilieren und dann sofort auszuführen.

## Ausgabe überprüfen

Wenn das Programm korrekt ausgeführt wird, wird die folgende Ausgabe im Terminal angezeigt.

```
Hello Wave
```

Wenn diese Ausgabe angezeigt wird, bedeutet dies, dass Wave ordnungsgemäß installiert ist und das Programm korrekt geschrieben und ausgeführt wurde.

Nun haben Sie Ihr erstes Wave-Programm erfolgreich ausgeführt.
Von nun an können Sie sich mit der Syntax und den Funktionen von Wave vertraut machen und komplexere Programme schreiben.

Detaillierte Befehlsoptionen (`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`) können in der `wavec` CLI-Dokumentation gefunden werden.
