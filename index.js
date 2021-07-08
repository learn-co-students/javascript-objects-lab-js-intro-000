var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
}


function updateObjectWithKeyAndValue(object, key, value){
    var newObject = Object.assign({}, object);
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var clone = Object.assign({}, object);
  delete clone[key]
  return clone;
}

function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];

}
