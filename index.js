var recipes = {};

function updateObjectWithKeyAndValue(obj, key, value){
   return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value;

  return obj;
}

function deleteFromObjectByKey(obj, key){
  //var obj = object;
  var newObject = Object.assign({},obj);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
