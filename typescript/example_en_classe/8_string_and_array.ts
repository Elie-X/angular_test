// String and array

let abcd: string = 'abcdef';
let defg: string = "f:a:s:d:f:g"; // convention est single quote mais les deux fonctionnes.

let composite: string = `Ceci est ${abcd} et ${defg}`
// Look at the compiled code.

let vecteur1 = defg.split(':');
console.log(vecteur1);

console.log(vecteur1.slice(2,4));

// unshift
// pop
// shift
// push

let vecteur2: Number[] = [1, 2, 3, 4, 5, 6];

vecteur2.push("Salut"); // Detecte par Typescript

