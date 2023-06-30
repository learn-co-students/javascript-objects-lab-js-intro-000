var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign({}, object, {[key]: value});
};

var deleteFromObjectByKey = function(object, key) {
  var obj = Object.assign({}, object);
  delete obj[key];
  return obj;
};

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
  return Object.assign(object, {[key]: value});
};

var destructivelyDeleteFromObjectByKey = function(object, key) {
  delete object[key];
  return object;
};
