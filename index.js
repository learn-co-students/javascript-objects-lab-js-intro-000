var recipes = new Object();

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value

  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value

  return recipes
}

function deleteFromObjectByKey(object, key){
  var newRecipe = Object.assign({}, recipes)
  delete newRecipe.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete recipes.key
  return recipes
}
