var recipes = {}
function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign ({}, object, {[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey (object, key) {
  //non-destructively deletes 'key' from a clone of object and returns new object
  return Object.assign({}, object)
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object.key;
  return object
}
