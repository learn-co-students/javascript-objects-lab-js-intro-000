var recipes = { jello: 'gelatin' }

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key, value) {
  var oldObject = { key: 'value' }
  var newObject = Object.assign({}, oldObject)
  delete newObject.key
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key]
}
