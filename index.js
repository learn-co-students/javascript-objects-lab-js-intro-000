var recipes = {key, value};

function updateObjectWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, { [key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(obj,key,value){
  obj[key] = value;
  return obj
}
function deleteFromObjectByKey(object, key){
var update =  delete object.key;
return update;
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
