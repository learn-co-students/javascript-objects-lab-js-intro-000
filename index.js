var recipes = new Object()

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object, { [key]: value })
}

function deleteFromObjectByKey(object, key){
  var n = Object.assign({}, object)
  delete n[key]
  return n
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
