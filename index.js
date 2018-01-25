var recipes = {};

var updateObjectWithKeyAndValue = function(obj, key, value){
  return Object.assign(obj, {[key]: value});
};

var destructivelyUpdateObjectWithKeyAndValue = function(obj, key, value) {
  obj[key] = value
  return obj
};

var deleteFromObjectByKey = function(obj, key, value){
  return Object.assign(recipes, {[key]: value});
  delete obj[key];
  return obj;
};

var destructivelyDeleteFromObjectByKey = function(obj, key) {
  delete obj[key];
  return obj;
}
