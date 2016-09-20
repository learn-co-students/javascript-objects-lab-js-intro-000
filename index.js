var recipes = {prop: 1, }

function updateObjectWithKeyAndValue(object, key, value) {
  var Obj = Object.assign({}, object, {[key]: value})
  return Obj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  var Obj = Object.assign({}, object)
  delete Obj[key]
  return Obj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
