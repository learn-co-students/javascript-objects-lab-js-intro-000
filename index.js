
var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = Object.assign({}, object, { [key]: value });
  return object;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value });
}

function deleteFromObjectByKey(object, key){
  var obj1 = Object.assign({}, object[key])
  delete obj1.key
  return obj1;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
