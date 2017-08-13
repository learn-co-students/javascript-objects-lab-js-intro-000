var recipes = new Object();

function updateObjectWithKeyAndValue (object, key, value) {
  let object2 = new Object();
  Object.assign(object2, object, {[key]: value});
  return object2;
  //return object2;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 return Object.assign(object, {[key]: value})
}

function deleteFromObjectByKey(object, key) {
  let object2 = new Object();
  object2 = Object.assign({}, object);
  delete object2[key];
  return object2;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
