
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  var obj=Object.assign({},object)
  return destructivelyUpdateObjectWithKeyAndValue(obj, key, value)
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}

function deleteFromObjectByKey(object, key){
  var obj=Object.assign({},object)
  return destructivelyDeleteFromObjectByKey(obj, key)
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
