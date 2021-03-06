/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
 const BASE_ANSWER = JSON.stringify(
    {
      'status': 'success',
      'message': 'I work but nothing of that is implemented.'
      }
  );

exports.recette = (req, res) => {
  // Should be more restrictive
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET');
    res.set('Access-Control-Allow-Headers', 'Authorization');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  }

   // Handle requests
   // Get the path infomraiton
  const my_path = req.path;
  // console.log("REQUEST:", req);
  console.log("PATH IS : ", my_path)


  // Check for all the recipes
  // Le path commence apres le nom de la fonction.
  if (my_path === '/') {
    handleAllRecipes(req, res)
  }
   
   // Ici on limite a just ce qu'on a hard code
  const recettes_regex = /^\/([012])$/;
  const found = my_path.match(recettes_regex);
  if (found) {
     handleOneRecipes(found[1], req, res);
  }
  //let message = req.query.message || req.body.message || 'Hello World!';
  //res.status(200).send(message);


  res.send(BASE_ANSWER);
  
};

  // Just pour retourne un demo en attendant d'avoir le temps de faire le code
  let static_recette = `
  [
  {
    "id": 1,
    "title": "Banana Bread",
    "description": "This is my favourite banana bread recipe! My mother taught me how to make this one warm summer afternoon.",
    "feeds_this_many": 4,
    "preparation_time": 60,
    "ingredients": [
      { "ingredient": "plain flour", "measure": "285g" },
      { "ingredient": "butter, softened", "measure": "110g + a bit extra for tin" },
      { "ingredient": "eggs, large", "measure": "2" },
      { "ingredient": "caster sugar", "measure": "225g" },
      { "ingredient": "chocolate chips", "measure": "1/2 cup" },
      { "ingredient": "salt", "measure": "1/2 tsp" },
      { "ingredient": "sugar", "measure": "1/2 cup" },
      { "ingredient": "bicarbonate of soda", "measure": "1 tsp" },
      { "ingredient": "ripe bananas, mashed", "measure": "4" },
      { "ingredient": "vanilla extract", "measure": "1 tsp" }
    ],
    "instructions": [
      { "instruction": "Preheat the oven to 180C/350F/Gas 4", "photo": null },
      { "instruction": "Sift the flour, bicarbonate of soda and salt into a large mixing bowl", "photo": null },
      { "instruction": "In a separate bowl, cream the butter and sugar together until light and fluffy", "photo": null },
      {
        "instruction": "Add the eggs, mashed bananas, buttermilk, and vanilla extract to the butter and sugar mixture and mix well. Fold in the flour mixture.", "photo": null
      },
      { "instruction": "Grease a 20cm x 12.5cm/8in x 5in loaf tin and pour the cake mixture into the tin.", "photo": null },
      { "instruction": "Transfer to the oven and bake for about an hour, or until well-risen and golden-brown.", "photo": null },
      {
        "instruction": "Remove from the oven and cool in the tin for a few minutes, then turn out onto a wire rack to cool completely before serving.", "photo": null
      }
    ],
    "cover_photo": null,
    "keywords": [
      "banana", "bread", "cake", "dessert", "sweet", "chocolate", "chip"
    ]
  },
  {
    "id": 2,
    "title": "Farmstead Tofu",
    "description": "This is a dish from rural Hunan province in China and has tofu, some flavouring, and lots of chili peppers.",
    "feeds_this_many": 2,
    "preparation_time": 45,
    "ingredients": [
      { "ingredient": "garlic", "measure": "1/2 bulb, slice" },
      { "ingredient": "ginger", "measure": "10g, sliced" },
      { "ingredient": "thai red chillis", "measure": "10, finely chopped" },
      { "ingredient": "large red chillis", "measure": "3, chopped" },
      { "ingredient": "Guilin hot pepper sauce", "measure": "1 tbsp" },
      { "ingredient": "bacon", "measure": "2-3 strips, chopped up" },
      { "ingredient": "green onions", "measure": "green parts of one bunch, coarsely chopped" },
      { "ingredient": "tofu", "measure": "1 500g pack, sliced" },
      { "ingredient": "salt", "measure": "1/4 tsp" },
      { "ingredient": "??????", "measure": "1 tsp" }
    ],
    "instructions": [
      { "instruction": "Deep fry the tofu slices in hot oil", "photo": null },
      { "instruction": "Remove tofu from pot, put aside oil", "photo": null },
      { "instruction": "Add 2 tbsp oil on high heat.", "photo": null },
      { "instruction": "Add garlic, ginger, chillis, guilin hot papper sauce, bacon.", "photo": null },
      { "instruction": "Cook until garlic a bit soft, maybe 1 mninute.", "photo": null },
      { "instruction": "Add tofu and green onions. Fry 2 minutes", "photo": null },
      { "instruction": "Add salt, stir", "photo": null },
      { "instruction": "Add ??????, stir", "photo": null },
      { "instruction": "Add 125ml of water, str", "photo": null },
      { "instruction": "Fry for another minute or two, serve over steamed rice.", "photo": null }
    ],
    "cover_photo": null,
    "keywords": [
      "????????????", "tofu", "hunan", "spicy", "chinese"
    ]
  },
  {
    "id": 3,
    "title": "Yangzhou Fried Rice",
    "description": "This is a popular fried rice from Fujian province with eggs, pork, and onions. It's quick and delicious.",
    "feeds_this_many": 2,
    "preparation_time": 20,
    "ingredients": [
      { "ingredient": "peanut oil", "measure": "2 tbsp" },
      { "ingredient": "ginger", "measure": "1 tbsp, peeled and grated" },
      { "ingredient": "eggs", "measure": "3, lightly beaten" },
      { "ingredient": "carrot", "measure": "1 medium, diced 1/4in cubes" },
      { "ingredient": "char siu pork (or ham or sausage)", "measure": "125g, diced" },
      { "ingredient": "shiitake mushrooms", "measure": "3, diced" },
      { "ingredient": "frozen peas", "measure": "1 cup" },
      { "ingredient": "day-old rice", "measure": "3 cups" },
      { "ingredient": "soy sauce", "measure": "2 tbsp" },
      { "ingredient": "salt + pepper", "measure": "to taste" },
      { "ingredient": "green onions", "measure": "2, sliced diagonally" }
    ],
    "instructions": [
      { "instruction": "Heat wok over high heat, add 1 tbsp oil", "photo": null },
      { "instruction": "Add eggs, scramble, then remove to plate", "photo": null },
      { "instruction": "Add 1 tbsp oi, add ginger, stir fry 1 minute.", "photo": null },
      { "instruction": "Add the carrots, stir fry 1 minute more", "photo": null },
      { "instruction": "Add the pork, mushrooms, cook 2 minutes", "photo": null },
      { "instruction": "Add the peas and cooked rice and toss it all together", "photo": null },
      { "instruction": "Add cooked egg back", "photo": null },
      { "instruction": "Add soy sauce, salt and pepper", "photo": null },
      { "instruction": "Garnish with green onions and serve", "photo": null }
    ],
    "cover_photo": null,
    "keywords": [
      "yangzhou", "fried rice", "char siu", "chaofan", "chinese"
    ]
  }
]`;

const recettes = JSON.parse(static_recette);

const handleAllRecipes = (req, res) => {
  switch(req.method) {
    case 'GET':
      res.status(200).send(static_recette);
    default:
      res.status(501).send(BASE_ANSWER);
  }
}

const handleOneRecipes = (id, req, res) => {
  switch(req.method) {
    case 'GET':
      // TODO : Check for out of bound...
      res.status(200).send(JSON.stringify(recettes[id]));
    default:
      res.status(501).send(BASE_ANSWER);
  }
}

