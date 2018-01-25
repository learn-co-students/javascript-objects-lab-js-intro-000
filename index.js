var recipes =
  { eggs: 3,
    flour: '3 cups' };

function updateObjectWithKeyAndValue(object, key, value) {
  // var newObj = Object.assign({}, object);
  // newObj[key] = value;
  // return newObj;
  return Object.assign({}, object, {[key]:value});
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
