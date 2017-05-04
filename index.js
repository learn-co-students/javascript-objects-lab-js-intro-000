var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
 return Object.assign({}, object, {[key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key){ // example: {foo: 1}, 'foo'
var newObj = Object.assign({},object) // we make a clone (new object) that has the same key value as the object, so the clone would look like {foo: 1}
delete newObj [key] // we delete fro the new object (not modifying the old one called object);
return newObj // we return the new object we created
}

function destructivelyDeleteFromObjectByKey(object, key){
 delete object [key]
 return object
}
