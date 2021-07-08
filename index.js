var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key] : value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var modifiedObject = Object.assign({}, object)
  delete modifiedObject[key]
  return modifiedObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
