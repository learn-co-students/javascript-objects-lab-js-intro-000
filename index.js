var recipes = { ingredient: "amount" }

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign( {}, recipes, { [ingredient]: amount} )
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  Object.assign(recipes, { [ingredient]: amount} )
  return recipes
}

function deleteFromObjectByKey(recipe, ingredient) {
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe[ingredient]
  return newRecipe
}

function destructivelyDeleteFromObjectByKey(recipes, ingredient) {
  delete recipes[ingredient]
  return recipes
}
