function voiciUnBonjour(nom) {
    //
    this.nom = nom;
    this.salue = function () {
        var _this = this;
        setTimeout(function () { return console.log('Bonjour ' + _this.nom); }, 100);
    };
}
var bonjour = new voiciUnBonjour('Didier');
bonjour.salue();
