var recipes = new Object();
//non-destructive
function updateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
// destructive
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
//non-destructive
function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj[key];

  return obj;
}
// destructive method
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj[key];
  return obj;
}
