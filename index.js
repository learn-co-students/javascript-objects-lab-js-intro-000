var recipes = {"key" : "value"};

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key]=value;
  return object;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]; {
    return object;
  }
}


function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]:value});
}


/*

function deleteFromObjectByKey(obj, key) {

  return Object.assign({}, obj);

  delete object.key;
}

*/


function deleteFromObjectByKey(object, key) {
  var recipeMore = Object.assign({}, object);
  delete recipeMore[key];
  return recipeMore
}
