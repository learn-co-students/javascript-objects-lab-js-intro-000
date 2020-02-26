//Define an object called recipes
var recipes = {key: value};

//objects can push, pop, shift, unshift,

//Return an object with the original key value pairs and the new key value pair
//Returns an object with the orignal key value pairs and the new key value pair
//Does not modify the original object, but rather returns a clone with the new data
//Returns an object with an updated key value pair
function updateObjectWithKeyAndValue(object, key, value){
  var newObject = {}; //used to clone the inputted object
  newObject = object;

  // updates newObject with inputted key and value
  newObject = Object.assign({}, newObject, { [key]: value});

  //returns a new object with updated key and value
  return newObject;
}

//Updates `object` with the given `key` and `value` (it is destructive) and
//returns the entire updated object
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;

  return object;
}

//Deletes `key` from a clone of object and returns the new object
//(it is non-destructive)
//Does not modify the original object (it is non-destructive)
function deleteFromObjectByKey(object, key){
  var newObject = object; // creates a clone of the inputted object
  return delete newObject.key;
  //return delete newObject["key"];
  //return delete newObject[key];
}

//Returns object without the delete key/value pair
//Modifies the original object
function destructivelyDeleteFromObjectByKey(object, key){
  return delete object[key];
}
