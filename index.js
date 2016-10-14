var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var tigers = Object.assign({}, object, {[key]: "value"});
  delete tigers.key;
  return tigers;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return object;
}
