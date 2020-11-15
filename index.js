var recipes = new Object ({
  keys: "0"
})

function updateObjectWithKeyAndValue (object, key, value) {
  object.key = "value"
  return object
}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey (object, key) {
  var newObj =  Object.assign({},object)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey (object, key) {
  delete object[key]
  return object 
}
