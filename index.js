var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key){
  var NewRecipes = Object.assign({}, recipes)
  delete NewRecipes[key];
  return NewRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key];
  return recipes;
}
