var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipies = Object(object);
  newRecipies[key] = value;
  return newRecipies;
}

function deleteFromObjectByKey(object, key){
  var newRecipies = Object.assign(object);
  delete newRecipies.key;
  return newRecipies
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
