var recipes = new Object();


function updateObjectWithKeyAndValue(object,key_name,value){
  var newObj = Object.assign({},object);
  newObj[key_name] = value;
  return newObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key_name, value){
object[key_name] = value;
return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({},object);
  delete object.key;
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;

}
