var recipes = {prop: 1, prop2: 2}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return recipes
}

function deleteFromObjectByKey(object, key) {
  var object = Object.assign({}, recipes);
  delete object[key]
  return object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
