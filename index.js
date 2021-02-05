//passed
function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

//passed
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key) {
  obj = { key: 'foo' }
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

//passed
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
