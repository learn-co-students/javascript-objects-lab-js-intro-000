var recipes = {
  eggs: 2,
  flour: '1 cup',
  mangos: '3 cups'
}

function updateObjectWithKeyAndValue(recipes, ingredient, amount) {
  return Object.assign({}, recipes, { [ingredient]: amount})
}
//this is fine
function destructivelyUpdateObjectWithKeyAndValue(recipes, ingredient, amount) {
  recipes[ingredient] = amount
  return recipes
}
 //This is fine
function deleteFromObjectByKey(recipe, ingredient) {
  const newRecipes = Object.assign({}, recipes)
  delete recipes[ingredient]
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipe, ingredient) {
  delete recipe[ingredient]
  return recipe
}
