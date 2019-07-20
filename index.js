var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  return (delete Object.assign({}, object)[key])
  //first you must make a clone of object using object assign with original
  //object into an empty one. Then you must delete a key from the clone
  //by doing delete object[key]. You then return that new object.
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
