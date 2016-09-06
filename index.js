var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  var newObj = Object.assign({}, object)
  newObj[key] = value;
  return newObj
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value) {
    object[key] = value;
    return object;
}

var deleteFromObjectByKey = function(object, key){
  let obb = Object.assign({}, object);
  delete obb.key
  return obb
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object.key
  return object
}
