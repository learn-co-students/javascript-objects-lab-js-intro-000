var recipes = {};
Objects.assign({}, recipes);

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = Object.assign({}, object);
  obj[key] = value;
  return obj;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var ne = Object.assign({}, object);
  delete ne[key];
  return ne;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
