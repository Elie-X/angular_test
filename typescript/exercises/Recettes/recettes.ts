interface IIngredients {
    ingredient: string;
    mesure: string;
}

interface IInstructions {
    instruction: string;
    photo: string; // URL
}

interface IRecette {
    titre: string;
    description: string;
    nombre_de_personne: number;
    temps_de_preparation: number;
    ingredients: IIngredients[];
    instructions: IInstructions[];
    photo_couverture: string;
}

class Recette implements IRecette {
    public titre: string;
    public description: string;
    public nombre_de_personne: number;
    public temps_de_preparation: number;
    public ingredients: IIngredients[];
    public instructions: IInstructions[];
    public photo_couverture: string;

    constructor(
        titre: string,
        desc: string,
        ndp: number,
        tdp: number,
        ing: IIngredients[],
        ins: IInstructions[],
        photo_c: string
    ) {
        this.titre = titre;
        this.description = desc;
        this.nombre_de_personne = ndp;
        this.temps_de_preparation = tdp;
        this.ingredients = ing;
        this.instructions = ins;
        this.photo_couverture = photo_c;
    }

    public display(): void {
        console.log(JSON.stringify(this));
    }
}


let mes_recettes = [
    new Recette(
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
    new Recette(
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
                instruction: 'Instruction',
                photo: 'image'
            }


        ],
        'un url'),
    new Recette(
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

for (let recette of mes_recettes) {
    recette.display();
}