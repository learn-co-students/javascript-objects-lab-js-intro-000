var recipes = new Object ({});
var newRecipes = Object.assign({}, recipes);
function updateObjectWithKeyAndValue(object,key,value)
{return Object.assign({}, object, { [key]: value })}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){object[key] = value;
  return object;};
function deleteFromObjectByKey(object, key){delete object.key; return newRecipes;};
function destructivelyDeleteFromObjectByKey (object, key){delete object[key]; return object;};
