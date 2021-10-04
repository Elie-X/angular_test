
let x_union: string | Boolean;

x_union = "chat";
x_union = false;
x_union = 123;


let names: string | string[];

names = "Didier";
names = ["Didier", "Francis", "Francoise", "Kassandra"];

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}

type CatOrDogOrBoth = Cat | Dog;
type CatAndDog = Cat & Dog;
