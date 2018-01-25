var recipes = {};
function updateObjectWithKeyAndValue(obj, key, value) {
  var newerObj = Object.assign({},obj,{[key]: value});
  return newerObj;
}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}
function deleteFromObjectByKey(obj, key) {
  var nowNew = Object.assign({}, obj);
  delete nowNew.key;
  return nowNew;
}
function destructivelyDeleteFromObjectByKey(obj, key) {
  delete obj.key;
  return obj;
}
