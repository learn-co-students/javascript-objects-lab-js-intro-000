let recipes = {

}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value});
}

function deleteFromObjectByKey(object, key) {
  let newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
