"use strict";
// Cree un Json pour la realisation d'exercises
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
//import faker from 'faker';
var faker = __importStar(require("faker"));
function generateRandomData(items_requis) {
    var vecteur = [];
    for (var index = 1; index < items_requis; index++) {
        var temoins = [];
        var nb_temoin = Math.floor(Math.random() * 4);
        for (var j = 0; j < nb_temoin; j++) {
            temoins.push({
                nom: faker.name.lastName(),
                prenom: faker.name.firstName(),
                age: Math.floor(Math.random() * 40) + 18
            });
        }
        vecteur.push({
            id: index,
            suspect: {
                nom: faker.name.lastName(),
                prenom: faker.name.firstName(),
                avatar: faker.image.avatar(),
                telephone: faker.phone.phoneNumber(),
            },
            address: {
                city: faker.address.city(),
                address: faker.address.streetName(),
                code_postal: faker.address.zipCode(),
                pays: faker.address.country(),
                province: faker.address.state(),
                location: {
                    latitude: faker.address.latitude(),
                    longitude: faker.address.longitude(),
                }
            },
            temoins: temoins
        });
    }
    return vecteur;
}
console.log(JSON.stringify(generateRandomData(10)));
