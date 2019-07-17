var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  var newRecipes = Object.assign({}, recipes);
  return newRecipes;
}

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}

function deleteFromObjectByKey(object, key){
   var clone = Object.assign({}, object);
   delete clone[key];
   return clone;
}
