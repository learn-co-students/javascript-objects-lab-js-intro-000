var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = {prop: 1}
  var newObj = Object.assign({}, object)
  newObj[key] = value
  return newObj
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = { prop: 1 }
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  var newObj = Object.assign(obj)
  delete newObj[key]
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = { prop: 1 }
  delete object[key]
  return object
}
