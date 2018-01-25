var recipes = {};

function updateObjectWithKeyAndValue(obj, key, val) {
  var temp = {};
  temp[key] = val;
  return Object.assign(obj, temp);
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, val) {
  obj[key] = val;
  return obj;
}

function deleteFromObjectByKey(obj, key) {
  var temp = Object.assign({}, obj);
  delete temp[key];
  return temp;
}

function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
