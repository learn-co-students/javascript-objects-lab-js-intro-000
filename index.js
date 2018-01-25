function updateObjectWithKeyAndValue(object, key, value){
  var obj = object;
  obj[key]=value;
  return obj;

  var clone= Object.assign({}, obj)
  return clone;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var obj = object;
  obj[key]=value;
  return obj;
}

function deleteFromObjectByKey(object, key){
  return object = {};
}

function destructivelyDeleteFromObjectByKey(object, key){
  return object  = {};
}
