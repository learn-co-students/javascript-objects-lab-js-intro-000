var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

//returns a clone of `object` by adding `key` and `value`
//(it is non-destructive):

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.object
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
  return object
}
