var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}
/* ^ Objects updateObjectWithKeyAndValue(object, key, value) returns an object
with the orignal key value pairs and the new key value pair:
     Error: Expected undefined to match { prop: 1, prop2: 2 }*/


function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

/* ^ Objects destructivelyUpdateObjectWithKeyAndValue(object, key, value)
updates `object` with the given `key` and `value` (it is destructive) a
nd returns the entire updated object:
     ReferenceError: destructivelyUpdateObjectWithKeyAndValue is not defined
      at Context.<anonymous> (test/index-test.js:39:7)*/

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object)
  delete clone[key];
  return clone;
}
/* ^ Objects deleteFromObjectByKey(object, key) deletes `key` from a clone of object
and returns the new object (it is non-destructive):
     ReferenceError: deleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:54:20)*/

function destructivelyDeleteFromObjectByKey(object, key){
    delete object[key];
    return object;
}
/* ^Objects destructivelyDeleteFromObjectByKey(object, key) returns object
without the delete key/value pair:
     ReferenceError: destructivelyDeleteFromObjectByKey is not defined
      at Context.<anonymous> (test/index-test.js:70:20)*/
