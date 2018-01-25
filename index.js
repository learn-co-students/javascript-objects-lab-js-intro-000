var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value) {
  var clone = Object.assign(recipes, object, { [key]: value } );
  return clone
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   return Object.assign(object, { [key]: value} );
 }

function deleteFromObjectByKey(object, key) {
  var newObj = delete object.key;
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key];
  return recipes
}
