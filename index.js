// define 'recipes' object
var recipes = {
  "cake": "eggs"
}
function updateObjectWithKeyAndValue(object, key, value) {
  // returns a clone of 'object' by adding 'key' and 'value' (non-destructive)
  var newObj = Object.assign({},  object);
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  // updates 'object' with given 'key' and 'value' (destructive)
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  // deletes 'key' from a clone of object and returns the new object (non-destructive)
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  // deletes 'key' from object and returns object
  delete object[key];
  return object;
}
