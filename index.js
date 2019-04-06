// define object "recipes"
var recipes = {
  'bread slices': 2,
  'peanut butter': 'lots',
  jelly: 'some'
};

// return a new object with original key value pairs and new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value});
  return newObj;
}

// updates an object with the given key and value
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

// deletes a key value pair from a clone of the given object and returns the new object
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

// deletes a key value pair from the given object
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
