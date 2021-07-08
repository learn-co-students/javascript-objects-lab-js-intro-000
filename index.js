var recipes={}
function updateObjectWithKeyAndValue(object, key, value){
return Object.assign({},object,{[key]:value})/// creating a new object and adding to the original
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object/// adding and changing to the original object
}
function deleteFromObjectByKey(object, key){
  var newObj=Object.assign({},object)// create a clone new obje and assing to a new variable
  delete newObj[key] // delete the keypairvalue from the clone object
  return newObj/// return the new clone object
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]// delete the keypairvalue from the original object
  return object/// return the original object
}
