function updateObjectWithKeyAndValue(object, key, value) {
  var newPair = {};
  newPair[key] = value;
  var newObject = Object.assign({}, object, newPair);
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newPair = {};
  newPair[key] = value;
  var newObject = Object.assign(object, newPair);
  return newObject;
}

function deleteFromObjectByKey(object, key) {
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
