var recipes = {sugra: "3 cups"}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(obj, key) {
  var newObject = Object.assign({}, obj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object
}