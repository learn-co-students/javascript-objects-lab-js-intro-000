var recipes = {
  prop: 1
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value });
}
 updateObjectWithKeyAndValue(recipes, 'prop2', 2)
 recipes;

 var newObj = updateObjectWithKeyAndValue(recipes, 'prop', 'new value');
 newObj.prop;

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object;
}

destructivelyUpdateObjectWithKeyAndValue(recipes, 'prop2', 2);
recipes;

function deleteFromObjectByKey(object, key) {
  delete recipes.prop;
  return recipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];

  return object;
}
destructivelyDeleteFromObjectByKey(recipe, 'prop');
