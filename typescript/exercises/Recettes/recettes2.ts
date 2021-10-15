interface IIngredients2 {
    ingredient: string;
    mesure: string;
}

interface IInstructions2 {
    instruction: string;
    photo?: string; // URL
}

interface IRecette2 {
    titre: string;
    description: string;
    nombre_de_personne: number;
    temps_de_preparation: number;
    ingredients: IIngredients2[];
    instructions: IInstructions2[];
    photo_couverture: string;
}

class Recette2 implements IRecette2 {

    constructor(
        public titre: string,
        public description: string,
        public nombre_de_personne: number,
        public temps_de_preparation: number,
        public ingredients: IIngredients2[],
        public instructions: IInstructions2[],
        public photo_couverture: string
    ) {

    }

    public display(): void {
        console.log(JSON.stringify(this));
    }
}


let mes_recettes2 = [
    new Recette2(
        "Spaghetti a Didier1",
        "Ma fameuse soupe a spaggethi1",
        20,
        20,
        [
            {
                mesure: 'une canne',
                ingredient: 'Tomate'
            }

        ],
        [
            {
                instruction: 'Instruction',
                photo: 'image'
            }


        ],
        'un url'),
    new Recette2(
        "Spaghetti a Didier2",
        "Ma fameuse soupe a spaggethi1",
        20,
        20,
        [
            {
                mesure: 'une canne',
                ingredient: 'Tomate'
            }

        ],
        [
            {
                instruction: 'Instruction'//,
                //photo: 'image'
            }


        ],
        'un url'),
    new Recette2(
        "Spaghetti a Didier3",
        "Ma fameuse soupe a spaggethi1",
        20,
        20,
        [
            {
                mesure: 'une canne',
                ingredient: 'Tomate'
            }

        ],
        [
            {
                instruction: 'Instruction',
                photo: 'image'
            }


        ],
        'un url')
]

for (let recette of mes_recettes2) {
    recette.display();
}

