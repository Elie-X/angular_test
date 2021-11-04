// Cree un Json pour la realisation d'exercises

//import faker from 'faker';
import * as faker from 'faker';

function generateRandomData(items_requis: number): object[] {
    const vecteur: object[] = [];

    for (let index=1; index<items_requis; index++) {
        const temoins: object[] = [];
        const nb_temoin: number = Math.floor(Math.random()*4);

        for (let j=0; j < nb_temoin; j++) {
            temoins.push(
                {
                    nom: faker.name.lastName(),
                    prenom: faker.name.firstName(),
                    age: Math.floor(Math.random()*40)+18
                }
            )
        }

        vecteur.push(
            {
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
        }
        );
    }

    return vecteur;
}

console.log(JSON.stringify(generateRandomData(10)));
