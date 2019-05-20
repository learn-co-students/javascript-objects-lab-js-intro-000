var recipes = {};


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){
  var object_2 = delete object["key"];
  return object_2
  return object
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object
}
