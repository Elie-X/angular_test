Dans cette exercise nous mettrons en pratiques différents types de bindings et aussi utilser nos apprentissage des directives ainsi que le passage de d'information entre parent et enfants.

* Créer une application angular
* Créer un component bouton
  * qui inclus un bouton "Soumettre"
  * Ajouter un input pour récupérer du texte
* Lorsque le bouton est cliqué vous devez sauvegarder le text contenu dans l'input ainsi que l'heure courrante dans la classe du parent
  * NOTE: Si il n'y a pas de contenu dans l'input vous ne devez pas pouvoir cliquer sur le bouton add
* Créer un component tableau
  * Utiliser la
  * Le component tableau doit recevoir un vecteur de log du parent. Ce vecteur doit contenir:
    * Date de l'événement
    * heure de l'événement
    * Message
  * Les 5 première entrées devrait être mis en bold
  * Mettre les entrées qui ont plus qu'une minutes sour un fond rouge et le texte de couleur claire.
* Dans le parent afficher le component Bouton dans la section gauche de la page et le component Tableau dans la section droite de la page.
