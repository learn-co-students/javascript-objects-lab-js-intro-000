var recipes = {}

function updateObjectWithKeyAndValue(obj, key, value) {
  var newObj = {};
  newObj[key] = value;
  return Object.assign(newObj, obj);
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var obj = Object.assign({}, obj);
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key]; 
  return obj;
}