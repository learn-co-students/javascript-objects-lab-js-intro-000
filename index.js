var recipes = new Object();
function updateObjectWithKeyAndValue(object, key, value){
  Object.assign(object,{[key]: value})
  return object
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object)
  newObj
  delete newObj[key]
  return object
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
