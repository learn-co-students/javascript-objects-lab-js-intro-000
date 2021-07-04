var recipes = new Object({});

function updateObjectWithKeyAndValue(object, key, value) {
  var newObject = object;
  newObject[key] = value;
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object = new Object();
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
