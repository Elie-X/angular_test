# App resultats

cette exercise revoir les elements vue en classe pour generer une page affichant les resultats pour des etudiants. 

* Créez un nouveau projet angular
* Dans ce projet créez deux components alert et success
* Le component success doit afficher un paragraphe "Superieur à la moyenne" avec une couleur de fond vert et une bordure vert foncé
* Le component error doit afficher un paragraphe "Sous la note de passage" avec une couleur de fond rouge/rosé pale et une bordure rouge foncé.
* Dans votre class AppComponent insérez le vecteur suivant:
```Typescript
  uneclass = [
    { nom: 'Brionna Ernser', note: 54 },
    { nom: 'Rowan Terry', note: 67 },
    { nom: 'Patricia Lehner', note: 45 },
    { nom: 'Jade Kohler ', note: 98 },
    { nom: 'Hattie Gleichner', note: 77 },
    { nom: 'Alycia Gusikowski', note: 67 },
    { nom: 'Travis Emmerich', note: 57 },
    { nom: 'Jena Wiegand', note: 60 },
    { nom: 'Vella Leffler', note: 66 },
    { nom: 'Marcelle Morissette', note: 65 },
    { nom: 'Allie Haley', note: 88 }
  ];
```
* Creer un page qui affiche:
  * La moyenne du groupe avec deux décimals
  * Le résultat pour chaque élève en utilisant la class bootstrap `progress`
  * Pour les élèves ayant un résultat inférieur à la note de passage de 60% fait afficher le component alert
  * Pour les élèves ayant un résultat supérieur à la moyenne afficher le component success

NOTE: Un example d'affichage est fournit just comme référence mais vous êtez invité à créer comme vous le désirez tant que les éléments specifiés sont affichés.
