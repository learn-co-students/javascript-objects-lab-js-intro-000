var recipes = {
  food: 'ingredients'
}
function updateObjectWithKeyAndValue(recipes, food, ingredients) {
  var newRecipe = Object.assign({}, recipes)
  newRecipe[food] = ingredients;
  return newRecipe;
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, food, ingredients) {
  recipes[food] = ingredients;
  return recipes;
}
function deleteFromObjectByKey(recipes, food) {
  var newRecipe = Object.assign([], recipes)
  delete newRecipe[food];
  return newRecipe;
}
function destructivelyDeleteFromObjectByKey(recipes, food) {
  delete recipes[food];
  return recipes;
}