function updateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign({}, obj, {[key]: val})
  // return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  return Object.assign(obj, {[key]: val})
}

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]
  return obj
}
