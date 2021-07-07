var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var x = new Object();
  x = Object.assign({}, object);
  x[key] = value;
//   x[key] = value;
   return x;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var x = new Object();
  x = Object.assign({}, object);
  delete x[key];
  return x;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
