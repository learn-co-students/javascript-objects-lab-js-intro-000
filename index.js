var recipes = {}
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes ,{[key]: value})
};
function destructivelyUpdateObjectWithKeyAndValue (recipes, key, value) {
  recipes[key] = value; return recipes
}

function deleteFromObjectByKey (object, key) {
  var newRecipes = Object.assign({}, object);
  delete newRecipes[key];
  return newRecipes
}

function destructivelyDeleteFromObjectByKey(recipes, key){
 delete recipes[key];
 return recipes}
