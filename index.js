var recipes = {prop: 1}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

//here we are cloning 'recipes' into a new object (object2),
//then deleting the key-value pair from the clone,
//then returning the clone. no changes made to original object 'recipes'
function deleteFromObjectByKey(object, key, value) {
  var Object2 = Object.assign({}, recipes, {[key]:value})
  delete Object2[key]
  return Object2
}

function destructivelyDeleteFromObjectByKey(object,key) {
  delete object[key]
  return object
}
