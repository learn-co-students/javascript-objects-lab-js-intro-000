var recipes = {};

function updateObjectWithKeyAndValue(recipes, ingredient, quantity) {
  var newRecipes = Object.assign({}, recipes)
  newRecipes[ingredient] = quantity
  return newRecipes
};

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, quantity) {
  recipes[ingredient]= quantity
  return recipes
};

function deleteFromObjectByKey(recipes, ingredient) {
  var newRecipes = Object.assign({}, recipes)
  delete newRecipes[ingredient]
  return newRecipes
};

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient]
  return recipes
};
