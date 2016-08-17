var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  new Object({ prop: 1 });
  var object = Object.assign ({}, object, {prop2: 2});
  return object;
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  new Object({ prop: 1 });
  object['prop2'] = 2;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var object = new Object({ key: "value" });
  var newObject = Object.assign ({ });
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var object = new Object({ key: "value"});
  delete object.key;
  return object;
}
