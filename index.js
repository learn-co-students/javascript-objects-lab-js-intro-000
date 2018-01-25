var recipes = {};

var obj = { prop : 1};
function updateObjectWithKeyAndValue(object, key, value) {
    var updatedObj = Object.assign({}, obj, { prop2: 2});
    return updatedObj;
}

var obj = { prop: 1};
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return obj;
}
destructivelyUpdateObjectWithKeyAndValue(obj, "prop2", 2);

function deleteFromObjectByKey(object, key) {
  var deleteObj = Object.assign({}, obj, {});
  return deleteObj; 
}

function destructivelyDeleteFromObjectByKey(object, key) {
  object[key];
  return obj;
}