var recipes = {}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object
}
function deleteFromObjectByKey(object, Key) {
  var newObj = object.slice(1)
  return newObj
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
function deleteFromObjectByKey(object, key) {
  var object = {object, key}
  var newObj = object.assign({}, key)
  delete newObj[key]
  return newObj
}
