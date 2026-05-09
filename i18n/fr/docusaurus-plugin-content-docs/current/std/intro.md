---
sidebar_position: 1
---

# Bibliothèque standard (std)

Cette section décrit comment utiliser pratiquement la bibliothèque standard Wave.

## Modules

- [buffer](./buffer)
- [env](./env)
- [math](./math)
- [mem](./mem)
- [net](./net)
- [path](./path)
- [string](./string)
- [time](./time)
- [sys](./sys)
- [libc](./libc)

## Principes d'utilisation

- Dans le code de haut niveau, utilisez `std::*`.
- Les fonctionnalités dépendantes de l'OS sont cachées derrière `std::sys::*`.
- Utilisez `std::libc` uniquement lorsque vous avez besoin de compatibilité C.

## Convention de gestion des erreurs

Beaucoup de fonctions suivent cette convention.

- `>= 0`: succès
- `< 0`: échec (`-errno` ou code d'erreur spécifique au module)

Exemple :

```wave
import("std::env::environ");

fun main() {
    var raw: array<u8, 64>;
    var n: i64 = env_get("HOME", &raw[0], 64);

    if (n < 0) {
        // Gestion des erreurs
        return;
    }

    // raw contient une chaîne terminée par NUL
}
```
