var recipes = {};

var updateObjectWithKeyAndValue = function (object, key, value) {
  return Object.assign({}, object, { [key]: value })
};


var destructivelyUpdateObjectWithKeyAndValue = function (object, key, value) {
  object[key] = value
  return object;
};
destructivelyUpdateObjectWithKeyAndValue(recipes, 'flour', '3 cups')

var deleteFromObjectByKey = function(object, key) {
  delete object.key;
  return object;
};

var destructivelyDeleteFromObjectByKey = function (object, key) {
  delete object[key];
  return object;
};
