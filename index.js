var recipes = {};


function updateObjectWithKeyAndValue(obj, k, val) {
  return Object.assign({}, obj, { [k]:val });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, val) {
  return Object.assign(obj, {[k]:val});
}

function deleteFromObjectByKey(obj, k) {
  var newRecipes = Object.assign({}, obj);
  delete newRecipes[k];
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k];
  return obj;
}
