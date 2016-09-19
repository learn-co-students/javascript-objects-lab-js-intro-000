var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value) {
  var obj1 = obj;
  obj1[key] = value;
  return obj1;
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key) {
  var obj1 = object;
  delete obj1.key;
  return obj1;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
