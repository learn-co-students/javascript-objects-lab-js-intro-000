var recipes = { prop: "1"}

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign(recipes, {prop2: "2"});
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key
  return recipes
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
