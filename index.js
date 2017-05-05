var recipes = {
  eggs: 3
};

function updateObjectWithKeyAndValue (recipes, key, value) {
  return Object.assign({}, {[key]: value}, recipes);
}

function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value;
  return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  var newRecipes = Object.assign({}, recipes, key);
  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;
}