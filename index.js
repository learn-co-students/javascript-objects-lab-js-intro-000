//var recipes = {
//  "breakfast": "oatmeal",
//  "lunch": "sandwich"
//}

function updateObjectWithKeyAndValue(recipes, lunch, sandwich){
  //recipes[lunch] = sandwich;
  return Object.assign({}, recipes, {[lunch]: sandwich})};

function destructivelyUpdateObjectWithKeyAndValue(recipes, dinner, stew){
  recipes[dinner] = stew;
  return recipes;
}

function deleteFromObjectByKey (obj, key){
  var newRecipes = Object.assign({}, obj);

  delete newRecipes[key];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key];
  return obj;
}
