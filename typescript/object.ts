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

