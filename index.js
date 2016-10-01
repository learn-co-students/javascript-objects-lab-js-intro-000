var recipes = {}
var obj = { prop: 1 }
var newObj = Object.assign( {}, obj );

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(obj, { prop2: 2 });
  }

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return obj;
}
destructivelyUpdateObjectWithKeyAndValue(obj, 'prop2', 2);

function deleteFromObjectByKey(object, key) {
  delete object.key;
  return obj;
}
deleteFromObjectByKey(newObj, 'prop 2');

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key;
  return obj;
}
destructivelyDeleteFromObjectByKey(obj, 'prop');
