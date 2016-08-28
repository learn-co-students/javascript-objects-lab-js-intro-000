var recipes = {};

function updateObjectWithKeyAndValue(recipeObj, key, value) {
  return Object.assign(recipeObj, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(recipeObj, key, value) {
  recipeObj[key] = value;
  return recipeObj;
}

function deleteFromObjectByKey(recipeObj, key) {
  var newRecipeObj = Object.assign({}, recipeObj);
  delete newRecipeObj[key];
  return newRecipeObj;
}

function destructivelyDeleteFromObjectByKey(recipeObj, key) {
  delete recipeObj[key];
  return recipeObj;
}
