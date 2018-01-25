var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var obj = {prop: 1};
  return Object.assign({}, obj, { [key]: value });
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  //var obj = {prop: 1};

  obj[key] = value;
  return obj;
}

function deleteFromObjectByKey(object, key){
  return Object.assign({}, [key]);
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete Object.key;

  return object;
}