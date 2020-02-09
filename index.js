function updateObjectWithKeyAndValue(object, key, value) {
  
 Object.assign({}, object, { [key]: value })
   return Object.assign({}, object, { [key]: value })
} 

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  
  Object.assign({}, object, { [key]: value });
    
   return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
    delete newObj.object;
      return newObj
}

function deleteFromObjectByKey(object, key){
  var newObj = Object.assign({}, object);
    delete newObj.object;
      return deleteFromObjectByKey
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
    return object
}
