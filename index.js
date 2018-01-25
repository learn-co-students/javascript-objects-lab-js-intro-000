var recipes = {Andy : "sourdough", Russ : "kimchi", Ioana :"vinata"}

function updateObjectWithKeyAndValue (object, key, value){
  return Object.assign({}, object, {[key]: value})
};

function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key] = value;
  return object;
};

function deleteFromObjectByKey (object, key){
  var obj2 = Object.assign({}, object)
  delete obj2.key;
  return obj2;
};

function destructivelyDeleteFromObjectByKey (object, key){
  delete object.key;
  return object;
};
