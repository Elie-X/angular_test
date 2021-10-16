Effectuez cette exercise en modifiant uniquement le fichier app.component.html

* executer `npm i` dans le repertoir binding pour installer l'environement.
* Ajoute un input qui met à jour un attribut username en utilisant un 'two-way-binding'
* Afficher la variable username en utilisant l'interpolation sous notre input
* Ajouter un bouton qui est actif uniquement lorsque le username n'est pas vide
* Si le bouton est cliqué il doit remettre le username vide
* Ajouter une directive qui affiche un message d'erreur en rouge lorsque le username est vide.
 * Pour ajouter le message d'erreur, il est possible en utilisant une directive else avec ngIf. 

```html
<p *ngIf="<condition>; else messageErreur">{{username}}<p>
<ng-template #messageErreur>
    <p class"text-danger">Pas de username</p>
</ng-template>
```

Ici condition doit etre remplacer par le test a executer
