var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes;
}

function updateObjectWithKeyAndValue(recipes, ingredient, amount){
  return Object.assign({},recipes, {[ingredient]: amount});
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount){
  recipes[ingredient] = amount;
  return recipes;
}

function deleteFromObjectByKey(recipes, ingredient){
  var newRecipe = Object.assign ({}, recipes);
  delete newRecipe[ingredient];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient){
  delete recipes[ingredient];
  return recipes;
}
