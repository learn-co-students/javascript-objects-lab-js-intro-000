var recipes = {};

function updateObjectWithKeyAndValue(recipes, key, value) {
    return Object.assign({}, recipes, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;

return recipes;
}

function deleteFromObjectByKey(recipes, key) {
  var recipes1 = Object.assign({}, recipes);
  delete recipes1[key];
  return recipes1;
}

function destructivelyDeleteFromObjectByKey(recipes, key) {
  delete recipes[key];
  return recipes;

}
