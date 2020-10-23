var recipes = {
  eggs: 3,
  water: '1/2 cup',
  bacon: '2 slices',
}

function updateObjectWithKeyAndValue(recipes, key, value) {
  var newRecipes = Object.assign({}, recipes, {[key]: value})
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value
  return recipes
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, key)
  delete newRecipes.key
  return newRecipes
}

function destructivelyDeleteFromObjectByKey (recipes, key) {
  delete recipes[key];
  return recipes
}
