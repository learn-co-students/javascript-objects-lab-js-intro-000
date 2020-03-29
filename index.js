function updateObjectWithKeyAndValue(object, key, value){
//var newObj = Object.assign({},object)
var newObj = Object.assign({},object, {[key] : value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
Object.assign(object, {[key] : value})
    return object
}
function deleteFromObjectByKey(object,key){
  var newObj = Object.assign({}, object)
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}
/*

    destructivelyDeleteFromObjectByKey(object, key)
      7) returns object without the delete key/value pair
      8) modifies the original object*/
