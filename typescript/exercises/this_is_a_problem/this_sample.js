function voiciUnBonjour(nom) {
    //
    this.nom = nom;
    this.salue = function () {
        setTimeout(function () {
            console.log('Bonjour ' + this.nom);
        }, 100);
    };
}
var bonjour = new voiciUnBonjour('Didier');
bonjour.salue();
