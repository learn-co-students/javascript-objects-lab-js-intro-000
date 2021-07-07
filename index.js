var recipes = {};


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}


function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}

// ***** deletes key from clone and returns new object
function deleteFromObjectByKey(object, key){
 return delete object.key
  
  // return object;
  
  // return Object.assign({}, object, { [key]: value });
}








