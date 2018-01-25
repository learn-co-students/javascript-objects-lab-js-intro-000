var recipes = {};

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  var updateRecipes = Object.assign({}, recipes, {[ingredient]: amount});
  return updateRecipes;
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient, amount) {
  var deleteRecipes = Object.assign({}, recipes, {[ingredient]: amount});
  delete deleteRecipes[ingredient];
  return deleteRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient, amount) {
  delete recipes[ingredient];
  return recipes;
}
