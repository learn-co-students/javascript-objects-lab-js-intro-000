var object = new Object({key: value});

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var objectreplace = Object.assign({}, object);
  delete objectreplace[`${key}`];
  return objectreplace
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[`${key}`];
  return object
}
