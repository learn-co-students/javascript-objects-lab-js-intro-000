var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object
}

var deleteFromObjectByKey = (object, key) => {
  let object = Object.assign({}, object);
  delete object[key];
  return object
}
