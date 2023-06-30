//Defines a `recipes` object
var recipes = {};

//Returns a clone of `object` by adding `key` and `value` (it is non-destructive)
function updateObjectWithKeyAndValue(object, key, value) {
	// body...
    var newObject = Object.assign({}, object, { [key]: value });
    return newObject;
};

//Updates `object` with the given `key` and `value` (it is destructive)
function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   // body...
   object[key] = value;
   return object;
};
 
//Deletes `key` from a clone of object and returns the new object (it is non-destructive)
function deleteFromObjectByKey(object, key) {
	// body...
	var newObject = Object.assign({}, object);
	delete newObject[key];
	return object;
};

 //Deletes `key` from object and returns object
 function  destructivelyDeleteFromObjectByKey(object, key) {
 	// body...
    delete object[key];
    return object;
 };