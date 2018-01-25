var recipes = { soup:"soup ingredients" };

function updateObjectWithKeyAndValue(object, key, value){
  var newPair = {[key]:value};
  return Object.assign({}, object, newPair);
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  var newObject = Object.assign({}, object);
  delete newObject[key];
  return newObject;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
