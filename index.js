var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  // update an object with a key and a value (non-destructive)
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  //destructively update object with key and value and return object
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  //  deletes key from a clone of object and returns
  // the new object (it is non-destructive)
  var newObject = Object.assign({}, object);
  delete newObject[key];

  return newObject;
}

 function destructivelyDeleteFromObjectByKey(object, key) {
   //destructively delete key from object and return object
   delete object[key];
   return object;
 }
