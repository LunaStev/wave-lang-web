---
sidebar_position: 9
---

# FFI

Ce document décrit la spécification de l'interface FFI (Foreign Function Interface) pour appeler des fonctions externes implémentées dans le langage Wave.
Grâce à l'FFI, les programmes Wave peuvent interagir directement avec des bibliothèques natives écrites dans d'autres langages.

---

## Vue d'ensemble

L'FFI de Wave fonctionne sur la base de déclarations.
Les fonctions externes ne sont pas implémentées dans le code Wave ; seul l'ABI (Application Binary Interface) suivi est spécifié.
L'implémentation réelle est résolue à partir de bibliothèques externes au moment de la liaison.

L'FFI déclare simplement l'existence de fonctions au moment de la compilation, et le linker connecte les symboles réels lors de la création du fichier exécutable.

---

## Déclaration externe

Les fonctions externes sont déclarées avec le mot-clé extern.
Actuellement, Wave nécessite que l'ABI soit spécifié et supporte **seulement `extern(c)`**.

```wave
extern(c) fun nom_fonction(paramètres...) -> type_retour;
```

---

## Spécification de l'ABI

Vous devez spécifier l'ABI dans une déclaration `extern`.
Actuellement, un seul ABI `c` est pris en charge.

```wave
extern(c) fun printf(fmt: ptr<u8>);
```

Les déclarations comme `extern(rust)` peuvent être analysées mais provoqueront une erreur au stade de l'analyse sémantique.

---

## Déclaration externe au niveau des fonctions

Pour déclarer une seule fonction externe, écrivez comme suit.

```wave
extern(c) fun InitWindow(largeur: i32, hauteur: i32, titre: ptr<u8>);
```

Cette déclaration signifie que le symbole `InitWindow` suivant l'ABI C existe dans une bibliothèque externe.

---

## Déclaration externe au niveau du bloc

Si plusieurs fonctions externes utilisent le même ABI, vous pouvez les regrouper et les déclarer sous forme de bloc.

```wave
extern(c) {
    fun InitWindow(largeur: i32, hauteur: i32, titre: ptr<u8>);
    fun CloseWindow();
    fun BeginDrawing();
    fun EndDrawing();
}
```

Les déclarations au niveau des blocs sont sémantiquement identiques à celles au niveau des fonctions ; elles visent seulement à améliorer la lisibilité et l'organisation.

---

## Spécification du nom de symbole

Dans certains ABI, le nom de la fonction Wave peut différer du nom de symbole réel du linker.
Dans ce cas, vous pouvez spécifier le nom réel du symbole auquel la fonction externe sera connectée sous forme de chaîne.

### Spécification de symboles au niveau des fonctions

```wave
extern(c, "puts")
fun rust_func(i32);
```

Cette déclaration spécifie que le symbole `puts` sera utilisé dans la liaison lors de l'appel de `rust_func`.

---

### Spécification de symboles au niveau des blocs

Dans une déclaration au niveau du bloc, un nom de symbole peut être spécifié individuellement après chaque fonction.

```wave
extern(c) {
    fun my_puts(ptr<i8>) "puts";
    fun my_strlen(ptr<i8>) "strlen";
}
```

---

## Type pointeur

Les pointeurs sont exprimés sous la forme `ptr<T>`.

```wave
ptr<u8>
ptr<MyStruct>
```

Le `ptr<T>` correspond directement à un pointeur d'une langue externe, et la propriété ou le cycle de vie de la mémoire n'est pas géré par Wave.

---

## Utilisation des structures

Les structures peuvent être utilisées comme paramètres ou valeurs de retour des fonctions externes.

```wave
struct Color {
    r: u8,
    g: u8,
    b: u8,
    a: u8,
}
```

Lors de l'utilisation des structures dans le FFI, l'ordre des champs doit être maintenu comme déclaré, suivant le layout mémoire requis par l'ABI.

---

## Appel de fonction externe

Les fonctions déclarées avec `extern` sont appelées de la même manière que des fonctions ordinaires.

```wave
fun main() -> i32 {
    InitWindow(800, 600, "Wave");
    BeginDrawing();
    EndDrawing();
    CloseWindow();
    return 0;
}
```

Il n'y a pas de différence syntaxique lors de l'appel ; les conventions d'appel et la résolution de symboles sont entièrement gérées par l'ABI et le linker.

---

## Linking

L'implémentation réelle des fonctions externes est fournie par des bibliothèques externes à l'étape de linking.
Le compilateur Wave génère des fichiers objets incluant les appels de fonctions externes, et le linker résout les symboles via les bibliothèques spécifiées.

La spécification des bibliothèques se fait via des outils de build et des options CLI.

---

## Limitations

Wave ne fournit pas les fonctionnalités suivantes.

- Pointeurs de fonctions
- Fonctions de rappel
- Gestion automatique de la mémoire
- Intégration de la gestion des exceptions entre langages

Ces fonctionnalités peuvent être abordées séparément dans les versions futures.
