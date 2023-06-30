var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var updatedObject = Object.assign({}, object);
  updatedObject[key] = value;
  return updatedObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var updatedObject = Object.assign({}, object);
  delete updatedObject[key];
  return updatedObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
