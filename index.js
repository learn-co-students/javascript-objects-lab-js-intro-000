var recipes = {}; // empty Object

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object); // assign a new object
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value; // add new key value pair directly to object
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key]; // delete key value pair
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; // delete key value pair mutating arg object
  return object;
}