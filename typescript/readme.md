# TypeScript en quelques mots
>Le langage de programmation TypeScript [(Site web officiel)](http://www.typescriptlang.org) a été créé par Microsoft et a ensuite été open source sous la licence Apache 2.0. Le code source du langage est disponible sur GitHub à l'adresse [(GitHub TypeScript)](https://github.com/Microsoft/TypeScript). 

>Bon résumé des elements: [https://rmolinamir.github.io/typescript-cheatsheet/]

🛑 C'est une revu de typescript mais plusieurs elements ne seront pas couvert durant le cour

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

Autre example de problème avec var

```Javascript
// var let const

function f(shouldInitialize: Boolean) {
    //let x: number;

    if (shouldInitialize) {
        //var x=10;
        let x=10;
    }

    return x;
}

console.log(f(true));
console.log(f(false));
```

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


```Javascript
console.log("Bonjour");
```

###  Exercise : compilateur

```Javascript
function bonjour(personne) {
    return "Bonjour " + personne;
}

var utilisateur = "Didier";
console.log(bonjour(utilisateur));

function bonjour2(personne: string) {
    return "Bonjour " + personne;
}

console.log(bonjour2(utilisateur));

var utilisateur2 = 42;

console.log(bonjour(utilisateur2));
console.log(bonjour2(utilisateur2));
// Peut etre contourne..
```

#### 🌼 Types de base de TypeScript

[https://www.typescriptlang.org/docs/handbook/2/everyday-types.html]

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

# Example of type

```Javascript
// number
// string
// Boolean
// null, undefined
// any
// void

var x = 1000;
// Inferred!

var x2 = x;
var y: string;
var y2 = 'string';

y = x;
var x2 = "Un mot";

var z: Boolean;
var z1 = false;

var aaa: any = x+y+z1;
```

### Exercise Types
### Exercise Typeof Type
### Exercise Erreurs
### 

# Union



```Javascript
let x_union: string | Boolean;

x_union = "chat";
x_union = false;
x_union = 123;


let names: string | string[];

names = "Didier";
names = ["Didier", "Francis", "Francoise", "Kassandra"];

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}

type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;
```

# Union

```Javascript
const enum Langue {
    Francais,
    Anglais,
    Latin
    // Other definition
    
}

let a = Langue.Latin
console.log(a);

let b = Langue.Typescript

let c = Langue[2]
```


# Boucle

```Javascript
{
    for (let i=0; i<10; i++) {
        console.log(i);
    }
}

{
    let i=0;
    while (i<10) {
        console.log(i++);
    }
}

{
    let i: number=0;
    do {
        console.log(i++)
    } while(i<10)
}

let vecteur: number[] = [6,5,4,3,2,1];
for (let item of vecteur) {
    console.log(item);
}
```

# Fonction et types

```Javascript
function myFunction(param: number, param2: number, param3: number = 0): void {


    // return 42;
}

// any
// int
// void

function multiArgs(...args:any[]) {
    for (let arg of args) {
        console.log(typeof arg)
    }
}

multiArgs(4,2,4,"Salut", null, true, ()=>1+1, [4,5]);

var obj={
    asyncmethod(param1, param2, callback) {
        /// some code
        // Using this

        callback(...);
    }
}

obj.asyncmethod(1,2,function(err, result) {
    // code here
    // This will possibly clash with this
})

// should be

obj.asyncmethod(1,2,(err, result)=>{
    // code here
});

function abc(params1) {
    return def;
}

// same as

(params1) => {
    return def;
}

// Same as

(param1) => def;

// Same as

param1 => def;


// Template

function filtre<T>(vecteur:T[], filtre:T): T[] {
  let result = []
  for (let i = 0; i < vecteur.length; i++) {
        let item = vecteur[i]
        if (filtre == item) {
        result.push(item)
    }
  }
  return result;
}
```

### Exercise : Creer une fonction
### Exercise : Calculatrice
### Exercise : parametres

# Chaines et vecteurs

```Javascript
// String and array

let abcd: string = 'abcdef';
let defg: string = "f:a:s:d:f:g"; // convention est single quote mais les deux fonctionnes.

let composite: string = `Ceci est ${abcd} et ${defg}`
// Look at the compiled code.

let vecteur1 = defg.split(':');
console.log(vecteur1);

console.log(vecteur1.slice(2,4));

// unshift
// pop
// shift
// push

let vecteur2: Number[] = [1, 2, 3, 4, 5, 6];

vecteur2.push("Salut"); // Detecte par Typescript
```

# Interfaces et Objets

[https://www.typescriptlang.org/docs/handbook/2/classes.html]

```Javascript
var personne = {
    prenom: 'Didier',
    nom_de_famille: 'Tremblay',
    age: 42,
    nom_complet: function () {
        return this.prenom + ' ' + this.nom_de_famille;
    }
}


console.log(personne.nom_complet());

interface IPerson {
    last_name: string;
    first_name: string;
    age: number;
}

let personne2: IPerson = {
    // Will be complaining if missing
    first_name: 'Didier',
    last_name: 'Tremblay',
    age: 42
    // will be complaining if too many
}

/* Won't work
personne2.first_name = 123 
personne2.age = "423"
*/
personne2.age += 10;

interface IMarie extends IPerson {
   epouse: IPerson;
   date_de_marriage: string;
}

let personne3: IPerson = {
    first_name: 'Francoise',
    last_name: 'Trepanier',
    age: 25
}

let personne4: IMarie = {
    first_name: "Didier",
    last_name: 'Tremblay',
    age: 37,
    epouse: personne3,
    date_de_marriage: '2017-09-13'
}

interface IInterets {
    hobby1: string,
    hobby2: string,
    hobby3: string
}

// Interface multiple
interface IPersoneMarieAvecInterets extends IMarie, IInterets {
    // C'est possible qu'il n'y ait rien a mettre
}

let persone4: IPersoneMarieAvecInterets = {
    first_name: "Didier",
    last_name: 'Tremblay',
    age: 37,
    epouse: personne3,
    date_de_marriage: '2017-09-13',
    hobby1: 'Dungeon et Dragon',
    hobby2: 'Astronomy',
    hobby3: 'Cuisine'
}

interface IDisplayObject {
    display(): void;
    displayString(): string;
    
}

class Employee implements IDisplayObject {
    prenom: string;
    nom: string;
    age: number

    _nas: number = 1234;
    private _assurance_maladie: string = "TREDxxxxx";
    protected _numero_employe: number = 54321;

    constructor(nom:string, pre:string, age:number) {
        // THIS <--- is important here.
        this.prenom = pre;
        this.age = age;
        this.nom = nom;
    }

    display(): void {
        console.log(this);
    }

    displayString(): string {
        return JSON.stringify(this);
    }

    protected displayProtected(): void {
        // Peut etre par une method de l'object
        console.log('This is Protected');
    }

    private displayPrivate(): void {
        // Peut etre appeler par cette classe uniquement.
        console.log('This is private');
    }

    displayPrivateAndProtectedOriginal(): void {
        console.log("De l'employee");
        this.displayPrivate();
        this.displayProtected(); 
    }
}

let employee = new Employee('Tremblay', 'Didier', 42);

employee.prenom = "Didier";
employee.nom = "Tremblay";
employee.age = 42;

employee._nas = 1234;
/*
employee._assurance_maladie = 'fgdjg';
employee._numero_employe = 12345;
*/
console.log(employee);
console.log(JSON.stringify(employee));

employee.display();

console.log(employee.displayString());

class Retraite extends Employee {
    date_de_retraite: string;

    constructor(nom:string, pre:string, age:number, date_retraite: string) {
        super(nom, pre, age)
        this.date_de_retraite = date_retraite;

    }

    displayPrivateAndProtected(): void {
        // this.displayPrivate();  // <-- pas possible.
        console.log("Du retraite");
        this.displayProtected(); 

    }
}

let retraite = new Retraite('Tremblay', 'Robert', 99, '1999-01-01');

retraite.prenom = 'Robert';
retraite.nom = 'Tremblay'
retraite.age = 99;
retraite.date_de_retraite = '2000-01-01';

console.log('Ceci doit etre utilise en test uniquement: ' + retraite['_assurance_maladie']);
console.log('Ceci doit etre utilise en test uniquement: ' + retraite['_numero_employe']);

retraite.display();
// retraite.displayPrivate();
// retraite.displayProtected();
retraite.displayPrivateAndProtectedOriginal();
retraite.displayPrivateAndProtected();
```

### Exercise: Interface
### Exercise: Recettes


```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```

```Javascript

```



# Autre materiel a mettre en ordre

* 🍄 La différence entre var, let et const
* 🍄 Les types primitis en Typescript
* 🍄 La différence entre Object et object
***

## 🔡 Les propriétés du langage Typescript
***
###  🌿  La différence entre var, let et const

#### TypeScript a de nombreuses façons de déclarer une variable. Vous pouvez définir une variable au niveau d'une fonction à l'aide de l'un des trois mots clés suivants : 

 * 🔸  var
 * 🔸   let 
 * 🔸  const

***
### 🌼 Le mot clé **var**
La manière la plus simple de déclarer une variable consiste à utiliser le mot-clé var. C'est la déclaration la plus ancienne, mais la méthode la moins appréciée en raison de certaines bizarreries. Le principal problème avec var est qu'il est déclaré dans le contexte d'exécution, ce qui signifie dans la portée de la fonction ou dans la portée globale. Si, par accident, une valeur est affectée à une variable non explicitement déclarée avec var, alors la portée de la variable est à la portée globale. Voici un exemple:

#### En outre, vous pouvez définir une variable avec public, private ou protected au niveau de la classe.

```typescript
function f1(){
   a = 2; // Pas de "var" explicite, donc portée globale au lieu de portée de fonction
}
```

#### Une déclaration var peut être rendue plus stricte avec le mode strict de JavaScript afin que TypeScript puisse activer automatiquement chaque fichier en utilisant **alwaysStrict** dans les options de son compilateur. 
#### Sinon, vous devez vous rappeler que les variables déclarées par var sont créés avant l'exécution du code. Les variables sans le mot-clé var n'existent pas tant que le code qui les affecte n'est pas exécuté. En JavaScript, il est possible d'attribuer une variable sans déclarer, ce qui n'est pas le cas avec TypeScript.

***

### 🌼 Le mot clé **let**

#### Une déclaration **let** est basée sur la portée. Il ne peut pas être déclaré plus d'une fois par portée et ne hisse pas la variable. Cela simplifie la lisibilité du code et évite les erreurs inattendues. 
#### La déclaration avec let ne définit pas non plus de valeurs globalement. S'appuyer sur let est le moyen de déclarer une variable lorsque vous prévoyez que la variable sera définie plus d'une fois. Dans le code suivant, la variable a est définie trois fois. Le code est légal, même avec plusieurs déclarations. 
#### La raison en est que chaque déclaration, avec let, est définie dans une portée différente avec des accolades. La première portée est la portée de la fonction. 
#### La deuxième portée utilise une syntaxe inhabituelle, mais elle reflète la façon dont une fonctionnalité while, if ou autre fonctionne. La troisième portée est dans une instruction if.

```typescript
function letFunction() {
   let a: number = 1;
   { // Scope start
     let a: number = 2;
   } // Scope end
   console.log(a); // 1

   if(true){ // Scope start
     let a: number = 3;
    } // Scope end
    console.log(a); // 1
}
letFunction()
``` 

```typescript
let a:number = 2;
a = "two"; // ne compile pas
```
#### Déclarer une variable avec let dans un cas de commutateur peut être délicat. La raison en est que la portée n'est pas par cas, mais pour le commutateur qui héberge tous les cas. 

#### Cependant, il est possible de concevoir une lunette en invoquant une parenthèse bouclée à l'intérieur de chaque boîtier. Le code suivant est valide même si deux variables b sont déclarées

```typescript
function switchFunction(num: number) {
let b: string = "functionb";

   switch (num) {
       case 1:
   let b: string = "case 1";
       break;
   }
}
```
#### Cependant, l'ajout d'un cas ultérieur qui déclare également une variable b échoue la compilation :
```typescript
function switchFunction(num: number) {
  let b: string = "functionb";

  switch (num) {
    case 1:
 let b: string = "case 1";
    break;
    case 2:
let b: string = "case 2";
    break;
  }
```

***
### 🌼 Le mot clé **const**
Dans le cas où vous savez que la variable est définie une fois et ne changera pas, alors utiliser **const** est une meilleure alternative. La raison en est qu'il met en évidence pour le lecteur du code que la valeur ne peut pas être définie plus d'une fois - elle est déclarée et initialisée. TypeScript respecte **let** et **const**, et le code ne sera pas compilé si une variable est définie plus d'une fois ou si une valeur est affectée deux fois lorsque la variable est une constante.

Consigner une variable pour rester avec une seule valeur peut sembler restrictif, mais dans de nombreuses situations, c'est la bonne chose à faire. La déclaration d'une primitive avec **const** bloque l'accès à l'affectation avec le signe égal (=), ce qui signifie qu'elle ne permet pas de changer la référence de la variable. 

Cependant, vous pouvez modifier le contenu de la variable. Par exemple, un tableau de primitives peut ajouter et supprimer des valeurs du tableau, mais ne peut pas affecter une nouvelle liste de valeurs :

```typescript
const arr: number[] = [1, 2, 3];
arr.push(4);
```
TypeScript, avec l'utilisation de **let** et **const**, garantit que la valeur affectée à une variable est associée à la variable souhaitée, et toute assignation erronée provoquera le renvoi d'une erreur par le compilateur. Dans le code suivant, deux variables sont clairement définies au niveau de la portée globale, ainsi que la portée de la fonction. 

Il ne fait aucun doute qu'il s'agit de deux variables distinctes avec une collusion de valeur :
```typescript
const a = 2;
function z() {
   let a = 3;
}
```

*** 
### 🌐 Les types primitifs

Type | Primitif | Description | Exemple code
--- | --- | --- | --- |
*Number* | *number* | **Un nombre peut être un int, un float, un double, négatif, positif et même NaN** | var variablename:number;
*String* | *string* | **Le type primitif de chaîne est le même que le type primitif JavaScript et représente une séquence de caractères stockés sous forme de code Unicode UTF-16** | var variable:string; 
*Boolean* | *boolean* | **Le type primitif booléen est le même que le type primitif JavaScript et représente une valeur logique; soit vrai ou faux** | var flag:bool;
*Null* | *null* | **Le type primitif Null est le même que le type primitif JavaScript et représente un littéral nul et il n'est pas possible de référencer directement la valeur de type nul elle-même** | var q=null; 
*Undefined* | *undefined*  | **Le type Undefined est le même que le type primitif JavaScript et est le type du littéral non défini. Le type non défini est un sous-type de tous les types** | var p:number=undefined; ou var q=undefined;

***
### 🌐 La différence entre Object et object

Il existe de nombreux types d'objets dans TypeScript. Il existe **Object**, **object** , **class object** et **object literal**. 

Le type **Object ** qui commence par une majuscule représente quelque chose de très présent, un type disponible avec chaque type et objet. L'objet en majuscule comporte un ensemble commun de fonctions. Voici la liste de ses fonctions disponibles 👍 

| Exemples de code |
| ---------------- |
|toString(): string; |
| toLocaleString(): string; |
| valueOf(): Object; |
| hasOwnProperty(v: string): boolean; |
| isPrototypeOf(v: Object): boolean; |
| propertyIsEnumerable(v: string): boolean;|


Un vaste ensemble de types relève de **Object**. L'affectation de plusieurs valeurs différentes à un objet de type Object montre la flexibilité du type et l'étendue de la gamme potentielle de types:

| Exemples de code |
| ----------- |
|let bigObject: Object; |
| |
| bigObject = 1; |
| bigObject = "1"; |
| bigObject = true; |
| bigObject = Symbol("123"); |
| bigObject = { a: "test" }; |
| bigObject = [1, 2, 3]; |
| bigObject = new Date(); |
| bigObject = new MyClass(); |
| bigObject = Object.create({}); |

L'objet minuscule couvre tout ce qui n'est pas un **nombre**, une **string**, un **booléen**, un **null**, un **indéfini** ou un **symbole**. L'objet minuscule est un sous-ensemble de l'objet majuscule. Il contient des littéraux d'objet, des dates, des fonctions, des tableaux et une instance d'un objet créé avec **new** 🆕  

| Exemples de code |
| ----------- |
| let littleObject: object; |
|                           |
| littleObject = { a: "test" };|
| littleObject = new Date();|
| littleObject = [1, 2, 3];|
| littleObject = new MyClass();|
| littleObject = Object.create({});|

***

Dans les cas de **null**et indéfini (**undefined**), ils ne sont ni **object** ni **Object** . 

Ils sont dans une catégorie spéciale et sont un sous-type de tous les autres types. Le compilateur de TypeScript doit être configuré avec l'option stricte **strictNullCheck**, ce qui signifie que même si **null** et **undefined** sont un sous-ensemble de tous les types, seule une union du type principal et **null** ou **undefined** permettra l'affectation à l'une de ces deux valeurs spéciales :

```typescript
let acceptNull: number | null = null;
acceptNull = 1;

let acceptUndefined: number | undefined = 1;
acceptUndefined = null;
```


