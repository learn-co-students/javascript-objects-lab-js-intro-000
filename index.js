var obj = {'prop': 1}; //declare and initialize object

function updateObjectWithKeyAndValue(obj, key, value) { 
  var newObj = Object.assign ({}, obj,{[key]:value});
  return newObj;
  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  
  Object.assign(object, {[key]: value});
  return object;
  
}

function deleteFromObjectByKey(object, key) {
  
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
  
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
  delete object[key];
  return object;
  
  
  
}
