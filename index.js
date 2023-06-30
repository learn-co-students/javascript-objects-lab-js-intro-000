var recipes = { water : '2 cups' }

function updateObjectWithKeyAndValue(recipes, ingredient, measurement) {
  return Object.assign({}, recipes, { [ingredient] : measurement})
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, measurement) {
  recipes[ingredient] = measurement
  return recipes
}
function deleteFromObjectByKey(recipes, ingredient) {
  var deadRecipes = Object.assign({}, recipes)
  delete deadRecipes[ingredient]
  return deadRecipes
}
function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient]
  return recipes
}