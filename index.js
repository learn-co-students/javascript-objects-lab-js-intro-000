//test 1
var recipes = {desert:"eggs"};
function updateObjectWithKeyAndValue(object,key,value){
 var copy = Object.assign({}, object, {[key]:value});
 return copy;
 }

console.log(updateObjectWithKeyAndValue(recipes,"lunch","baloney"));

//1) Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value) updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object:
function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key] = value;
  return object;
}


// 2) Objects deleteFromObjectByKey(object, key) does not modify the original object (it is non-destructive):
function deleteFromObjectByKey(object, key){
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

// 3) Objects destructivelyDeleteFromObjectByKey(object, key) returns object without the delete key/value pair:
function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
}
// 4) Objects destructivelyDeleteFromObjectByKey(object, key) modifies the original object:
