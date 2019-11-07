var recipes = new Object()
function updateObjectWithKeyAndValue(object, key, value){
  var ob = Object.assign({}, object)
  ob[key] = value
  return ob
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var ob = Object.assign({}, object)
  delete ob[key]
  return ob
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
