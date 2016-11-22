var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var recipes = { prop: 1, prop2: 2 };
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return object
}

function destructivelyDeleteFromObjectByKey(object,key) {
    delete object.key;
    return object
}
