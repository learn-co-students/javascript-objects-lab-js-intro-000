var recipes = {
  flour: "3 cups",
  sugar: "2 cups",
  butter: "1 stick"
}

function updateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;
  return obj;
  // return obj.assign({}, obj, { [key]: value});
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
