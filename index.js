var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  var tempobj = {};
  tempobj[key] = value;
  return Object.assign({}, object, tempobj);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value)  {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var tempobj = {};
  Object.assign(tempobj, object);
  return Object.assign({}, delete tempobj[key]);
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
