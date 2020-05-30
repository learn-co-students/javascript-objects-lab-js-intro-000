
function updateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign({}, obj, {[k]: v});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, k, v) {
  return Object.assign(obj, {[k]: v});
}

var recipes = {};

function deleteFromObjectByKey(obj, k) {
  var newobj = Object.assign({}, obj);
  delete newobj[k];
  return newobj;
}

function destructivelyDeleteFromObjectByKey(obj, k) {
  delete obj[k];
  return obj;
}
