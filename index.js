recipes = {}



function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object,key){
  var obj_new = Object.assign({},object)
  delete obj_new[key]
  return obj_new
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
