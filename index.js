let recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  
  const objectNew = Object.assign({}, object);
  
  objectNew[key] = value;
  return objectNew;
  
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  object[key] = value;
  return object;
  
}

function deleteFromObjectByKey(object, key) {
  
  let objectNew = Object.assign({}, object);
  delete objectNew[key];
  return  objectNew;
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key];
  return object;
  
}