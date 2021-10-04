var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var personne = {
    prenom: 'Didier',
    nom_de_famille: 'Tremblay',
    age: 42,
    nom_complet: function () {
        return this.prenom + ' ' + this.nom_de_famille;
    }
};
console.log(personne.nom_complet());
var personne2 = {
    // Will be complaining if missing
    first_name: 'Didier',
    last_name: 'Tremblay',
    age: 42
    // will be complaining if too many
};
/* Won't work
personne2.first_name = 123
personne2.age = "423"
*/
personne2.age += 10;
var personne3 = {
    first_name: 'Francoise',
    last_name: 'Trepanier',
    age: 25
};
var personne4 = {
    first_name: "Didier",
    last_name: 'Tremblay',
    age: 37,
    epouse: personne3,
    date_de_marriage: '2017-09-13'
};
var persone4 = {
    first_name: "Didier",
    last_name: 'Tremblay',
    age: 37,
    epouse: personne3,
    date_de_marriage: '2017-09-13',
    hobby1: 'Dungeon et Dragon',
    hobby2: 'Astronomy',
    hobby3: 'Cuisine'
};
var Employee = /** @class */ (function () {
    function Employee(nom, pre, age) {
        this._nas = 1234;
        this._assurance_maladie = "TREDxxxxx";
        this._numero_employe = 54321;
        // THIS <--- is important here.
        this.prenom = pre;
        this.age = age;
        this.nom = nom;
    }
    Employee.prototype.display = function () {
        console.log(this);
    };
    Employee.prototype.displayString = function () {
        return JSON.stringify(this);
    };
    Employee.prototype.displayProtected = function () {
        // Peut etre par une method de l'object
        console.log('This is Protected');
    };
    Employee.prototype.displayPrivate = function () {
        // Peut etre appeler par cette classe uniquement.
        console.log('This is private');
    };
    Employee.prototype.displayPrivateAndProtectedOriginal = function () {
        console.log("De l'employee");
        this.displayPrivate();
        this.displayProtected();
    };
    return Employee;
}());
var employee = new Employee('Tremblay', 'Didier', 42);
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
var Retraite = /** @class */ (function (_super) {
    __extends(Retraite, _super);
    function Retraite(nom, pre, age, date_retraite) {
        var _this = _super.call(this, nom, pre, age) || this;
        _this.date_de_retraite = date_retraite;
        return _this;
    }
    Retraite.prototype.displayPrivateAndProtected = function () {
        // this.displayPrivate();  // <-- pas possible.
        console.log("Du retraite");
        this.displayProtected();
    };
    return Retraite;
}(Employee));
var retraite = new Retraite('Tremblay', 'Robert', 99, '1999-01-01');
retraite.prenom = 'Robert';
retraite.nom = 'Tremblay';
retraite.age = 99;
retraite.date_de_retraite = '2000-01-01';
console.log('Ceci doit etre utilise en test uniquement: ' + retraite['_assurance_maladie']);
console.log('Ceci doit etre utilise en test uniquement: ' + retraite['_numero_employe']);
retraite.display();
// retraite.displayPrivate();
// retraite.displayProtected();
retraite.displayPrivateAndProtectedOriginal();
retraite.displayPrivateAndProtected();
