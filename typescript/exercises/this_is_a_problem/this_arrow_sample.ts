function voiciUnBonjour(nom): void {
    //
    this.nom = nom;

    this.salue = function() {
        setTimeout( () => console.log('Bonjour ' + this.nom), 100);
    }
}

const bonjour = new voiciUnBonjour('Didier');

bonjour.salue();
