var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var obj = { prop: 1 }
  return Object.assign(obj, {prop2: 2})
}

function deleteFromObjectByKey(object, key) {
  var obj = {prop: 1, prop2: 2};
  delete obj.key
  return obj;
}

var obj = {prop:1}
function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

var obj = {prop:1}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete obj.key;
  return obj;
}
