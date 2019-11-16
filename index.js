var recipe = {
  "eggs" : 2,
  "rice" : "100g"
};

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = {[key]:value}
  newObject = Object.assign({}, object, newObject);
  return newObject;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  var newPair = {[key]:value};
  object = Object.assign(object, newPair);
  return object;
}

function deleteFromObjectByKey(object, key){
 var newObject = {};
 newObject = Object.assign(newObject, object);
 delete newObject[key];
 return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

