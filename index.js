var recipes = new Object({ recipe: "food" });

function updateObjectWithKeyAndValue(object, key, value) {
  var object = { prop: 1, prop2: 2 };
  var newObj = Object.assign({}, object);
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object = { prop: 1, prop2: 2 };
  delete object[key];
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
