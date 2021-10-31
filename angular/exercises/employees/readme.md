Pour cette application nous allons utiliser un services pour fournir les infomration a nos classe. Plus tard dans la session nous verrons plus en details l'utilisation de service mais pour cette exercise vous allez travailler par deduction en utilisant comme référence l'implementation fourni dans le component user-list. 

* Dans le component user-list affiche le nom de l'employé et passez le ID au module user-detail
* Dans le component user-detail afficher toute les infomrations sur l'employé demandé par le parent (id)
  * Pour faire cette implementation créer dans la class EmployeeService une nouvelle method getEmployeeById qui recoid un ID et retourne l'employé pour le ID specifié
  * Utilise ce service pour implémenter vontre component user-details pour recevoir les informations de l'employé
  * Afficher les informations