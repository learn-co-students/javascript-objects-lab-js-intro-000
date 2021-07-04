var recipes = {
  Omlet : "eggs",
}
function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value })
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  //updates `object` with the given `key` and `value` (it is destructive) and returns the entire updated object.
  object[key] = value
  return object
}
function deleteFromObjectByKey(object, key){
  //deletes `key` from a clone of object and returns the new object (it is non-destructive)
  delete recipes.Omlet
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
  //returns object without the delete key/value pair:
  return recipes
}
function destructivelyDeleteFromObjectByKey(object, key){
  //modifies the original object:
  //returns object without the delete key/value pair:

  delete object[key];
  return object;

}
