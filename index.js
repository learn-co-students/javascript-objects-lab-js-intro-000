var recipes = { flour: "1 cup" };
function updateObjectWithKeyAndValue(recipe, ingredient, use) {
  recipe[ingredient] = use;
  return recipe
}
function updateObjectWithKeyAndValue(recipe, ingredient, use) {
  return Object.assign({}, recipe, { [ingredient]: use })
}
function destructivelyUpdateObjectWithKeyAndValue(recipe, ingredient, use) {
  recipe[ingredient] = use;
  return recipe
}
function deleteFromObjectByKey(recipe, ingredient, use) {
  var newstuff = Object.assign({}, recipe);
  delete newstuff[ingredient];
  return newstuff
}
function destructivelyDeleteFromObjectByKey(recipe, ingredient) {
  var newstuff = Object.assign({}, recipe);
  delete recipe[ingredient];
  return recipe
}
