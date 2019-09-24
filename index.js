const recipes = {};

var updateObjectWithKeyAndValue = (object, key, value) => {
  return Object.assign({}, object, { [key]: value })
}

var deleteFromObjectByKey = (object, key) => {
  var objc = Object.assign({}, object, [key])
  delete objc[key];
  return objc;
}

var destructivelyUpdateObjectWithKeyAndValue = (object, key, value) => {
  object[key] = value;
  return object;
}

var destructivelyDeleteFromObjectByKey = (object, key) => {
delete object[key];
return object;
}
