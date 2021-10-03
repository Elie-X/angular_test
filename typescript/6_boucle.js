{
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
{
    var i = 0;
    while (i < 10) {
        console.log(i++);
    }
}
{
    var i = 0;
    do {
        console.log(i++);
    } while (i < 10);
}
var vecteur = [6, 5, 4, 3, 2, 1];
for (var _i = 0, vecteur_1 = vecteur; _i < vecteur_1.length; _i++) {
    var item = vecteur_1[_i];
    console.log(item);
}
