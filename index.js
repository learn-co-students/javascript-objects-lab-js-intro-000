var recipes = new Object();
recipes.special = "Rasam"
recipes.everyday = "Bread"

// update Object without changing the orginal recipe Object

function updateObjectWithKeyAndValue(obj, key, value) {

return Object.assign({}, obj,{[key]:value})
}

// destructively add a key value to the original objects

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {

return Object.assign( obj,{[key]:value})  
}

//delete a key value from an without changing the original object

function deleteFromObjectByKey(obj, key) {
  var newObj = Object.assign({}, obj)
  delete newObj.key
  return newObj
}

//delete a key-value destructively from the original object

function destructivelyDeleteFromObjectByKey(obj,key) {
  delete obj.key
  return obj
}

