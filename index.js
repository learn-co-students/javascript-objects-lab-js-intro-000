function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object);
  newObj[key] = value;
 return newObj; 
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign(object, object);
  newObj[key] = value;
  return newObj;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  newObj[key];
  delete newObj[key];
 return newObj; 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var newObj = Object.assign(object, object);
  delete newObj[key];
 return object; 
}