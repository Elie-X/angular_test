# REST API
***
🌐  REST = Representational State Transfer

🌐  API = Application Programming Interface

🌼  Qu’est-ce qu’une API ?

🔹  L’API : Application Programming Interface, est la partie du programme qu’on expose officiellement au monde extérieur pour manipuler celui-ci. 

🔹 Une API regroupe un ensemble de fonctions ou méthodes, leurs signatures et ordre d’usage pour obtenir un résultat.

🔹 La mise en place d’une API permet d’opérer une séparation des responsabilités entre le client et le serveur. Cette séparation permet donc une portabilité et évolutivité grandement améliorées. 

🔹 Chaque composant peut évoluer séparément car il n’y a aucun logique du côté du serveur. Ainsi on peut imaginer une refonte totale de la partie cliente du site web sans devoir modifier le code côté serveur ou sur les autres clients (mobiles par exemple).

🌼  Il existe actuellement deux types d’architecture très utilisées pour les API : 

1️⃣  Simple **Object Access Protocol (SOAP)**

2️⃣  **Representational State Transfer (REST)**.

🔹 SOAP et REST ​​sont deux solutions permettant à un client d’accéder à des services web. Le choix d'abord peut sembler facile, mais parfois il peut être étonnamment difficile. D’un côté, SOAP, initialement développé par Microsoft, est un protocole d'accès aux services Web qui existe depuis un certain temps. 

🔹 De l’autre, l’architecture REST est la nouvelle venue qui vise à résoudre certains problèmes rencontrés avec SOAP :  la possibilité de mettre en place une méthode vraiment simple afin d’accéder à des services web.

🔹 Les deux techniques ont des problèmes à prendre en compte au moment de décider quel protocole utiliser. Avant d'aller plus loin, il est important de préciser que même si SOAP et REST présentent des similitudes en utilisant le protocole HTTP, SOAP est un ensemble plus rigide que REST. REST a une architecture qui ne nécessite pas de traitement et qui est naturellement plus flexible. 

🔹 SOAP et REST reposent sur des règles bien établies que tout le monde a accepté de respecter dans l'intérêt de l'échange d'informations.

🌼  Qu’est-ce qu’une API REST ?

Une API REST se doit d’être sans état `stateless `. La communication entre le client et le serveur ne doit pas dépendre d’un quelconque contexte provenant du serveur. Ainsi, chaque requête doit contenir l’ensemble des informations nécessaires à son traitement. Cela permet au de traiter indifféremment les requêtes de plusieurs clients via de multiples instances de serveurs.



Pour chaque réponse renvoyée par l’API, un code doit être envoyé, ce code correspond à l’état de la requête et dépend de la réussite ou non de celle-ci. Les codes status les plus courants que l’on retrouve généralement sur le web sont :

🔸  200 OK : Tout s'est bien passé

🔸 201 Created :# La création de la ressource s'est bien passée (il n’est pas rare que les attributs de la nouvelle ressource soient aussi renvoyées dans la réponse. Dans ce cas, l’URL de cette ressource nouvellement créée est ajouté via un header Location )

🔸 204 No content : Même principe que pour la 201, sauf que cette fois-ci, le contenu de la ressource nouvellement créée ou modifiée n'est pas renvoyée en réponse

🔸 304 Not modified : Le contenu n'a pas été modifié depuis la dernière fois qu'elle a été mise en cache

🔸 400 Bad request : La demande n'a pas pu être traitée correctement

🔸 401 Unauthorized :# L'authentification a échoué

🔸 403 Forbidden : L'accès à cette ressource n'est pas autorisé

🔸 404 Not found : La ressource n'existe pas

🔸 405 Method not allowed : La méthode HTTP utilisée n'est pas traitable par l'API

🔸 406 Not acceptable : L’API est dans l’incapacité de fournir le format demandé par les en têtes Accept. Par exemple, le client demande un format (XML par exemple) et l'API n'est pas prévue pour générer du XML

🔸 500 Server error : Le serveur a rencontré un problème.

# Creation d'un serveur dans Google Cloud

Environment Google : https://cloud.google.com/free/docs/gcp-free-tier

Cloud et autre site pour publier des app
* Quel est la difference?

## Creation d'un serveur

Server vs Container?

* Cree la VM (Utilise E2 - Micro)
* Mettre a jour le package package manager
* Installer nodejs
* Récupéré le code d'example du server (https://github.com/marcwan/AngularRecipeServer.git)
* Demarrer le code
* Accéder le serveur
  * Qu'elle addresse ?
  * Pourquoi ça ne fonctionne pas?
  * Essayons en local
  * `curl http://localhost:8080`
  * `curl http://localhost:8080/v1/recipes.json`
  * Ouvrir le port
  * Essayons
  * Essayons dans un application
  * Montrer CORS
  * 
* App service vs WebServer
  * Install nginx

```
location /v1 {
proxy_pass http://127.0.0.1:8080;
}
```

```
       location /static {
               alias /home/tremblaydidier/appdemo/AngularRecipeServer/static;
        }
```

## Utilisation de l'API

* Curl
* Javascript / JQuery


## Serverless Server

* Concept
* Fonctionement
* Ephemeral

