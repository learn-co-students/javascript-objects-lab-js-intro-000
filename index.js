function updateObjectWithKeyAndValue(object, key, value) {
  var copyObj = Object.assign({}, object);
  copyObj[key] = value;
  return copyObj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var copyObj = Object.assign({}, object);
  return delete copyObj.key;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
