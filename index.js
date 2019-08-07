var recipes = {
  prop : 1
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key] : value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object
}

function deleteFromObjectByKey(object, key){
  var Obj2 = Object.assign({}, object);
  delete Obj2[key];
  return Obj2;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
