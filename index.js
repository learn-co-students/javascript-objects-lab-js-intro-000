function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = {[key]: value};
  var result = Object.assign({}, object, newObj);
  return result;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object = Object.assign(object, {[key]: value});
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObj = delete object.key;
  var result = Object.assign({}, newObj);
  return result;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
