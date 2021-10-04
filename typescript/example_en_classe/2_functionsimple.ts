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
