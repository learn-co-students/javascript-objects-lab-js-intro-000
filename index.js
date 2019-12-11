function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  delete Object.key
  return Object
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
