// Write a function that does not modify the original object and returns an object with the orignal key value pairs and the new key value pair
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

// Write a function that modifies the original object and updates object with the given key-value. It should return the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;

  return object
}

// Write a function that uses non-destructive methods to delete key from a clone of object and returns a new object
function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);

  delete newObj[key];

  return newObj;
}

//Write a function that returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];
}
