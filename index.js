function updateObjectWithKeyAndValue(object, key, value) {
  let cloneObject = Object.assign({}, object, {[key]: value});
  cloneObject[key] = value;
  return cloneObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  let cloneObject = Object.assign({}, object)
 delete cloneObject[key];
 return cloneObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
