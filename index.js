//returns an object with the orignal key value pairs
// and the new key value pair
// does not modify the original object,
 //but rather returns a clone with
 //the new data
function updateObjectWithKeyAndValue(object,key, value){
  return Object.assign ({}, object, {[key]: value})
}
//updates `object` with the given `key` and `value`
//(it is destructive) and returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
//deletes `key` from a clone of object and
//returns the new object (it is non-destructive)
//does not modify the original object (it is non-destructive)
function deleteFromObjectByKey(object,key){
  var x = Object.assign({},object);
  delete x[key]
  return x;
}
//returns object without the delete key/value pair
function destructivelyDeleteFromObjectByKey(object,key){
  return Object
}
//modifies the original object
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key]
  return object
}
