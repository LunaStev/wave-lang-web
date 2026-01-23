---
sidebar_position: 1
---

# Instalación

## Método de instalación

Wave se puede instalar fácilmente a través del script de instalación proporcionado.
Ejecutando el siguiente comando en la terminal, se instalará automáticamente la versión especificada del compilador Wave (`wavec`).

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version <version>
```

El script de instalación verifica el entorno del sistema y configura automáticamente las dependencias y el compilador necesarios para ejecutar Wave.
Si no se especifica una versión, se instalará la última versión estable o la versión predeterminada basada en un criterio específico.

## Ejemplo de instalación

Para instalar la última versión, ejecute lo siguiente.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- latest
```

Para instalar una versión específica, utilice la opción `--version`.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta
```

También es posible especificar versiones más detalladas como las nightly builds.

```bash
curl -fsSL https://wave-lang.dev/install.sh | bash -s -- --version v0.1.3-pre-beta-nightly-2025-07-11
```

## Tareas realizadas durante la instalación

El script de instalación realiza automáticamente varios pasos para que Wave se ejecute correctamente.
Primero instala los paquetes esenciales relacionados con LLVM 14 a través de `apt-get`.
Luego, crea un enlace simbólico para `/usr/lib/libllvm-14.so` para que el sistema pueda referenciar LLVM de manera estable.

Configura la variable de entorno `LLVM_SYS_140_PREFIX` para que el compilador Wave pueda encontrar LLVM correctamente, y esta configuración se añade a `~/.bashrc` para que persista en sesiones de terminal futuras.

Luego descarga y descomprime el paquete Wave (`.tar.gz`) de la versión especificada por el usuario.
Después de descomprimir, instala el ejecutable `wavec` en `/usr/local/bin`, configurándolo para que el comando `wavec` se pueda usar desde cualquier parte del sistema.

Una vez completada la instalación, verifica que se haya instalado correctamente con el comando `wavec --version`.

## Confirmación de instalación

Después de la instalación, puede ejecutar el siguiente comando para comprobar si el compilador Wave se instaló correctamente.

```bash
wavec --version
```

Si al ejecutar el comando se muestra la información de la versión de Wave instalada, entonces está instalado correctamente.

---

## Guía para eliminar Wave (`uninstall.sh`)

Si desea eliminar Wave del sistema, puede usar el script de desinstalación proporcionado.
Este script sirve para limpiar los archivos y configuraciones añadidos durante la instalación.

### Método de eliminación

Ejecute el siguiente comando en la terminal.

```bash
curl -fsSL https://wave-lang.dev/uninstall.sh | bash
```

Una vez completada la desinstalación, el comando wavec ya no estará disponible, y los archivos ejecutables y configuraciones relacionadas con Wave se eliminarán del sistema.