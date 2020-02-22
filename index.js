function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object)
  return Object.assign(obj, obj[key] = value)
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, object[key] = value)
}
function deleteFromObjectByKey(object, key) {
  var obj = Object.assign({}, object)
  delete obj[key]
  return obj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
