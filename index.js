var recipes = {
  "prop" : "1"
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key] : value})
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  var clone = Object.assign({}, obj)
  return delete obj.key
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  obj = delete obj[key]
  return obj
}
