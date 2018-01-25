var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var cloneObj = Object.assign({}, object)
  cloneObj[key] = value
  return cloneObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var cloneObj = Object.assign({}, object)
  delete cloneObj[key]
  return cloneObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
