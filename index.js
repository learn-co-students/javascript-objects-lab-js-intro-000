var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var newRecipe = {};
  Object.assign(newRecipe, object, {[key]:value});
  return newRecipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = {};
  Object.assign(newRecipe, object);
  delete newRecipe[key];
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
