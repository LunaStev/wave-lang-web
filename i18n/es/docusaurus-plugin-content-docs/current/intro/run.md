---
sidebar_position: 3
---

# Ejecutar el primer programa

Si ya has instalado Wave a partir de documentos de instalación anteriores, ahora es momento de ejecutar tu primer programa Wave.
En esta sección, se examina todo el proceso de escritura y ejecución de un programa Wave a través de un ejemplo simple paso a paso.

## Crear archivo `hello.wave`.

Primero, crea un nuevo archivo llamado `hello.wave` en el directorio de trabajo.
El nombre del archivo y la extensión pueden asignarse libremente, pero en este ejemplo se usa `hello.wave`.

## Escribir el código

Escribe el siguiente código en el archivo `hello.wave` recién creado.

```wave
fun main() {
    println("Hola Wave");
}
```

En este código, `fun main()` significa el punto de inicio de la ejecución del programa Wave.
Un programa Wave siempre se ejecuta a partir de la función `main`.

La función `println` es una función que imprime la cadena de texto en la salida estándar y se utiliza de manera básica para mostrar texto en la pantalla.

## Ejecutar el programa

Una vez hayas terminado de escribir el código, abre el terminal y ejecuta el siguiente comando en el directorio donde se encuentra el archivo.

```bash
wavec run hello.wave
```

Este comando indica al compilador Wave que compile el archivo fuente y realice la ejecución de inmediato.

## Verificar la salida

Si el programa se ejecuta correctamente, se mostrará la siguiente salida en el terminal.

```
Hola Wave
```

Si ves este resultado, significa que Wave ha sido instalado correctamente y que la escritura y ejecución del programa fueron correctas.

Ahora has ejecutado con éxito tu primer programa Wave.
A partir de ahora, puedes examinar la gramática y las funciones de Wave una por una, e intentar escribir programas más complejos.

정밀한 명령어 옵션(`-O*`, `--debug-wave`, `--link`, `--dep-root`, `--dep`)은
`wavec` CLI 문서에서 확인할 수 있습니다.
