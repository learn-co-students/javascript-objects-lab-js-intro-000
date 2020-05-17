
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  return Object.assign(object,{[key]:value})
}

function deleteFromObjectByKey(object, key){
  var targetobject = Object.assign({},object)
  // delete targetobject[key]
  return delete targetobject[key]
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key]

}
