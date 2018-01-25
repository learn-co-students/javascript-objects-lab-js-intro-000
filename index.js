var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  console.log(object);
  Object.assign (object, {[key]: value})
  console.log(object);
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObject= Object.assign({}, object)
  delete newObject[key]
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}
