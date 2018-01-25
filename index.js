var recipes = new Object({ key: 'value'})

function updateObjectWithKeyAndValue(object, key, value) {
  object = { [key]: value }
  return object
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newobject = Object.assign({}, object, { [key]: value })
  return newobject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {

  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {

  var object = delete object.key
  return object
}


function destructivelyDeleteFromObjectByKey(object, key) {
  var object = delete object[key]
  return object
}
