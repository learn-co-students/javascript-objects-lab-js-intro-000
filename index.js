function updateObjectWithKeyAndValue(object, key, value){
  var objInternal;
  objInternal = Object.assign({}, object);
    // apparently "objInternal.assign" is not valid.
  objInternal[key] = value;
  return objInternal; // some of these tests require "return", others don't.
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var objInternal;
  objInternal = Object.assign({}, object);
  delete objInternal[key];
  return objInternal;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
