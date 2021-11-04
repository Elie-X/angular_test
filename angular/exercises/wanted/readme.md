On vous demandes de créer un interface pour pour un poste de police pour aider une investigation policière. 

# Requis sur l'interface
* La structure de l'interface doit être la suivantes
  * Section de gauche doit afficher l'image et le nom des suspect (4 suspects par rangées)
  * Section de droite dois afficher l'information detaillé sur le suspect
  * Sous l'information détaillé sur le suspect vous devez afficher un tableau avec les nom et ages des témoins

# Requis fonctionnel
* Au demarrage lorsqu'aucun suspect n'est sélectionné vous devez afficher dans la section de droite un message invitant l'usager à choisir un suspect.
* Lorsqu'un suspect est séléctionné, les infomrations détaillé sur le suspect incluant sa photo doit apparaitre a droite
* La carte dans la section de gauche pour le suspect selectionné doit être affiché avec une couleur de fond différente pour indique la sélection courante
* Si pour le suspect il n'y a pas de témoins, il est requis de remplacer le tableau par message sous fond rouge indiquant qu'il n'y a pas de témoins pour ce suspect.

# Requis d'implementation
* Les elements suivant doivent être implementé en composante ("Components")
  * Liste des suspect
  * Vue detaillé des suspect
  * Liste des témoins pour un suspect
* Vous devez utiliser la communication entre composantes pour echanger les informations requises pour l'affichage




Aide pour l'implementation, pour creer votre liste de suspects ajouter cette ligne dans votre fichier `app.component.ts`

```Typescript
mes_suspects: ISuspect[] = [{"id":1,"suspect":{"nom":"Luettgen","prenom":"Bobby","avatar":"https://cdn.fakercloud.com/avatars/karalek_128.jpg","telephone":"856.804.4878"},"address":{"city":"Pico Rivera","address":"Nathanial Lake","code_postal":"75632-8240","pays":"Montenegro","province":"West Virginia","location":{"latitude":"85.7867","longitude":"119.1404"}},"temoins":[{"nom":"Konopelski","prenom":"Ofelia","age":40},{"nom":"Reichert","prenom":"Aletha","age":47},{"nom":"Gerhold","prenom":"Ray","age":43}]},{"id":2,"suspect":{"nom":"Rice","prenom":"Kiara","avatar":"https://cdn.fakercloud.com/avatars/layerssss_128.jpg","telephone":"(672) 342-0415 x441"},"address":{"city":"New Estrella","address":"Schneider Knoll","code_postal":"04076","pays":"Antarctica (the territory South of 60 deg S)","province":"Mississippi","location":{"latitude":"-35.2870","longitude":"-155.4132"}},"temoins":[{"nom":"Stark","prenom":"Terrell","age":57}]},{"id":3,"suspect":{"nom":"Conn","prenom":"Jordyn","avatar":"https://cdn.fakercloud.com/avatars/buleswapnil_128.jpg","telephone":"1-326-421-9228"},"address":{"city":"East Alfredo","address":"Jacobs Junction","code_postal":"27451-2165","pays":"Trinidad and Tobago","province":"Connecticut","location":{"latitude":"54.0162","longitude":"-132.7870"}},"temoins":[]},{"id":4,"suspect":{"nom":"Ratke","prenom":"Berniece","avatar":"https://cdn.fakercloud.com/avatars/wake_gs_128.jpg","telephone":"350-900-7970"},"address":{"city":"South Marcelomouth","address":"Hilpert Highway","code_postal":"56216-5472","pays":"Samoa","province":"Arizona","location":{"latitude":"51.2529","longitude":"107.3882"}},"temoins":[]},{"id":5,"suspect":{"nom":"Bogan","prenom":"Gardner","avatar":"https://cdn.fakercloud.com/avatars/turkutuuli_128.jpg","telephone":"(442) 829-2284 x0639"},"address":{"city":"Port Londonville","address":"Josefina Cliffs","code_postal":"40352","pays":"Nigeria","province":"New Jersey","location":{"latitude":"87.3380","longitude":"-142.8946"}},"temoins":[{"nom":"Ryan","prenom":"Jayde","age":40}]},{"id":6,"suspect":{"nom":"Miller","prenom":"Edyth","avatar":"https://cdn.fakercloud.com/avatars/jennyyo_128.jpg","telephone":"213.837.0964 x1962"},"address":{"city":"Kuvalisstad","address":"Jaida Ports","code_postal":"22420","pays":"Nauru","province":"Colorado","location":{"latitude":"29.4155","longitude":"96.6428"}},"temoins":[]},{"id":7,"suspect":{"nom":"Kihn","prenom":"Horacio","avatar":"https://cdn.fakercloud.com/avatars/edgarchris99_128.jpg","telephone":"997-510-5322 x97501"},"address":{"city":"New Maximilliachester","address":"Christiansen Skyway","code_postal":"16622","pays":"Bermuda","province":"Pennsylvania","location":{"latitude":"13.8952","longitude":"-85.2306"}},"temoins":[]},{"id":8,"suspect":{"nom":"Reynolds","prenom":"Larissa","avatar":"https://cdn.fakercloud.com/avatars/SULiik_128.jpg","telephone":"(278) 719-0784 x32982"},"address":{"city":"Elmiraland","address":"Moore Lane","code_postal":"56090","pays":"Saint Barthelemy","province":"Virginia","location":{"latitude":"74.4657","longitude":"42.3724"}},"temoins":[{"nom":"Wintheiser","prenom":"Boris","age":33},{"nom":"Hoeger","prenom":"Destin","age":53}]},{"id":9,"suspect":{"nom":"Abbott","prenom":"Tomasa","avatar":"https://cdn.fakercloud.com/avatars/d_nny_m_cher_128.jpg","telephone":"657.698.3768 x7145"},"address":{"city":"Port Rylanport","address":"Kassulke Lodge","code_postal":"25650","pays":"Fiji","province":"Wyoming","location":{"latitude":"14.4353","longitude":"112.3583"}},"temoins":[{"nom":"Brakus","prenom":"Mona","age":23},{"nom":"Cassin","prenom":"Rosalind","age":38},{"nom":"Schultz","prenom":"Josue","age":52}]}];
```