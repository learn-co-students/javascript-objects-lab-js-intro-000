function updateObjectWithKeyAndValue(object,key,value){
  var newobject = Object.assign({},object)
  newobject[key]=value
  return newobject
}
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}
function destructivelyDeleteFromObjectByKey(object,key){
//  object = Object.assign({},obj)
//  newobject = Object.assign({},object)
  delete object[key]
  return object
}
function deleteFromObjectByKey(object,key){
  var newobject = Object.assign({},object)
  delete newobject[key]
  return newobject
}
