DIDIER: https://github.com/didiertremblay/recettes/compare/v8...v10

Pour démontrer ce processus nous allons modifier l'application de recettes pour créer un nouveau component qui aura comme responsabilité d'afficher un sommaire pour une recette.

> * Créons un component sommaire-recette
> * Dans sommaire-recette nous allons ajouter un attribut recette pour lequel nous allons décoré de `@Input()` pour lui permettre de recevoir l'information de sont parent
> * On va déplacé le contenu qui correspond au sommaire dans le html du nouveau component
> * Ainsi que le CSS requis pour l'imgae
> * Dans le parent au lieu du sommaire on va utiliser le selecteur de notre nouveau component en passant notre recette qui est a afficher `[recette]="recette` (Hum?! meme nom :()


# Etapes pour l'application Recettes
> Ajout d'un formulaire pour une recette
> DIDIER: https://github.com/didiertremblay/recettes/compare/v10...v11

> Completons le formulaire et ajout de binding
> DIDIER: https://github.com/didiertremblay/recettes/compare/v11...v12

> Ajout de la recette du formulaire dans nos recettes
> DIDIER: https://github.com/didiertremblay/recettes/compare/v12...v13

A ce point nous pouvons ajouter des recettes. Mais pour le moment ces ajouts sont local dans notre SPA il n'y a pas de serveur donc si la page est rechargé tous changement est perdu. Mais c'est tous de même cool si on compare à faire ce même travail en javascript.

> Demontrons le Emit avec notre recette. Ici on ajoute un boutons qui affichera la recette de notre component sommaire dans le parent. Pour démontrer qu'on est en mesure de passer la structure de données d'un enfant vers sont parent.
> DIDIER: https://github.com/didiertremblay/recettes/compare/v13...v14

# Router module

> Maintenant que nous avons des bases pour le routing. Commencons à déplacer nos components dans une structure avec plusieurs page. C'est toujours un SPA donc il n'y a qu'une page mais qui est modifié par Angulare pour créer l'illusion de plusieurs page.
> Dans un premier temps ajoutons uniquement le module mais sans créer de nouvelle pages.
> DIDIER: https://github.com/didiertremblay/recettes/compare/v14...v24

> On doit changer notre app component pour lui indiquer qu'on doit utiliser le router.
> DIDIER: https://github.com/didiertremblay/recettes/compare/v24...v25

> Aussi on doit indiquer à Angular ou diriger un usager qui arrive à la racine de notre site.
> DIDIER: https://github.com/didiertremblay/recettes/compare/v25...v26

> Changons la génération de notre contenu pour évoluer notre application vers un intégration avec le serveur
> DIDIER: https://github.com/didiertremblay/recettes/compare/v26...v27

> Ajoutons une vue pour un affichage d'étaillé d'une recette.
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v28

** Dans cette page nous avons triché pour permettre d'afficher du contenu.**

# Router page invalide

> Ajout d'une route pour les pages invalides
> DIDIER: https://github.com/didiertremblay/recettes/compare/v28...v29

> Ajout des details a notre recette
> DIDIER: https://github.com/didiertremblay/recettes/compare/v28...v29

> Lien pour une vue detaillé
> DIDIER: https://github.com/didiertremblay/recettes/compare/v28...v29

> Ajout des details
> DIDIER: https://github.com/didiertremblay/recettes/compare/v29...v30

> Gestion du click pour une recette
> DIDIER: https://github.com/didiertremblay/recettes/compare/v30...v31

# RouteByURL et Location

> Ajout de routerr function
> DIDIER: https://github.com/didiertremblay/recettes/compare/v31...v32

# Service et Observable
# Validation de Formulaire
# 



> Gestion de formulaire
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Creation de services
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Gestion du "feedback" pour les requetes lente du serveur
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Validation des forms utilisant Javascript
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Validation des forms utilisant un template
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Validation des forms reactives
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Gestion des images
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Utilisation des pipelines
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Modifier une recette
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Effacer une recette
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Deployment
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27
> Tests
> DIDIER: https://github.com/didiertremblay/recettes/compare/v27...v27

#
