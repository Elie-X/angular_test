# TypeScript en quelques mots
>Le langage de programmation TypeScript [(Site web officiel)](http://www.typescriptlang.org) a été créé par Microsoft et a ensuite été open source sous la licence Apache 2.0. Le code source du langage est disponible sur GitHub à l'adresse [(GitHub TypeScript)](https://github.com/Microsoft/TypeScript). 

>Bon résumé des elements: [https://rmolinamir.github.io/typescript-cheatsheet/]

>La première chose à réaliser est que TypeScript se compile en JavaScript. Cela signifie que la sortie du compilateur TypeScript peut s'exécuter partout où le code JavaScript peut s'exécuter, ce qui signifie en fait, de nos jours, pratiquement partout, puisque JavaScript peut s'exécuter dans ce qui suit :
* Web browser
* Backend (exemple with Node.js)
* Desktop (exemple  with Electron)
* Mobile, avec des Frameworks comme React Native, NativeScript, Ionic, et autres.
* Le Cloud, avec des plateformes comme as Azure, Google Cloud Functions, etFirebase

> TypeScript est compilé et n'est pas interprété comme JavaScript. 
>En fait, les gens parlent souvent de **Transpilation **plutôt que de **Compilation **dans le cas de TypeScript, car le compilateur TypeScript effectue en fait une transformation source-source.

> Le deuxième point clé est que TypeScript est un sur-ensemble de JavaScript, 

> Cela signifie que tout code JavaScript valide est également un code TypeScript valide. C'est génial car cela signifie qu'il est très facile d'introduire TypeScript dans une base de code JavaScript existante. 

> Un troisième point à retenir est que TypeScript est (facultativement) typé. Si vous êtes familier avec JavaScript, vous savez probablement qu'il s'agit d'un langage dynamiquement et faiblement typé. Comme tout code JavaScript est également un code TypeScript valide, cela signifie également que vous pouvez déclarer des variables sans spécifier leur type et leur attribuer ultérieurement différents types (par exemple, des nombres, des chaînes, etc.).

Bien que la définition de types soit facultative par défaut dans TypeScript, cela ne signifie pas que vous devez éviter de définir des types. 

TypeScript vous permet de spécifier clairement le type de vos variables et fonctions. En outre, il propose également une inférence de type très puissante, une prise en charge des classes, des génériques, des énumérations, et bien d'autres choses intéressantes

***
#### 🌼 Comment TypeScript peut-il aider ?

#### 1. JavaScript amélioré
> Avant tout, TypeScript ne vise pas à remplacer JavaScript; au lieu de cela, il vise à améliorer la vie des développeurs en fournissant un langage plus puissant qui génère un code JavaScript propre et simple. D'une certaine manière, vous pourriez considérer TypeScript comme un vérificateur de qualité de code pour JavaScript.

#### 2. Le futur JavaScript aujourd'hui
> Un deuxième grand avantage est que TypeScript vous permet d'utiliser les dernières fonctionnalités d'ECMAScript dès maintenant, que vous cibliez la dernière version de Node.js . C'est génial car cela signifie que vous n'avez pas besoin d'attendre que tout soit pris en charge dans l'environnement cible.

> Vous pouvez très facilement configurer le compilateur TypeScript pour générer du code compatible ES3, ES5, ES2015, ES2016, ES2017, ES2018, ES2019 ou ESNext.

> Pour rendre cela plus clair, prenons un exemple. Dans TypeScript, vous pouvez créer des classes tout en transpilant votre code en code compatible ES3, même si les classes n'ont été introduites que dans ES2015. Le compilateur TypeScript effectue uniquement des transformations pour utiliser des constructions de langage qui existaient dans cette version d'ECMAScript. Lorsque TypeScript fait cela, nous parlons souvent d'émission de bas niveau. Il existe de nombreuses fonctionnalités des versions les plus récentes d'ECMAScript que vous pouvez utiliser avec TypeScript tout en ciblant ES5.

#### 3. Typage statique
> L'une des meilleures fonctionnalités de TypeScript est son système de type puissant ajouté au-dessus de JavaScript. Cela seul devrait plaire à tout développeur habitué à travailler avec des langages fortement typés, et donc habitué à bénéficier d'un excellent support IDE.

> Lorsque vous développez à l'aide de C # ou Java avec un éditeur / IDE solide, vous bénéficiez gratuitement de l'autocomplétion puissante, de la prise en charge de la refactorisation , de l'accès à la documentation, des conseils contextuels, des avertissements et des erreurs. TypeScript offre la même expérience de développeur pour l'écosystème JavaScript et permet aux développeurs de bénéficier d'un environnement de développement hautement productif. 
>C'est idéal pour tous les développeurs, pas seulement pour les grandes équipes.

> En termes simples, TypeScript vous aidera certainement à découvrir les bogues plus tôt et vous aidera à mieux organiser et structurer votre code, que vous travailliez sur une petite application ou un grand projet.

#### 4. Les développeurs  Java se sentiront chez eux
> TypeScript semblera naturel pour tout développeur Java car il prend en charge de nombreux concepts avec lesquels les développeurs avec cette expérience devraient être familiarisés.

> TypeScript prend en charge les concepts de programmation orientée objet (POO) via les classes, l'héritage, les constructeurs, les accesseurs de propriété, les méthodes et les interfaces. Il prend également en charge les énumérations, les génériques, les itérateurs, les générateurs, les modules, les décorateurs (également appelés annotations) et bien d'autres.

> Si vous ne considérez que les fonctionnalités de POO et de modularité de TypeScript, vous pouvez facilement comprendre que cela simplifie beaucoup la structure et l'organisation de votre base de code tout en définissant votre modèle de domaine à l'aide de concepts familiers.

> De plus, comme il s'agit d'un sur-ensemble de JavaScript, il prend également en charge la programmation fonctionnelle.

> Avoir une expérience préalable avec tous ces concepts vous donne certainement un avantage pour vous familiariser rapidement avec TypeScript.

🌼 Déclaration des variables
> Le mot clé **var **de JavaScript pour déclarer notre variable.

### Avant de coder quoi que ce soit d'autre ensemble, vous devez vraiment savoir que **var** est un mot-clé que vous devez oublier et ne plus jamais utiliser.

🛑 Pourquoi? 

>Le problème est que **var** ne prend pas en charge la portée du bloc. Au lieu de cela, les variables déclarées avec **var**ont une portée fonctionnelle et toutes les déclarations de variables dans un bloc seront hissées vers la fonction environnante.

>Le **Hoisting** (le hissage)est un concept JavaScript étrange. En JavaScript, les déclarations de variables (et les déclarations en général) sont traitées en premier, avant toute autre exécution. Cela signifie que déclarer une variable n'importe où est exactement la même chose que la déclarer en haut. Cela signifie également qu'une variable peut être utilisée avant d'être déclarée, ce qui est pour le moins contre-intuitif.

```Javascript
var a = 12;
var result = a + b;
var b = 30;
console.log("Result: ",result);
```

>Le code précédent est un code JavaScript parfaitement valide (mais n'est certainement pas recommandé).

>Jusqu'à ES5, **var** était le seul moyen de déclarer des variables, mais cela a changé avec ES2015, qui a introduit deux nouveaux mots-clés: **let** et **const**. Ces deux mots clés prennent en charge la portée de bloc.

> Le mot clé let est l'alternative la plus sûre à var, tandis que const vous permet de définir des constantes.

> Nous mettons des constantes entre guillemets car le mot-clé const ne rend pas les objets immuables; il garantit seulement que la variable ne peut pas être réaffectée, mais le contenu de l'objet vers lequel elle pointe peut être modifié.

> Voici l'ordre de préférence recommandé : **const> let> var**.

***

Code| Définition| Année |
--- | --- | --- |
**ES5** | *ES5 est un raccourci pour ECMAScript 5* | 2009 |
**ES2015** | *Spécification 2015 pour le langage ECMAScript (sixième édition)* | 2015|

> ECMAScript est un langage de script qui forme la base de JavaScript. ECMAScript est standardisé par l'organisation ECMA International grâce aux spécifications ECMA-262 et ECMA-402.
***
#### 🌼 Types de base de TypeScript
> Avant de continuer, voyons quels types de base sont pris en charge par TypeScript:

>boolean: true or false.
>number: Valeurs à virgule flottante. Ceux-ci peuvent être exprimés sous forme hexadécimale, décimale, binaire et octale.
>string: peuvent être délimités par des guillemets simples ('), des guillemets doubles (") ou des graduations inverses (`) pour définir les littéraux de modèle (template String).

Voici quelques exemples de nombres:
>* let decimal: number = 42
>* let hexadecimal: number = 0x42
>* let binary: number = 0b101010
>* let octal: number = 0o52

Voici quelques exemples de String :
* let hello: string = 'Hello'
* let world: string = "World"
* let cool: string = `${hello} ${world}!`

![Types en Typescript ref: Programming TypeScript By Boris Cherny](types.png)
