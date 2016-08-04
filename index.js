recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({},object,{key:value});  
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
}

function deleteFromObjectByKey(object, key) {
  obj = Object.assign({},object);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
