//var object = {};
function updateObjectWithKeyAndValue(object, key, value)  {
  var newobject = Object.assign({},object)
  Object.assign(newobject,{[key]:value});
  return newobject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object,{[key]:value});
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newobject = Object.assign({},object);
  delete newobject[key];
  return newobject;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return object;
}
