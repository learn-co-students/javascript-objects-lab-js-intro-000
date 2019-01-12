var recipes = {};

// returns an object with the orignal key value pairs and the new key value pair
// does not modify the original object, but rather returns a clone with the new data
// returns an object with an updated key value pair
function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]: val});
}

// updates `object` with the given `key` and `value` (it is destructive) and 
// returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

// deletes `key` from a clone of object and returns the new object (it is non-destructive)
// does not modify the original object (it is non-destructive)
function deleteFromObjectByKey(obj, key) {
  var objRet = Object.assign({}, obj);
  delete objRet[key];
  return objRet;
}

// returns object without the delete key/value pair
// modifies the original object
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}