var recipes = { foo: 'bar'};

function updateObjectWithKeyAndValue(object,key,value) {
   return Object.assign({}, object, { [key] : value});
};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return Object.assign(object, { [key] : value});
}


function deleteFromObjectByKey(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var copy = Object.assign(object);
  delete copy[key];
  return copy;
}
