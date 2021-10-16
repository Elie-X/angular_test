export interface Ingredient {
    ingredient: string;
    mesure: string;
}

export interface Instruction {
    instruction: string;
    photo: string;
}

export class Recette {

    /*
    could do:
    constructor(
        public description: string,
        public titre,
        ....
    )

    */
    public titre: string;
    public description: string;
    public ingredients: Ingredient[] | null;
    public instructions: Instruction[] | null;
    public photo_couverture: string | null;

    // TS lint could require fixing for authorizing camel cases
    constructor(titre: string, desc: string, ing: Ingredient[] | null, ins: Instruction[] | null, photo_c: string | null) {
        this.titre=titre;
        this.description=desc;
        this.ingredients=ing;
        this.instructions=ins;
        this.photo_couverture=photo_c;
    }
}